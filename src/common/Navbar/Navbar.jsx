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
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const themeIcon = theme === 'light' ? sun : moon;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY) {
        setVisible(false); // Scrolling down - hide navbar
      } else {
        setVisible(true); // Scrolling up - show navbar
      }
      
      // Add background when scrolled
      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5
    });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => observer.unobserve(section));
    };
  }, [lastScrollY]);

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <motion.nav 
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${!visible ? styles.hidden : ''} ${theme === 'dark' ? styles.dark : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className={styles.logoContainer}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoText}>Dhruv</span>
          <span className={styles.logoHighlight}>.</span>
        </a>
      </motion.div>

      <button 
        className={`${styles.menuButton} ${menuOpen ? styles.open : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
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
          transition={{ duration: 0.5 }}
        >
          {navLinks.map((link) => (
            <motion.li 
              key={link.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href={link.href}
                className={activeSection === link.href.slice(1) ? styles.active : ''}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.div 
                    className={styles.activeIndicator}
                    layoutId="activeIndicator"
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
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.img 
          src={themeIcon} 
          alt="Toggle Theme"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;
