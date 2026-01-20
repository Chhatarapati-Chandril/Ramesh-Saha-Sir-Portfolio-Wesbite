import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SchoolIcon from "@mui/icons-material/School";
import "../assets/styles/Main.scss";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src="https://res.cloudinary.com/chandril/image/upload/v1768934828/ramesh_saha_sir_pic_vee7z4.jpg"
            alt="Avatar"
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="mailto:ramesh1saha@gmail.com,rameshs@iiitsonepat.ac.in"
              rel="noreferrer"
            >
              <EmailIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/dr-ramesh-saha-ph-d-in-cse-7b508242/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a href="tel:+917003384895" rel="noreferrer">
              <PhoneIcon />
            </a>
            <a
              href="https://scholar.google.com/citations?user=jQQKGQ0AAAAJ&hl=en&oi=ao"
              target="_blank"
              rel="noreferrer"
            >
              <SchoolIcon />
            </a>
          </div>
          <h1>Dr. Ramesh Saha</h1>
          <p>Assistant Professor at IIIT Soneapt</p>

          <div className="mobile_social_icons">
            <a
              href="mailto:ramesh1saha@gmail.com,rameshs@iiitsonepat.ac.in"
              rel="noreferrer"
            >
              <EmailIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/dr-ramesh-saha-ph-d-in-cse-7b508242/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a href="tel:+917003384895" rel="noreferrer">
              <PhoneIcon />
            </a>
            <a
              href="https://scholar.google.com/citations?user=jQQKGQ0AAAAJ&hl=en&oi=ao"
              target="_blank"
              rel="noreferrer"
            >
              <SchoolIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
