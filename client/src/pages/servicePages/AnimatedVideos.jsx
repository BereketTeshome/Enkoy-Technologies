import React from "react";
import { motion } from "framer-motion";

const AnimatedVideos = () => {
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
      {/* Hero Section */}
      <motion.div className="flex flex-col w-full items-center" {...fadeInUp}>
        <div className="sm:w-[60%] pb-20 w-[80%]">
          <motion.img
            src="/img/services/animatedVideos.svg"
            alt="Animated Videos Icon"
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
            Animated videos are a powerful tool for transforming digital content
          </motion.h2>
          <motion.p className="mb-7 text-justify" {...fadeInUp}>
            Animated videos in our modules help learners visualize complex
            concepts, making information easier to grasp. At Enkoy, we harness
            our animators' expertise to create engaging visuals that keep
            learners excited and motivated.
          </motion.p>
          <motion.a
            href="/contact"
            className="py-3 px-6 bg-gray-900 text-white"
            {...fadeInUp}
          >
            Contact Us
          </motion.a>
        </div>
      </motion.div>
      <br />
      <br />
      <br />

      {/* Why Animated Videos Section */}
      <motion.div
        className="md:px-20 sm:px-10 px-5 flex items-center w-full flex-col lg:flex-row"
        {...fadeInUp}
      >
        <motion.div className="flex-1" {...fadeInUp}>
          <img
            src="/img/services/animatedVideosImg.png"
            alt="Animated Videos Visual"
            className="w-[90%]"
          />
        </motion.div>
        <motion.div className="flex-1" {...fadeInUp}>
          <h2 className="text-3xl sm:text-5xl text-gray-950 mb-7">
            Everyone adores animated videos for learning
          </h2>
          <p className="text-justify">
            Most people are visual learners, so creating visual content can
            capture their attention and evoke emotions. At Enkoy, we use our
            expertise to produce engaging animated videos that provide learners
            with an enjoyable journey.
          </p>
        </motion.div>
      </motion.div>
      <br />
      <br />
      <br />

      {/* Animation Video Process Section */}
      <motion.div
        className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#FFCD57] md:flex-row flex-col"
        {...fadeInUp}
      >
        <motion.div className="flex-1 flex" {...fadeInUp}>
          <h2 className="inline-block md:text-6xl text-4xl text-gray-900 font-semibold">
            Our animation <br /> video process
          </h2>
        </motion.div>
        <motion.div
          className="flex-1 text-gray-900 text-[15px] text-justify"
          {...fadeInUp}
        >
          <p>
            Customers often approach us with a desire to include animation in
            their modules in some capacity. We assess which sections of the
            module are most suitable for animation and evaluate how the target
            audience and learning objectives align with the desired level of
            animation.
          </p>
          <p>
            We utilize various tools to craft our animations, combining
            well-written scripts with visually appealing graphics. Thoughtfully
            designed animations illustrate scenarios and guide learner attention
            throughout the training process. Whether it’s an explainer video or
            a general training module, animation adds vitality to eLearning,
            creating an engaging and dynamic experience for all learners.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedVideos;
