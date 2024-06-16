import React from "react";
import { HashLink as Link } from "react-router-hash-link";
const LandingPageHeader = () => {
  return (
    <div className="flex justify-between items-center my-8">
      <div className="flex items-center">
        <img
          src={process.env.PUBLIC_URL + "/Logo.png"}
          alt="My Image"
          className="custom-link"
        />
        <Link to="/" className="p-2 text-2xl font-bold text-black">
          CreativeWorks
        </Link>
      </div>
      <ul className="flex">
        <li className="ml-6 custom-link">
          <Link to="#pricing" className="p-6 text-xl text-gray-500 ">
            Pricing
          </Link>
        </li>
        <li className="ml-6 custom-link">
          <Link to="#testimonials" className="p-6 text-xl text-gray-500 ">
            Testimonials
          </Link>
        </li>
        <li className="ml-6 custom-link">
          <Link
            to="/signin"
            className="p-6 font-bold text-xl text-black px-4 py-2"
          >
            Sign In
          </Link>
        </li>
        <li className="ml-6 custom-link">
          <Link
            to="/signup"
            className="p-6 font-bold text-xl text-blue-500 border-2 border-blue-500 hover:text-white hover:transition hover:bg-blue-500 hover:ring-2 rounded-full px-4 py-2 "
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LandingPageHeader;
