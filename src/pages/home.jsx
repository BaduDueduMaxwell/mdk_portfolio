import React from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/heading";
import "./home.css";
import PhotoMax from "../components/PhotoMax";
import Links from "../components/Links";

export default function Home() {
  return (
    <div className="header container">
      <div className="sm:header__intro">
        <Heading />
        <Links />
        <Navbar />
        <PhotoMax />
      </div>
    </div>
  );
}
