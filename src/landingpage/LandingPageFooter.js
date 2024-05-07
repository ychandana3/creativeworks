import React from "react";

const LandingPageFooter = () => {
  return (
    <footer className="text-gray-800 py-8">
      <div className="container mx-auto flex flex-wrap justify-center">
        <div className="w-full md:w-1/4 md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-bold">First Column</h2>
          <p className="mt-2">Content for the first column</p>
        </div>
        <div className="w-full md:w-1/4 md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-bold">Second Column</h2>
          <p className="mt-2">Content for the second column</p>
        </div>
        <div className="w-full md:w-1/4 md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-bold">Third Column</h2>
          <p className="mt-2">Content for the third column</p>
        </div>
        <div className="w-full md:w-1/4 md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-bold">Fourth Column</h2>
          <p className="mt-2">Content for the fourth column</p>
        </div>
      </div>
    </footer>
  );
};

export default LandingPageFooter;
