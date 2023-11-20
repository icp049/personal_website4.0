// ImaheModal.js
import React, { useState } from 'react';
import { Box, Typography, Tab, Tabs, useMediaQuery } from '@mui/material';
import "./ImaheModal.css";

// Dummy data for different categories
const dummyData = {
  all: [
    { id: 1, category: 'all', image: 'path/to/image1.jpg' },
    { id: 2, category: 'all', image: 'path/to/image2.jpg' },
    // Add more items as needed
  ],
  film: [
    { id: 3, category: 'film', image: 'path/to/image3.jpg' },
    { id: 4, category: 'film', image: 'path/to/image4.jpg' },
    // Add more items as needed
  ],
  places: [
    { id: 5, category: 'places', image: 'path/to/image5.jpg' },
    { id: 6, category: 'places', image: 'path/to/image6.jpg' },
    // Add more items as needed
  ],
  people: [
    { id: 7, category: 'people', image: 'path/to/image7.jpg' },
    { id: 8, category: 'people', image: 'path/to/image8.jpg' },
    // Add more items as needed
  ],
};

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
            <Tab label="FILM" value="film" />
            <Tab label="PLACES" value="places" />
            <Tab label="PEOPLE" value="people" />
          </Tabs>
          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            gap={3}
            justifyContent="space-around"
          >
            {/* Map over the dummy data based on the selected category */}
            {dummyData[value].map(item => (
              <div key={item.id}>
                <img src={item.image} alt={`category-${item.category}`} style={{ width: '100%', height: 'auto' }} />
              </div>
            ))}
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default ImaheModal;
