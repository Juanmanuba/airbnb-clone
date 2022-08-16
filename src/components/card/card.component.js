import React from 'react';
import styles from './card.component.module.css';
import { images } from '../../assets/images';

export default function Card(props) {
  let badgeText;
  console.log(props.openSpots);
  if (props.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <div className={styles.cardContainer}>
      {badgeText && <div className={styles.tag}>{badgeText}</div>}
      <img
        className={styles.servicePic}
        alt="Airbnb-Experiences"
        src={props.coverImg}
      />
      <div className={styles.rating}>
        <img
          className={styles.star}
          alt="Airbnb-Experiences"
          src={images.star}
        />
        <p>
          {props.stats.rating}{' '}
          <span className={styles.gray}>
            ({props.stats.reviewCount}) - {props.location}
          </span>
        </p>
      </div>
      <p>{props.title}</p>
      <p>
        <span className={styles.bold}>From ${props.price}</span> / person
      </p>
    </div>
  );
}
