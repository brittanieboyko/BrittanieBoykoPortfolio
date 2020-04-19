import React from "react";
import Header from "../Header";
import Project from "../Project";
import projects from "../../assets/projects"


function About() {
  return (
    <>
      <Header />
      <Project projects={projects}/>

    </>
  );
}

export default About;
