import React from "react";
import { motion } from "framer-motion";
import UnderConstruction from "./UnderConstruction";

const DigitalTrainingOverview = () => {
  return (
    <UnderConstruction />
    // <div className="container px-5 mx-auto">
    //   {/* Three Alternating Sections */}
    //   <motion.div
    //     className="flex flex-col items-center w-full px-5 mb-12 md:px-20 sm:px-10 lg:flex-row"
    //     initial={{ opacity: 0, y: 50 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.5 }}
    //   >
    //     <motion.div
    //       className="flex-1 mb-6 lg:mb-0"
    //       initial={{ x: -50 }}
    //       animate={{ x: 0 }}
    //     >
    //       <img
    //         src="/img/services/animatedVideosImg.png"
    //         alt="Animated Videos Visual"
    //         className="w-[90%]"
    //       />
    //     </motion.div>
    //     <motion.div className="flex-1" initial={{ x: 50 }} animate={{ x: 0 }}>
    //       <h2 className="text-3xl sm:text-5xl text-gray-950 mb-7">
    //         Everyone adores animated videos for learning
    //       </h2>
    //       <p className="text-justify">
    //         Most people are visual learners, so creating visual content can
    //         capture their attention and evoke emotions. At Enkoy, we use our
    //         expertise to produce engaging animated videos that provide learners
    //         with an enjoyable journey.
    //       </p>
    //     </motion.div>
    //   </motion.div>

    //   <motion.div
    //     className="flex flex-col items-center w-full px-5 mb-12 md:px-20 sm:px-10 lg:flex-row-reverse"
    //     initial={{ opacity: 0, y: 50 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.5 }}
    //   >
    //     <motion.div
    //       className="flex-1 mb-6 lg:mb-0"
    //       initial={{ x: 50 }}
    //       animate={{ x: 0 }}
    //     >
    //       <img
    //         src="/img/services/accessibilityImg.png"
    //         alt="Interactive Courses Visual"
    //         className="w-[90%]"
    //       />
    //     </motion.div>
    //     <motion.div className="flex-1" initial={{ x: -50 }} animate={{ x: 0 }}>
    //       <h2 className="text-3xl sm:text-5xl text-gray-950 mb-7">
    //         Interactive courses for better engagement
    //       </h2>
    //       <p className="text-justify">
    //         Interactive content fosters a better learning experience. At Enkoy,
    //         we create courses that keep learners engaged, helping them retain
    //         information more effectively.
    //       </p>
    //     </motion.div>
    //   </motion.div>

    //   <motion.div
    //     className="flex flex-col items-center w-full px-5 mb-12 md:px-20 sm:px-10 lg:flex-row"
    //     initial={{ opacity: 0, y: 50 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.5 }}
    //   >
    //     <motion.div
    //       className="flex-1 mb-6 lg:mb-0"
    //       initial={{ x: -50 }}
    //       animate={{ x: 0 }}
    //     >
    //       <img
    //         src="/img/services/gamificationImg.png"
    //         alt="Instructional Design Visual"
    //         className="w-[90%]"
    //       />
    //     </motion.div>
    //     <motion.div className="flex-1" initial={{ x: 50 }} animate={{ x: 0 }}>
    //       <h2 className="text-3xl sm:text-5xl text-gray-950 mb-7">
    //         Expert Instructional Design Services
    //       </h2>
    //       <p className="text-justify">
    //         We craft well-structured eLearning solutions that combine creativity
    //         and strategy, ensuring learners stay engaged and achieve their goals
    //         efficiently.
    //       </p>
    //     </motion.div>
    //   </motion.div>

    //   {/* Title Section */}
    //   <div className="my-10 text-center">
    //     <h2 className="mb-6 text-4xl font-bold text-gray-900">
    //       Explore Our Tailored Solutions
    //     </h2>
    //   </div>

    //   {/* 2x2 Grid Section */}
    //   <div className="grid grid-cols-1 gap-8 px-5 md:grid-cols-2">
    //     {/* First Card */}
    //     <div className="p-6 bg-white rounded-md shadow-lg">
    //       <img
    //         src="/img/digital-training/1.svg"
    //         alt="Digital Training Icon"
    //         className="w-12 h-12 mb-4"
    //       />
    //       <h3 className="mb-3 text-xl font-semibold text-gray-900">
    //         Digital Training
    //       </h3>
    //       <p className="text-sm text-gray-600">
    //         Develop strong relationships and become more positive through our
    //         assessments.
    //       </p>
    //     </div>

    //     {/* Second Card */}
    //     <div className="p-6 bg-white rounded-md shadow-lg">
    //       <img
    //         src="/img/digital-training/2.svg"
    //         alt="Interactive Learning Icon"
    //         className="w-12 h-12 mb-4"
    //       />
    //       <h3 className="mb-3 text-xl font-semibold text-gray-900">
    //         Interactive Learning
    //       </h3>
    //       <p className="text-sm text-gray-600">
    //         Foster meaningful learning experiences through our interactive
    //         eLearning modules.
    //       </p>
    //     </div>

    //     {/* Third Card */}
    //     <div className="p-6 bg-white rounded-md shadow-lg">
    //       <img
    //         src="/img/digital-training/3.svg"
    //         alt="Animated Videos Icon"
    //         className="w-12 h-12 mb-4"
    //       />
    //       <h3 className="mb-3 text-xl font-semibold text-gray-900">
    //         Animated Videos
    //       </h3>
    //       <p className="text-sm text-gray-600">
    //         Capture attention and emotions with visually engaging animated
    //         videos.
    //       </p>
    //     </div>

    //     {/* Fourth Card */}
    //     <div className="p-6 bg-white rounded-md shadow-lg">
    //       <img
    //         src="/img/digital-training/4.svg"
    //         alt="Instructional Design Icon"
    //         className="w-12 h-12 mb-4"
    //       />
    //       <h3 className="mb-3 text-xl font-semibold text-gray-900">
    //         Instructional Design
    //       </h3>
    //       <p className="text-sm text-gray-600">
    //         Build impactful eLearning experiences with our strategic
    //         instructional design services.
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default DigitalTrainingOverview;
