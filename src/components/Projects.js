import React from 'react';
import styles from './Projects.module.css';
import photoFile from '../images/program.jpg';

const Projects = () => {
  return (
    <div className={styles.projects}>
      <img className={styles['background-image']} src={photoFile} alt="Background" />
      <h1>hah ano na</h1>
    </div>
  );
}

export default Projects;
