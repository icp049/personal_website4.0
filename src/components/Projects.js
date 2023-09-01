// Projects.js

import React, { useState, useEffect } from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    // Fetch your GitHub contributions
    fetch('https://api.github.com/users/icp049/contributions')
      .then((response) => response.json())
      .then((data) => setContributions(data))
      .catch((error) => console.log(error));

    // Fetch your GitHub repositories
    fetch('https://api.github.com/users/icp049/repos?sort=created&direction=desc')
      .then((response) => response.json())
      .then((data) => setProjects(data.slice(0, 9)))
      .catch((error) => console.log(error));
  }, []);

  const getLanguageIcon = (language) => {
    switch (language) {
      case 'JavaScript':
        return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className={styles.icon} style={{ color: 'yellow' }} alt="JavaScript" />;
      case 'Python':
        return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className={styles.icon} style={{ color: 'blue' }} alt="Python" />;
      case 'Swift':
        return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" className={styles.icon} style={{ color: 'orange' }} alt="Swift" />;
      case 'HTML':
        return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className={styles.icon} style={{ color: 'red' }} alt="HTML" />;
      case 'CSS':
        return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className={styles.icon} style={{ color: 'blue' }} alt="CSS" />;
      case 'C++':
        return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" className={styles.icon} style={{ color: 'purple' }} alt="C++" />;
      default:
        return null; // Return null if no matching icon is found
    }
  };

  return (
    <div className={styles.container} id="projects">
      <div className={styles.contributions}>
        <h2>Your Contributions in the Last 3 Months</h2>
        <div className={styles.contributionGrid}>
          {contributions.map((contribution, index) => (
            <div
              key={index}
              className={styles.contributionBox}
              style={{ backgroundColor: contribution.color }}
            ></div>
          ))}
        </div>
      </div>
      <div className={styles.projects}>
        <div className={styles.buttonContainer}>
          <button className={styles.projectbutton}>
            <a href="https://github.com/icp049">Explore Ongoing Projects</a>
          </button>
        </div>
        <div className={styles.gridContainer}>
          {projects.map((project) => (
            <a key={project.id} className={styles.gridItem} href={project.html_url}>
              <div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <span>
                  {getLanguageIcon(project.language)} {project.language}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
