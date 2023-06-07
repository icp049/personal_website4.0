import React, { useState } from 'react';
import styles from './Travel.module.css';

function Portfolio() {
  const gallery = [
    { id: 1, src: 'images/image1.jpg' },
    { id: 2, src: 'images/image2.jpg' },
    // Rest of the gallery images
  ];

  const [previewIndex, setPreviewIndex] = useState(null);

  const openPreview = (index) => {
    setPreviewIndex(index);
    document.querySelector('body').style.overflow = 'hidden';
  };

  const closePreview = () => {
    setPreviewIndex(null);
    document.querySelector('body').style.overflow = 'scroll';
  };

  const navigatePreview = (direction) => {
    const currentIndex = previewIndex + direction;
    if (currentIndex >= 0 && currentIndex < gallery.length) {
      setPreviewIndex(currentIndex);
    }
  };

  return (
    <>
      <hr />

      <section>
        <div className={styles.container}>
          {gallery.map((image, index) => (
            <div className={styles['gallery-container']} key={image.id}>
              <div className={styles['gallery-item']} onClick={() => openPreview(index)}>
                <div className={styles.image}>
                  <img src={image.src} alt="" />
                </div>
              </div>
            </div>
          ))}

          {/* Preview box */}
          {previewIndex !== null && (
            <div className={styles['preview-box']}>
              <div className={styles.details}>
                <span className={styles.title}>
                  Image {previewIndex + 1} of {gallery.length}
                </span>
                <span className={`${styles.icon} fas fa-times`} onClick={closePreview}></span>
              </div>
              <div className={styles['image-box']}>
                <div className={`${styles.slide} ${styles.prev}`} onClick={() => navigatePreview(-1)}>
                  <i className="fas fa-angle-left"></i>
                </div>
                <div className={`${styles.slide} ${styles.next}`} onClick={() => navigatePreview(1)}>
                  <i className="fas fa-angle-right"></i>
                </div>
                <img src={gallery[previewIndex].src} alt="" />
              </div>
            </div>
          )}

          <div className={styles.shadow}></div>
        </div>
      </section>

      <footer>
        <p>(c) All Rights Reserved 2023.</p>
      </footer>
    </>
  );
}

export default Portfolio;
