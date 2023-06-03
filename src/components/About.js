import React from 'react';
import styles from './About.module.css';
import ian from '../images/profile.jpg';

const About = () => {
  return (
    <div className={styles.about} id='about'>
      <div className={styles.container}>
        <img src={ian} alt='ian' />
        <div className={styles['col-2']}>
          <h2>About</h2>
          <span className={styles.line}></span>
          <p>""""</p>
          <p>""""</p>
          <button className={styles.button}>Explore More</button>
        </div>
      </div>
    </div>
  );
}

export default About;
