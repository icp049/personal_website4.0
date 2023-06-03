import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './Home.module.css';
import videoFile from '../videos/abstract.mp4';

const Home = () => {
  return (
    <div className={styles.home}>
      <video className={styles['background-video']} autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.content}>
        <h1 className={styles.centeredHeading}>Pepe.</h1>
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.iconRow}>
          <a href="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
          </a>
          <a href="https://www.instagram.com">
            <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
          </a>
       
      
          <a href="https://www.github.com">
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com">
            <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
