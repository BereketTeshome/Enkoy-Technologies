import React from "react";
import { motion } from "framer-motion";

const LeadershipSkill = () => {
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
            Leadership Skills Training for Students
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-5xl text-gray-950 mb-7"
            {...fadeInUp}
          >
            Empowering Tomorrow's Leaders
          </motion.h2>
          <motion.div className="text-justify" {...fadeInUp}>
            <motion.p className="mb-7" {...fadeInUp}>
              At Enkoy, we provide specialized leadership skills training
              designed specifically for students. Our program focuses on
              equipping young individuals with the essential skills and
              confidence needed to become effective leaders in their academic
              and future professional environments.
            </motion.p>
            <motion.p className="mb-7" {...fadeInUp}>
              Through interactive workshops and engaging activities, students
              will develop critical thinking, communication, and teamwork
              skills. Our experienced facilitators guide participants in
              exploring their leadership styles and understanding the importance
              of collaboration and adaptability.
            </motion.p>
            <motion.p className="mb-7" {...fadeInUp}>
              By participating in our leadership skills training, students will
              not only enhance their personal growth but also prepare themselves
              for future challenges. With our support, they can cultivate the
              qualities needed to lead with impact and inspire others.
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

export default LeadershipSkill;
