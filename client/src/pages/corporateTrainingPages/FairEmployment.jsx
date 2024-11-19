import React from "react";
import { motion } from "framer-motion";
import FAQSection from "../../components/corporateTraining/FAQSection";

const FairEmployment = () => {
  const faqData = [
    {
      question: "Tailored Learning Solutions for Organizational Success",
      answer: [
        `At Enkoy Technologies, we begin our Fair Employment Practice Training with a comprehensive assessment of your organization’s current policies and practices. This allows us to create customized training programs that address specific challenges and opportunities related to fair employment.`,
        "We foster a collaborative learning environment where participants can engage in meaningful discussions, share experiences, and develop actionable strategies. Our experienced trainers provide ongoing support and resources to help organizations implement fair employment practices effectively.",
      ],
    },
    {
      question: "Real-World Applications for Lasting Change",
      answer: [
        "Our training methodology incorporates real-world scenarios and case studies that illustrate the significance of fair employment practices. Participants engage in role-playing exercises, group discussions, and action planning to apply their learning in a practical context. By working through real-life challenges, learners develop the skills needed to foster a fair and inclusive workplace.",
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
    <motion.div className="pt-20">
      <motion.div
        className="flex flex-col w-full items-center"
        variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.div className="sm:w-[60%] pb-20 w-[80%]" {...fadeInUp}>
          <motion.img
            src="/img/corporate-training/employability.webp"
            alt=""
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FF8689] my-10"
            {...fadeInUp}
          >
            Fair employment practice training
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-5xl text-gray-950 mb-7"
            {...fadeInUp}
          >
            Promoting Equity and Inclusion in the Workplace
          </motion.h2>
          <motion.p className="mb-7" {...fadeInUp}>
            At Enkoy Technologies, we believe that fair employment practices are
            essential for creating a thriving and inclusive workplace. Our Fair
            Employment Practice Training is designed to equip organizations and
            employees with the knowledge and skills needed to foster a culture
            of equity, respect, and inclusion. By understanding and implementing
            fair employment practices, businesses can enhance employee
            satisfaction, improve retention, and drive overall success.
          </motion.p>
          <motion.a
            href="/contact"
            className="py-3 px-6 bg-gray-900 text-white"
            {...fadeInUp}
          >
            Get in touch
          </motion.a>
        </motion.div>

        <motion.div
          className="md:px-20 sm:px-10 px-5 flex items-center w-full flex-col lg:flex-row"
          variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div className="flex-1" {...fadeInUp}>
            <motion.img
              src="/img/corporate-training/fairEmploymentImg.webp"
              alt=""
              className="w-[90%]"
              {...fadeInUp}
            />
          </motion.div>
          <motion.div className="flex-1" {...fadeInUp}>
            <motion.h2
              className="text-3xl sm:text-5xl text-gray-950 mb-7"
              {...fadeInUp}
            >
              Transformative Learning for a Fair Workplace
            </motion.h2>
            <motion.p className="mb-2" {...fadeInUp}>
              Our approach to Fair Employment Practice Training focuses on
              practical, actionable strategies that empower participants to
              recognize and address issues related to discrimination, bias, and
              inequity in the workplace. We cover essential topics such as
              recruitment fairness, equitable treatment, conflict resolution,
              and the importance of diversity and inclusion. Through interactive
              workshops and discussions, participants learn how to create a work
              environment that values every individual and promotes fairness in
              all employment practices.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#FFCD57] md:flex-row flex-col"
          variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div className="flex-1 flex" {...fadeInUp}>
            <motion.h2
              className="inline-block md:text-6xl text-4xl text-gray-900 font-semibold"
              {...fadeInUp}
            >
              Building Awareness and Commitment to Responsible Practices
            </motion.h2>
          </motion.div>
          <motion.div
            className="flex-1 text-gray-900 text-[15px]"
            {...fadeInUp}
          >
            <motion.p {...fadeInUp}>
              In today’s diverse work environment, understanding fair employment
              practices is critical for all employees. At Enkoy Technologies,
              our training emphasizes the principles of equity and inclusion,
              highlighting the need for fair treatment in hiring, promotions,
              compensation, and workplace interactions. We tailor our programs
              to meet the specific needs of your organization, ensuring that the
              training is relevant and impactful.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:px-20 sm:px-10 px-5 flex items-center w-full flex-col lg:flex-row"
          variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div className="flex-1" {...fadeInUp}>
            <FAQSection faqData={faqData} />
          </motion.div>
          <motion.div className="flex-1" {...fadeInUp}>
            <motion.img
              src="/img/corporate-training/fairEmploymentImg2.webp"
              alt=""
              className="w-[90%]"
              {...fadeInUp}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#FFCD57] md:flex-row flex-col"
          variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div className="flex-1 flex" {...fadeInUp}>
            <motion.h2
              className="inline-block md:text-5xl text-3xl text-gray-900 font-semibold"
              {...fadeInUp}
            >
              Key Components of Our Fair Employment Practice Training Solutions
            </motion.h2>
          </motion.div>
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
                <b>Understanding Fair Employment Practices:</b> Educating
                participants on the principles of fair employment and its
                importance in the workplace.
              </li>
              <li>
                <b>Recognizing Bias and Discrimination:</b> Helping employees
                identify and challenge biases and discriminatory practices in
                hiring and management.
              </li>
              <li>
                <b>Promoting Diversity and Inclusion:</b> Encouraging strategies
                to create a diverse workforce that values different perspectives
                and backgrounds.
              </li>
              <li>
                <b>Implementing Fair Policies:</b> Providing guidelines for
                developing and enforcing fair employment policies and practices.
              </li>
            </motion.ul>
            <motion.h2
              className="text-2xl font-semibold text-gray-950 mb-5 mt-2"
              {...fadeInUp}
            >
              Transformative Benefits for Individuals and Organizations
            </motion.h2>
            <motion.p {...fadeInUp}>
              The impact of our Fair Employment Practice Training extends beyond
              individual participants, benefiting the entire organization. As
              employees enhance their understanding of fair practices, the
              advantages include:
            </motion.p>
            <motion.ul className="list-disc pl-6 py-5" {...fadeInUp}>
              <li>
                A more inclusive workplace culture that values diversity and
                equity.
              </li>
              <li>
                Increased employee morale and satisfaction, leading to higher
                retention rates.
              </li>
              <li>
                Enhanced organizational reputation as a fair and equitable
                employer.
              </li>
              <li>
                Improved teamwork and collaboration as employees feel valued and
                respected.
              </li>
            </motion.ul>
            <motion.p {...fadeInUp}>
              Invest in Fair Employment Practice Training today to empower your
              workforce to create a fair, inclusive, and successful workplace!
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FairEmployment;
