import React from "react";
import { motion } from "framer-motion";

const OurServices = () => {
  const services = [
    {
      icon: "/img/services/learningExperiences.png",
      title: "Customized learning",
      description:
        "Off-the-shelf eLearning might be a quick hack, but custom eLearning gets real results.",
      link: "/services/self-paced-learning",
      // link: "/services/customized-learning",
    },
    {
      icon: "/img/services/gamificationImg.png",
      title: "Consulting and advisory",
      description:
        "We love a virtual approach, but sometimes, the best instructor is an actual instructor.",
      link: "/services/learning-experiences",
      // link: "/services/consulting-and-advisory",
    },
    {
      icon: "/img/services/why_mobile_learning.png",
      title: "Animation and video production",
      description:
        "Scale your team with learning services and strategy from ELM Learning.",
      link: "/services/animation-videos",
      // link: "/services/animation-and-video-production",
    },
    {
      icon: "/img/services/animatedVideosImg.png",
      title: "Capacity Building",
      description:
        "We have content and delivery for soft skills, corporate compliance training, and more.",
      link: "/services/LXD",
      // link: "/services/capacity-building",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: {
      scale: 1.1,
      rotateX: 10,
      rotateY: 10,
      boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
    },
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="px-6 mx-auto max-w-7xl sm:px-12">
        <motion.h2
          className="mb-12 text-4xl font-semibold text-center text-gray-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex items-start p-6 bg-white rounded-lg shadow-md"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="flex-shrink-0">
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="w-16 h-16"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
                <a
                  href={service.link}
                  className="mt-4 font-medium text-indigo-600 hover:text-indigo-800"
                >
                  Learn more →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurServices;
