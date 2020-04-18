import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light custom-nav"
      id="bootstrap-overrides"
    >
      <Link to="/" className=" navbar-brand text-uppercase" id="myName">
        Brittanie Boyko
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/about" className="nav-item nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-item nav-link">
            Contact
          </Link>
        </div>
      </div>
    </nav>

    
  );
}

export default NavBar;
