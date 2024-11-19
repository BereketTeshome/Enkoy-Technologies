import React from "react";
import { motion } from "framer-motion";
import FAQSection from "../../components/corporateTraining/FAQSection";

const Safety = () => {
  const faqData = [
    {
      question: "Tailored Learning Solutions for Organizational Needs",
      answer: [
        `At Enkoy Technologies, we begin our Safety and Health at Workplace Training with a thorough assessment of your organization’s current safety practices and challenges. This allows us to create customized training programs that address specific needs and compliance requirements.`,
        "We foster an engaging learning environment where participants can actively participate in discussions, share experiences, and develop actionable safety strategies. Our experienced trainers provide ongoing support and resources to help organizations effectively implement safety practices.",
      ],
    },
    {
      question: "Real-World Applications for Immediate Impact",
      answer: [
        "Our training methodology incorporates real-world scenarios and simulations that illustrate the importance of workplace safety. Participants engage in practical exercises, group discussions, and action planning to apply their learning in a meaningful way. By tackling real-life challenges, learners develop the skills needed to contribute to a safer work environment.",
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
            src="/img/corporate-training/safety.svg"
            alt="Safety Icon"
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FF8689] my-10"
            {...fadeInUp}
          >
            Safety and Health at workplace training
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-5xl text-gray-950 mb-7"
            {...fadeInUp}
          >
            Ensuring a Safe and Healthy Work Environment
          </motion.h2>
          <motion.p className="mb-7" {...fadeInUp}>
            At Enkoy Technologies, we prioritize the well-being of employees as
            a fundamental aspect of organizational success. Our Safety and
            Health at Workplace Training is designed to equip individuals and
            organizations with the knowledge and skills necessary to promote a
            safe and healthy work environment. By understanding and implementing
            effective safety practices, businesses can reduce risks, enhance
            productivity, and foster a culture of care.
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
              src="/img/corporate-training/safetyImg.webp"
              alt="Workplace Safety"
              className="w-[90%]"
              {...fadeInUp}
            />
          </motion.div>
          <motion.div className="flex-1" {...fadeInUp}>
            <motion.h2
              className="text-3xl sm:text-5xl text-gray-950 mb-7"
              {...fadeInUp}
            >
              Transformative Learning for Workplace Safety
            </motion.h2>
            <motion.p className="mb-2" {...fadeInUp}>
              Our approach to Safety and Health Training focuses on practical
              applications that empower participants to recognize, assess, and
              mitigate workplace hazards. We cover essential topics such as
              emergency preparedness, ergonomics, hazard identification, and
              health regulations. Through interactive workshops and hands-on
              exercises, participants learn how to implement safety protocols
              and promote a culture of health and safety within their
              organizations.
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
              Building a Culture of Safety and Well-Being
            </motion.h2>
          </motion.div>
          <motion.div
            className="flex-1 text-gray-900 text-[15px]"
            {...fadeInUp}
          >
            <motion.p {...fadeInUp}>
              In today’s dynamic work environment, prioritizing safety and
              health is crucial for every organization. At Enkoy Technologies,
              our training emphasizes the importance of creating a proactive
              safety culture where every employee feels responsible for
              maintaining a safe workplace. We tailor our programs to meet the
              specific needs of your organization, ensuring relevance and
              effectiveness.
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
              src="/img/corporate-training/safetyImg2.webp"
              alt="Safety Training"
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
              Key Components of Our Safety and Health Training Solutions
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
                <b>Understanding Safety Regulations:</b> Educating participants
                on relevant workplace safety laws and regulations.
              </li>
              <li>
                <b>Hazard Recognition and Assessment:</b> Teaching employees how
                to identify potential hazards and assess risks in their work
                environment.
              </li>
              <li>
                <b>Emergency Preparedness:</b> Providing strategies for
                responding to emergencies, including evacuation procedures and
                first aid.
              </li>
              <li>
                <b>Promoting Ergonomics:</b> Encouraging practices that enhance
                physical well-being and reduce the risk of injury.
              </li>
            </motion.ul>
            <motion.h2
              className="text-2xl font-semibold text-gray-950 mb-5 mt-2"
              {...fadeInUp}
            >
              Transformative Benefits for Individuals and Organizations
            </motion.h2>
            <motion.p {...fadeInUp}>
              The impact of our Safety and Health at Workplace Training extends
              throughout your organization. As participants enhance their
              understanding of safety practices, the advantages include:
            </motion.p>
            <motion.ul className="list-disc pl-6 py-5" {...fadeInUp}>
              <li>
                A safer work environment that reduces the likelihood of
                accidents and injuries.
              </li>
              <li>
                Increased employee morale and productivity as workers feel
                secure and valued.
              </li>
              <li>
                Enhanced organizational reputation as a company that prioritizes
                employee safety and health.
              </li>
              <li>
                Improved compliance with safety regulations, minimizing legal
                and financial risks.
              </li>
            </motion.ul>
            <motion.p {...fadeInUp}>
              Invest in Safety and Health at Workplace Training today to empower
              your workforce to create a safe, healthy, and productive work
              environment!
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Safety;
