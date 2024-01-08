import React from "react";
import Navbar from "../components/HomeComponents/Navbar";
import Heading from "../components/HomeComponents/Heading";
import "./home.css";
import "../App.css";
import PhotoMax from "../components/HomeComponents/PhotoMax";
import Links from "../components/HomeComponents/Links";

export default function Home() {
  return (
    <div className="header container">
      <div className="header__intro">
        <Heading />
        <Links />
        <Navbar />
      </div>
      <div className="header__photo">
        <PhotoMax />
      </div>
    </div>
  );
}
