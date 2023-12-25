import React from "react";
import ogateway from "/Users/maxwell/mdk_portfolio/src/assets/Projects/ogateway.png";
import wewire from "/Users/maxwell/mdk_portfolio/src/assets/Projects/wewire.png";
import KiboNavigator from "/Users/maxwell/mdk_portfolio/src/assets/Projects/kiboNavigator.png";
import Afrotour from "/Users/maxwell/mdk_portfolio/src/assets/Projects/afrotour.png";

export default function Projects() {
  return (
    <div className="w-full p-5 relative">
      <div className="mb-10 sm:h-100 relative group">
        <a href="https://ogateway.io" className="block w-full h-auto">
          <img
            src={ogateway}
            alt="OGateway Project"
            className="block w-full h-auto"
          />
          <div className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm">
            <p className="p-5">
              OGateway offers a range of payment collection methods tailored to
              suit your business needs. Whether it's accepting online payments,
              implementing recurring billing, or facilitating in-person
              transactions, our versatile solution adapts to your requirements,
              providing a seamless payment experience for your customers.
            </p>
          </div>
        </a>
      </div>

      {/* Project 2 */}
      <div className="mb-10 sm:h-100 relative group">
        <a href="https://ogateway.io" className="block w-full h-auto">
          <img
            src={wewire}
            alt="OGateway Project"
            className="block w-full h-auto"
          />
          <div className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm">
            <p className="p-5">
              OGateway offers a range of payment collection methods tailored to
              suit your business needs. Whether it's accepting online payments,
              implementing recurring billing, or facilitating in-person
              transactions, our versatile solution adapts to your requirements,
              providing a seamless payment experience for your customers.
            </p>
          </div>
        </a>
      </div>

      {/* Project 3 */}
      <div className="mb-10 sm:h-100 relative group">
        <a href="https://ogateway.io" className="block w-full h-auto">
          <img
            src={KiboNavigator}
            alt="OGateway Project"
            className="block w-full h-auto"
          />
          <div className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm">
            <p className="p-5">
              OGateway offers a range of payment collection methods tailored to
              suit your business needs. Whether it's accepting online payments,
              implementing recurring billing, or facilitating in-person
              transactions, our versatile solution adapts to your requirements,
              providing a seamless payment experience for your customers.
            </p>
          </div>
        </a>
      </div>

      {/* Project 4 */}
      <div className="mb-10 sm:h-100 relative group">
        <a href="https://ogateway.io" className="block w-full h-auto">
          <img
            src={Afrotour}
            alt="OGateway Project"
            className="block w-full h-auto"
          />
          <div className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm">
            <p className="p-5">
              OGateway offers a range of payment collection methods tailored to
              suit your business needs. Whether it's accepting online payments,
              implementing recurring billing, or facilitating in-person
              transactions, our versatile solution adapts to your requirements,
              providing a seamless payment experience for your customers.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
