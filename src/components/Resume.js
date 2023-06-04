import React from 'react';
import styles from './Resume.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
  return (
  
      <div className={styles.container}>
        <div className={styles.left_side}>
          <div className={styles.profile_text}>
            <div className={styles.image}>
              <img src="imagesResume/profile.jpg" alt="Profile" />
            </div>
            <h2>
              Ian Jericho Pedeglorio
              <br />
              <span>Entry-Level Developer</span>
            </h2>
          </div>

          <div className={styles.contact_me}>
            <h3 className={styles.title}> Contact Me</h3>
            <ul>
              <li>
                <span className={styles.icon}>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </span>
                <FontAwesomeIcon icon={faPhone} />
                <span className={styles.text}> +1 306 263 3599</span>
              </li>
              <li>
                <span className={styles.icon}>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span className={styles.text}> pedeglorio.ijp@gmail.com</span>
              </li>
              <li>
                <span className={styles.icon}>
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </span>
                <FontAwesomeIcon icon={faLinkedin} />
                <span className={styles.text}>
                
                  <a href="linkedin.com/in/ian-pedeglorio-a3037b253"> Ian Pedeglorio</a>
                </span>
              </li>
              <li>
                <span className={styles.icon}>
                  <i className="fa fa-github-alt" aria-hidden="true"></i>
                </span>
                <FontAwesomeIcon icon={faGithub} />
                <span className={styles.text}>
               
                  <a href="https://github.com/icp049"> icp049</a>
                  
                </span>
              </li>
              <li>
                <span className={styles.icon}>
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </span>
                <FontAwesomeIcon icon={faInstagram} />
                <span className={styles.text}> @ianpedeglorio</span>
              </li>
            </ul>
          </div>

          {/* Education section */}
          <div className={styles.school_info}>
            <h3 className={styles.title}>Education</h3>
            <ul>
              <li>
                <h4>University of Regina</h4>
                <h5>2020-2023</h5>
                <h6>Bachelor of Science in Computer Science</h6>
              </li>
              <br />
              <li>
                <h4>Saint Louis University</h4>
                <h5>2016-2019</h5>
                <h6>Bachelor of Science in Industrial Engineering</h6>
              </li>
            </ul>
          </div>

          {/* Languages section */}
          <div className={styles.language_info}>
            <h3 className={styles.title}>Languages</h3>
            <ul>
              <li>C++</li>
              <li>Embedded C</li>
              <li>Javascript</li>
              <li>Python</li>
              <li>PHP</li>
            </ul>
          </div>

          {/* Technical Skills section */}
          <div className={styles.skills_info}>
            <h3 className={styles.title}>Technical Skills</h3>
            <ul>
              <li>Electronics: PCB Design, Circuits, Instruments, Soldering</li>
              <li>Computer Architecture</li>
              <li>Exposure to ARM</li>
              <li>Exposure to AWS</li>
              <li>Working knowledge of SQL</li>
              <li>Shell</li>
              <li>UX/UI Design</li>
              <li>Adobe Creative Cloud</li>
              <li>AutoCAD</li>
              <li>ArcGIS</li>
            </ul>
          </div>

          {/* Certifications section */}
          <div className={styles.cert_info}>
            <h3 className={styles.title}>Certifications</h3>
            <ul>
              
              <li>Basic GIS Course Completion Certificate</li>
            </ul>
          </div>
        </div>

        <div className={styles.right_side}>
          <div className={styles.about}>
            <h3 className={styles.title2}>Professional Summary</h3>
            <p>
              As a motivated entry-level software developer, I am eager to immerse myself in a dynamic professional development environment where I can continuously learn, grow, and make meaningful and substantial contributions in the fields of Embedded Engineering, IoT, Web Development, and Cloud Computing.
            </p>
          </div>

          <div className={styles.language_container}>
            <h3 className={styles.title2}>Language Familiarity</h3>
            <br />
            <div className={styles['skill-box']}>
              <span className={styles.skill}>C#</span>
              <div className={styles['skill-bar']}>
                <span className={styles['skill-per1']}>
                  <span className={styles.tooltip1}>60%</span>
                </span>
              </div>

              <span className={styles.skill}>C++</span>
              <div className={styles['skill-bar']}>
                <span className={styles['skill-per2']}>
                  <span className={styles.tooltip2}>85%</span>
                </span>
              </div>

              <span className={styles.skill}>Javascript</span>
              <div className={styles['skill-bar']}>
                <span className={styles['skill-per3']}>
                  <span className={styles.tooltip3}>70%</span>
                </span>
              </div>

              <span className={styles.skill}>SQL</span>
              <div className={styles['skill-bar']}>
                <span className={styles['skill-per6']}>
                  <span className={styles.tooltip6}>80%</span>
                </span>
              </div>
            </div>
          </div>

          {/* Relevant Work Experience section */}
          <div className={styles.experience_container}>
            <h3 className={styles.title3}>Relevant Work Experience</h3>
            <ul>
                <h4>Engineering Assistant</h4>
                <h5>JAMIC Engineering Services: 2017-2019</h5>
                <li>
                <h6>Specialized in GIS Mapping using ARCGIS</h6>
                <h6>Managed day-to-day operations, maintaining records, to provide high-level support</h6>
                <h6>Provided valuable support to lead engineers on a range of zoning and urban planning projects</h6>
                <h6>Team and client coordination</h6>
              </li>
              <br />
              <li>
                <h4>Software Development Contributor</h4>
                <h5>2021-2023</h5>
                <h6>Collaborated effectively with developers and other stakeholders with a strong understanding of software development processes and project management in Github repositories and Jira</h6>
                <h6>Website projects for business startups</h6>
                <h6>Contributed to front-end development using HTML, CSS, and Javascript to build visually appealing and functional websites that meet clients' needs</h6>
                <h6>Created Windows form applications using C# (Frontend and backend)</h6>
                <h6>Working knowledge of SQL, demonstrated proficiency in database design and building custom database solutions that are optimized for performance, security, and data integrity</h6>
                <h6>Website deployment in AWS. Worked with technologies such as Route53, DynamoDB, EC2, Lambda, and other AWS services</h6>
              </li>
              <br />
              <li>
                <h4>Coding Instructor</h4>
                <h5>YesWeCode: 2022-2023</h5>
                <h6>Experienced programming tutor offering personalized instruction in web development, Python, Scratch, and block coding to help students achieve their programming goals.</h6>
                <h6>Volunteering in a non-profit organization: Hakili Community for Sustainable Development</h6>
              </li>
            </ul>
          </div>

          {/* Other Work Experience section */}
          <div className={styles.other_work}>
            <h3 className={styles.title3}>Other Work Experience</h3>
            <ul>
              <li>
                <h4>Manager</h4>
                <h5>Photos Unlimited Walmart: 2019-2020</h5>
                <h6>Customer Service</h6>
                <h6>Team Supervision</h6>
              </li>
              <br />
              <li>
                <h4>Automotive Technician</h4>
                <h5>MR.LUBE: 2019</h5>
                <h6>Upper/Lower technician</h6>
                <h6>Oil/Tire changes</h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
  
 

); 
  }
  
  

export default Resume;
