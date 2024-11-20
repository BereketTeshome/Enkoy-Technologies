import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { works } from "../assets/ourWork";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  viewport: { amount: 0.2, once: true },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.15 } },
};

const DetailedWork = () => {
  const { id } = useParams();
  const filterWork = works.filter((work) => work.id == id);
  const work = filterWork[0];

  return (
    <motion.div className="">
      <motion.div
        className="bg-[#161628] md:px-20 sm:px-10 px-5 text-white py-20"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-5"
          {...fadeInUp}
        >
          <motion.div className="flex-1" {...fadeInUp}>
            <img src={work.icon} alt="" className="w-[80px] mb-8" />
            <h1 className="text-4xl lg:text-5xl">{work.title}</h1>
          </motion.div>
          <motion.div className="flex-1" {...fadeInUp}>
            <img src={work.image} alt="" className="w-full max-w-[80%]" />
          </motion.div>
        </motion.div>
        <br />
        <br />
        <br />
        <motion.div
          className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-16"
          {...fadeInUp}
        >
          <div>
            <h4 className="text-pink-500 font-semibold uppercase mb-4">
              What we made
            </h4>
            <p>{work.whatWeMade}</p>
          </div>
          <div>
            <h4 className="text-pink-500 font-semibold uppercase mb-4">
              The issue
            </h4>
            <p>{work.shortIssus}</p>
          </div>
          <div>
            <h4 className="text-pink-500 font-semibold uppercase mb-4">
              Project Highlights
            </h4>
            <ul className="list-disc pl-5 space-y-2">
              {work.projectOverview.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
      <br />
      <br />
      <br />
      <br />
      <motion.div
        className="px-5 md:px-32 py-16"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="flex flex-col md:flex-row items-start gap-10"
          {...fadeInUp}
        >
          <div className="flex-1">
            <h4 className="text-pink-500 font-semibold uppercase mb-4">
              The issue
            </h4>
            <h2 className="text-3xl md:text-5xl w-[90%]">
              {work.longIssus.title}
            </h2>
          </div>
          <div className="flex-1 text-gray-800">
            {work.longIssus.description}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="px-5 md:px-32 py-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="flex flex-col gap-10 text-gray-800"
          {...fadeInUp}
        >
          <div>
            <h4 className="text-pink-500 font-semibold uppercase mb-4">
              The journey
            </h4>
            <h2 className="text-3xl md:text-5xl w-[90%]">
              {work.journey.title}
            </h2>
          </div>
          <div>
            {work.journey.description.map((item, index) => (
              <p key={index} className="mb-5">
                {item}
              </p>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="px-5 md:px-32 py-5"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div className="flex flex-col gap-5 text-gray-800" {...fadeInUp}>
          <div>
            <h4 className="text-pink-500 font-semibold uppercase mb-4">
              The Outcomes
            </h4>
          </div>
          <div>
            {work.outcomes.map((item, index) => (
              <p key={index} className="mb-5">
                {item}
              </p>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default DetailedWork;
