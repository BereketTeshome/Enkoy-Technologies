import React from "react";
import FAQSection from "../../components/corporateTraining/FAQSection";
import { motion } from "framer-motion";
const LeadershipDevelopment = () => {
  const faqData = [
    {
      question: "Tailored Leadership Development for Your Unique Context",
      answer: [
        `At Enkoy Technologies, our leadership training is intricately designed to resonate with your organization’s specific culture and objectives. We begin by gaining a deep understanding of your mission, vision, values, and goals. This foundational knowledge allows us to craft a corporate leadership development program that aligns seamlessly with your context.`,
        "We also pay close attention to the desired outcomes of your leadership training. By identifying the specific improvements you want to see in your leaders’ performance, we can create targeted solutions that drive real results. Additionally, we assess your organization’s life cycle stage, recognizing that different phases demand distinct leadership capabilities.",
      ],
    },
    {
      question: "Real-World Challenges in a Controlled Environment",
      answer: [
        "Our training methodology immerses learners in realistic leadership scenarios, allowing them to experience the challenges leaders face firsthand. Through simulations, we evaluate their performance and gather feedback from various perspectives—team members, supervisors, and customers—to provide comprehensive insights.",
        "By confronting your leaders with these authentic challenges, we prepare them to navigate complex situations. Our coaching emphasizes the development of effective change management strategies, equipping them to lead through organizational transformations, technological advancements, and shifts in the economic landscape.",
      ],
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger duration between each child
        when: "beforeChildren", // Ensure container animates before children
      },
    },
  };

  // Variants for child elements
  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      // transition: {
      //   delay: 0.5,
      //   duration: 0.6, // Stagger duration between each child
      // },
    },
  };

  return (
    <div className="pt-20 ">
      <div className="flex flex-col w-full items-center">
        <motion.div
          className="sm:w-[60%] pb-20 w-[80%]"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.img
            src="/img/corporate-training/customerTraining.webp"
            alt=""
            className="w-[70px]"
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FF8689] my-10 "
            variants={childVariants}
          >
            Leadership development training
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-5xl text-gray-950 mb-7"
            variants={childVariants}
          >
            Leadership development training designed to motivate and achieve
            results.
          </motion.h2>
          <motion.p className="mb-7" variants={childVariants}>

            At Enkoy Technologies, we are committed to cultivating leadership
            skills! Whether your team includes natural leaders or individuals
            ready to step into leadership roles, we can assist you in teaching
            them essential skills through our leadership development training
            solutions.
          </motion.p>
          <motion.a
            href="/contact"
            className="py-3 px-6 bg-gray-900 text-white"
            variants={childVariants}
          >
            Contact Us
          </motion.a>
        </motion.div>
        <br />
        <br />
        <br />
        <div className="md:px-20 sm:px-10 px-5 flex items-center w-full flex-col lg:flex-row">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/img/corporate-training/leadersImg.png"
              alt=""
              className="w-[90%]"
            />
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className=" text-3xl sm:text-5xl text-gray-950 mb-7">
              Transformative Leadership Development for Lasting Impact
            </h2>
            <p className="mb-2 text-justify">
              At Enkoy Technologies, we believe that effective leadership is the
              cornerstone of organizational success. Our transformative
              leadership development training helps cultivate leaders who not
              only excel in their roles but also inspire their teams to achieve
              greatness.
            </p>
            <p className="text-justify">
              By combining practical skills with strategic insights, our
              programs are designed to challenge leaders to think critically and
              act decisively. We focus on real-world applications, ensuring that
              participants can implement what they learn in their day-to-day
              operations.
            </p>
          </motion.div>
        </div>
        <br />
        <br />
        <br />
        <div className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#F4B9AF] md:flex-row flex-col">
          <motion.div
            className="flex-1 flex "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className=" inline-block md:text-6xl text-4xl text-gray-900 font-semibold">
              Building Future-Ready Leaders
            </h2>
          </motion.div>
          <motion.div
            className="flex-1 text-gray-900 text-[15px] *:mb-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.8 }}
          >

            <p>
              As the business landscape evolves, so too must our leaders. At
              Enkoy Technologies, we specialize in building future-ready leaders
              who can thrive in an ever-changing environment. Our leadership
              development training focuses on essential skills such as strategic
              thinking, emotional intelligence, and adaptive leadership.
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
      </div>
      <br />
      <br />
      <br />
      <div className="md:px-20 sm:px-10 px-5 flex items-center w-full flex-col lg:flex-row">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.8 }}
        >
          <FAQSection faqData={faqData} />
        </motion.div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/img/corporate-training/leadershipImg2.png"
            alt=""
            className="w-[90%]"
          />
        </motion.div>
      </div>
      <br />
      <br />
      <br />
      <div className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-blue-300 md:flex-row flex-col">
        <motion.div
          className="flex-1 flex "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className=" inline-block md:text-5xl text-3xl text-gray-900 font-semibold">
            Key Components of Our <br /> Leadership Development <br /> Solutions
          </h2>
        </motion.div>
        <motion.div
          className="flex-1 text-gray-900 text-[15px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-gray-950 mb-5 mt-2">
            Our comprehensive training approach focuses on:
          </h2>
          <ul className="list-disc pl-6 py-5 *:mb-5 *:text-justify">
            <li>
              <b>Realistic Obstacles:</b>Leaders confront challenging,
              real-world scenarios that test their skills and decision-making
              abilities.
            </li>
            <li>
              <b>Collaborative Problem-Solving: </b> IWe foster teamwork and
              collaboration, teaching leaders how to work together to overcome
              obstacles.
            </li>
            <li>
              <b>Conflict Resolution:</b> We delve into the root causes of
              conflicts and provide strategies for effective resolution.
            </li>
            <li>
              <b>Emotional Intelligence:</b> Leaders learn how to manage diverse
              personalities while maintaining their own emotional balance.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-950 mb-5 mt-2">
            Transformative Benefits for Your Organization
          </h2>
          <p>
            The impact of our leadership development solutions extends far
            beyond individual leaders. As your leaders become more effective,
            the benefits ripple throughout your organization:
          </p>
          <ul className="list-disc pl-6 py-5 *:mb-5">
            <li>
              Teams achieve results that align with your organizational culture
              and objectives.
            </li>
            <li>
              Employee engagement and commitment increase, fostering a positive
              work environment.
            </li>
            <li>Innovation flourishes as leaders inspire creative thinking.</li>
            <li>Collaboration improves, leading to stronger team dynamics.</li>
            <li>
              Overall productivity and effectiveness rise, driving your
              organization’s success.
            </li>
          </ul>
          <p>
            Investing in leadership development transforms not just your leaders
            but your entire organization. Let us help you build a legacy of
            strong leadership today!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LeadershipDevelopment;
