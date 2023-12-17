import React, { useState } from 'react';
import { Box, Typography, Tab, Tabs, useMediaQuery } from '@mui/material';
import "../stylesheets/ImaheModal.css";
import HardPassPolicy from './HardPassPolicy';

// ... (existing imports)

const PolicyModal = ({ onClose }) => {
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
              display="flex"  
              flexDirection="column" 
              alignItems="center" 
            >
              {value === 'hardpass' && (
                <div style={{ color: 'black', textAlign: 'center' }}>
                
                Privacy Policy for HardPass App

Last Updated: December 17, 2023

Thank you for using the HardPass app! This privacy policy is designed to inform you about the information we collect, why we collect it, and how we use and protect it. Please take a moment to read through this policy.

1. Information We Collect
1.1 Passwords and Data Encryption

HardPass is a password management app designed to store and manage passwords securely on your device. The app does not collect any personal data or passwords from users. All information entered into the app is stored locally on your device and is encrypted to ensure maximum security.

1.2 Permissions

HardPass requires certain permissions to function properly, such as access to storage to save encrypted password data. These permissions are strictly used for app functionality and are not shared with any third parties.

2. How We Use Your Information
2.1 Local Storage

All data entered into the HardPass app is stored locally on your device. We do not have access to this data, and it is not transmitted to any external servers. The app's primary function is to provide a secure and convenient way for you to manage your passwords.

2.2 No Data Collection

We do not collect any personal information, passwords, or usage data from the app. Your privacy is of utmost importance, and we are committed to maintaining the confidentiality and security of your data.

3. Data Security
3.1 Encryption

To ensure the security of your passwords and data, HardPass employs strong encryption algorithms. This encryption is designed to protect your information from unauthorized access or disclosure.

3.2 No Cloud Storage

HardPass does not sync or store your password data on any cloud servers. Your information remains exclusively on your device.

4. Updates and Changes
4.1 App Updates

Periodically, we may release updates to the HardPass app to enhance functionality, security, and user experience. It is recommended to keep the app updated to the latest version to benefit from the latest improvements.

4.2 Privacy Policy Changes

We reserve the right to update this privacy policy as needed. Any changes made will be reflected in the updated policy, and the date of the last update will be modified accordingly.

5. Contact Information
If you have any questions, concerns, or feedback regarding this privacy policy or the HardPass app, please contact us at pedeglorio.ijp@gmail.com.

Thank you for using HardPass, and rest assured that your privacy and security are our top priorities.


Feel free to customize this privacy policy according to your specific needs and details.
                </div>
              )}
            </Box>
          </Box>
        </div>
      </div>
    );
  };
  
  export default PolicyModal;
  
