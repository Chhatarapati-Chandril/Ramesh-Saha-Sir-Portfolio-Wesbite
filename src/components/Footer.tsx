import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SchoolIcon from '@mui/icons-material/School';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
            <a href="mailto:ramesh1saha@gmail.com,rameshs@iiitsonepat.ac.in" rel="noreferrer"><EmailIcon /></a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="tel:+917003384895" rel="noreferrer"><PhoneIcon /></a>
            <a href="https://scholar.google.com/citations?user=jQQKGQ0AAAAJ&hl=en&oi=ao" target="_blank" rel="noreferrer"><SchoolIcon /></a>
          </div>
    </footer>
  );
}

export default Footer;