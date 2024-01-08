import React from "react";
import ogateway from "/Users/maxwell/mdk_portfolio/src/assets/Projects/ogateway.png";
import wewire from "/Users/maxwell/mdk_portfolio/src/assets/Projects/wewire.png";
import KiboNavigator from "/Users/maxwell/mdk_portfolio/src/assets/Projects/kiboNavigator.png";
import Afrotour from "/Users/maxwell/mdk_portfolio/src/assets/Projects/afrotour.png";

export default function Projects() {
  return (
    <div>
      <div className="flex -mx-2">
        <div className="w-full sm:w-1/2 p-5">
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
              </p>
            </a>
          </div>
        </div>
        <div className="w-full sm:w-1/2 p-5">
          <div className="sm:h-100">
            <a href="https://www.wewireafrica.com/">
              <img src={wewire} alt="" />

              <p className="text-sm font-bold color p-5">
                Wewire Africa is an easy-to-use global mobile payments platform.
                They enable businesses to trade across borders, helping clients
                to improve the quality of their businesses by enabling their
                company to seamlessly and quickly interact with international
                customers, suppliers and business partners, giving them access
                to new markets, achieve better results and make smarter business
                decisions.
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="flex -mx-2">
        <div className="w-full sm:w-1/2 p-5">
          <div className="sm:h-100">
            <a href="https://ogateway.io">
              <img src={KiboNavigator} alt="ogateway" />

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
        </div>
        <div className="w-full sm:w-1/2 p-5">
          <div className="sm:h-100">
            <a href="https://medium.com/@duedumaxwell43/python-common-errors-part-1-c1e5a03c67d8">
              <img src={Afrotour} alt="" />

              <p className="text-sm font-bold color p-5">
                Welcome to Afrotour, your passport to affordable global
                adventures! Afrotour is not just a page; it's your go-to
                platform for booking budget-friendly tour trips to destinations
                all around the world. We take pride in offering you the
                opportunity to explore and experience the wonders of various
                countries without breaking the bank. With competitive rates and
                a commitment to providing cost-effective travel solutions,
                Afrotour is your gateway to making memorable journeys accessible
                to everyone. Discover the world at a more affordable rate with
                Afrotour.{" "}
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
