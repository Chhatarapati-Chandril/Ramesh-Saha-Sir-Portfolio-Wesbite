import * as React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SchoolIcon from "@mui/icons-material/School";
import Tooltip from "@mui/material/Tooltip";

import OrcidIcon from "../components/OrcidIcon";
import ScopusIcon from "../components/ScopusIcon";

import "../assets/styles/Main.scss";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src="https://res.cloudinary.com/chandril/image/upload/v1768934828/ramesh_saha_sir_pic_vee7z4.jpg"
            alt="Dr. Ramesh Saha"
          />
        </div>

        <div className="content">
          {/* Desktop Icons */}
          <div className="social_icons">
            <a href="mailto:ramesh1saha@gmail.com,rameshs@iiitsonepat.ac.in">
              <Tooltip title="Email">
                <EmailIcon sx={{ color: "#EA4335" }} />
              </Tooltip>
            </a>

            <a
              href="https://www.linkedin.com/in/dr-ramesh-saha-ph-d-in-cse-7b508242/"
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip title="LinkedIn">
                <LinkedInIcon sx={{ color: "#0A66C2" }} />
              </Tooltip>
            </a>

            <a href="tel:+917003384895">
              <Tooltip title="Phone">
                <PhoneIcon sx={{ color: "#34A853" }} />
              </Tooltip>
            </a>

            <a
              href="https://scholar.google.com/citations?user=jQQKGQ0AAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip title="Google Scholar">
                <SchoolIcon sx={{ color: "#4285F4" }} />
              </Tooltip>
            </a>

            <a
              href="https://www.scopus.com/authid/detail.uri?authorId=57201879257"
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip title="Scopus Profile">
                <ScopusIcon sx={{ color: "#F36F21" }} />
              </Tooltip>
            </a>

            <a
              href="https://orcid.org/0000-0003-0003-9450"
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip title="ORCID Profile">
                <OrcidIcon sx={{ color: "#A6CE39" }} />
              </Tooltip>
            </a>
          </div>

          <h1>Dr. Ramesh Saha</h1>
          <p>Assistant Professor at IIIT Sonepat</p>

          {/* Mobile Icons */}
          <div className="mobile_social_icons">
            <a href="mailto:ramesh1saha@gmail.com,rameshs@iiitsonepat.ac.in">
              <EmailIcon sx={{ color: "#EA4335" }} />
            </a>

            <a
              href="https://www.linkedin.com/in/dr-ramesh-saha-ph-d-in-cse-7b508242/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon sx={{ color: "#0A66C2" }} />
            </a>

            <a href="tel:+917003384895">
              <PhoneIcon sx={{ color: "#34A853" }} />
            </a>

            <a
              href="https://scholar.google.com/citations?user=jQQKGQ0AAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <SchoolIcon sx={{ color: "#4285F4" }} />
            </a>

            <a
              href="https://www.scopus.com/authid/detail.uri?authorId=57201879257"
              target="_blank"
              rel="noreferrer"
            >
              <ScopusIcon sx={{ color: "#F36F21" }} />
            </a>

            <a
              href="https://orcid.org/0000-0003-0003-9450"
              target="_blank"
              rel="noreferrer"
            >
              <OrcidIcon sx={{ color: "#A6CE39" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
