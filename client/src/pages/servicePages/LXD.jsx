import React from "react";
import { motion } from "framer-motion";

const LXD = () => {
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
    <motion.div className="py-20">
      <motion.div className="flex flex-col items-center w-full" {...fadeInUp}>
        {/* Header Section */}
        <motion.div className="sm:w-[60%] pb-20 w-[80%]" {...fadeInUp}>
          <motion.img
            src="/img/services/storytelling.png"
            alt="Storytelling Icon"
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FF8689] my-10"
            {...fadeInUp}
          >
            LXD
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-5xl text-gray-950 mb-7"
            {...fadeInUp}
          >
            LXD Training Services
          </motion.h2>
          <motion.p className="mb-7 text-justify" {...fadeInUp}>
            At Enkoy, we offer specialized Learning Experience Design (LXD)
            training services that empower organizations to create engaging and
            effective learning experiences. Our approach focuses on
            understanding the unique needs of your learners and aligning
            training strategies with your educational goals.
          </motion.p>
          <motion.p className="mb-7 text-justify" {...fadeInUp}>
            Our expert team guides you through the principles of LXD, helping
            you design courses that enhance learner engagement and retention. We
            cover essential topics such as user-centered design, interactive
            content creation, and effective assessment strategies.
          </motion.p>
          <motion.p className="mb-7 text-justify" {...fadeInUp}>
            By incorporating best practices in LXD, we ensure that your training
            programs are not only informative but also enjoyable and impactful.
            With our LXD training services, you can elevate your learning
            initiatives and foster a culture of continuous improvement within
            your organization.
          </motion.p>
          <motion.a
            href="/contact"
            className="px-6 py-3 text-white bg-gray-900"
            {...fadeInUp}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LXD;
