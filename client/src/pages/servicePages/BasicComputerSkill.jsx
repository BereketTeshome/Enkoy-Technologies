import React from "react";
import { motion } from "framer-motion";

const BasicComputerSkill = () => {
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
    <motion.div className="py-20">
      <motion.div className="flex flex-col items-center w-full" {...fadeInUp}>
        {/* Header Section */}
        <motion.div className="sm:w-[60%] pb-20 w-[80%]" {...fadeInUp}>
          <motion.img
            src="/img/services/storytelling.png"
            alt="Storytelling Icon"
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FF8689] my-10"
            {...fadeInUp}
          >
            Basic Computer Skills Training
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-5xl text-gray-950 mb-7"
            {...fadeInUp}
          >
            Master the Basics: Essential Computer Skills Training
          </motion.h2>
          <motion.div className="text-justify" {...fadeInUp}>
            <motion.p className="mb-7" {...fadeInUp}>
              At Enkoy, we provide essential basic computer skills training
              designed to help individuals navigate today’s digital world with
              confidence. Our program focuses on teaching fundamental skills
              such as using operating systems, managing files, and utilizing
              essential software applications.
            </motion.p>
            <motion.p className="mb-7" {...fadeInUp}>
              Through interactive lessons and hands-on practice, participants
              will learn how to effectively use tools like word processors,
              spreadsheets, and presentation software. Our experienced
              instructors provide clear guidance and support to ensure that each
              learner feels comfortable and proficient with technology.
            </motion.p>
            <motion.p className="mb-7" {...fadeInUp}>
              By participating in our basic computer skills training, you will
              gain the foundational knowledge needed to enhance your
              productivity and efficiency in both personal and professional
              settings. With our support, you can become more tech-savvy and
              ready to tackle digital challenges.
            </motion.p>
          </motion.div>
          <motion.a
            href="/contact"
            className="px-6 py-3 text-white bg-gray-900"
            {...fadeInUp}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BasicComputerSkill;
