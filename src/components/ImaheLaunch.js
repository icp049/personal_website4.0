import React, { useState, useEffect } from 'react';
import './Imahelaunch.css';

const photos = [
    require('../images/background.jpg').default,
    require('../images/aboutbackground.jpg').default,
    require('../images/moments.jpg').default,
  
];

const ImaheLaunch = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
     {photos.map((photo, index) => (
  <div
    key={photo}
    className={`slide ${index === currentIndex ? 'active' : ''}`}
    style={{ backgroundImage: `url(${photo})` }}
  ></div>
))}
      <div className="button-container">
        <button className="centered-button">Click me</button>
      </div>
    </div>
  );
};

export default ImaheLaunch;
