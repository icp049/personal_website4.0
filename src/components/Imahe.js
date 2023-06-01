import React from 'react';
import './Imahe.css';
import image1 from '../images/image1.jpg';
import people from '../images/people.jpg';
import kalye from '../images/kalye.jpg';
import moments from '../images/moments.jpg';

function Imahe() {
  return (
    <div>
      <header>
        <h3 className="title">Imahe.</h3>
        <p>By: Ian Jericho Pedeglorio</p>
      </header>

      <hr />

      <section>
        <div className="container">
          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <a href="general.html">
                  <img src={image1} alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <a href="people.html">
                  <img src={people} alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img src={kalye} alt="" />
              </div>
            </div>
          </div>

          <div className="gallery-container">
            <div className="gallery-item">
              <div className="image">
                <img src={moments} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />
    </div>
  );
}

export default Imahe;
