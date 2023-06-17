import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <p style={textStyle}>© 2023 Ian Pedeglorio. All rights reserved.</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  color: '#fff',
  padding: '20px',
};

const contentStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const textStyle = {
  margin: 0,
};

export default Footer;
