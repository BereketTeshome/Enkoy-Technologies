import React from "react";
import { motion } from "framer-motion";

const HowWeWork = () => {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // Stagger duration between each child
      },
    },
  };

  return (
    <>
      <div className="flex flex-col items-center w-full px-5 py-16 md:py-28 md:px-20 overflow-hidden lg:flex-row">
        <motion.div
          className="flex justify-center flex-1 mb-8 lg:mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={variants}
        >
          <img
            src="/img/services/gamificationImg.png"
            alt="why_mobile_learning.png"
            className="w-[90%] md:w-[80%] lg:w-[60%]"
          />
        </motion.div>
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={variants}
        >
          <h3 className="text-[#F1858B] text-lg font-medium mb-5">
            How We Work
          </h3>
          <h2 className="text-xl text-gray-800 md:text-2xl lg:text-3xl mb-7">
            We prioritize people over processes
          </h2>
          <p className="text-sm text-gray-900 md:text-base text-justify">
            At Enkoy Technologies, we believe the best learning experiences come
            from truly understanding the learner. By placing people at the
            center of everything we do, we design solutions that are as
            meaningful as they are impactful. Whether we’re crafting a single
            course or a large-scale training program, our approach is agile and
            personalized. We use human-centered design principles to ensure that
            every learner’s unique needs, preferences, and contexts are
            considered, making sure the solution is not just effective, but also
            inclusive and relevant.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col items-center w-full px-5 py-16 md:py-28 md:px-20 overflow-hidden lg:flex-row-reverse bg-[#F6F9FC]">
        <motion.div
          className="flex justify-center flex-1 mb-8 lg:mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={variants}
        >
          <img
            src="/img/services/why_mobile_learning.png"
            alt="why_mobile_learning.png"
            className="w-[90%] md:w-[80%] lg:w-[60%]"
          />
        </motion.div>
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={variants}
        >
          <h3 className="text-[#F1858B] text-lg font-medium mb-5">
            How We Work
          </h3>
          <h2 className="text-xl text-gray-800 md:text-2xl lg:text-3xl mb-7">
            This isn’t just training, it’s empathetic learning.
          </h2>
          <p className="text-sm text-gray-900 md:text-base text-justify">
            We use a blend of human-centered design (HCD) and learning
            experience design (LXD) to create engaging, accessible, and
            learner-driven experiences. At Enkoy, we understand that learning is
            most effective when it feels personal. We go beyond just delivering
            content – we craft experiences that resonate with learners
            emotionally and intellectually. By incorporating empathy into our
            designs, we ensure that learners don’t just absorb information, they
            connect with it, retain it, and apply it meaningfully.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col items-center w-full px-5 py-16 md:py-28 md:px-20 overflow-hidden lg:flex-row">
        <motion.div
          className="flex justify-center flex-1 mb-8 lg:mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={variants}
        >
          <img
            src="/img/services/gamificationImg.png"
            alt="why_mobile_learning.png"
            className="w-[90%] md:w-[80%] lg:w-[60%]"
          />
        </motion.div>
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={variants}
        >
          <h3 className="text-[#F1858B] text-lg font-medium mb-5">
            How We Work
          </h3>
          <h2 className="text-xl text-gray-800 md:text-2xl lg:text-3xl mb-7">
            We focus on real-world results.
          </h2>
          <p className="text-sm text-gray-900 md:text-base text-justify">
            At Enkoy Technologies, measurable outcomes are at the heart of
            everything we do. We don't believe in training for the sake of
            training. Every learning solution we create is carefully crafted
            with clear objectives and measurable success criteria. Using a mix
            of data-driven methods and continuous feedback loops, we track
            learner progress and ensure that the learning is translating into
            tangible results. From engagement rates to practical skill
            application, our solutions always have a clear path to improvement
            and impact.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default HowWeWork;
