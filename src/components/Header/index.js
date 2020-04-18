import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header(props) {
  return (
    <div className="container text-center" id="aboutMe">
      <div className="col-md-12">
        <h2>I live in Philadelphia, PA</h2>
        <h2>I'm a Web Developer</h2>
        <h2>
          Get in touch{" "}
          <Link to="/contact" id="contact">
            Here
          </Link>
        </h2>
        <h2>And check out some of my Projects</h2>
      </div>
    </div>
  );
}

export default Header;
