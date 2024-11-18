import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const UnderConstruction = () => {
  // Animation variants for entry effects
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        yoyo: Infinity, // Makes the button bounce back and forth
        duration: 0.3,
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-white bg-gray-900">
      {/* Animated container */}
      <motion.div
        className="text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src="/construction.jpg" // Replace with your construction vector image path
          alt="Under Construction"
          className="w-2/3 max-w-lg mx-auto mb-6"
        />
        <h1 className="mb-4 text-4xl font-bold">
          This Page is{" "}
          <span className="text-yellow-500">Under Construction</span>
        </h1>
        <p className="mb-8 text-lg text-gray-400">
          We're working hard to bring you a better experience. Please check back
          later!
        </p>
        {/* Animated button */}
        <motion.div variants={buttonVariants} whileHover="hover">
          <Link
            to="/"
            className="px-6 py-3 text-lg font-semibold text-gray-900 transition-all bg-[#FFCD57] rounded-lg shadow-md hover:bg-yellow-600"
          >
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default UnderConstruction;
