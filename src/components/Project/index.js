import React from "react";
import "./style.css";

function Project(props) {
  return (
    <div>
      {props.projects.map((project) => (
        <div className="container" key={project.id}>
          <div className="content">
            <div className="content-overlay"></div>
            <div
              className="img content-image"
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>
            <div className="content-details fadeIn-top">
              <h3 className="content-title">{project.name}</h3>
              <a href={project.project} className="project-link content-text">
                Project
              </a>{" "}
              |{" "}
              <a href={project.repo} className="project-link content-text">
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
