import React, { useState } from "react";
import Testimonial from "./Testimonial";


const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const testimonials = [
    {
      id: 1,
      avatar: "https://via.placeholder.com/150",
      name: "John Doe",
      country: "United States",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      avatar: "https://via.placeholder.com/150",
      name: "Jane Smith",
      country: "Canada",
      comment:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        id: 3,
        avatar: "https://via.placeholder.com/150",
        name: "John Doe",
        country: "U",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 4,
        avatar: "https://via.placeholder.com/150",
        name: "Jane Smith",
        country: "C",
        comment:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        id: 5,
        avatar: "https://via.placeholder.com/150",
        name: "John Doe",
        country: "t",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 6,
        avatar: "https://via.placeholder.com/150",
        name: "Jane Smith",
        country: "a",
        comment:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
  ];
  const handlePrev = () => {
    if (startIndex === 0) return; // Already at the beginning
    setStartIndex(startIndex - 1);
  };

  const handleNext = () => {
    if (startIndex + 2 >= testimonials.length) return; // Already at the end
    setStartIndex(startIndex + 1);
  };

  return (
    <div className="flex flex-col">
      <div className="flex transition-transform duration-1000 delay-700 ease-in-out">
        {testimonials.slice(startIndex, startIndex + 3).map((testimonial, index) => (
          <Testimonial
            key={index}
            avatar={testimonial.avatar}
            name={testimonial.name}
            country={testimonial.country}
            comment={testimonial.comment}
          />
        ))}
      </div>
      <div className="flex justify-end mt-4 mr-80">
        <button
          className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-blue-700 hover:bg-blue-700 focus:outline-none"
          onClick={handlePrev}
        >
          <img src={process.env.PUBLIC_URL + '/leftarrow.png'} alt="My Image" />
        </button>
        <button
          className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-blue-700 hover:bg-blue-700 focus:outline-none"
          onClick={handleNext}
        >
          <img src={process.env.PUBLIC_URL + '/rightfill.png'} alt="My Image" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
