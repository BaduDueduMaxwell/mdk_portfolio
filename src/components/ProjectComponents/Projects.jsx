import React from "react";
import ogateway from "../../assets/Projects/ogateway.png";
import wewire from "../../assets/Projects/wewire.png";
import KiboNavigator from "../../assets/Projects/kiboNavigator.png";
import bankist from "../../assets/Projects/bankist.png";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div>
      <div className="flex -mx-2">
        <motion.div className="w-full sm:w-1/2 p-5" whileHover={{ scale: 1.1 }}>
          <div className="sm:h-100">
            <a href="https://ogateway.io">
              <img src={ogateway} alt="ogateway" />

              <p className="text-sm font-bold color p-5">
                OGateway offers a range of payment collection methods tailored
                to suit your business needs. Whether it's accepting online
                payments, implementing recurring billing, or facilitating
                in-person transactions, our versatile solution adapts to your
                requirements, providing a seamless payment experience for your
                customers.
                <h5 className="text-2xl mt-4 b-4">Experience:</h5>
                <li className="mb-4">
                  Implemented a robust Time-based OTP system integrated with
                  email delivery and push notifications which decreased
                  fraudulent login by 75%.
                </li>
                <li className="mb-4">
                  Collaborated with UI/UX designers to develop a user–friendly
                  OTP input field prototype, achieving a 99% success rate of
                  entry across desktop, mobile, and tablet devices.
                </li>
                <li className="mb-4">
                  Contributed to cross border transactions testings and
                  participated in team meetings, scrum sessions, and code
                  reviews.
                </li>
              </p>
            </a>
          </div>
        </motion.div>
        <div className="w-full sm:w-1/2 p-5">
          <motion.div className="sm:h-100" whileHover={{ scale: 1.1 }}>
            <a href="https://www.wewireafrica.com/">
              <img
                src={wewire}
                alt="Internship company Maxwell has worked at."
              />

              <motion.p
                className="text-sm font-bold color p-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Wewire Africa is an easy-to-use global mobile payments platform.
                It enables businesses to trade across borders, helping clients
                to improve the quality of their businesses by enabling their
                company to seamlessly and quickly interact with international
                customers, suppliers and business partners, giving them access
                to new markets, achieve better results and make smarter business
                decisions.
                <h5 className="text-2xl mt-4 b-4">Experience:</h5>
                <li className="mb-4">
                  Created a clean and responsive website using TypeScript and
                  React, leading to increased traffic and engagement by 20%.
                </li>
                <li className="mb-4">
                  Engineered robust quality assurance frameworks, incorporating
                  diverse testing methods and user acceptance testing, leading
                  to significant improvements in frontend code quality and
                  reliability.
                </li>
              </motion.p>
            </a>
          </motion.div>
        </div>
      </div>
      <div className="flex -mx-2">
        <div className="w-full sm:w-1/2 p-5">
          <motion.div className="sm:h-100" whileHover={{ scale: 1.1 }}>
            <a href="https://bankist-dbadu.netlify.app/">
              <img src={bankist} alt="bankist homepage" />

              <p className="text-sm font-bold color p-5">
                Bankist: A fictional online bank. This project was to practice
                DOM manipulation and user interaction. You have the possibility
                to log into the account and use several functions, just like in
                a real bank!{" "}
              </p>
            </a>
          </motion.div>
        </div>
        <motion.div className="w-full sm:w-1/2 p-5" whileHover={{ scale: 1.1 }}>
          <div className="sm:h-100">
            <a href="https://prod-project.vercel.app/">
              <img src={KiboNavigator} alt="KiboNavigator" />

              <p className="text-sm font-bold color p-5">
                KiboNavigator, a student-centric website meticulously designed
                to offer newly admitted students at Kibo School of Tech a
                comprehensive and streamlined overview of the institution. This
                user-friendly platform serves as a guiding beacon, providing
                quick and insightful information to help students navigate their
                academic journey at Kibo seamlessly. From essential campus
                details to academic resources, KiboNavigator ensures that new
                students embark on their educational adventure with clarity and
                confidence.
              </p>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
