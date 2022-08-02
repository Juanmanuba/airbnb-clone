import React from 'react';
import Card from '../card/card.component';
import styles from './cardSection.component.module.css';

export default function CardSection() {
  return (
    <div className={styles.cardSection}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
