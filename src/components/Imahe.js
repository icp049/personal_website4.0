import React, { useState } from 'react';
import styles from './Imahe.module.css';
import image1 from '../images/image1.jpg';
import people from '../images/people.jpg';
import kalye from '../images/kalye.jpg';
import moments from '../images/moments.jpg';
import Travel from './Travel';

function Imahe() {
  const [showTravel, setShowTravel] = useState(false);

  const openTravelPopup = () => {
    setShowTravel(true);
  };

  const closeTravelPopup = () => {
    setShowTravel(false);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <h3 className={styles.title}>Imahe.</h3>
        <p>By: Ian Jericho Pedeglorio</p>
      </header>

      <hr />

      <section>
        <div className={styles.container}>
          <div className={styles['gallery-container']}>
            <div className={styles['gallery-item']}>
              <div className={styles.image}>
                <a href="#travel" onClick={openTravelPopup}>
                  <img src={image1} alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className={styles['gallery-container']}>
            <div className={styles['gallery-item']}>
              <div className={styles.image}>
                <a href="people.html">
                  <img src={people} alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className={styles['gallery-container']}>
            <div className={styles['gallery-item']}>
              <div className={styles.image}>
                <img src={kalye} alt="" />
              </div>
            </div>
          </div>

          <div className={styles['gallery-container']}>
            <div className={styles['gallery-item']}>
              <div className={styles.image}>
                <img src={moments} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {showTravel && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <Travel onClose={closeTravelPopup} />
          </div>
        </div>
      )}

      <hr />
    </div>
  );
}

export default Imahe;
