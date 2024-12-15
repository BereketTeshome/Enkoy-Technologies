import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

const Portfolio = () => {
  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";
  const language = useSelector((state) => state.language?.language);
  const isAmharic = language === "amh";
  const projects = [
    {
      id: 1,
      video: "../../public/videos/our-works1.mp4",
    },
    {
      id: 2,
      video: "../../public/videos/our-works2.mp4",
    },
  ];

  // Framer Motion variants
  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  const hoverEffect = {
    scale: 1.05,
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)",
  };

  const headerAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={`px-10 min-h-screen py-32 md:px-20 ${isDarkTheme ? "bg-gray-900" : "bg-gray-100"}`}>
      <motion.h1
        className={`mb-10 text-4xl sm:text-5xl font-bold text-center ${isDarkTheme ? "text-white" : "text-gray-700"}`}
        variants={headerAnimation}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
      >
        Our Recent Portfolio
      </motion.h1>
      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3"
        layout
      >
        <AnimatePresence>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="overflow-hidden bg-[#1F2937] rounded-md cursor-pointer"
              variants={fadeInVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover={hoverEffect}
              transition={{ duration: 0.3 }}
            >
              <video
                src={project.video}
                controls
                className="object-cover w-full h-60"
              ></video>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Portfolio;
