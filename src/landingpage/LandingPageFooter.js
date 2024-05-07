import React from "react";

const LandingPageFooter = () => {
  return (
    <footer className="text-gray-800 py-16">
      <div className="container mx-auto flex flex-wrap justify-center">
        <div className="w-full md:w-1/4 md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-bold">CreativeWorks</h2>
          <p className="mt-2">Content for the first column</p>
        </div>
        <div className="w-full md:w-1/4 md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-bold">Product</h2>
          <p className="mt-2">Content for the second column</p>
        </div>
        <div className="w-full md:w-1/4 md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-bold">Engage</h2>
          <p className="mt-2">Content for the third column</p>
        </div>
        <div className="w-full md:w-1/4 md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-bold">Earn Money</h2>
          <p className="mt-2">Content for the fourth column</p>
        </div>
      </div>
    </footer>
  );
};

export default LandingPageFooter;
