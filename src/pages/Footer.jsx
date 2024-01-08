import React from "react";
import FooterText from "../components/FooterComponenets/FooterText";
import "./Footer.css";
import FooterLinks from "../components/FooterComponenets/FooterLinks";

export default function Footer() {
  return (
    <div className="footer dark">
      <div className="container">
        <section className="blurb">
          <FooterText />
          <FooterLinks />
        </section>
      </div>
    </div>
  );
}
