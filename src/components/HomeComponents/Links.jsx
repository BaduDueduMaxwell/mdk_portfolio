import React from "react";
import doc from "../assets/links/doc.png";
import github from "../assets/links/github.png";
import twitter from "../assets/links/twitter.png";
import medium from "../assets/links/medium.png";
import linkedin from "../assets/links/linkedin.png";

export default function Links() {
  return (
    <div>
      <nav>
        <ul className="sm:header__links list-unstyled list-inline pl-5">
          <li>
            <a href="">
              <img src={doc} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={github} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={twitter} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={medium} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={linkedin} alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
