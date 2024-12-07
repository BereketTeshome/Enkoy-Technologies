import React from "react";
import { motion } from "framer-motion";
import FAQSection from "../../components/corporateTraining/FAQSection";
import { useSelector } from "react-redux";

const Employability = () => {
  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";
  const faqData = [
    {
      question: "Tailored Learning Solutions for Diverse Career Goals",
      answer: [
        `At Enkoy Technologies, we recognize that each participant has unique career aspirations. Our training begins with an assessment to identify individual strengths, weaknesses, and goals. This allows us to create customized programs that align with their specific career paths, whether they aim to secure employment or start their own business.`,
        "We emphasize a supportive and interactive learning environment, where participants can share ideas, ask questions, and collaborate with peers. Our instructors provide personalized guidance and feedback to help each individual develop their unique talents and skills.",
      ],
    },
    {
      question: "Real-World Applications for Immediate Impact",
      answer: [
        "Our training methodology incorporates real-world scenarios and projects that reflect the challenges faced in today’s job market and entrepreneurial landscape. Participants engage in case studies, role-playing, and group discussions that allow them to practice their skills in a practical setting. From crafting effective business plans to mastering job interviews, learners gain hands-on experience that prepares them for success.",
      ],
    },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    viewport: { once: true, amount: 0.2 },
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <motion.div
      className={`pt-20 ${isDarkTheme ? "bg-gray-800 " : "bg-white"} `}
    >
      <motion.div
        className="flex flex-col w-full items-center"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="sm:w-[60%] pb-20 w-[80%]">
          <motion.img
            src="/img/corporate-training/decentWork.webp"
            alt=""
            className="w-[70px]"
            {...fadeIn}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FF8689] my-10"
            {...fadeIn}
          >
            Employability and entrepreneurship
          </motion.p>
          <motion.h2
            className={`text-4xl sm:text-5xl mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-950"
            }`}
            {...fadeIn}
          >
            Empowering Individuals for Career Success and Business Innovation
          </motion.h2>
          <motion.p
            className={`mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-950"
            }`}
            {...fadeIn}
          >
            At Enkoy Technologies, we believe that equipping individuals with
            the skills for employability and entrepreneurship is essential in
            today’s dynamic job market. Our Employability and Entrepreneurship
            Training is designed to nurture the skills and mindset necessary for
            career advancement and successful business creation. Whether
            individuals are seeking to enhance their job prospects or launch
            their own ventures, our programs provide the tools and knowledge
            needed to thrive.
          </motion.p>
          <motion.a
            href="/contact"
            className={`px-6 py-3 text-white ${
              isDarkTheme ? "bg-yellow-500" : "bg-gray-900"
            }`}
            {...fadeIn}
          >
            Contact Us
          </motion.a>
        </div>
        <br />
        <br />
        <br />
        <div className="md:px-20 sm:px-10 px-5 flex items-center w-full flex-col lg:flex-row">
          <motion.div className="flex-1" {...fadeIn}>
            <img
              src="/img/corporate-training/employabilityImg.webp"
              alt=""
              className="w-[90%]"
            />
          </motion.div>
          <motion.div className="flex-1" {...fadeIn}>
            <h2
              className={`text-4xl sm:text-5xl mb-7 ${
                isDarkTheme ? "text-gray-100 " : "text-gray-950"
              }`}
            >
              Transformative Learning for Career and Business Growth
            </h2>
            <p
              className={`mb-2 text-justify ${
                isDarkTheme ? "text-gray-300" : "text-gray-900"
              }`}
            >
              Our approach to Employability and Entrepreneurship Training
              focuses on practical, hands-on experiences that prepare
              participants for real-world challenges. We cover essential topics
              such as resume writing, interview techniques, networking
              strategies, and business planning. By integrating theoretical
              knowledge with practical applications, we ensure that learners can
              confidently navigate their career paths or embark on their
              entrepreneurial journeys.
            </p>
          </motion.div>
        </div>
        <br />
        <br />
        <br />
        <div className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#FFCD57] md:flex-row flex-col">
          <motion.div className="flex-1 flex" {...fadeIn}>
            <h2 className=" inline-block md:text-6xl text-4xl text-gray-900 font-semibold">
              Building Skills for a Competitive Edge
            </h2>
          </motion.div>
          <motion.div className="flex-1 text-gray-900 text-[15px]" {...fadeIn}>
            <p>
              In a rapidly changing job landscape, having a competitive edge is
              crucial. At Enkoy Technologies, our training emphasizes critical
              skills such as problem-solving, communication, and adaptability.
              We also focus on fostering an entrepreneurial mindset, encouraging
              creativity and innovation. Our programs are tailored to meet the
              specific needs of your organization, ensuring relevance and impact
              for all participants.
            </p>
            <p>
              We collaborate closely with your organization to understand its
              goals and challenges, allowing us to create a customized training
              experience. Our programs not only prepare leaders for current
              challenges but also equip them with the foresight to anticipate
              and respond to future demands.
            </p>
            <p>
              By fostering a culture of continuous learning and development, we
              help organizations cultivate a pipeline of leaders who are ready
              to meet tomorrow’s challenges head-on.
            </p>
          </motion.div>
        </div>
      </motion.div>
      <br />
      <br />
      <br />
      <div className="md:px-20 sm:px-10 px-5 flex items-center w-full flex-col lg:flex-row">
        <motion.div className="flex-1" {...fadeIn}>
          <FAQSection faqData={faqData} />
        </motion.div>
        <motion.div className="flex-1" {...fadeIn}>
          <img
            src="/img/corporate-training/employabilityImg2.webp"
            alt=""
            className="w-[90%]"
          />
        </motion.div>
      </div>
      <br />
      <br />
      <br />
      <div className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#FFCD57] md:flex-row flex-col">
        <motion.div className="flex-1 flex" {...fadeIn}>
          <h2 className=" inline-block md:text-5xl text-3xl text-gray-900 font-semibold">
            Key Components of Our Employability and Entrepreneurship Training
            Solutions
          </h2>
        </motion.div>
        <motion.div className="flex-1 text-gray-900 text-[15px]" {...fadeIn}>
          <h2 className="text-2xl font-semibold text-gray-950 mb-5 mt-2">
            Our comprehensive training approach focuses on:
          </h2>
          <ul className="list-disc pl-6 py-5 *:mb-5">
            <li>
              <b>Resume and Interview Skills:</b>Teaching participants how to
              create standout resumes and excel in interviews.
            </li>
            <li>
              <b>Networking Strategies: </b> Guiding learners on how to build
              professional relationships and leverage connections.
            </li>
            <li>
              <b>Business Planning:</b> Providing frameworks for developing
              viable business ideas and plans.
            </li>
            <li>
              <b>Entrepreneurial Mindset:</b> Encouraging creativity,
              innovation, and risk-taking in business ventures.
            </li>
          </ul>
          <h2 className="mt-2 mb-5 text-2xl font-semibold text-gray-950">
            Transformative Benefits for Individuals and Organizations
          </h2>
          <p className={`text-justify ${"text-gray-900"}`}>
            The impact of our Employability and Entrepreneurship Training
            extends beyond individual learners, benefiting the entire
            organization. As participants enhance their employability and
            entrepreneurial skills, the advantages include:
          </p>
          <ul className="list-disc pl-6 py-5 *:mb-5 text-justify">
            <li>Increased job readiness and confidence among job seekers.</li>
            <li>
              Higher rates of successful job placements and career advancements.
            </li>
            <li>
              Cultivation of innovative ideas that can lead to new business
              opportunities.
            </li>
            <li>
              Enhanced collaboration and teamwork as individuals share diverse
              perspectives.
            </li>
          </ul>
          <p>
            Invest in employability and entrepreneurship training today to
            empower your workforce with the skills and confidence to succeed in
            their careers and beyond!
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Employability;
