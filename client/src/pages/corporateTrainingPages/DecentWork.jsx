import React from "react";
import { motion } from "framer-motion";
import FAQSection from "../../components/corporateTraining/FAQSection";

const DecentWork = () => {
  const faqData = [
    {
      question: "Tailored Learning Solutions for Organizational Impact",
      answer: [
        `At Enkoy Technologies, we begin our Decent Work and SDG Training with a thorough assessment of your organization’s current practices and goals. This allows us to create customized programs that address specific challenges and opportunities related to decent work and sustainable development.`,
        "We emphasize a collaborative learning environment where participants can engage in discussions, share experiences, and develop actionable strategies. Our instructors provide ongoing support and resources to help organizations implement what they learn effectively.",
      ],
    },
    {
      question: "Real-World Applications for Meaningful Change",
      answer: [
        "Our training methodology incorporates real-world case studies and practical exercises that illustrate the impact of decent work and sustainable practices. Participants engage in group projects, role-playing scenarios, and action planning to apply their learning in a meaningful way. By tackling real challenges, learners develop the skills needed to drive positive change within their organizations and communities.",
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
        className="flex flex-col items-center w-full"
        variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.div className="sm:w-[60%] pb-20 w-[80%]" {...fadeInUp}>
          <motion.img
            src="/img/corporate-training/dream.webp"
            alt=""
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FF8689] my-10"
            {...fadeInUp}
          >
            Decent work and SDG training
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-5xl text-gray-950 mb-7"
            {...fadeInUp}
          >
            Promoting Sustainable Employment and Responsible Practices
          </motion.h2>
          <motion.p className="text-justify mb-7" {...fadeInUp}>
            At Enkoy Technologies, we understand the importance of decent work
            in achieving sustainable development. Our Decent Work and
            Sustainable Development Goals (SDG) Training is designed to equip
            individuals and organizations with the knowledge and skills
            necessary to promote fair labor practices and contribute to the
            global goals established by the United Nations. By fostering a
            culture of respect, equity, and sustainability, we help build
            stronger workplaces and communities.
          </motion.p>
          <motion.a
            href="/contact"
            className="px-6 py-3 text-white bg-gray-900"
            {...fadeInUp}
          >
            Contact Us
          </motion.a>
        </motion.div>

        <br />
        <br />
        <br />

        <motion.div
          className="flex flex-col items-center w-full px-5 md:px-20 sm:px-10 lg:flex-row"
          variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div className="flex-1" {...fadeInUp}>
            <motion.img
              src="/img/corporate-training/decentWorkImg.webp"
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
              Transformative Learning for Sustainable Employment
            </motion.h2>
            <motion.p className="mb-2 text-justify" {...fadeInUp}>
              Our approach to Decent Work and SDG Training focuses on practical
              applications that empower participants to understand and implement
              the principles of decent work and sustainability. We cover
              essential topics such as workers' rights, social justice,
              environmental responsibility, and the impact of business practices
              on sustainable development. Through interactive workshops and
              discussions, participants learn how to align their work with the
              SDGs and contribute positively to their organizations and society.
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
          <motion.div className="flex flex-1" {...fadeInUp}>
            <motion.h2
              className="inline-block text-4xl font-semibold text-gray-900 md:text-6xl"
              {...fadeInUp}
            >
              Building Awareness and Commitment to Responsible Practices
            </motion.h2>
          </motion.div>
          <motion.div
            className="flex-1 text-gray-900 text-[15px]"
            {...fadeInUp}
          >
            <motion.p {...fadeInUp} className="text-justify">
              As the global job market evolves, it’s crucial for individuals and
              organizations to embrace responsible work practices. At Enkoy
              Technologies, our training emphasizes awareness of the SDGs,
              particularly Goal 8: Decent Work and Economic Growth. We help
              participants recognize the importance of creating inclusive, safe,
              and productive work environments that support the well-being of
              all employees. Our programs are tailored to meet the specific
              needs of your organization, ensuring relevance and effectiveness.
            </motion.p>
          </motion.div>
        </motion.div>

        <br />
        <br />
        <br />
        <motion.div
          className="flex flex-col items-center w-full px-5 md:px-20 sm:px-10 lg:flex-row"
          variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div className="flex-1" {...fadeInUp}>
            <FAQSection faqData={faqData} />
          </motion.div>
          <motion.div className="flex-1" {...fadeInUp}>
            <motion.img
              src="/img/corporate-training/decentWorkImg2.png"
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
          <motion.div className="flex flex-1" {...fadeInUp}>
            <motion.h2
              className="inline-block text-3xl font-semibold text-gray-900 md:text-5xl"
              {...fadeInUp}
            >
              Key Components of Our Decent Work and SDG Training Solutions
            </motion.h2>
          </motion.div>
          <motion.div
            className="flex-1 text-gray-900 text-[15px]"
            {...fadeInUp}
          >
            <motion.h2
              className="mt-2 mb-5 text-2xl font-semibold text-gray-950"
              {...fadeInUp}
            >
              Our comprehensive training approach focuses on:
            </motion.h2>
            <motion.ul
              className="py-5 pl-6 text-justify list-disc"
              {...fadeInUp}
            >
              <li>
                <b>Understanding Decent Work:</b> Educating participants on the
                principles of decent work and its significance in the SDGs.
              </li>
              <li>
                <b>Workers' Rights and Social Justice:</b> Highlighting the
                importance of fair labor practices, equity, and respect in the
                workplace.
              </li>
              <li>
                <b>Environmental Responsibility:</b> Encouraging sustainable
                practices that minimize environmental impact and promote social
                well-being.
              </li>
              <li>
                <b>Implementing Change:</b> Providing strategies for integrating
                decent work principles into organizational policies and
                practices.
              </li>
            </motion.ul>
            <motion.h2
              className="mt-2 mb-5 text-2xl font-semibold text-gray-950"
              {...fadeInUp}
            >
              Transformative Benefits for Individuals and Organizations
            </motion.h2>
            <motion.p {...fadeInUp} className="text-justify">
              The impact of our Decent Work and SDG Training extends throughout
              your organization and beyond. As participants enhance their
              understanding of decent work and sustainability, the advantages
              include:
            </motion.p>
            <motion.ul
              className="py-5 pl-6 text-justify list-disc"
              {...fadeInUp}
            >
              <li>
                Increased awareness of social and environmental responsibilities
                among employees.
              </li>
              <li>
                Improved workplace culture that values fairness, inclusivity,
                and respect.
              </li>
              <li>
                Enhanced reputation and credibility as a socially responsible
                organization.
              </li>
              <li>
                Greater alignment with global sustainability goals, fostering
                long-term success.
              </li>
            </motion.ul>
            <motion.p {...fadeInUp}>
              Invest in Decent Work and SDG Training today to empower your
              workforce to contribute to a more sustainable and equitable
              future!
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default DecentWork;
