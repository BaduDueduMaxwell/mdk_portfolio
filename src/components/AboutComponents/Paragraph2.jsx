import React from "react";

export default function Paragraph2() {
  return (
    <div>
      <div className="ml-12">
        <h4 className="font-bold "> Career</h4>
        <ul>
          <li className="bullet">
            At my previous internships at
            <a href="https://www.wewireafrica.com/">Wewire Africa,</a>I helped
            build a cross-border payments platform. This platform aimed to
            address the longstanding challenge faced by individuals and
            businesses in Africa who seek to engage with tier-one countries like
            the United States, the UK, and Europe;
          </li>
          <li className="bullet">
            Worked at{" "}
            <a href="https://www.ogateway.io">Ogateway Ghana Limited</a> to
            develop a payment collection methods tailored to suit businesses and
            needs.{" "}
          </li>
        </ul>
      </div>
      <br />
      <div className="ml-12">
        <h4 className="font-bold "> Fun Facts About Me</h4>
        <ul>
          <li className="bullet">I drink a lot of tea</li>
          <li className="bullet">I'm slightly addicted to Twitter</li>
          <li className="bullet">Beach days are my zen time</li>
          <li className="bullet">Love traveling to see new places</li>
        </ul>
      </div>
    </div>
  );
}
