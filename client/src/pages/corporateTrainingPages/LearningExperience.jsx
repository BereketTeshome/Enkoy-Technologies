import React from "react";
import { motion } from "framer-motion";
import FAQSection from "../../components/corporateTraining/FAQSection";

const LearningExperience = () => {
  const faqData = [
    {
      question: "Tailored Learning Solutions for Your Unique Context",
      answer: [
        `At Enkoy Technologies, our approach to LXD training is deeply rooted in your organization’s culture and objectives. We begin by conducting a thorough analysis of your mission, vision, values, and desired learning outcomes. This foundational understanding enables us to develop learning experiences that align seamlessly with your organizational context.`,
        "We also pay close attention to the desired outcomes of your leadership training. By identifying the specific improvements you want to see in your leaders’ performance, we can create targeted solutions that drive real results. Additionally, we assess your organization’s life cycle stage, recognizing that different phases demand distinct leadership capabilities.",
      ],
    },
    {
      question: "Real-World Applications in a Supportive Environment",
      answer: [
        "Our training methodology immerses participants in realistic learning scenarios that mimic real-world challenges. Through interactive simulations and collaborative projects, we evaluate their learning outcomes and gather feedback from multiple perspectives—peers, mentors, and stakeholders.",
        "By placing learners in authentic situations, we prepare them to tackle complex challenges effectively. Our training emphasizes developing practical skills that can be immediately applied, ensuring that participants leave with actionable insights.",
      ],
    },
  ];

  // Updated fadeInUp object
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
        <motion.div className="sm:w-[60%] pb-20 w-[80%]" variants={fadeInUp}>
          <motion.img
            src="/img/corporate-training/bb.webp"
            alt=""
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FF8689] my-10"
            {...fadeInUp}
          >
            Enhancing Learning Through Thoughtful Design
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-5xl text-gray-950 mb-7"
            {...fadeInUp}
          >
            Learning Experience Design (LXD) Training
          </motion.h2>
          <motion.p className="text-justify mb-7" {...fadeInUp}>
            At Enkoy Technologies, we believe that effective learning
            experiences are key to unlocking potential. Our Learning Experience
            Design (LXD) training is crafted to engage participants and promote
            meaningful learning outcomes. Whether you’re developing training for
            new employees or upskilling your existing workforce, our approach
            ensures that learning is both impactful and enjoyable.
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
              src="/img/corporate-training/learningExperienceImg.webp"
              alt=""
              className="w-[90%]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 0.6 } }}
              viewport={{ once: true }}
            />
          </motion.div>
          <motion.div className="flex-1" {...fadeInUp}>
            <h2 className="text-3xl sm:text-5xl text-gray-950 mb-7">
              Transformative Learning Experiences for Lasting Change
            </h2>
            <p className="mb-2 text-justify">
              Our LXD training focuses on creating transformative learning
              experiences that foster engagement and retention. By integrating
              innovative design principles with best practices in adult
              learning, we help organizations develop programs that resonate
              with learners and drive results. Our training encourages
              participants to actively engage with content, enhancing their
              ability to apply what they learn in real-world situations.
            </p>
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
            <h2 className="inline-block text-4xl font-semibold text-gray-900 md:text-6xl">
              Building Future-Ready Learning Environments
            </h2>
          </motion.div>
          <motion.div
            className="flex-1 text-gray-900 text-[15px] text-justify"
            {...fadeInUp}
          >
            <p>
              As the educational landscape evolves, so must our approaches to
              learning. At Enkoy Technologies, we specialize in designing
              future-ready learning experiences that adapt to the changing needs
              of your organization. Our LXD training emphasizes key skills such
              as critical thinking, collaboration, and adaptability, ensuring
              that learners are equipped for the challenges ahead.
            </p>
            <p>
              We work closely with your organization to understand its unique
              goals and challenges, allowing us to create customized learning
              experiences that address specific needs. By promoting a culture of
              continuous learning, we help organizations build a workforce that
              is prepared to thrive in an ever-changing environment.
            </p>
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
              src="/img/corporate-training/learningExperienceImg2.png"
              alt=""
              className="w-[90%]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 0.6 } }}
              viewport={{ once: true }}
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
            <h2 className="inline-block text-3xl font-semibold text-gray-900 md:text-5xl">
              Key Components of Our Learning Experience Design Solutions
            </h2>
          </motion.div>
          <motion.div
            className="flex-1 text-gray-900 text-[15px]"
            {...fadeInUp}
          >
            <p>Our comprehensive training approach focuses on:</p>
            <ul className="py-5 pl-6 text-justify list-disc">
              <li>
                <b>Engaging Content:</b> Learning experiences that captivate and
                motivate participants.
              </li>
              <li>
                <b>Collaborative Learning:</b> Opportunities for teamwork and
                peer interaction to enhance understanding.
              </li>
              <li>
                <b>Realistic Scenarios:</b> Simulations that reflect actual
                challenges learners may face.
              </li>
              <li>
                <b>Feedback Mechanisms:</b> Continuous feedback loops to inform
                and improve learning effectiveness.
              </li>
            </ul>
            <h2 className="mt-2 mb-5 text-2xl font-semibold text-gray-950">
              Transformative Benefits for Your Organization
            </h2>
            <p className="text-justify">
              The impact of our Learning Experience Design solutions extends
              throughout your organization. As your workforce engages with
              effective learning experiences, the benefits include:
            </p>
            <ul className="py-5 pl-6 text-justify list-disc">
              <li>
                Improved knowledge retention and application among employees.
              </li>
              <li>
                Enhanced engagement and morale, fostering a positive learning
                culture.
              </li>
              <li>
                Increased innovation as learners feel empowered to contribute
                ideas.
              </li>
              <li>
                Strengthened collaboration and communication across teams.
              </li>
              <li>
                Overall productivity and performance improvements, driving
                organizational success.
              </li>
            </ul>
            <p>
              Invest in your learning design today and create a future-ready
              workforce that excels in any environment!
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LearningExperience;
