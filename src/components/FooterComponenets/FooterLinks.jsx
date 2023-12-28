import React from "react";
import doc from "/Users/maxwell/mdk_portfolio/src/assets/links/doc.png";
import github from "/Users/maxwell/mdk_portfolio/src/assets/links/github.png";
import twitter from "/Users/maxwell/mdk_portfolio/src/assets/links/twitter.png";
import medium from "/Users/maxwell/mdk_portfolio/src/assets/links/medium.png";
import linkedin from "/Users/maxwell/mdk_portfolio/src/assets/links/linkedin.png";

export default function FooterLinks() {
  return (
    <div>
      <ul className="footer__links list-unstyled list-inline">
        <li>
          <a href="https://www.linkedin.com/in/maxwell-duedu-05a026199/">
            <img src={doc} alt="" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/maxwell-duedu-05a026199/">
            <img src={github} alt="" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/maxwell-duedu-05a026199/">
            <img src={twitter} alt="" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/maxwell-duedu-05a026199/">
            <img src={medium} alt="" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/maxwell-duedu-05a026199/">
            <img src={linkedin} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
}
