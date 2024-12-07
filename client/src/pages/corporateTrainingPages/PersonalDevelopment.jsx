import React from "react";
import { motion } from "framer-motion";
import FAQSection from "../../components/corporateTraining/FAQSection";
import { useSelector } from "react-redux";

const PersonalDevelopment = () => {
  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";
  const faqData = [
    {
      question: "Tailored Development Solutions for Individual Needs",
      answer: [
        `At Enkoy Technologies, our Personal Development Training is personalized to meet the unique needs of each individual. We begin by conducting a thorough assessment to understand participants' goals, motivations, and challenges. This foundational insight allows us to create targeted training programs that resonate with their personal development journey.`,
        "We also prioritize ongoing support and feedback, helping participants track their progress and adjust their goals as needed. Our training fosters a growth mindset, encouraging individuals to embrace learning as a lifelong journey.",
      ],
    },
    {
      question: "Real-World Applications for Immediate Impact",
      answer: [
        "Our training methodology incorporates real-world scenarios and practical exercises that allow participants to apply what they learn immediately. By engaging in role-playing, group discussions, and self-reflection activities, individuals gain hands-on experience that reinforces their learning.",
        "We focus on equipping participants with practical tools and techniques that can be integrated into their daily lives, enhancing their personal and professional effectiveness.",
      ],
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    viewport: { amount: 0.2, once: true },
  };

  return (
    <motion.div
      className={`pt-20 ${isDarkTheme ? "bg-gray-800 " : "bg-white"} `}
    >
      <motion.div
        className="flex flex-col w-full items-center"
        variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.div className="sm:w-[60%] pb-20 w-[80%]" variants={fadeInUp}>
          <motion.img
            src="/img/corporate-training/workLife.png"
            alt=""
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FF8689] my-10"
            {...fadeInUp}
          >
            Personal development training
          </motion.p>
          <motion.h2
            className={`text-4xl sm:text-5xl mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-950"
            }`}
            {...fadeInUp}
          >
            Empowering Individuals for Growth and Success
          </motion.h2>
          <motion.p
            className={`text-justify mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-900"
            }`}
            {...fadeInUp}
          >
            At Enkoy Technologies, we recognize that personal development is
            essential for both individual satisfaction and organizational
            success. Our Personal Development Training is designed to empower
            individuals to unlock their full potential, enhance their skills,
            and achieve their personal and professional goals.
          </motion.p>
          <motion.a
            href="/contact"
            className={`px-6 py-3 text-white ${
              isDarkTheme ? "bg-yellow-500" : "bg-gray-900"
            }`}
            {...fadeInUp}
          >
            Contact Us
          </motion.a>
        </motion.div>

        <br />
        <br />
        <br />
        <motion.div
          className="md:px-20 sm:px-10 px-5 flex items-center w-full flex-col lg:flex-row"
          variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div className="flex-1" {...fadeInUp}>
            <motion.img
              src="/img/corporate-training/personalDevelopmentImg.webp"
              alt=""
              className="w-[90%]"
              {...fadeInUp}
            />
          </motion.div>
          <motion.div className="flex-1" {...fadeInUp}>
            <motion.h2
              className={`text-4xl sm:text-5xl mb-7 ${
                isDarkTheme ? "text-gray-100 " : "text-gray-950"
              }`}
              {...fadeInUp}
            >
              Transformative Personal Growth for Lasting Impact
            </motion.h2>
            <motion.p
              className={`mb-2 ${
                isDarkTheme ? "text-gray-100 " : "text-gray-800"
              }`}
              {...fadeInUp}
            >
              Our approach to personal development focuses on creating
              transformative experiences that lead to lasting change. We blend
              practical strategies with self-reflection exercises, helping
              participants identify their strengths, weaknesses, and areas for
              growth.
            </motion.p>
          </motion.div>
        </motion.div>

        <br />
        <br />
        <br />
        <motion.div
          className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#FFCD57] md:flex-row flex-col"
          variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div className="flex-1 flex" {...fadeInUp}>
            <motion.h2
              className="inline-block md:text-6xl text-4xl text-gray-900 font-semibold"
              {...fadeInUp}
            >
              Building Resilient and Agile Individuals
            </motion.h2>
          </motion.div>
          <motion.div
            className="flex-1 text-gray-900 text-[15px]"
            {...fadeInUp}
          >
            <motion.p {...fadeInUp}>
              In today's fast-paced world, resilience and adaptability are vital
              traits for success. Our Personal Development Training emphasizes
              skills such as emotional intelligence, stress management, and
              effective problem-solving.
            </motion.p>
          </motion.div>
        </motion.div>

        <br />
        <br />
        <br />
        <motion.div
          className="md:px-20 sm:px-10 px-5 flex items-center w-full flex-col lg:flex-row"
          variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div className="flex-1" {...fadeInUp}>
            <FAQSection faqData={faqData} />
          </motion.div>
          <motion.div className="flex-1" {...fadeInUp}>
            <motion.img
              src="/img/corporate-training/personalDevelopmentImg2.png"
              alt=""
              className="w-[90%]"
              {...fadeInUp}
            />
          </motion.div>
        </motion.div>

        <br />
        <br />
        <br />
        <motion.div
          className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#FFCD57] md:flex-row flex-col"
          variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div className="flex-1 flex" {...fadeInUp}>
            <motion.h2
              className="inline-block md:text-5xl text-3xl text-gray-900 font-semibold"
              {...fadeInUp}
            >
              Key Components of Our Personal Development Training Solutions
            </motion.h2>
          </motion.div>
          <motion.div
            className="flex-1 text-gray-900 text-[15px]"
            {...fadeInUp}
          >
            <p>Our comprehensive training approach focuses on:</p>
            <ul className="list-disc pl-6 py-5 *:mb-5">
              <li>
                <b>Self-Awareness:</b>Helping individuals gain a deeper
                understanding of their strengths, values, and areas for growth.
              </li>
              <li>
                <b>Goal Setting: </b> Guiding participants in setting realistic
                and achievable personal and professional goals.
              </li>
              <li>
                <b>Emotional Intelligence: </b>Teaching skills to recognize and
                manage emotions, both in themselves and in others.
              </li>
              <li>
                <b>Resilience Building:</b> Providing strategies to cope with
                stress and overcome obstacles.
              </li>
            </ul>
            <h2 className="text-2xl font-semibold text-gray-950 mb-5 mt-2">
              Transformative Benefits for Individuals and Organizations
            </h2>
            <p>
              The impact of our Personal Development Training extends beyond the
              individual, benefiting the entire organization. As participants
              grow and develop, the advantages include:
            </p>
            <ul className="list-disc pl-6 py-5 *:mb-5">
              <li>Increased self-confidence and motivation among employees.</li>
              <li>Enhanced communication and collaboration within teams.</li>
              <li>
                Greater innovation and creativity as individuals feel empowered
                to share ideas.
              </li>
              <li>Improved overall job satisfaction and employee retention.</li>
              <li>A more positive and productive organizational culture.</li>
            </ul>
            <p>
              Invest in personal development today and empower your workforce to
              thrive both personally and professionally!
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PersonalDevelopment;
