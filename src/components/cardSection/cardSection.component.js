import React from 'react';
import Card from '../card/card.component';
import styles from './cardSection.component.module.css';
import { images } from '../../assets/images';

export default function CardSection() {
  return (
    <div className={styles.cardSection}>
      <Card
        image={images.servicePic1}
        rating={parseFloat(4.3)}
        reviewCount={8}
        country="Venezuela"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
// Challenge: Pass props to the Card component and display that data

// - img ("katie-zaferes.png")
// - rating ("5.0")
// - reviewCount (6)
// - country (Whatever you want)
// - title ("Life Lessons with Katie Zaferes")
// - price (136)
