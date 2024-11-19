import React from "react";
import { motion } from "framer-motion";

const GraphicsDesign = () => {
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
            src="/img/services/microlearning.svg"
            alt="Graphic Design Icon"
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FF8689] my-10"
            {...fadeInUp}
          >
            Graphic Design Services
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-5xl text-gray-950 mb-7"
            {...fadeInUp}
          >
            Animated videos are a powerful tool for transforming digital content
          </motion.h2>
          <motion.p className="mb-7 text-justify" {...fadeInUp}>
            At Enkoy, we specialize in creating captivating graphic design
            solutions, including unique and memorable logos that capture the
            essence of your brand. Our talented design team works closely with
            you to understand your vision, values, and target audience, ensuring
            that every design element resonates with your market. We focus on
            crafting visually stunning graphics and versatile logos that are
            suitable for various applications across digital and print media.
            Our goal is to deliver designs that not only enhance your brand
            identity but also leave a lasting impression on your customers. With
            our graphic design and logo design services, you can elevate your
            visual identity and effectively communicate your message to your
            audience.
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

export default GraphicsDesign;
