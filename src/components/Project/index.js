import React from "react";
import "./style.css";

function Project(props) {
    return (
        <div className="container">
            <div className="row">
                {props.projects.map(project => (
                    <div className="card col-lg-4 image-spacing flex-column d-flex text-center custom-card" key={project.id} >
                    <div className="img-fluid img" style={{backgroundImage: `url(${(project.image)})`}}></div>
                    <div className="card-body">
                        <h5 className="card-title">{project.name}</h5>
                        <a href={project.project} className="btn btn-primary custom-button mt-auto">Project</a>
                        <a href={project.repo}className="btn btn-primary custom-button mt-auto">Repo</a>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
};

export default Project