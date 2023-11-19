import React from "react";
import "./ImaheModal.css";

const ImaheModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Add your modal content here */}
        <h2>Imahe Modal</h2>
        <p>This is the modal content.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ImaheModal;
