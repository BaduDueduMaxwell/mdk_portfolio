import React from "react";
import duedu from "../assets/duedu.jpg";

export default function PhotoMax() {
  return (
    <div>
      <figure className="header__photo-wrapper">
        <img src={duedu} alt="photo of Maxwell Duedu" />
        <figcaption className="header__quote">
          Eloquent JS is the best JS book
        </figcaption>
      </figure>
    </div>
  );
}
