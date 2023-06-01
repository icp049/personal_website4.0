import React from 'react';
import './Home.css';
import videoFile from '../videos/abstract.mp4';

const Home = () => {
  return (
    <div className="home">
      <video className="background-video" autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1>hah ano na</h1>
    </div>
  );
}

export default Home;
