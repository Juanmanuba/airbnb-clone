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
        <img alt="Airbnb-Experiences" src={images.star} />
        <p>5.0 (6) - USA</p>
      </div>
      <p>Life lessons for losers</p>
      <p>From 300$ / loser</p>
    </div>
  );
}
