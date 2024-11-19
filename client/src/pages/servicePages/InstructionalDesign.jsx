import React from "react";
import { motion } from "framer-motion";

const InstructionalDesign = () => {
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
    <motion.div className="pt-20">
      <motion.div className="flex flex-col items-center w-full" {...fadeInUp}>
        {/* Header Section */}
        <motion.div className="sm:w-[60%] pb-20 w-[80%]" {...fadeInUp}>
          <motion.img
            src="/img/services/translation.svg"
            alt="Instructional Design Icon"
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FF8689] my-10"
            {...fadeInUp}
          >
            Instructional design consulting
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-5xl text-gray-950 mb-7"
            {...fadeInUp}
          >
            Crafting Engaging eLearning Experiences with Passion and Expertise
          </motion.h2>
          <motion.p className="mb-7 text-justify" {...fadeInUp}>
            At Enkoy, creativity is our passion; we live and breathe it! With
            our expertise in designing eLearning courses, we offer exceptional
            instructional design consulting services to help you create engaging
            and effective learning experiences.
          </motion.p>
          <motion.a
            href="/contact"
            className="px-6 py-3 text-white bg-gray-900"
            {...fadeInUp}
          >
            Contact Us
          </motion.a>
        </motion.div>
        <br />
        <br />
        <br />
      </motion.div>
    </motion.div>
  );
};

export default InstructionalDesign;
