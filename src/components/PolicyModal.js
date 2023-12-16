
import React, { useState } from 'react';
import { Box, Typography, Tab, Tabs, useMediaQuery } from '@mui/material';
import "../stylesheets/ImaheModal.css";

// Dummy data for different categories


const ImaheModal = ({ onClose }) => {
  const [value, setValue] = useState('hardpass');
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
            <Tab label="HARDPASS" value="hardpass" />
            
          </Tabs>
          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            gap={3}
            justifyContent="space-around"
          >
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default ImaheModal;
