import React from "react";
import "./about.css";
import "../App.css";
import Header2 from "../components/AboutComponents/Header2";
import Paragraph from "../components/AboutComponents/Paragraph";
import Paragraph2 from "../components/AboutComponents/Paragraph2";

export default function About() {
  return (
    <div>
      <section className="about">
        <div className="container">
          <Header2 />
          <Paragraph />
          <br />
          <Paragraph2 />
        </div>
      </section>
    </div>
  );
}
