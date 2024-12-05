import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const SelfPacedLearning = () => {
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
      {/* Hero Section */}
      <motion.div
        className={`flex flex-col items-center w-full `}
        {...fadeInUp}
      >
        <div className="sm:w-[60%] pb-20 w-[80%]">
          <motion.img
            src="/img/services/mobileElearning.svg"
            alt="Mobile Learning Icon"
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FF8689] my-10"
            {...fadeInUp}
          >
            Self-paced learning
          </motion.p>
          <motion.h2
            className={`text-4xl sm:text-5xl mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-950"
            }`}
            {...fadeInUp}
          >
            Self-paced learning solution
          </motion.h2>
          <motion.p
            className={`text-justify mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-900"
            }`}
            {...fadeInUp}
          >
            In today's fast-paced digital world, individuals increasingly seek
            the freedom to learn at their own pace through their devices.
            Self-paced learning empowers learners to navigate their educational
            journeys independently, allowing them to engage with content that is
            both interactive and captivating.
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
        </div>
      </motion.div>
      <br />
      <br />
      <br />
      {/* Why Self-Paced Learning Section */}
      <motion.div
        className="flex flex-col items-center w-full px-5 md:px-20 sm:px-10 lg:flex-row"
        {...fadeInUp}
      >
        <motion.div className="flex-1" {...fadeInUp}>
          <img
            src="/img/services/why_mobile_learning.png"
            alt="Why Mobile Learning"
            className="w-[90%]"
          />
        </motion.div>
        <motion.div className="flex-1" {...fadeInUp}>
          <h2
            className={`text-3xl sm:text-5xl mb-7 ${
              isDarkTheme ? "text-gray-100" : "text-gray-950"
            }`}
          >
            Why self-paced learning?
          </h2>
          <p
            className={`text-justify ${
              isDarkTheme ? "text-gray-300" : "text-gray-900"
            }`}
          >
            Self-paced learning is an effective educational approach that offers
            flexibility. It allows learners to study at their convenience while
            accommodating personal and professional commitments. It promotes
            personalization, enabling individuals to focus on topics that
            interest them, which enhances engagement and motivation. Research
            indicates that this method improves retention, as learners can
            control their pace and revisit challenging concepts. With many
            digital platforms, self-paced learning is accessible and
            cost-effective, reducing traditional education expenses.
          </p>
        </motion.div>
      </motion.div>
      <br />
      <br />
      <br />
      {/* Our Approach Section */}
      <motion.div
        className={`w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 ${"bg-[#FFCD57]"} md:flex-row flex-col`}
        {...fadeInUp}
      >
        <motion.div className="flex flex-1" {...fadeInUp}>
          <h2
            className={`inline-block text-4xl font-semibold md:text-6xl ${"text-gray-900"}`}
          >
            Our Self-Paced <br /> Learning <br /> Approach
          </h2>
        </motion.div>
        <motion.div
          className={`flex-1 text-[15px] text-justify ${"text-gray-900"}`}
          {...fadeInUp}
        >
          <p>
            At Enkoy, we understand how to positively impact our learners
            through self-paced learning by truly knowing their needs. Our
            approach focuses on flexibility, allowing learners to study at their
            own pace. We create engaging and interactive content that caters to
            different learning styles, ensuring everyone can learn effectively.
            By empowering our learners to take charge of their education, we
            help them achieve their goals in a way that fits their lives.
          </p>
          <h2 className={`mt-2 mb-5 text-2xl font-semibold ${"text-gray-950"}`}>
            Why self-paced learning?
          </h2>
          <p>
            Self-paced learning can be the right approach for many learners due
            to several key benefits:
          </p>
          <ul className="list-disc pl-6 py-5">
            <li>
              <b>Flexibility:</b> Learners can study at their own convenience,
              fitting coursework around personal and professional commitments.
            </li>
            <li>
              <b>Personalization:</b> It allows individuals to focus on topics
              that interest them or need more attention, enhancing motivation
              and engagement.
            </li>
            <li>
              <b>Control Over Learning Speed:</b> Learners can progress as
              quickly or slowly as they need, promoting a deeper understanding
              of the material.
            </li>
            <li>
              <b>Improved Retention:</b> Research shows that self-paced learners
              often retain information better as they can revisit challenging
              concepts.
            </li>
            <li>
              <b>Accessibility:</b> Available through digital platforms,
              self-paced learning is accessible to a wide range of learners with
              different needs and backgrounds.
            </li>
            <li>
              <b>Cost-effectiveness:</b> It often reduces expenses related to
              traditional education, making learning more affordable.
            </li>
          </ul>
          <p>
            Overall, self-paced learning is an effective approach that supports
            diverse learning styles and helps individuals achieve their
            educational goals in a way that suits their lifestyles.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SelfPacedLearning;
