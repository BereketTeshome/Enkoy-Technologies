import React from "react";
import { motion } from "framer-motion";

const AnimationVideos = () => {
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
        {/* Header Section */}
        <motion.div className="sm:w-[60%] pb-20 w-[80%]" {...fadeInUp}>
          <motion.img
            src="/img/services/microlearning.svg"
            alt="Animation and Video Production Icon"
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FF8689] my-10"
            {...fadeInUp}
          >
            Animation and video production
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
        </motion.div>

        {/* Middle Section */}
        <motion.div
          className="md:px-20 sm:px-10 px-5 flex items-center w-full flex-col lg:flex-row"
          {...fadeInUp}
        >
          <motion.div className="flex-1" {...fadeInUp}>
            <motion.img
              src="/img/services/animationVideo.png"
              alt="Animation Example"
              className="w-[90%]"
              {...fadeInUp}
            />
          </motion.div>
          <motion.div className="flex-1" {...fadeInUp}>
            <motion.h2
              className="text-3xl sm:text-5xl text-gray-950 mb-7"
              {...fadeInUp}
            >
              Everyone adores animated videos for learning
            </motion.h2>
            <motion.p className="text-justify" {...fadeInUp}>
              Most people are visual learners, so creating visual content can
              capture their attention and evoke emotions. At Enkoy, we use our
              expertise to produce engaging animated videos that provide
              learners with an enjoyable journey.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#FFCD57] md:flex-row flex-col"
          {...fadeInUp}
        >
          <motion.div className="flex-1 flex" {...fadeInUp}>
            <motion.h2
              className="inline-block md:text-6xl text-4xl text-gray-900 font-semibold"
              {...fadeInUp}
            >
              Our animation <br /> video process
            </motion.h2>
          </motion.div>
          <motion.div
            className="flex-1 text-gray-900 text-[15px] text-justify"
            {...fadeInUp}
          >
            <motion.p {...fadeInUp}>
              Customers often approach us with a desire to include animation in
              their modules in some capacity. We assess which sections of the
              module are most suitable for animation and evaluate how the target
              audience and learning objectives align with the desired level of
              animation.
            </motion.p>
            <br />
            <motion.p {...fadeInUp}>
              We utilize various tools to craft our animations, combining
              well-written scripts with visually appealing graphics.
              Thoughtfully designed animations illustrate scenarios and guide
              learner attention throughout the training process. Whether it’s an
              explainer video or a general training module, animation adds
              vitality to eLearning, creating an engaging and dynamic experience
              for all learners.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AnimationVideos;
