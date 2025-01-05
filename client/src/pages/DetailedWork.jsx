import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { works } from "../assets/ourWork";
import { useSelector } from "react-redux";

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

const DetailedWork = () => {
  const { id } = useParams();
  const filterWork = works.filter((work) => work.id == id);
  const work = filterWork[0];
  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";

  return (
    <motion.div className="">
      <motion.div
        className="bg-[#161628] md:px-20 sm:px-10 px-5 py-20"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="flex flex-col items-center gap-5 lg:flex-row"
          {...fadeInUp}
        >
          <motion.div className="flex-1" {...fadeInUp}>
            <img src={work.icon} alt="" className="w-[80px] mb-8" />
            <h1 className={`text-4xl lg:text-5xl ${"text-gray-200"}`}>
              {work.title}
            </h1>
          </motion.div>
          <motion.div className="flex-1" {...fadeInUp}>
          {work.image ?  <img src={work.image} alt="" className="rounded-lg"/> : 
          
           <video src="/img/corporate-training/LLP.mp4" alt="" className="mb-8 rounded-lg" controls>
            Your browser does not support the video tag.
          </video> 
          }

          </motion.div>
        </motion.div>
        <br />
        <br />
        <br />
        <motion.div
          className="grid grid-cols-1 gap-10 mt-16 lg:grid-cols-3 sm:grid-cols-2"
          {...fadeInUp}
        >
          <div>
            <h4 className="mb-4 font-semibold text-yellow-500 uppercase">
              What we made
            </h4>
            <p className={"text-gray-100"}>{work.whatWeMade}</p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-yellow-500 uppercase">
              The issue
            </h4>
            <p className={"text-gray-100"}>{work.shortIssus}</p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-yellow-500 uppercase">
              Project Highlights
            </h4>
            <ul className={`list-disc pl-5 space-y-2 ${"text-gray-100"}`}>
              {work.projectOverview.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
      <br />
      <br />
      <br />
      <br />
      <motion.div
        className="px-5 py-16 md:px-32"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="flex flex-col items-start gap-10 md:flex-row"
          {...fadeInUp}
        >
          <div className="flex-1">
            <h4 className="mb-4 font-semibold text-yellow-500 uppercase">
              The issue
            </h4>
            <h2
              className={`text-3xl md:text-5xl w-[90%] ${
                isDarkTheme ? "text-white" : "text-black"
              }`}
            >
              {work.longIssus.title}
            </h2>
          </div>
          <div
            className={`flex-1 ${
              isDarkTheme ? "text-gray-100" : "text-gray-700"
            }`}
          >
            {work.longIssus.description}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="px-5 py-8 md:px-32"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className={`flex flex-col gap-10 ${
            isDarkTheme ? "text-gray-100" : "text-gray-700"
          }`}
          {...fadeInUp}
        >
          <div>
            <h4 className="mb-4 font-semibold text-yellow-500 uppercase">
              The journey
            </h4>
            <h2
              className={`text-3xl md:text-5xl w-[90%] ${
                isDarkTheme ? "text-white" : "text-black"
              }`}
            >
              {work.journey.title}
            </h2>
          </div>
          <div>
            {work.journey.description.map((item, index) => (
              <p key={index} className="mb-5">
                {item}
              </p>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="px-5 py-5 md:px-32"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className={`flex flex-col gap-5 ${
            isDarkTheme ? "text-gray-100" : "text-gray-700"
          }`}
          {...fadeInUp}
        >
          <div>
            <h4 className="mb-4 font-semibold text-yellow-500 uppercase">
              The Outcomes
            </h4>
          </div>
          <div>
            {work.outcomes.map((item, index) => (
              <p key={index} className="mb-5">
                {item}
              </p>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default DetailedWork;
