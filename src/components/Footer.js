
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
      <p 
            onClick={handleExploreClick}
          >
            Explore
          </p>
        <p style={textStyle}>
          © 2023 Ian Jericho Pedeglorio. All rights reserved.
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
};

const contentStyle = {
  display: "flex",
  justifyContent: "center",
};

const linkStyle = {
  textDecoration: "none",
  color: "#fff",
  margin: "0",
};

const textStyle = {
  margin: "0",
};

export default Footer;
