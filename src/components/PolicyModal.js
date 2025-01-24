import React, { useState } from "react";
import { Box, Tab, Tabs, useMediaQuery } from "@mui/material";
import "../stylesheets/ImaheModal.css";

const PolicyModal = ({ onClose }) => {
  const [value, setValue] = useState("hardpass");
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <Box
          width="80%"
          margin="40px auto"
          maxHeight="80vh"
          overflow="auto" // Enable scrolling
          sx={{
            border: '1px solid #ccc', // Optional: Add a border
            borderRadius: '8px', // Optional: Add rounded corners
            padding: '16px', // Optional: Add padding
            backgroundColor: 'white', // Ensure background is white
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            TabIndicatorProps={{
              style: { display: isNonMobile ? "block" : "none" },
            }}
            sx={{
              m: "25px",
              "& .MuiTabs-flexContainer": {
                flexWrap: "wrap",
              },
            }}
          >
            <Tab label="HARDPASS" value="hardpass" />
            <Tab label="TRACKEROO" value="trackeroo" />
          </Tabs>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            {value === "hardpass" && (
              <React.Fragment>
                <div style={{ color: "black", textAlign: "left", width: "100%" }}>
                  <h1>Privacy Policy for HardPass App</h1>
                </div>
                <br />
                <div style={{ color: "black", textAlign: "left", width: "100%" }}>
                  <strong>Last Updated: December 17, 2023</strong>
                  <p>
                    Thank you for using the HardPass app! This privacy policy is designed to inform you about the information we collect, why we collect it, and how we use and protect it. Please take a moment to read through this policy.
                  </p>
                  <h2>1. Information We Collect</h2>
                  <h3>1.1 Passwords and Data Encryption</h3>
                  <p>
                    HardPass is a password management app designed to store and manage passwords securely on your device. The app does not collect any personal data or passwords from users. All information entered into the app is stored locally on your device and is encrypted to ensure maximum security.
                  </p>
                  <h3>1.2 Permissions</h3>
                  <p>
                    HardPass requires certain permissions to function properly, such as access to storage to save encrypted password data. These permissions are strictly used for app functionality and are not shared with any third parties.
                  </p>
                  <h2>2. How We Use Your Information</h2>
                  <h3>2.1 Local Storage</h3>
                  <p>
                    All data entered into the HardPass app is stored locally on your device. We do not have access to this data, and it is not transmitted to any external servers. The app's primary function is to provide a secure and convenient way for you to manage your passwords.
                  </p>
                  <h3>2.2 No Data Collection</h3>
                  <p>
                    We do not collect any personal information, passwords, or usage data from the app. Your privacy is of utmost importance, and we are committed to maintaining the confidentiality and security of your data.
                  </p>
                  <h2>3. Data Security</h2>
                  <h3>3.1 Encryption</h3>
                  <p>
                    To ensure the security of your passwords and data, HardPass employs strong encryption algorithms. This encryption is designed to protect your information from unauthorized access or disclosure.
                  </p>
                  <h3>3.2 No Cloud Storage</h3>
                  <p>
                    HardPass does not sync or store your password data on any cloud servers. Your information remains exclusively on your device.
                  </p>
                  <h2>4. Updates and Changes</h2>
                  <h3>4.1 App Updates</h3>
                  <p>
                    Periodically, we may release updates to the HardPass app to enhance functionality, security, and user experience. It is recommended to keep the app updated to the latest version to benefit from the latest improvements.
                  </p>
                  <h3>4.2 Privacy Policy Changes</h3>
                  <p>
                    We reserve the right to update this privacy policy as needed. Any changes made will be reflected in the updated policy, and the date of the last update will be modified accordingly.
                  </p>
                  <h2>5. Contact Information</h2>
                  <p>
                    If you have any questions, concerns, or feedback regarding this privacy policy or the HardPass app, please contact us at pedeglorio.ijp@gmail.com. Thank you for using HardPass, and rest assured that your privacy and security are our top priorities.
                  </p>
                </div>
              </React.Fragment>
            )}
            {value === "trackeroo" && (
              <React.Fragment>
                <div style={{ color: "black", textAlign: "left", width: "100%" }}>
                  <h1>Privacy Policy for Trackeroo App</h1>
                </div>
                <br />
                <div style={{ color: "black", textAlign: "left", width: "100%" }}>
                  <strong>Last Updated: September 24, 2024</strong>
                  <p>
                    Thank you for using Trackeroo! Your privacy is important to me, and I want to ensure you understand how your data is handled while using the app.
                  </p>
                  <h2>1. No Data Collection</h2>
                  <p>
                    Trackeroo is designed for personal use, and I do not collect or store any of your personal information. The app operates entirely on your device, so your data remains private and secure.
                  </p>
                  <h2>2. Local Data Storage</h2>
                  <p>
                    Trackeroo uses Core Data to manage your tasks and due dates. This means all your information is stored locally on your device, and nothing is transmitted to external servers. You can feel confident knowing that your tasks and deadlines are only accessible to you.
                  </p>
                  <h2>3. User Control</h2>
                  <p>
                    You have complete control over your data. You can add, modify, or delete your tasks at any time within the app. Since no data is stored externally, you can choose to uninstall the app whenever you wish, and all associated data will be removed from your device.
                  </p>
                  <h2>4. No Sharing</h2>
                  <p>
                    I do not share any of your data with third parties. Your privacy is paramount, and I am committed to keeping your information confidential.
                  </p>
                  <p>
                    If you have any questions or concerns about this privacy policy, please feel free to reach out at pedeglorio.ijp@gmail.com. Thank you for trusting Trackeroo to help you stay organized!
                  </p>
                </div>
              </React.Fragment>
            )}
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default PolicyModal;
