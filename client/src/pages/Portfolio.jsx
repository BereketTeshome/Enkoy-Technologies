import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [selectedDescription, setSelectedDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";
  const language = useSelector((state) => state.language?.language);
  const isAmharic = language === "amh";

  // Fetch data from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/portfolio/get");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

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
        {isAmharic ? "የእኛ የቅርብ ጊዜ ፖርትፎሊዮ" : "Our Recent Portfolio"}
      </motion.h1>
      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3"
        layout
      >
        <AnimatePresence>
          {projects.length > 0 && projects.map((project) => (
            <motion.div
              key={project.id}
              className="overflow-hidden bg-[#1F2937] rounded-md cursor-pointer p-4"
              variants={fadeInVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover={hoverEffect}
              transition={{ duration: 0.3 }}
            >
              {project.title && (
                <h2 className="text-lg font-bold text-white mb-2">{project.title}</h2>
              )}
              {project.video ? (
                <video
                  src={project.video}
                  controls
                  className="object-cover w-full h-60"
                ></video>
              ) : (
                <p className="text-gray-300">{project.description}</p>
              )}
              {!project.video && project.description && (
                <button
                  className="mt-4 text-sm text-blue-400 underline"
                  onClick={() => {
                    setSelectedDescription(project.description);
                    setIsModalOpen(true);
                  }}
                >
                  See More
                </button>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md w-3/4 max-w-lg">
            <p className="text-gray-700">{selectedDescription}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
