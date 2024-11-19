import React, { useState } from "react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "I would like to extend my heartfelt thanks to Enkoy Technologies for your exceptional work in making the necessary adjustments! I am thrilled to announce that both courses are now live on atingi, with the Amharic course proudly positioned as the first under its language filter in the public library: Content Library. Congratulations on the successful launch of the courses! Your dedication and effort are truly appreciated.",
      author: "Lizzy",
      organization:
        "Deutsche Gesellschaft fuer Internationale Zusammenarbeit (GIZ) GmbH;",
      logo: "/img/contentsMenuImg.png",
    },
    {
      quote:
        "We are delighted to recommend Enkoy Technologies for their exceptional work in transforming our 'Decent Work in Ethiopia' training into a 6-hour self-paced online course. The course, now hosted on the atingi platform, met all our expectations in terms of quality and engagement. Enkoy’s team applied a minimal viable product (MVP) approach, incorporating multiple feedback loops and iterations, to effectively convert our in-person training for company managers and workers into an engaging online format for young Ethiopians, especially fresh graduates. Their expertise in learning experience design and online course development made this collaboration a success, and we look forward to working with them on future projects",
      author: "GIZ Ethiopia and Djibouti",
      organization: "German Development Cooperation",
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
            <p className="mb-6 text-lg text-gray-700 text-justify">
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
