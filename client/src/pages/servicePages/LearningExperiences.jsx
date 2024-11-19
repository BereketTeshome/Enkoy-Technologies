import React from "react";
import { motion } from "framer-motion";

const LearningExperiences = () => {
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
            src="/img/services/learningExperiences.png"
            alt="Learning Experiences Icon"
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
            Learning experiences design consulting
          </motion.h2>
          <motion.p className="mb-7 text-justify" {...fadeInUp}>
            At Enkoy, creativity is at the heart of everything we do. With our
            expertise in designing eLearning courses, we offer top-notch
            Learning Experience Design (LXD) consulting services to elevate your
            educational programs. Whether we’re brainstorming ideas or
            fine-tuning details, our passion for innovation ensures that your
            learning solutions are engaging and effective.
          </motion.p>

          {/* Process Section */}
          <motion.h2
            className="text-2xl font-semibold text-gray-950 my-2"
            {...fadeInUp}
          >
            Our Process
          </motion.h2>
          <motion.ol
            className="list-decimal pl-6 py-5 *:mb-5 text-justify"
            {...fadeInUp}
          >
            <li>
              <b>Needs Assessment:</b> We begin by understanding your specific
              goals, audience, and challenges to tailor our approach
              effectively.
            </li>
            <li>
              <b>Collaborative Design: </b> Our team collaborates with you to
              develop a comprehensive plan, incorporating your insights and our
              expertise in Learning Experience Design (LXD).
            </li>
            <li>
              <b>Content Creation:</b> Using engaging visuals, interactive
              elements, and storytelling techniques, we create compelling
              eLearning content that resonates with learners.
            </li>
            <li>
              <b>Review and Feedback:</b> We involve you in the review process,
              gathering feedback to ensure the course aligns with your
              expectations and learning objectives.
            </li>
            <li>
              <b>Implementation: </b> Once approved, we deploy the eLearning
              modules across your chosen platforms, ensuring accessibility and
              ease of use.
            </li>
            <li>
              <b>Continuous Improvement:</b> After launch, we analyze learner
              engagement and performance, making necessary adjustments to
              enhance the learning experience continuously.
            </li>
          </motion.ol>
          <motion.a
            href="/contact"
            className="py-3 px-6 bg-gray-900 text-white"
            {...fadeInUp}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </motion.div>
      <br />
      <br />
      <br />
    </motion.div>
  );
};

export default LearningExperiences;
