import React from "react";
import { motion } from "framer-motion";
import "aos/dist/aos.css";

const Partners = () => {
  // List of partner logos with their names
  const logos = [
    { src: "/img/partners/GIZ.PNG", alt: "GIZ" },
    { src: "/img/partners/GermenET.PNG", alt: "GermenET" },
    { src: "/img/partners/MLS.PNG", alt: "MLS" },
    { src: "/img/partners/MOA.PNG", alt: "MOA" },
    { src: "/img/partners/Ozone.PNG", alt: "Ozone" },
    { src: "/img/partners/Efuye.PNG", alt: "Efuye" },
    { src: "/img/partners/Jethro.PNG", alt: "Jethro" },
    { src: "/img/partners/XHub.PNG", alt: "XHub" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger duration between each child
      },
    },
  };

  // Variants for child elements
  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="py-20 bg-white"
      id="start"
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <h2 className="text-4xl text-gray-700 font-semibold text-center mb-10">
        Who we work with
      </h2>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="flex justify-center items-center"
            variants={childVariants} // Apply variants to child elements
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-36 h-auto object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Partners;
