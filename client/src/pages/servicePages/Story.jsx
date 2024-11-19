import React from "react";
import { motion } from "framer-motion";

const Story = () => {
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
      <motion.div className="flex flex-col w-full items-center" {...fadeInUp}>
        {/* Content Section */}
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
            Custom eLearning solution
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-5xl text-gray-950 mb-7"
            {...fadeInUp}
          >
            Storytelling brings the modules to life
          </motion.h2>
          <motion.p className="mb-7 text-justify" {...fadeInUp}>
            Storytelling, combined with a well-crafted learning strategy,
            creates an exceptional learning experience centered on narrative.
            But the real magic lies in the outcome: highly engaged and focused
            learners. Our custom visual stories, designed with Learning
            Experience Design (LXD) principles, ensure that your team retains
            knowledge longer and applies it effectively. By prioritizing LXD, we
            create meaningful and immersive learning experiences that resonate
            with learners, making education not just informative but truly
            transformative.
          </motion.p>
          <motion.a
            href="/contact"
            className="py-3 px-6 bg-gray-900 text-white"
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

export default Story;
