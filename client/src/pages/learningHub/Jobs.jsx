import { motion } from "framer-motion";
import { useSelector } from "react-redux";


const Jobs = () => {
  const language = useSelector((state) => state.language?.language);
  const isAmharic = language === "amh";

  const jobList = [
    {
      title: "Frontend Developer",
      date: "Posted on: Dec 9, 2024",
      description:
        "We are looking for a passionate Frontend Developer skilled in React, TailwindCSS, and Framer Motion to build stunning web apps.",
      requirements: [
        "Proficient in React.js and modern JavaScript (ES6+)",
        "Experience with TailwindCSS for responsive design",
        "Understanding of Git and version control",
      ],
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Backend Developer",
      date: "Posted on: Dec 7, 2024",
      description:
        "Join our team as a Backend Developer! We need experts in Node.js, Express, and MongoDB for building scalable APIs.",
      requirements: [
        "Proficient in Node.js and Express.js",
        "Experience with MongoDB and REST API design",
        "Knowledge of cloud platforms like AWS or Azure",
      ],
      location: "On-site (Addis Ababa, Ethiopia)",
      type: "Contract",
    },
    {
      title: "UI/UX Designer",
      date: "Posted on: Dec 5, 2024",
      description:
        "Creative UI/UX Designer wanted! Design user-centric interfaces and experiences for web and mobile platforms.",
      requirements: [
        "Experience with Figma, Adobe XD, or Sketch",
        "Strong portfolio of user-centric designs",
        "Understanding of design systems and accessibility",
      ],
      location: "Hybrid (Remote + On-site)",
      type: "Part-time",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">{isAmharic ? "አስደሳች የስራ እድሎችን ያስሱ" : "Explore Exciting Job Opportunities"}</h1>
        <p className="text-gray-400 mt-2">{isAmharic ? "ለእርስዎ ትክክለኛውን ሚና ይፈልጉ እና ዛሬ ያመልክቱ!" : "Find the right role for you and apply today!"}</p>
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
        {jobList.map((job, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-2 transition-all"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
            <p className="text-gray-400 text-sm mb-4">{job.date}</p>
            <p className="text-gray-300 mb-4">{job.description}</p>
            <ul className="list-disc list-inside text-gray-400 mb-4">
              {job.requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-400">
                  <span className="font-bold">Location:</span> {job.location}
                </p>
                <p className="text-sm text-gray-400">
                  <span className="font-bold">Type:</span> {job.type}
                </p>
              </div>
              <a
                href="https://t.me/enkoytechs"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-500 focus:outline-none"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Jobs;
