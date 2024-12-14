import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Jobs = () => {
  const language = useSelector((state) => state.language?.language);
  const isAmharic = language === "amh";
  const [jobsList, setJobsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          // "https://server.enkoytechnologies.com/api/blog/get"
          "http://localhost:3000/api/job/get"
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
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          {isAmharic
            ? "አስደሳች የስራ እድሎችን ያስሱ"
            : "Explore Exciting Job Opportunities"}
        </h1>
        <p className="text-gray-400 mt-2">
          {isAmharic
            ? "ለእርስዎ ትክክለኛውን ሚና ይፈልጉ እና ዛሬ ያመልክቱ!"
            : "Find the right role for you and apply today!"}
        </p>
      </div>

      {/* Job Listings */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
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
              className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-2 transition-all"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
              <p className="text-gray-400 text-sm mb-4">Posted on: {date}</p>
                <div className="flex justify-between items-center flex-wrap my-4">
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
                    className="px-4 py-2 bg-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-500 focus:outline-none justify-self-end"
                  >
                    Apply Now
                  </a>
                </div>
              <div
                className=" ql-editor text-gray-100"
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
