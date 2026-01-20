import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Employment History</h1>

        <VerticalTimeline>
          {/* IIIT Sonepat */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="September 2023 – Present"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Assistant Professor
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Indian Institute of Information Technology (IIIT), Sonepat, Haryana
            </h4>
            <p>
              <strong>Department:</strong> Computer Science and Engineering<br />
              <strong>Institution Type:</strong> Institute of National Importance (Govt. of India)
            </p>
          </VerticalTimelineElement>

          {/* VIT Bhopal */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="April 2022 – August 2023"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Assistant Professor
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              VIT Bhopal University, Madhya Pradesh
            </h4>
            <p>
              <strong>Department:</strong> Computer Science and Engineering<br />
              <strong>School:</strong> School of Computing Science and Engineering (SCSE)<br />
              <strong>Institution Type:</strong> Private Autonomous University
            </p>
          </VerticalTimelineElement>

          {/* Gauhati University */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="September 2018 – September 2021"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Assistant Professor
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Gauhati University, Assam
            </h4>
            <p>
              <strong>Department:</strong> Information Technology<br />
              <strong>Institute:</strong> Gauhati University Institute of Science and Engineering (GUIST)<br />
              <strong>Scheme:</strong> TEQIP-III (MHRD, Govt. of India)
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
