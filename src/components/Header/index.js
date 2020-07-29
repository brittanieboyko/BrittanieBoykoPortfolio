import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header(props) {
  return (
    <div className="text-center" id="aboutMe">
      <div className="col-md-12">
        <h2>I live in Philadelphia, PA</h2>
        <h2>I'm a Web Developer</h2>
        <h2>
          Check out some of my projects{" "}
          <Link to="/projects" id="bioLink">
            Here
          </Link>
        </h2>
        <h2>
          And get in touch{" "}
          <a
            href="mailto:brittanie.boyko@gmail.com?subject=Hello"
            className="footer-link"
            id="bioLink"
          >
            Here
          </a>
        </h2>
      </div>
    </div>
  );
}

export default Header;
