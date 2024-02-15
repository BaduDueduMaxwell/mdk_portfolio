import React from "react";

export default function Paragraph2() {
  return (
    <div>
      <div className="ml-12">
        <h4 className="font-bold "> Career</h4>
        <ul>
          <li className="bullet">
            At my previous internship at
            <a href="https://www.wewireafrica.com/">Wewire Africa,</a>I helped
            build a cross-border payments platform. This platform aimed to
            address the longstanding challenge faced by individuals and
            businesses in Africa who seek to engage with tier-one countries like
            the United States, the UK, and Europe;
          </li>
          <div className="m-10">
            <h5 className="text-1xl mt-4 b-4">Experience:</h5>
            <ul>
              <li className="mb-4 font-bold">
                - Created a clean and responsive website using TypeScript and
                React, leading to increased traffic and engagement by 20%.
              </li>
              <li className="mb-4 font-bold">
                - Engineered robust quality assurance frameworks, incorporating
                diverse testing methods and user acceptance testing, leading to
                significant improvements in frontend code quality and
                reliability.
              </li>
            </ul>
          </div>
          <li className="bullet">
            Worked at{" "}
            <a href="https://www.ogateway.io">Ogateway Ghana Limited</a> to
            develop a payment collection methods tailored to suit businesses and
            needs.{" "}
          </li>
          <div className="m-10">
            <h5 className="text-1xl mt-4 b-4">Experience:</h5>
            <ul>
              <li className="mb-4 font-bold">
                - Implemented a robust Time-based OTP system integrated with
                email delivery and push notifications which decreased fraudulent
                login by 75%.
              </li>
              <li className="mb-4 font-bold">
                - Collaborated with UI/UX designers to develop a user–friendly
                OTP input field prototype, achieving a 99% success rate of entry
                across desktop, mobile, and tablet devices.
              </li>
              <li className="mb-4 font-bold">
                - Contributed to cross border transactions testings and
                participated in team meetings, scrum sessions, and code reviews.
              </li>
            </ul>
          </div>
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
