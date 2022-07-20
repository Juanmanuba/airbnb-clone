import React from 'react';
import styles from './navbar.component.module.css';
import { images } from '../../assets/images';

export default function Navbar() {
  return (
    <nav className={styles.navbarContainer}>
      <img className="nav--logo" alt="airbnb-logo" src={images.logo} />
    </nav>
  );
}
