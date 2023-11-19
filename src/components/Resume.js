import React from 'react';
import styles from './Resume.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ian from '../images/profile.jpg';
const Resume = () => {
  return (
  
      <div className={styles.container} id = 'resume'>
        <div className={styles.left_side}>
          <div className={styles.profile_text}>
            <div className={styles.image}>
              <img src={ian} alt = "haha" />
            </div>
            <h2>
              Ian Jericho Pedeglorio
              <br />
              <span>Developer</span>
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

        
          

          {/* Certifications section */}
          <div className={styles.cert_info}>
            <h3 className={styles.title}>Certifications</h3>
            <ul>
              
              <li>GIS Course Completion Certificate</li>
            </ul>
          </div>

          <div className={styles.language_container}>
            <h3 className={styles.title}>Language Familiarity</h3>
            <br />
            <div className={styles['skill-box']}>
              <span className={styles.skill}>C++</span>
              <div className={styles['skill-bar']}>
                <span className={styles['skill-per1']}>
                  
                </span>
              </div>

              <span className={styles.skill}>JavaScript</span>
              <div className={styles['skill-bar']}>
                <span className={styles['skill-per2']}>
                  
                </span>
              </div>

              <span className={styles.skill}>Swift</span>
              <div className={styles['skill-bar']}>
                <span className={styles['skill-per3']}>
                  
                </span>
              </div>

              <span className={styles.skill}>Python</span>
              <div className={styles['skill-bar']}>
                <span className={styles['skill-per6']}>
                  
                </span>
              </div>
            </div>
          </div>




        </div>


        



        <div className={styles.right_side}>
          <div className={styles.about}>
            <h3 className={styles.title2}>Professional Summary</h3>
            <p>
            I am eager to immerse myself in a dynamic professional development environment where I can continuously learn,
grow, and make substantial contributions in the fields of Software Development and Embedded Systems.
            </p>
          </div>


          <div className={styles.skills_info}>
  <h3 className={styles.title2}>Relevant Skills</h3>
  <br />
  <p><strong>Programming Languages: </strong> C++ &#8226; Javascript &#8226; Swift &#8226; Python </p>
    <p><strong>Development Stack: </strong>React &#8226; React Native &#8226; Vue &#8226; NodeJS &#8226; ExpressJS &#8226; JSON &#8226; TailwindCSS &#8226; Redux &#8226; Redis &#8226; SwiftUI &#8226; CoreData    </p>
    <p><strong>Databases: </strong> SQL &#8226; MySQL &#8226; MongoDB  &#8226; Google FIrebase &#8226; AWS</p>
    <p><strong>Tools & Technologies:</strong> Docker &#8226; OpenCV &#8226; npm &#8226; Arduino &#8226; Android Studio &#8226; Jupyter Notebooks &#8226; PyCharm &#8226; Github &#8226;
    Jira &#8226; Figma &#8226; Visual Studio &#8226; Putty &#8226; Ubuntu &#8226; XCode</p>
    <p><strong>Operating Systems:</strong> Linux &#8226; Windows &#8226; MacOS</p>
    <p><strong>Electonics:</strong> PCB Design &#8226; Microcontroller Boards &#8226; Instruments &#8226; Circuit design/analysis
    &#8226; Soldering</p>
    <p><strong>Other Skills:</strong> AutoCAD &#8226; ArcGIS &#8226; Adobe Creative Tools &#8226; Office 365  </p>
  </div>



          

          {/* Relevant Work Experience section */}
          <div className={styles.experience_container}>
            <h3 className={styles.title3}>Relevant Work Experience</h3>
            <ul>
                <h4>Engineering Assistant</h4>
                <h5>JAMIC Engineering Services: 2017-2019</h5>
                
              <li><h6>Specialized in GIS Mapping using ARCGIS</h6></li>
              <li><h6>Managed day-to-day operations, maintaining records, to provide high-level support</h6></li>
              <li><h6>Provided valuable support to lead engineers on a range of zoning and urban planning projects</h6></li>
              <li><h6>Team and client coordination</h6></li>
              
              <br />
             
                <h4>Software Development Contributor</h4>
                <h5>2021-2023</h5>
                <li> <h6>Collaborated effectively with developers and other stakeholders with a strong understanding of software development processes and project management in Github repositories and Jira</h6></li>
                <li> <h6>Website projects for business startups</h6></li>
                <li> <h6>Contributed to front-end development using HTML, CSS, and Javascript to build visually appealing and functional websites that meet clients' needs</h6></li>
                <li> <h6>Created Windows form applications using C# (Frontend and backend)</h6></li>
                <li> <h6>Working knowledge of SQL, demonstrated proficiency in database design and building custom database solutions that are optimized for performance, security, and data integrity</h6></li>
                <li> <h6>Website deployment in AWS. Worked with technologies such as Route53, DynamoDB, EC2, Lambda, and other AWS services</h6></li>
              
              <br />
              
                <h4>Coding Instructor</h4>
                <h5>YesWeCode: 2022-2023</h5>
                <li>  <h6>Experienced programming tutor offering personalized instruction in web development, Python, Scratch, and block coding to help students achieve their programming goals.</h6></li>
                <li> <h6>Volunteering in a non-profit organization: Hakili Community for Sustainable Development</h6></li>
             
            </ul>
          </div>

          {/* Other Work Experience section */}
          <div className={styles.other_work}>
            <h3 className={styles.title3}>Other Work Experience</h3>
            <ul>


                    <h4>Part Time D3 Driver</h4>
                <h5>FedEx: 2022-Present</h5>
              <li> <h6>Day to day operations consisting of deliveries and driving</h6></li>
              <li>   <h6>Warehouse activities involving sorting pre/post delivery</h6></li>
              <br />
                <h4>Manager</h4>
                <h5>Photos Unlimited Walmart: 2019-2020</h5>
              <li> <h6>Customer Service</h6></li>
              <li>   <h6>Team Supervision</h6></li>
             
              <br />
            
                <h4>Automotive Technician</h4>
                <h5>MR.LUBE: 2019</h5>
                <li>   <h6>Upper/Lower technician</h6></li>
                <li>  <h6>Oil/Tire changes</h6></li>
             
            </ul>
          </div>
        </div>
      </div>
  
 

); 
  }
  
  

export default Resume;
