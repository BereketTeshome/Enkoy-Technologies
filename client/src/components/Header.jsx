import React from "react";
import Particle from "./particles";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="relative w-full h-screen bg-[#161628] px-36 flex items-center overflow-hidden">
      {/* Particle effect only within the header */}
      <div className="absolute top-0 left-0 w-full h-full max-h-screen z-0 pointer-events-none">
        <Particle />
      </div>

      <motion.div
        className="flex-1 z-10" // Ensures text appears above particles
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
        <p className="text-5xl font-semibold text-gray-50">
          Developing an <br /> Effective Learning <br />
          Strategy
        </p>
      </motion.div>

      <motion.div
        className="flex-1 "
        initial={{ y: "100vh", scale: 1 }}
        animate={{ y: 0, scale: [1, 1.05, 1] }}
        transition={{
          y: { delay: 1, duration: 0.7, ease: "easeOut" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <img src="/headerImg.png" alt="" className="w-[90%]" />
      </motion.div>
    </div>
  );
};

export default Header;
