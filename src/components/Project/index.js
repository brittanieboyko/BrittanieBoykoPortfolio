import React from "react";
import "./style.css";

function Project(props) {
  return (
    <div className="container">
      <div className="row">
        {props.projects.map((project) => (
          <div
            className="card col-lg-4 col-md-4 col-sm-6 col-xs-12 image-spacing flex-column d-flex text-center custom-card"
            key={project.id}
          >
            <div className="hovereffect">
              <div
                className="img-fluid img img-responsive"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="overlay">
                <h2 className="card-title">{project.name}</h2>
                <p>
                  <a href={project.project} className="custom-button mt-auto">
                    Project
                  </a>
                </p>
                <p>
                  <a href={project.repo} className="custom-button mt-auto">
                    Repo
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
