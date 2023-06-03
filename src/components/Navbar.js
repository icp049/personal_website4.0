import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <div className={styles.header}>
      <nav className={styles.navbar}>
        
        <div className={styles.hamburger} onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: '#ffffff' }} />
          ) : (
            <FaBars size={30} style={{ color: '#ffffff' }} />
          )}
        </div>
        <ul className={click ? `${styles['nav-menu']} ${styles.active}` : styles['nav-menu']}>
          <li className={styles['nav-item']}>
            <a href='/' onClick={closeMenu}>Home</a>
          </li>
          <li className={styles['nav-item']}>
            <a href='#about' onClick={closeMenu}>About</a>
          </li>
          <li className={styles['nav-item']}>
            <a href='#testimonials' onClick={closeMenu}>Online Resume</a>
          </li>
          <li className={styles['nav-item']}>
            <a href='#demo' onClick={closeMenu}>Projects</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
