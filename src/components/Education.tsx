import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Education() {
  return (
    <div id="education">
      <div className="items-container">
        <h1>Education</h1>

        <VerticalTimeline>
          {/* Ph.D. */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2021"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Ph.D.</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Maulana Abul Kalam Azad University of Technology (MAKAUT), West Bengal
            </h4>
            <p>
              <strong>Discipline:</strong> Computer Science and Engineering<br />
              <strong>Thesis:</strong> Study on QOS provisioning of remote healthcare monitoring using WBAN and VANET<br />
            </p>
          </VerticalTimelineElement>

          {/* M.Tech */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2015"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">M.Tech</h3>
            <h4 className="vertical-timeline-element-subtitle">
              National Institute of Technical Teachers’ Training and Research (NITTTR), Kolkata
            </h4>
            <p>
              <strong>Discipline:</strong> Multimedia and Software Systems (CSE Department)<br />
              <strong>Thesis:</strong> Studies on Rough Set Theory for Finding Minimal Reduct of Large Decision System<br />
            </p>
          </VerticalTimelineElement>

          {/* B.Tech */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Kalyani Government Engineering College (KGEC), West Bengal
            </h4>
            <p>
              <strong>Discipline:</strong> Information Technology<br />
              <strong>Thesis:</strong> PCA-Driven Face Regeneration: A Novel Approach in Image Processing<br />
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Education;
