import React from 'react';
import { useTheme } from '../../common/ThemeContext';
import styles from './NavbarStyles.module.css';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import logoLight from '../../assets/logo-light.svg';
import logoDark from '../../assets/logo-dark.svg';

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const logoIcon = theme === 'light' ? logoLight : logoDark;

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={logoIcon} alt="Logo" className={styles.logo} />
      </div>
      <ul className={styles.navLinks}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className={styles.themeToggle} onClick={toggleTheme}>
        <img src={themeIcon} alt="Toggle Theme" />
      </div>
    </nav>
  );
}

export default Navbar;
