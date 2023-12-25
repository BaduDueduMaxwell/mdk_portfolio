import React from "react";
import Header2 from "../components/ProjectComponents/Header2";
import Projects from "../components/ProjectComponents/Projects";
import "./projects.css";

export default function Project() {
  return (
    <div>
      <section className="resume" id="projects">
        <div className="container">
          <Header2 />
          <Projects />
        </div>
      </section>
    </div>
  );
}
