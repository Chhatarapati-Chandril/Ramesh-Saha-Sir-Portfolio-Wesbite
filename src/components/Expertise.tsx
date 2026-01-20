import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardTeacher, faFlask, faTools } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

/* Teaching & Academic Domains */
const teachingExpertise = [
  "Computer Networks",
  "Data Structures & Algorithms",
  "Design and Analysis of Algorithms",
  "Wireless Sensor Networks",
  "Internet of Things (IoT)",
  "Machine Learning",
  "Software Engineering",
  "UML",
  "Java Programming",
  "C Programming"
];

/* Research & Data Science */
const researchExpertise = [
  "Internet of Things (IoT)",
  "Smart Healthcare Systems",
  "Wireless Body Area Networks (WBAN)",
  "Vehicular Ad Hoc Networks (VANET)",
  "Machine Learning",
  "Deep Learning",
  "Optimization Algorithms",
  "Healthcare Analytics",
  "Network Security"
];

/* Tools & Technical Skills */
const toolsExpertise = [
  "Python",
  "MATLAB",
  "Java",
  "R",
  "SQL",
  "PostgreSQL",
  "MySQL",
  "LaTeX",
  "Pandas",
  "Scikit-learn",
  "TensorFlow",
  "Git",
  "Linux"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>

        <div className="skills-grid">
          {/* Teaching */}
          <div className="skill">
            <FontAwesomeIcon icon={faChalkboardTeacher} size="3x" />
            <h3>Teaching & Academic Expertise</h3>
            <p>
              Extensive teaching experience in undergraduate and postgraduate
              engineering programs, with a focus on core computer science,
              networking, and emerging technologies.
            </p>
            <div className="flex-chips">
              {teachingExpertise.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Research */}
          <div className="skill">
            <FontAwesomeIcon icon={faFlask} size="3x" />
            <h3>Research & Data Science</h3>
            <p>
              Active research in IoT-enabled smart healthcare systems,
              machine learning, deep learning, and optimization techniques,
              with publications in high-impact international journals.
            </p>
            <div className="flex-chips">
              {researchExpertise.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="skill">
            <FontAwesomeIcon icon={faTools} size="3x" />
            <h3>Tools & Technical Skills</h3>
            <p>
              Strong hands-on experience with programming, data analysis,
              simulation, and academic research tools used for teaching,
              experimentation, and scholarly publication.
            </p>
            <div className="flex-chips">
              {toolsExpertise.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
