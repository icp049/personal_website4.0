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
          <h1 align="center">Hello, my name is Ian! 👋</h1>
          <p align="center">I am a developer focused on Embedded Systems and Web/Mobile Development</p>

          <h3 align="center">I code with</h3>

          <div className={styles.icons}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript logo" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" height="40" alt="cplusplus logo"  />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" height="40" alt="csharp logo"  />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" height="40" alt="php logo"  />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="40" alt="python logo"  />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-original.svg" height="40" alt="embeddedc logo"  />
          </div>

          <h3 align="center">Tools & Technologies</h3>

          <div className={styles.icons}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react logo" />
            {/* Add more icon images */}
          </div>

          <button className={styles.button}>Explore More</button>
        </div>
      </div>
    </div>
  );
}

export default About;
