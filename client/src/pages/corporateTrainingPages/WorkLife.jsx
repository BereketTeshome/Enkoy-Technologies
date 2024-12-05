import React from "react";
import { motion } from "framer-motion";
import FAQSection from "../../components/corporateTraining/FAQSection";
import { useSelector } from "react-redux";

const WorkLife = () => {
  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";
  const faqData = [
    {
      question: "Tailored Learning Solutions for Individual Needs",
      answer: [
        `At Enkoy Technologies, we begin our Work-Life Balance Training with an assessment of your organization’s current practices and employee needs. This allows us to create customized programs that address specific challenges related to work-life balance.`,
        "We foster a supportive learning environment where participants can share their experiences, discuss challenges, and develop actionable strategies. Our experienced trainers provide ongoing support and resources to help individuals implement practices that enhance their work-life balance.",
      ],
    },
    {
      question: "Real-World Applications for Lasting Change",
      answer: [
        "Our training methodology incorporates real-world scenarios and practical exercises that illustrate the importance of maintaining a balanced lifestyle. Participants engage in role-playing, group discussions, and action planning to apply their learning in a practical context. By addressing real-life challenges, learners develop the skills needed to achieve and sustain a healthy work-life balance.",
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
        <motion.div className="sm:w-[60%] pb-20 w-[80%]" {...fadeInUp}>
          <motion.img
            src="/img/corporate-training/aa.webp"
            alt="Work Life Balance Icon"
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FF8689] my-10"
            {...fadeInUp}
          >
            Work life balance training
          </motion.p>
          <motion.h2
            className={`text-4xl sm:text-5xl mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-950"
            }`}
            {...fadeInUp}
          >
            Promoting Well-Being and Productivity
          </motion.h2>
          <motion.p
            className={`mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-800"
            }`}
            {...fadeInUp}
          >
            At Enkoy Technologies, we understand that achieving a healthy
            work-life balance is crucial for overall well-being and
            organizational success. Our Work-Life Balance Training is designed
            to equip employees with the strategies and tools they need to manage
            their professional and personal lives harmoniously. By fostering a
            balanced approach, organizations can enhance employee satisfaction,
            reduce burnout, and improve productivity.
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
              src="/img/corporate-training/workLifeImg.png"
              alt="Work Life Image"
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
              Transformative Learning for a Balanced Lifestyle
            </motion.h2>
            <motion.p
              className={`mb-2 ${
                isDarkTheme ? "text-gray-100 " : "text-gray-800"
              }`}
              {...fadeInUp}
            >
              Our approach to Work-Life Balance Training focuses on practical
              strategies that empower participants to create a fulfilling
              balance between work responsibilities and personal life. We cover
              essential topics such as time management, stress reduction,
              setting boundaries, and prioritizing well-being. Through
              interactive workshops and discussions, participants learn how to
              implement effective practices that promote a healthier lifestyle
              both at work and at home.
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
              Building a Culture of Balance and Well-Being
            </motion.h2>
          </motion.div>
          <motion.div
            className="flex-1 text-gray-900 text-[15px]"
            {...fadeInUp}
          >
            <motion.p {...fadeInUp}>
              In today’s fast-paced work environment, maintaining a healthy
              work-life balance is more important than ever. At Enkoy
              Technologies, our training emphasizes the significance of creating
              a workplace culture that supports balance and well-being. We
              tailor our programs to meet the specific needs of your
              organization, ensuring that the training is relevant and impactful
              for all employees.
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
              src="/img/corporate-training/workLifeImg2.webp"
              alt="Work Life Balance Image"
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
              Key Components of Our Work-Life Balance Training Solutions
            </motion.h2>
          </motion.div>
          <br />
          <br />
          <br />
          <motion.div
            className="flex-1 text-gray-900 text-[15px]"
            {...fadeInUp}
          >
            <motion.h2
              className="text-2xl font-semibold text-gray-950 mb-5 mt-2"
              {...fadeInUp}
            >
              Our comprehensive training approach focuses on:
            </motion.h2>
            <motion.ul className="list-disc pl-6 py-5" {...fadeInUp}>
              <li>
                <b>Time Management:</b> Teaching effective techniques for
                prioritizing tasks and managing time efficiently.
              </li>
              <li>
                <b>Stress Management:</b> Providing tools and strategies to
                reduce stress and promote mental well-being.
              </li>
              <li>
                <b>Setting Boundaries:</b> Encouraging individuals to establish
                clear boundaries between work and personal life.
              </li>
              <li>
                <b>Self-Care Practices:</b> Highlighting the importance of
                self-care and well-being in achieving balance.
              </li>
            </motion.ul>
            <motion.h2
              className="text-2xl font-semibold text-gray-950 mb-5 mt-2"
              {...fadeInUp}
            >
              Transformative Benefits for Individuals and Organizations
            </motion.h2>
            <motion.p {...fadeInUp}>
              The impact of our Work-Life Balance Training extends throughout
              your organization. As participants enhance their understanding of
              work-life balance, the advantages include:
            </motion.p>
            <motion.ul className="list-disc pl-6 py-5" {...fadeInUp}>
              <li>
                Increased employee satisfaction and morale, leading to higher
                retention rates.
              </li>
              <li>
                Reduced burnout and stress levels, contributing to improved
                mental health.
              </li>
              <li>
                Enhanced productivity and performance as employees feel more
                focused and engaged.
              </li>
              <li>
                A positive organizational culture that values well-being and
                work-life harmony.
              </li>
            </motion.ul>
            <motion.p {...fadeInUp}>
              Invest in Work-Life Balance Training today to empower your
              workforce to achieve a healthier, more fulfilling balance between
              work and life!
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WorkLife;
