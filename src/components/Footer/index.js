import React from "react";
import Resume from "../../assets/BrittanieBoykoResume2020.pdf";
import "./style.css";

function Footer() {
  return (
    <footer className="footer fixed-bottom custom-footer">
      <div className="container">
        <span>
          <a href="https://github.com/brittanieboyko/" className="footer-link">
            Github
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/brittanie-boyko/"
            className="footer-link"
          >
            LinkedIn
          </a>
        </span>
        <span>
          <a 
            href={Resume}
            className="footer-link"
          >
            Resume
          </a>
        </span>
        <span>
          <a
            href="mailto:brittanie.boyko@gmail.com?subject=Hello"
            className="footer-link"
          >
            Email
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;