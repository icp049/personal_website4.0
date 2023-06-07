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
        <h1 className={styles.centeredHeading}>IJCP.</h1>
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.iconRow}>
          <a href="https://www.facebook.com/ianjericho.pedeglorio/">
            <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
          </a>
          <a href="https://www.instagram.com/ianpedeglorio/?hl=en">
            <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
          </a>
       
      
          <a href="https://github.com/icp049">
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          </a>
          <a href="https://ca.linkedin.com/in/ianpedeglorio?trk=public_profile_samename-profile&challengeId=AQE6p3RhXxoTrQAAAYiUzpezigjmSYIgSSOpJm1z_Ix-oLBPWMpeJlhBfqnkljqaDFqUwH8jP59PWttMlkbsQBpscq2q9cl9yQ&submissionId=dd47d446-9d50-6617-41c7-07b63da3553a&challengeSource=AgGMdAE5g_686gAAAYiUzt4HrLQpBaRETAqXbu5n7DTDVfAb17evgNvzdj1wyGk&challegeType=AgH0tJS9KVnMBgAAAYiUzt4LdhD1u6cwtbX4ERsXhRLjjML8BCs4kwU&memberId=AgHaOu5z1SMObgAAAYiUzt4OOZ6PWg79QAItTKThw62Sepk&recognizeDevice=AgEDqd3ky-7yFQAAAYiUzt4Rst7W6izLfci4M-PYHE7O4JTlGOZs">
            <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
