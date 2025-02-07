import React from 'react';
import styles from './Letter.module.css';

function Letter() {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marquee}>
        <div className={styles.text}>
          <h2>Green World</h2>
          <h2>Green World</h2>
          <h2>Green World</h2>
          <h2>Green World</h2>
          <h2>Green World</h2>
          <h2>Green World</h2>
          <h2>Green World</h2>
          <h2>Green World</h2>
          <h2>Green World</h2>
          <h2>Green World</h2>
        </div>
      </div>
    </div>
  );
}

export default Letter;
