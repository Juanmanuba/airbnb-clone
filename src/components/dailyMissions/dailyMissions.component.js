import React from 'react';
import { images } from '../../assets/images';
import styles from './dailyMissions.component.module.css';

export default function DailyMissions() {
  let tasks = [
    {
      game: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim nisl lobortis, scelerisque metus eget, dapibus lorem. Duis facilisis tellus sed felis elementum, et ultricies turpis finibus.',
      played: 0,
      total: 5,
    },
    {
      game: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim nisl lobortis, scelerisque metus eget, dapibus lorem. Duis facilisis tellus sed felis elementum, et ultricies turpis finibus. 2',
      played: 0,
      total: 5,
    },
    {
      game: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim nisl lobortis, scelerisque metus eget, dapibus lorem. Duis facilisis tellus sed felis elementum, et ultricies turpis finibus. 3',
      played: 3,
      total: 3,
    },
  ];

  const missions = tasks.map((item) => {
    return (
      <div className={styles.dailyMission}>
        <img className={styles.journeyPic} alt="icon" src={images.logo} />
        <p>{item.game}</p>
        {item.played !== item.total ? (
          <p className={styles.paragraph}>
            {item.played}/{item.total}
          </p>
        ) : (
          <p className={styles.highlightGreen}>
            {item.played}/{item.total}
          </p>
        )}
      </div>
    );
  });

  return <div className={styles.dailyMissionsContainer}>{missions}</div>;
}
