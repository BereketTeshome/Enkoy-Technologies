import { works } from "../../assets/ourWork";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  viewport: { amount: 0.2, once: true },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.15 } },
};

const SingleWorks = () => {
  return (
    <motion.div
      className="py-16 text-white "
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {works.map((work, index) => (
        <motion.div
          key={index}
          className={`flex flex-col md:flex-row items-start md:items-center mb-20 border-t border-gray-700 pt-10 ${
            index !== 0 ? "mt-10" : ""
          }`}
          {...fadeInUp}
        >
          {/* Icon Section */}
          <motion.div
            className="flex items-center justify-center flex-shrink-0 w-16 h-16 bg-gray-800 rounded-full md:mr-10"
            {...fadeInUp}
          >
            <img src={work.icon} alt="Work Icon" className="w-10 h-10" />
          </motion.div>

          {/* Text Section */}
          <motion.div className="flex-1" {...fadeInUp}>
            <h3 className="mb-4 text-xl font-semibold md:text-2xl">
              {work.title}
            </h3>
            <p className="mb-6 text-gray-300">{work.description}</p>
            <a
              href={`/our-work/${work.id}`}
              className="flex items-center gap-2 px-6 py-3 text-white transition bg-yellow-600 rounded hover:bg-yellow-500 w-fit"
            >
              <span>Read the story</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </motion.div>

          {/* projectOverview Section */}
          <motion.div
            className="flex-shrink-0 w-full mt-8 md:mt-0 md:ml-10 md:w-1/3"
            {...fadeInUp}
          >
            <h4 className="mb-4 font-semibold text-yellow-500 uppercase">
              Project Highlights
            </h4>
            <ul className="pl-5 space-y-2 text-gray-400 list-disc">
              {work.projectOverview.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SingleWorks;
