import { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = useSelector((state) => state.theme?.theme);

  const testimonials = [
    {
      quote:
        "I would like to extend my heartfelt thanks to Enkoy Technologies for your exceptional work in making the necessary adjustments! I am thrilled to announce that both courses are now live on atingi, with the Amharic course proudly positioned as the first under its language filter in the public library: Content Library. Congratulations on the successful launch of the courses! Your dedication and effort are truly appreciated.",
      author: "Lizzy",
      organization:
        "Deutsche Gesellschaft fuer Internationale Zusammenarbeit (GIZ) GmbH",
      logo: "/img/partners/GermenET.png",
    },
    {
      quote:
        "We are delighted to recommend Enkoy Technologies for their exceptional work in transforming our 'Decent Work in Ethiopia' training into a 6-hour self-paced online course. The course, now hosted on the atingi platform, met all our expectations in terms of quality and engagement. Enkoy’s team applied a minimal viable product (MVP) approach, incorporating multiple feedback loops and iterations, to effectively convert our in-person training for company managers and workers into an engaging online format for young Ethiopians, especially fresh graduates. Their expertise in learning experience design and online course development made this collaboration a success, and we look forward to working with them on future projects.",
      author: "GIZ Ethiopia and Djibouti",
      organization: "German Development Cooperation",
      logo: "/img/partners/GIZ.png",
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

  const isDarkTheme = theme === "dark";

  return (
    <div>
      <motion.div
        className={`sticky px-4 py-10 ${
          isDarkTheme ? "bg-gray-800" : "bg-blue-50"
        } top-1`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-50%", once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center max-w-6xl gap-8 mx-auto lg:flex-row">
          {/* Text Section */}
          <div className="flex-1">
            <img className="relative scale-75 right-9" src="/testimonial.png" alt="testimonial" />
            
            <p
              className={`mb-8 ml-8 max-w-[450px] text-lg leading-relaxed ${
                isDarkTheme ? "text-gray-300" : "text-gray-700"
              } text-justify break-words`}
            >
              {testimonials[activeIndex].quote}
            </p>


            <div className="flex items-center gap-4">
              <img
                src={testimonials[activeIndex].logo}
                alt={testimonials[activeIndex].organization}
                className="h-12"
              />
              <div>
                <p
                  className={`font-semibold ${
                    isDarkTheme ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  {testimonials[activeIndex].author}
                </p>
                <p
                  className={`text-sm ${
                    isDarkTheme ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {testimonials[activeIndex].organization.split(" ").length > 5
                    ? testimonials[activeIndex].organization
                        .split(" ")
                        .slice(0, Math.ceil(testimonials[activeIndex].organization.split(" ").length / 2))
                        .join(" ")
                    : testimonials[activeIndex].organization
                  }
                  <br />
                  {testimonials[activeIndex].organization.split(" ").length > 5 &&
                    testimonials[activeIndex].organization
                      .split(" ")
                      .slice(Math.ceil(testimonials[activeIndex].organization.split(" ").length / 2))
                      .join(" ")}
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
            className={`flex items-center justify-center w-10 h-10 transition rounded-full ${
              isDarkTheme
                ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                : "bg-yellow-200 text-gray-900 hover:bg-yellow-300"
            }`}
          >
            &lt;
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full transition ${
                  index === activeIndex
                    ? isDarkTheme
                      ? "bg-yellow-500"
                      : "bg-yellow-500"
                    : isDarkTheme
                    ? "bg-gray-600 hover:bg-yellow-500"
                    : "bg-gray-300 hover:bg-yellow-300"
                }`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className={`flex items-center justify-center w-10 h-10 transition rounded-full ${
              isDarkTheme
                ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                : "bg-yellow-300 text-gray-900 hover:bg-yellow-400"
            }`}
          >
            &gt;
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
