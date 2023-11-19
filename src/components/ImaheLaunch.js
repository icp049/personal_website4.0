import React, { useState } from "react";
import "./Imahelaunch.css";
import ImaheModal from "./ImaheModal";

const ImaheLaunch = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExploreClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="launchcontainer" id="imahe">
        <div className="launchcontainertitle">
          <h1 className="launchcontainerh1">Imahe.</h1>
          <h5 className="launchcontainerh5">A portfolio by Ian Pedeglorio</h5>
          <button
            className="launchcontainerbutton"
            onClick={handleExploreClick}
          >
            Explore
          </button>
        </div>
      </div>

      {isModalOpen && <ImaheModal onClose={handleCloseModal} />}
    </>
  );
};

export default ImaheLaunch;
