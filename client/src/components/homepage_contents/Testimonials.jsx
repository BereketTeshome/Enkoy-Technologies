import React, { useState } from "react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "Their entire process is centered around understanding the customer’s needs and building the perfect learning experience for the target audience. I am blown away by our final product and can’t wait to share it with the national pediatric community.",
      author: "Staff Physician",
      organization: "UCSF Children’s Hospital, Oakland",
      logo: "/img/contentsMenuImg.png",
    },
    {
      quote:
        "We were thrilled with the innovative solutions they provided. It truly elevated our team's learning and engagement.",
      author: "Learning Director",
      organization: "Global Health Initiative",
      logo: "/img/contentsMenuImg.png",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div>
      <div className="sticky px-4 py-10 bg-gray-200 top-1">
        <div className="flex flex-col items-center max-w-6xl gap-8 mx-auto lg:flex-row">
          {/* Text Section */}
          <div className="flex-1">
            <div className="mb-4 text-4xl text-blue-300">“</div>
            <p className="mb-6 text-lg text-gray-700">
              {testimonials[activeIndex].quote}
            </p>
            <div className="flex items-center gap-4">
              <img
                src={testimonials[activeIndex].logo}
                alt={testimonials[activeIndex].organization}
                className="h-8"
              />
              <div>
                <p className="font-semibold text-gray-900">
                  {testimonials[activeIndex].author}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonials[activeIndex].organization}
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1">
            <img
              src="./headerImg.png"
              alt="Illustration"
              className="w-full max-w-sm mx-auto"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="flex items-center justify-center w-10 h-10 text-white transition bg-pink-200 rounded-full hover:bg-pink-300"
          >
            &lt;
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex
                    ? "bg-pink-500"
                    : "bg-gray-300 hover:bg-pink-300"
                } transition`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="flex items-center justify-center w-10 h-10 text-white transition bg-pink-300 rounded-full hover:bg-pink-400"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
