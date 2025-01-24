import React from "react";
import styles from "../stylesheets/Resume.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ian from "../images/profile.jpg";
const Resume = () => {
  return (
    <div className={styles.container} id="resume">
      <div className={styles.left_side}>
        <div className={styles.profile_text}>
          <div className={styles.image}>
            <img src={ian} alt="haha" />
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
                <a href="linkedin.com/in/ian-pedeglorio-a3037b253">
                  {" "}
                  Ian Pedeglorio
                </a>
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
      </div>

      <div className={styles.right_side}>
        <div className={styles.skills_info}>
          <h3 className={styles.title2}>Relevant Skills</h3>
          <br />
          <p>
            <strong>Current Languages: </strong> Python &#8226; Dart &#8226;
            Javascript &#8226; Swift
          </p>
          <br></br>
          <p>
            <strong>Frontend Stack: </strong>React &#8226; SwiftUI &#8226;
            Flutter
          </p>
          <br></br>
          <p>
            <strong>Backend Stack: </strong>FASTAPI &#8226; Django &#8226;
            nodejs
          </p>
          <br></br>
          <p>
            <strong>Database: </strong> CoreData &#8226; SQL &#8226; PostgreSQL
            &#8226; MongoDB &#8226; FIrebase
          </p>
          <br></br>

          <p>
            <strong>Cloud: </strong> AWS &#8226; GCP
          </p>
          <br></br>

          <p>
            <strong>Other Development SKills: </strong> Power Platform
            Development &#8226; Sharepoint Development
          </p>
          <br></br>
        </div>

        <div className={styles.language_container}>
          <a
            href="https://github.com/anuraghazra/github-readme-stats"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=icp049&layout=donut&langs_count=8"
              alt="Top Languages"
            />
          </a>
        </div>

        {/* Relevant Work Experience section */}
        <div className={styles.experience_container}>
          <h3 className={styles.title3}>Relevant Work Experience</h3>
          <ul>
            <h4>Junior Developer</h4>
            <h5>Regina Public Library - City of Regina: Present</h5>

            <li>
              {" "}
              <h6>
                Direct involvement with changes and maintainance of websites
                that caters 9 branches across the city.
              </h6>
            </li>
            <li>
              {" "}
              <h6>
              Scripting using Python
              </h6>
            </li>
            <li>
              {" "}
              <h6>
                Proficient in API design and integration. Familiar with
                utilizing 3rd party APIs for application components
              </h6>
            </li>
            <li>
              {" "}
              <h6>
                Participated in code reviews, testing and releases. Expert in
                git flow and cloud tools during cycle.
              </h6>
            </li>
            <li>
              {" "}
              <h6>Familiar with CI/CD pipeline practices and usage.</h6>
            </li>
            <li>
              {" "}
              <h6>
                Experience with AWS (Creating Instances, subnets, gateways,
                usage of buckets, API deployment etc.){" "}
              </h6>
            </li>

            <li>
              {" "}
              <h6>
                Proficient in PowerApps(powerFX) and Sharepoint development with
                Azure Integrations.
              </h6>
            </li>

            <li>
              {" "}
              <h6>
                Attend to tickets that require troubleshooting or changes in our
                customer facing and internal applications
              </h6>
            </li>

            <li>
              {" "}
              <h6>
                I do tehnician duties on the sides, such as troubleshooting and
                maintaining kiosks, VR systems, 3D printers.
              </h6>
            </li>

            <br />

            <h4>Developer/Contributor</h4>
            <h5>2021-Present</h5>

            <li>
              {" "}
              <h6>
              An active ios developer using Swift and flutter for mobile applications.
              </h6>
            </li>
            <li>
              {" "}
              <h6>
                Utilized Javascript frontend and backend tools to create dynamic
                websites, e-commerce sites with CMS, peer- to-peer websites,
                chat apps, API design, database integrations, encryptions etc.
              </h6>
            </li>
        
            <li>
              {" "}
              <h6>
              Participated in agile environments for startups as a paid contributor as a side gig
              </h6>
            </li>
            <li>
              {" "}
              <h6>
                Utilized C++ to create embedded systems projects utilizing
                libraries like opencv (e.g programmed LCD screens, Detectors,
                Intruder & Alarm Systems, RFID, Sensors, Utilization of comm
                protocols, etc.).{" "}
              </h6>
            </li>

          
      

            <br />

            <h4>Coding Instructor</h4>
            <h5>YesWeCode: 2022-2023</h5>
            <li>
              {" "}
              <h6>
                Experienced programming tutor offering personalized instruction
                in web development, Python, Scratch, and block coding to help
                students achieve their programming goals.
              </h6>
            </li>
            <li>
              {" "}
              <h6>
                Volunteering in a non-profit organization: Hakili Community for
                Sustainable Development
              </h6>
            </li>

            <br />

            <h4>Engineering Assistant</h4>
            <h5>JAMIC Engineering Services: 2017-2019</h5>

            <li>
              <h6>
              Utilized python and matplotlib to analyze a wide range of urban layout data and visualized it for presentations.
              </h6>
            </li>
            <li>
              <h6>
                Heavily utilized SQL to create and update new and existing
                tabular records -- worked with thousands of data involving
                property locations, development types, infrastructures,
                addresses etc.
              </h6>
            </li>
            <li>
              <h6>
                Specialized in GIS mapping using ARCGIS. Zone mapped satellite
                images and turned them into visual graphs.
              </h6>
            </li>
            <li>
              <h6>
                Managed day-to-day operations and maintained records for the
                engineering team and existing clients.
              </h6>
            </li>
            <li>
              <h6>
                {" "}
                Provided high level support to lead engineers on zoning and
                urban planning projects.
              </h6>
            </li>
          </ul>
        </div>

        {/* Other Work Experience section */}
        <div className={styles.other_work}>
          <h3 className={styles.title3}>Other Work Experience</h3>
          <ul>
            <h4>Part Time D3 Driver</h4>
            <h5>FedEx: 2022-2023</h5>
            <li>
              {" "}
              <h6>
                Day to day operations consisting of deliveries and driving
              </h6>
            </li>
            <li>
              {" "}
              <h6>Warehouse activities involving sorting pre/post delivery</h6>
            </li>
            <br />
            <h4>Manager</h4>
            <h5>Photos Unlimited Walmart: 2019-2020</h5>
            <li>
              {" "}
              <h6>Customer Service</h6>
            </li>
            <li>
              {" "}
              <h6>Team Supervision</h6>
            </li>

            <br />

            <h4>Automotive Technician</h4>
            <h5>MR.LUBE: 2019</h5>
            <li>
              {" "}
              <h6>Upper/Lower technician</h6>
            </li>
            <li>
              {" "}
              <h6>Oil/Tire changes</h6>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
