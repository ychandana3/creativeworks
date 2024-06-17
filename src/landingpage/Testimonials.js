import React, { useState } from "react";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isNextPressed, setIsNextPressed] = useState(0);
  const [isPreviousPressed, setIsPreviousPressed] = useState(false);
  console.log(isNextPressed);
  const testimonials = [
    {
      id: 1,
      avatar: "https://via.placeholder.com/150",
      name: "Yessica Christy",
      country: "Shanxi, China",
      comment:
        "I like it because I like to travel far and still can connect with people around world.",
    },
    {
      id: 2,
      avatar: "https://via.placeholder.com/150",
      name: "Viezh Robert",
      country: "Warsaw, Poland",
      comment:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. CreativeWorks always the best",
    },
    {
      id: 3,
      avatar: "https://via.placeholder.com/150",
      name: "Kim Young Jou",
      country: "Seoul, South Korea",
      comment:
        "This helped me connect with creative people for such a lower price. Such a great app.",
    },
    {
      id: 4,
      avatar: "https://via.placeholder.com/150",
      name: "Samhitha",
      country: "C",
      comment:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 5,
      avatar: "https://via.placeholder.com/150",
      name: "Sanjana",
      country: "t",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 6,
      avatar: "https://via.placeholder.com/150",
      name: "Sweety",
      country: "a",
      comment:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  const handlePrev = () => {
    if (startIndex === 0) return; // Already at the beginning
    setStartIndex(startIndex - 1);
    setIsPreviousPressed((prev) => prev - 1);
  };

  const handleNext = () => {
    // if (startIndex + 2 >= testimonials.length) return; // Already at the end
    // setStartIndex(startIndex + 1);
    setIsNextPressed((prev) => prev + 1);
  };

  return (
    <section id="testimonials">
      <h2 className="w-full text-5xl text-center font-bold mt-32 mb-6">
        Trusted by Thousands of <br />
        Happy Customer
      </h2>
      <h3 className="w-full text-xl text-center mb-16">
        These are the stories of our customers who have joined us with great{" "}
        <br />
        pleasure when using this crazy feature.
      </h3>
      <div className="flex flex-col">
        <div className="flex  duration-1000 delay-700 ease-in-out">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              avatar={testimonial.avatar}
              name={testimonial.name}
              country={testimonial.country}
              comment={testimonial.comment}
              isNextPressed={isNextPressed}
              isPreviousPressed={isPreviousPressed}
            />
          ))}
        </div>
        <div className="flex justify-end mt-4 mr-16">
          <button
            className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-blue-700 hover:bg-blue-700 focus:outline-none"
            onClick={handlePrev}
          >
            <img
              src={process.env.PUBLIC_URL + "/leftarrow.png"}
              alt="My Image"
            />
          </button>
          <button
            className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-blue-700 hover:bg-blue-700 focus:outline-none"
            onClick={handleNext}
          >
            <img
              src={process.env.PUBLIC_URL + "/rightfill.png"}
              alt="My Image"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
