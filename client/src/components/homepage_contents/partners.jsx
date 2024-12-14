import { motion } from "framer-motion";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";

const Partners = () => {
  const language = useSelector((state) => state.language.language);
  const theme = useSelector((state) => state.theme?.theme);

  // List of partner logos with their names
  const logos = [
    { src: "/img/partners/GIZ.png", alt: "GIZ" },
    { src: "/img/partners/GermenET.png", alt: "GermenET" },
    { src: "/img/partners/MLS.png", alt: "MLS" },
    { src: "/img/partners/MOA.png", alt: "MOA" },
    { src: "/img/partners/Ozone.png", alt: "Ozone" },
    { src: "/img/partners/Efuye.png", alt: "Efuye" },
    { src: "/img/partners/Jethro.png", alt: "Jethro" },
    { src: "/img/partners/XHub.png", alt: "XHub" },
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
      className={`py-20 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
      id="start"
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <h2
        className={`mb-10 text-4xl font-semibold text-center ${
          theme === "dark" ? "text-gray-50" : "text-gray-700"
        }`}
      >
        {language === "amh" ? "ከማን ጋር ነው የምንሰራው" : "Who we work with"}
      </h2>
      <motion.div
        className="grid grid-cols-2 gap-8 px-6 sm:grid-cols-3 md:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center"
            variants={childVariants} // Apply variants to child elements
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="object-contain h-auto w-40"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Partners;
