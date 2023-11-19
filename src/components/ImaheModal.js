// ImaheModal.js
import React, { useState } from 'react';
import { Box, Typography, Tab, Tabs, useMediaQuery } from '@mui/material';
import "./ImaheModal.css";

const ImaheModal = ({ onClose }) => {
  const [value, setValue] = useState('all');
  const isNonMobile = useMediaQuery('(min-width:600px)');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        {/* Add your modal content here */}
        <Box width="80%" margin="40px auto">
          <Typography variant="h3" textAlign="center" mb={3}>
            <b>Imahe</b>
          </Typography>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            TabIndicatorProps={{ style: { display: isNonMobile ? 'block' : 'none' } }}
            sx={{
              m: '25px',
              '& .MuiTabs-flexContainer': {
                flexWrap: 'wrap'
              }
            }}
          >
            <Tab label="ALL" value="all" />
            <Tab label="NEW ARRIVALS" value="newArrivals" />
            <Tab label="BEST SELLERS" value="bestSellers" />
            <Tab label="TOP RATED" value="topRated" />
          </Tabs>
          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            gap={3}
            justifyContent="space-around"
          >
            {/* Add your grid items here */}
            <div>Product 1</div>
            <div>Product 2</div>
            {/* Add more product items as needed */}
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default ImaheModal;
