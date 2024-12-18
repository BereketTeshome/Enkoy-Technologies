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
        const response = await fetch(
          "https://server.enkoytechnologies.com/api/portfolio/get"
        );
        const data = await response.json();
        console.log("Fetched Data:", data);
  
        // Ensure compatibility with the provided JSON structure
        if (data?.portfolio) {
          // Sort projects by the 'createdAt' field in descending order
          const sortedProjects = data.portfolio.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setProjects(sortedProjects);
        } else {
          console.error("Unexpected response format");
        }
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
    <div
      className={`px-10 min-h-screen py-32 md:px-20 ${
        isDarkTheme ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <motion.h1
        className={`mb-10 text-4xl sm:text-5xl font-bold text-center ${
          isDarkTheme ? "text-white" : "text-gray-700"
        }`}
        variants={headerAnimation}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
      >
        {isAmharic ? "የእኛ የቅርብ ጊዜ ፖርትፎሊዮ" : "Our Recent Portfolio"}
      </motion.h1>

      {/* Projects Grid */}
      <motion.div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3" layout>
        <AnimatePresence>
          {projects.length > 0 &&
            projects.map((project) => {
              const truncatedDescription = project.description
                ? project.description.substring(0, 370) + "..."
                : "";

              return (
                <motion.div
                  key={project._id} // Updated to match JSON `_id`
                  className="overflow-hidden bg-[#1F2937] rounded-md cursor-pointer p-4"
                  variants={fadeInVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover={hoverEffect}
                  transition={{ duration: 0.3 }}
                >
                  {project.title && (
                    <h2 className="mb-2 text-lg font-bold text-white">
                      {project.title}
                    </h2>
                  )}
                  {project.video ? (
                    <video
                      src={project.video}
                      controls
                      className="object-cover w-full h-60"
                    ></video>
                  ) : (
                    <div
                      className="text-gray-300"
                      dangerouslySetInnerHTML={{ __html: truncatedDescription }}
                    ></div>
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
              );
            })}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-3/4 max-w-lg p-6 bg-white rounded-md">
            <div
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: selectedDescription }}
            ></div>
            <button
              className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md"
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
