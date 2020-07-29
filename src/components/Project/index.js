import React from "react";
import "./style.css";

function Project(props) {
  return (
    <div>
        {props.projects.map((project) => (
            <div class="container" key={project.id}>
            <div class="content">
                <div class="content-overlay"></div>
                <div
                className="img content-image"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
                <div class="content-details fadeIn-top">
                    <h3 class="content-title">{project.name}</h3>
                    <a href={project.project} className="custom-button content-text">
                  Project
                </a>
                <a href={project.repo} className="custom-button content-text">
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