import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul className="header__nav list-unstyled list-inline center  md:ml-0">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#blogs">Blogs</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
