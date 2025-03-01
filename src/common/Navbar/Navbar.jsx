import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../common/ThemeContext';
import styles from './NavbarStyles.module.css';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const themeIcon = theme === 'light' ? sun : moon;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide navbar based on scroll direction with threshold
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      
      // Add background when scrolled
      setScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setActiveSection(entry.target.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
      rootMargin: '-20% 0px -30% 0px'
    });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    // Close menu when clicking outside
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest(`.${styles.navLinks}`) && !event.target.closest(`.${styles.menuButton}`)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
      sections.forEach(section => observer.unobserve(section));
    };
  }, [lastScrollY, menuOpen]);

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    // { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' }
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5
      }
    }
  };

  const logoVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const linkVariants = {
    initial: { y: 0 },
    hover: { 
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMenuOpen(false);
    }
  };

  return (
    <motion.nav 
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${!visible ? styles.hidden : ''} ${theme === 'dark' ? styles.dark : ''}`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className={styles.logoContainer}
        variants={logoVariants}
        initial="initial"
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
      >
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoText}>Dhruv</span>
          <span className={styles.logoHighlight}>.</span>
        </a>
      </motion.div>

      <button 
        className={`${styles.menuButton} ${menuOpen ? styles.open : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <AnimatePresence>
        <motion.ul 
          className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 20,
            staggerChildren: 0.1
          }}
        >
          {navLinks.map((link, index) => (
            <motion.li 
              key={link.href}
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
              custom={index}
            >
              <a 
                href={link.href}
                className={activeSection === link.href.slice(1) ? styles.active : ''}
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.div 
                    className={styles.activeIndicator}
                    layoutId="activeIndicator"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                  />
                )}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </AnimatePresence>

      <motion.div 
        className={styles.themeToggle} 
        onClick={toggleTheme}
        whileHover={{rotate: theme === 'light' ? 90 : 0 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <motion.img 
          src={themeIcon} 
          alt="Toggle Theme"
          initial={{ rotate: 0 }}
          animate={{ rotate: theme === 'light' ? 0 :360 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;
