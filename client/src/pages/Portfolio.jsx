import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UnderConstruction from "./UnderConstruction";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All projects");

  const filters = ["All projects", "Corporate Training", "Custom eLearning"];
  const projects = [
    {
      id: 1,
      category: "Corporate Training",
      title: "Bill Pay Options Product Training",
      image: "/img/our-work/portfolio.png",
    },
    {
      id: 2,
      category: "Corporate Training",
      title: "Security Training",
      image: "/img/our-work/portfolio.png",
    },
    {
      id: 3,
      category: "Corporate Training",
      title: "Build a Box Product Training",
      image: "/img/our-work/portfolio.png",
    },
    {
      id: 4,
      category: "Custom eLearning",
      title: "Custom eLearning Example",
      image: "/img/our-work/portfolio.png",
    },
  ];

  // Filtered projects
  const filteredProjects =
    activeFilter === "All projects"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  // Framer Motion variants
  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  const hoverEffect = {
    scale: 1.1,
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
  };

  return (
    <UnderConstruction />
    // <div className="px-10 py-32 bg-gray-900 md:px-20">
    //   {/* Title */}
    //   <h2 className="mb-10 text-4xl font-bold text-center text-white">
    //     Past projects
    //   </h2>

    //   {/* Filters */}
    //   <div className="flex justify-center mb-12 space-x-6">
    //     {filters.map((filter) => (
    //       <button
    //         key={filter}
    //         onClick={() => setActiveFilter(filter)}
    //         className={`px-4 py-2 border rounded-md ${
    //           activeFilter === filter
    //             ? "bg-white text-black font-bold"
    //             : "text-white border-gray-700"
    //         } hover:bg-white hover:text-black transition duration-300`}
    //       >
    //         {filter}
    //       </button>
    //     ))}
    //   </div>

    //   {/* Projects Grid */}
    //   <motion.div
    //     className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3"
    //     layout
    //   >
    //     <AnimatePresence>
    //       {filteredProjects.map((project) => (
    //         <motion.div
    //           key={project.id}
    //           className="overflow-hidden bg-[#1F2937] rounded-md cursor-pointer"
    //           variants={fadeInVariant}
    //           initial="hidden"
    //           animate="visible"
    //           exit="exit"
    //           whileHover={hoverEffect}
    //           transition={{ duration: 0.3 }}
    //         >
    //           <img
    //             src={project.image}
    //             alt={project.title}
    //             className="object-cover w-full transition-transform duration-300 h-60"
    //           />
    //           <div className="p-4">
    //             <p className="text-sm text-gray-400">{project.category}</p>
    //             <h3 className="text-lg font-bold text-white">
    //               {project.title}
    //             </h3>
    //           </div>
    //         </motion.div>
    //       ))}
    //     </AnimatePresence>
    //   </motion.div>
    // </div>
  );
};

export default Portfolio;
