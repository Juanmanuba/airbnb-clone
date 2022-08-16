import React from 'react';
import Card from '../card/card.component';
import styles from './cardSection.component.module.css';
import data from '../../data';

export default function CardSection() {
  const cards = data.map((card) => {
    return <Card {...card} />;
  });
  return <div className={styles.cardSection}>{cards}</div>;
}
// Challenge: Pass props to the Card component and display that data

// - img ("katie-zaferes.png")
// - rating ("5.0")
// - reviewCount (6)
// - country (Whatever you want)
// - title ("Life Lessons with Katie Zaferes")
// - price (136)
