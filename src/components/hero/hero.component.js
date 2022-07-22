import React from 'react';
import styles from './hero.component.module.css';
import { images } from '../../assets/images';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <img alt="Airbnb-Experiences" src={images.imagesGroup} />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
