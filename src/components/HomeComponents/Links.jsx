import React from "react";
import doc from "../../assets/links/doc.png";
import github from "../../assets/links/github.png";
import twitter from "../../assets/links/twitter.png";
import medium from "../../assets/links/medium.png";
import linkedin from "../../assets/links/linkedin.png";

export default function Links() {
  return (
    <div>
      <nav>
        <ul className="header__links list-unstyled list-inline ">
          <li>
            <a href="https://docs.google.com/document/d/1_U5rtzW80YcoXGuDe8EaKZVWiu7H3lLVzkiXVmXYiNs/edit">
              <img src={doc} alt="resume" />
            </a>
          </li>
          <li>
            <a href="https://github.com/BaduDueduMaxwell">
              <img src={github} alt="github" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/duedumaxx">
              <img src={twitter} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="https://medium.com/@duedumaxwell43">
              <img src={medium} alt="medium" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/maxwell-duedu-05a026199/">
              <img src={linkedin} alt="linkedin" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
