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
            I am a developer focused on Embedded Systems and Web/Mobile
            Development
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
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              height="40"
              alt="python logo"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
              height="40"
              alt="embeddedc logo"
            />
          </div>

          <h3 align="center">Tools & Technologies</h3>

          <div className={styles.icons}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="react logo"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
              height="40"
              alt="vuejs logo"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              height="40"
              alt="css3 logo"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
              height="40"
              alt="tailwindcss logo"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              height="40"
              alt="html5 logo"
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
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"
              height="40"
              alt="androidstudio logo"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg"
              height="40"
              alt="jupyter logo"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg"
              height="40"
              alt="pycharm logo"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
              height="40"
              alt="amazonwebservices logo"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              height="40"
              alt="mysql logo"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              height="40"
              alt="mongodb logo"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
              height="40"
              alt="jira logo"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
              height="40"
              alt="docker logo"
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
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              height="40"
              alt="github logo"
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
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
              height="40"
              alt="npm logo"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"
              height="40"
              alt="opencv logo"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/putty/putty-original.svg"
              height="40"
              alt="putty logo"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"
              height="40"
              alt="ubuntu logo"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
