import React from "react";
import styles from "../stylesheets/About.module.css";
import ian from "../images/profile1.JPG";

const About = () => {
  return (
    <div className={styles.about} id="about">
      <div className={styles.container}>
        <img src={ian} alt="ian" />
        <div className={styles["col-2"]}>
          <h1 align="center">Hello, my name is Ian! 👋</h1>
          <p align="center">
            I am a developer focused on Web & iOS Development
          </p>

          <h3 align="center">I code with</h3>

          <div className={styles.icons}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="javascript logo"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
              height="40"
              alt="cplusplus logo"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
              height="40"
              alt="embeddedc logo"
            />
                <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
              height="40"
              alt="cplusplus logo"
            />
          </div>

          <h3 align="center">Tools & Technologies</h3>

          <div className={styles.icons}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              height="40"
              alt="react logo"
            />
    
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"
              height="40"
              alt="arduino logo"
            />
        
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              height="40"
              alt="nodejs logo"
            />
       
         
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              height="40"
              alt="mysql logo"
            />
        
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
              height="40"
              alt="jira logo"
            />
         
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
              height="40"
              alt="firebase logo"
            />
        
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
              height="40"
              alt="linux logo"
            />
       
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              height="40"
              alt="figma logo"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              height="40"
              alt="vscode logo"
            />
      
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg"
              height="40"
              alt="drupal logo"
            />
        
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
              height="40"
              alt="visualstudio logo"
            />
        
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg"
              height="40"
              alt="xcode logo"
            />
     
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg"
              height="40"
              alt="dot-net logo"
            />
      
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
              height="40"
              alt="dotnetcore logo"
            />
      
            <img
              src="https://skillicons.dev/icons?i=git"
              height="40"
              alt="git logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
