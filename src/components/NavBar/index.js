import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
  return (
    <>
    <nav
      className="navbar navbar-expand-lg navbar-light custom-nav"
      id="bootstrap-overrides"
    >
      <Link to="/" className="navbar-brand text-uppercase mx-auto" id="myName">
        Brittanie Boyko
      </Link>
      </nav>
      <nav class="nav">
        <Link to="/about" className="nav-link mx-auto">
            About
        </Link>
        <Link to="/contact" className="nav-link mx-auto">
          Work
        </Link>
      </nav>
    </>
  );
}

export default NavBar;
