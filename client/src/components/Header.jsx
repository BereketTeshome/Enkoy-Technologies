import React from "react";
import Particle from "./particles";
import { motion } from "framer-motion";
import { MdOutlinePlayCircle } from "react-icons/md";
import { IoArrowForward } from "react-icons/io5";

const Header = () => {
  return (
    <div className="relative z-0 w-full  bg-[#161628] px-36 overflow-hidden">
      <div className="flex items-center">
        {/* Particle effect only within the header */}
        <div className="absolute top-0 left-0 z-0 w-full h-full max-h-screen pointer-events-none">
          <Particle />
        </div>

        <motion.div
          className="z-10 flex-1" // Ensures text appears above particles
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
            <h1 className="text-6xl">
              Engaging <br /> Digital Solutions for Lasting Impact
            </h1>
          </div>
          <div className="flex items-center gap-2 transition-transform duration-300 cursor-pointer group">
            <MdOutlinePlayCircle
              className="text-white transition-transform duration-300 group-hover:text-orange-300 group-hover:scale-110"
              size={34}
            />
            <h2 className="font-semibold text-white transition-transform duration-300 group-hover:text-orange-300 ">
              Watch our video
            </h2>
          </div>
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
          <img src="/headerImg.png" alt="" className="w-[87%]" />
        </motion.div>
      </div>
      <div className="text-center text-white my-28">
        <p className="px-12 mb-16">
          Empower your teams and communities with learning that truly resonates.
          Enkoy Technologies designs innovative, interactive learning
          experiences to engage and inspire, driving real progress across
          industries.
        </p>

        <div className="flex items-center justify-center gap-2 mt-4 transition-transform duration-300 cursor-pointer group">
          <h2 className="text-2xl font-semibold text-white transition-transform duration-300 group-hover:text-orange-300 ">
            Get Started
          </h2>
          <IoArrowForward
            className="text-white transition-transform duration-300 group-hover:text-orange-300 group-hover:scale-110"
            size={34}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
