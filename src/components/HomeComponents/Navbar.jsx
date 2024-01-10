import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul className="header__nav list-unstyled list-inline center  md:ml-0">
          <li>
            <a className="font-bold nav__links" href="#about">About</a>
          </li>
          <li>
            <a className="font-bold nav__links" href="#blog">Blogs</a>
          </li>
          <li>
            <a className="font-bold nav__links" href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
