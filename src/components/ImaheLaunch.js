import React, { useState } from "react";
import "./Imahelaunch.css";
import Modal from "./ImaheModal.js"; // Import the Modal component

const ImaheLaunch = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExploreClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="launchcontainer" id="imahe">
        <div className="launchcontainertitle">
          <h1 className="launchcontainerh1">Imahe.</h1>
          <h5 className="launchcontainerh5">A portfolio by Ian Pedeglorio</h5>
          <button className="launchcontainerbutton" onClick={handleExploreClick}>
            Explore
          </button>
        </div>
      </div>

      {isModalOpen && <Modal closeModal={closeModal} />} 
    </>
  );
};

export default ImaheLaunch;
