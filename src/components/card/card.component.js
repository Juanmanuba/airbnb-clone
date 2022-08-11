import React from 'react';
import styles from './card.component.module.css';
import { images } from '../../assets/images';

export default function Card(props) {
  return (
    <div className={styles.cardContainer}>
      <img
        className={styles.servicePic}
        alt="Airbnb-Experiences"
        src={props.image}
      />
      <div className={styles.rating}>
        <img
          className={styles.star}
          alt="Airbnb-Experiences"
          src={images.star}
        />
        <p>
          {props.rating}{' '}
          <span className={styles.gray}>
            ({props.reviewCount}) - {props.location}
          </span>
        </p>
      </div>
      <p>{props.title}</p>
      <p>
        <span className={styles.bold}>From ${props.price}</span> / loser
      </p>
    </div>
  );
}
