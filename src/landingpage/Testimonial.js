import React from "react";

const Testimonial = ({
  avatar,
  name,
  country,
  comment,
  rating = 4.5,
  isNextPressed,
  isPreviousPressed,
}) => {
  return (
    <div
      className={`${
        isNextPressed != 0 ? "translate-x-" : ""
      } h-auto md:mr-8 border border-gray-500 bg-white rounded-lg shadow-md p-4 mr-16 flex flex-col transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300`}
      style={{ transform: `translateX(${isNextPressed * 10}px)` }}
    >
      <div className="flex items-center justify-between">
        <div className="flex">
          <img
            src={process.env.PUBLIC_URL + "/avatar.png"}
            alt={name}
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-gray-600">{country}</p>
          </div>
        </div>
        <div className="">{rating} ⭐</div>
      </div>
      <div className="mt-2">
        <p className="text-gray-800">{comment}</p>
      </div>
    </div>
  );
};

export default Testimonial;
