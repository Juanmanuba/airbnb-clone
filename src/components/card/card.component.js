import React from 'react';
import styles from './card.component.module.css';
import { images } from '../../assets/images';

export default function Card() {
  return (
    <div className={styles.cardContainer}>
      <img
        className={styles.servicePic}
        alt="Airbnb-Experiences"
        src={images.servicePic}
      />
      <div className={styles.rating}>
        <img
          className={styles.star}
          alt="Airbnb-Experiences"
          src={images.star}
        />
        <p>
          5.0 <span className={styles.gray}>(6) - USA</span>
        </p>
      </div>
      <p>Life lessons for losers</p>
      <p>
        <span className={styles.bold}>From 300$</span> / loser
      </p>
    </div>
  );
}
