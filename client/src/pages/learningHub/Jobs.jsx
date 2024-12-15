import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Jobs = () => {
  const language = useSelector((state) => state.language?.language);
  const isAmharic = language === "amh";
  const [jobsList, setJobsList] = useState([]);
  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          // "https://server.enkoytechnologies.com/api/blog/get"
          "https://server.enkoytechnologies.com/api/job/get"
        );
        const sortedJobs = data.jobs.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        console.log(sortedJobs);
        setJobsList(sortedJobs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div
  className={`${
    isDarkTheme ? "bg-gray-800" : "bg-white"
  } min-h-screen text-white p-8`}
>
      {/* Header */}
      <div className="text-center">
        <h1 className={`${isDarkTheme ? "text-white" : "text-gray-700"} text-4xl font-bold`}>
          {isAmharic
            ? "አስደሳች የስራ እድሎችን ያስሱ"
            : "Explore Exciting Job Opportunities"}
        </h1>
        <p className="mt-2 text-gray-400">
          {isAmharic
            ? "ለእርስዎ ትክክለኛውን ሚና ይፈልጉ እና ዛሬ ያመልክቱ!"
            : "Find the right role for you and apply today!"}
        </p>
      </div>

      {/* Job Listings */}
      <motion.div
        className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {jobsList.map((job, index) => {
          const date = new Date(job.createdAt).toString().slice(0, 16);
          return (
            <motion.div 
              key={index}
              className="p-6 transition-all transform bg-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h2 className="mb-2 text-2xl font-semibold">{job.title}</h2>
              <p className="mb-4 text-sm text-gray-400">Posted on: {date}</p>
                <div className="flex flex-wrap items-center justify-between my-4">
                  <div>
                    <p className="text-sm text-gray-400">
                      <span className="font-bold">Job Type:</span> {job.jobType}
                    </p>
                    <p className="text-sm text-gray-400">
                      <span className="font-bold">Working Time:</span>{" "}
                      {job.jobTime}
                    </p>
                  </div>
                  <a
                    href={job.applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-semibold bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none justify-self-end"
                  >
                    Apply Now
                  </a>
                </div>
              <div
                className="text-gray-100 ql-editor"
                dangerouslySetInnerHTML={{
                  __html: job.description,
                }}
              ></div>
             
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Jobs;
