import React from "react";
import { motion } from "framer-motion";
import FAQSection from "../../components/corporateTraining/FAQSection";

const BasicComputer = () => {
  const faqData = [
    {
      question: "Tailored Development Solutions for Individual Needs",
      answer: [
        `At Enkoy Technologies, we recognize that each learner has unique needs and goals. Our Basic Computer Skills Training begins with an assessment to identify the specific skills that participants need to develop. This allows us to create customized training programs that align with their current abilities and future aspirations.`,
        "We emphasize a supportive learning environment, where participants can ask questions, practice skills, and gain confidence in their abilities. Our instructors provide ongoing feedback and assistance to facilitate learning and ensure participants feel comfortable with the material.",
      ],
    },
    {
      question: "Real-World Applications for Immediate Impact",
      answer: [
        "Our training methodology incorporates practical exercises and scenarios that reflect real-world challenges. Participants engage in interactive activities that allow them to practice their skills in a safe environment. From creating documents and spreadsheets to sending professional emails, learners gain hands-on experience that is directly applicable to their daily tasks.",
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
            src="/img/corporate-training/basicComputer.svg"
            alt=""
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FF8689] my-10"
            {...fadeInUp}
          >
            Basic computer skill training
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-5xl text-gray-950 mb-7"
            {...fadeInUp}
          >
            Empowering Individuals with Essential Digital Competencies
          </motion.h2>
          <motion.p className="mb-7" {...fadeInUp}>
            At Enkoy Technologies, we understand that basic computer skills are
            fundamental in today’s digital world. Our Basic Computer Skills
            Training is designed to equip individuals with the essential
            technical skills needed to navigate modern workplaces confidently.
            Whether you're a novice or looking to refresh your knowledge, our
            training programs provide a solid foundation in computer literacy.
          </motion.p>
          <motion.a
            href="/contact"
            className="py-3 px-6 bg-gray-900 text-white"
            {...fadeInUp}
          >
            Get in touch
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
              src="/img/corporate-training/basicComputerImg.webp"
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
              Transformative Learning for Digital Proficiency
            </motion.h2>
            <motion.p className="mb-2" {...fadeInUp}>
              Our approach to Basic Computer Skills Training focuses on creating
              engaging and practical learning experiences. Participants will
              learn to operate common software applications, manage files and
              folders, and use the internet safely and effectively. By combining
              hands-on exercises with real-world applications, we ensure that
              learners can apply their skills immediately in their personal and
              professional lives.
            </motion.p>
          </motion.div>
        </motion.div>

        <br />
        <br />
        <br />
        <motion.div
          className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#F4B9AF] md:flex-row flex-col"
          variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div className="flex-1 flex" {...fadeInUp}>
            <motion.h2
              className="inline-block md:text-6xl text-4xl text-gray-900 font-semibold"
              {...fadeInUp}
            >
              Building Confidence in Digital Environments
            </motion.h2>
          </motion.div>
          <motion.div
            className="flex-1 text-gray-900 text-[15px]"
            {...fadeInUp}
          >
            <motion.p {...fadeInUp}>
              As technology continues to evolve, having a strong grasp of basic
              computer skills is crucial. At Enkoy Technologies, we aim to build
              confidence in individuals as they navigate digital tools and
              platforms. Our training covers key areas such as word processing,
              spreadsheet management, email communication, and internet
              browsing. We tailor our programs to meet the specific needs of
              your organization, ensuring relevance and applicability for all
              participants.
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
              src="/img/corporate-training/basicComputerImg2.webp"
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
          className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#F4B9AF] md:flex-row flex-col"
          variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div className="flex-1 flex" {...fadeInUp}>
            <motion.h2
              className="inline-block md:text-5xl text-3xl text-gray-900 font-semibold"
              {...fadeInUp}
            >
              Key Components of Our Basic Computer Skills Training Solutions
            </motion.h2>
          </motion.div>
          <motion.div
            className="flex-1 text-gray-900 text-[15px]"
            {...fadeInUp}
          >
            <motion.p>Our comprehensive training approach focuses on:</motion.p>
            <ul className="list-disc pl-6 py-5">
              <li>
                <b>Software Proficiency:</b> Teaching participants how to use
                essential applications like Microsoft Word, Excel, and
                PowerPoint.
              </li>
              <li>
                <b>File Management:</b> Guiding learners in organizing files and
                folders effectively for easy access and retrieval.
              </li>
              <li>
                <b>Internet Skills:</b> Instructing on safe browsing practices,
                online research techniques, and digital communication etiquette.
              </li>
              <li>
                <b>Basic Troubleshooting:</b> Equipping participants with skills
                to troubleshoot common computer issues and seek help when
                needed.
              </li>
            </ul>
            <motion.h2 className="text-2xl font-semibold text-gray-950 mb-5 mt-2">
              Transformative Benefits for Individuals and Organizations
            </motion.h2>
            <motion.p>
              The impact of our Basic Computer Skills Training extends beyond
              individual learners, benefiting the entire organization. As
              participants enhance their digital competencies, the advantages
              include:
            </motion.p>
            <ul className="list-disc pl-6 py-5">
              <li>
                Increased productivity as employees become more efficient in
                using technology.
              </li>
              <li>
                Improved communication and collaboration through effective use
                of digital tools.
              </li>
              <li>
                Greater confidence in navigating computer systems, leading to
                reduced frustration and stress.
              </li>
              <li>
                Enhanced ability to adapt to new technologies as they emerge.
              </li>
            </ul>
            <motion.p>
              Invest in basic computer skills training today and empower your
              workforce to thrive in a digital age!
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BasicComputer;
