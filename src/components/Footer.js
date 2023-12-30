import React, { useState } from "react";
import PolicyModal from "./PolicyModal";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExploreClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <p style={textStyle} onClick={handleExploreClick}>
          Explore Policies
        </p>

        <p style={reservedStyle}>
          © 2024 Ian Jericho Pedeglorio. All rights reserved.
        </p>
      </div>

      {isModalOpen && <PolicyModal onClose={handleCloseModal} />}
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "rgba(0,0,0,.7)",
  color: "#fff",
  padding: "20px",
  textAlign: "center", 
};

const contentStyle = {
  display: "flex",
  justifyContent: "space-between", 
  alignItems: "center", 
};

const textStyle = {
  margin: "0",
  cursor: "pointer", 
};

const reservedStyle = {
  margin: "0",
};

export default Footer;
