// ImaheModal.js

import React from "react";
import "./ImaheModal.css";

const ImaheModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        {/* Add your modal content here */}
        <h2>Imahe Modal</h2>
        <p>This is the modal content.</p>
      </div>
    </div>
  );
};

export default ImaheModal;
