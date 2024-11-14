import React from "react";
import Particle from "./particles";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="w-full h-screen bg-[#161628] px-36 flex items-center overflow-hidden">
      <Particle />
      <motion.div
        className="flex-1"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          type: "spring",
          stiffness: 100,
        }}
      >
        <div className="mb-5 flex gap-5 font-semibold text-sm capitalize text-[#FF8689]">
          <a href="/">Home</a>
          <a href="/">The L&D Hub</a>
          <a href="/">Learning Experience Design</a>
        </div>
        <p className="text-gray-50 text-5xl font-semibold">
          Developing an <br /> Effective Learning <br />
          Strategy
        </p>
      </motion.div>
      <motion.div
        className="flex-1"
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        <img src="/headerImg.png" alt="" className="w-[90%]" />
      </motion.div>
    </div>
  );
};

export default Header;
