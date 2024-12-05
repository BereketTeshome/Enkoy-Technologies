import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Accessibility = () => {
  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    viewport: { amount: 0.2, once: true },
  };

  return (
    <motion.div
      className={`pt-20 ${isDarkTheme ? "bg-gray-800 " : "bg-white"} `}
    >
      <motion.div className="flex flex-col w-full items-center" {...fadeInUp}>
        {/* Header Section */}
        <motion.div className="sm:w-[60%] pb-20 w-[80%]" {...fadeInUp}>
          <motion.img
            src="/img/services/accessibility.png"
            alt="Accessibility Icon"
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FF8689] my-10"
            {...fadeInUp}
          >
            accessibility
          </motion.p>
          <motion.p
            className={`text-justify mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-900"
            }`}
            {...fadeInUp}
          >
            At Enkoy, we believe that accessibility in eLearning is essential
            for creating inclusive learning experiences for everyone. Our
            products are designed with universal accessibility in mind, ensuring
            that all learners, regardless of their abilities or backgrounds, can
            engage with the content effectively. By incorporating features such
            as adjustable text sizes, screen reader compatibility, and
            alternative formats, we make learning accessible and enjoyable for
            all. Our commitment to accessibility empowers every learner to reach
            their full potential, creating a diverse and thriving educational
            community.
          </motion.p>
          <motion.a
            href="/contact"
            className={`px-6 py-3 text-white ${
              isDarkTheme ? "bg-yellow-500" : "bg-gray-900"
            }`}
            {...fadeInUp}
          >
            Contact Us
          </motion.a>
        </motion.div>
        <br />
        <br />
        <br />

        {/* Image and Text Section */}
        <motion.div
          className="md:px-20 sm:px-10 px-5 flex items-center w-full flex-col lg:flex-row"
          {...fadeInUp}
        >
          <motion.div className="flex-1" {...fadeInUp}>
            <img
              src="/img/services/accessibilityImg.png"
              alt="Accessibility Illustration"
              className="w-[90%]"
            />
          </motion.div>
          <motion.div className="flex-1" {...fadeInUp}>
            <h2
              className={`text-4xl sm:text-5xl mb-7 ${
                isDarkTheme ? "text-gray-100 " : "text-gray-950"
              }`}
            >
              Why Accessibility?
            </h2>
            <p
              className={`text-justify ${
                isDarkTheme ? "text-gray-300" : "text-gray-900"
              }`}
            >
              Accessibility in eLearning is crucial for creating inclusive
              educational experiences that cater to all learners, regardless of
              their abilities or backgrounds. It accommodates diverse learning
              needs, ensuring everyone can engage effectively with the content.
              By complying with legal standards, organizations avoid potential
              issues while enhancing the overall learning experience for all
              users. Accessible design empowers learners, fosters independence,
              and broadens the audience reach, ultimately leading to improved
              engagement and knowledge retention. Prioritizing accessibility
              creates a richer and more effective learning environment for
              everyone.
            </p>
          </motion.div>
        </motion.div>
        <br />
        <br />
        <br />

        {/* Final Section */}
        <motion.div
          className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#FFCD57] md:flex-row flex-col"
          {...fadeInUp}
        >
          <motion.div className="flex-1 flex" {...fadeInUp}>
            <h2 className="inline-block md:text-6xl text-4xl text-gray-900 font-semibold">
              Our Accessibility <br /> Approach
            </h2>
          </motion.div>
          <motion.div
            className="flex-1 text-gray-900 text-[15px] text-justify"
            {...fadeInUp}
          >
            <p>
              At Enkoy, we prioritize accessibility by providing both offline
              and online learning options to cater to diverse learner needs. Our
              online courses are designed with features like adjustable text
              sizes, screen reader compatibility, and alternative formats to
              ensure all users can engage effectively. For offline learning, we
              offer downloadable resources that maintain accessibility
              standards, allowing learners to access materials anytime,
              anywhere. This dual approach ensures that every learner has the
              opportunity to succeed, regardless of their circumstances or
              preferences. By embracing accessibility, we create an inclusive
              learning environment that empowers everyone to thrive.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Accessibility;
