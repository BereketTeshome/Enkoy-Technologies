import React from "react";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const Partners = () => {
  return (
    <div className="py-40 overflow-hidden partners">
      <motion.div className="relative w-full overflow-hidden">
        <motion.div
          className="flex flex-nowrap"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 30, // Adjust the duration for smooth scrolling
            repeat: Infinity, // Ensures continuous looping
            repeatType: "loop", // Restart the animation smoothly
            ease: "linear", // Linear motion for consistent scrolling
          }}
        >
          {/* Single set of images */}
          <img
            className="w-auto h-20 mx-14"
            src="/img/partners/GIZ.PNG"
            alt="GIZ"
          />
          <img
            className="w-auto h-20 mx-14"
            src="/img/partners/GermenET.PNG"
            alt="GermenET"
          />
          <img
            className="w-auto h-20 mx-14"
            src="/img/partners/MLS.PNG"
            alt="MLS"
          />
          <img
            className="w-auto h-20 mx-14"
            src="/img/partners/MOA.PNG"
            alt="MOA"
          />
          <img
            className="w-auto h-20 mx-14"
            src="/img/partners/Ozone.PNG"
            alt="Ozone"
          />
          <img
            className="w-auto h-20 mx-14"
            src="/img/partners/Efuye.PNG"
            alt="Efuye"
          />
          <img
            className="w-auto h-20 mx-14"
            src="/img/partners/Jethro.PNG"
            alt="Jethro"
          />
          <img
            className="w-auto h-20 mx-14"
            src="/img/partners/XHub.PNG"
            alt="XHub"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Partners;
