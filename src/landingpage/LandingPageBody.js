import React from "react";
import PricingPlans from "./PricingPlans";
import Testimonials from "./Testimonials";

const LandingPageBody = () => {
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2">
          <h2 className="text-5xl font-bold mt-16 mb-8">
            Want anything to be easy
            <br /> <p className="text-6xl">with CreativeWorks.</p>
          </h2>
          <h3 className="text-2xl mb-8">
            Provide a network for all your needs with ease and fun using
            CretiveWorks discover interesting features from us.
          </h3>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded">
            Get Started
          </button>
        </div>
        <div className="w-full sm:w-1/2">
          <img
            src={process.env.PUBLIC_URL + "/mainImg.png"}
            alt="My Image"
            className="w-full h-auto"
          />
        </div>
      </div>

      <PricingPlans />
      <Testimonials />
    </div>
  );
};

export default LandingPageBody;
