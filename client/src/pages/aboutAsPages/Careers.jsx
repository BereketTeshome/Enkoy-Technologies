import React from "react";
import { motion } from "framer-motion";

const Careers = () => {
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
    <motion.div>
      {/* Header Section */}
      <motion.div className="bg-[#161628] text-center text-white text-4xl font-semibold py-20">
        <p className="">Careers for lifelong learners</p>
      </motion.div>
      <br />
      <br />
      <br />
      <br />
      {/* About Careers Section */}
      <motion.div
        className="flex flex-col items-center px-4 sm:px-6 lg:px-8"
        variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.div
          className="w-full sm:w-[80%] lg:w-[70%] text-gray-700 mb-20"
          {...fadeInUp}
        >
          <motion.p
            className="text-2xl sm:text-3xl text-gray-900"
            {...fadeInUp}
          >
            We’ve consciously built a team of people who understand that
            learning can happen anytime, anywhere.
          </motion.p>

          <motion.p className="mt-4" {...fadeInUp}>
            From our designers to our client success team, every member of our
            team has made learning the central part of their career path.
          </motion.p>

          <motion.p className="mt-4" {...fadeInUp}>
            We’re committed to nurturing a diverse, inclusive, and positive work
            culture. Some benefits include our open-door policy, team bonding
            activities, quarterly speakers, and local charity events.
          </motion.p>

          <motion.p
            className="text-xl sm:text-2xl text-gray-900 font-semibold mt-4"
            {...fadeInUp}
          >
            Sound like something you want to be a part of? Check out our open
            jobs. We’d love to have you!
          </motion.p>

          <br />
          <motion.a
            href="/contact"
            className="py-3 px-6 bg-gray-900 text-white mt-8 inline-block"
            {...fadeInUp}
          >
            Get in touch
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        className="flex flex-col items-center px-4 sm:px-6 lg:px-8"
        variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.div
          className="w-full sm:w-[80%] lg:w-[70%] text-gray-700 mb-20"
          {...fadeInUp}
        >
          <motion.h2
            className="text-4xl sm:text-5xl text-gray-900 mb-8"
            {...fadeInUp}
          >
            Benefits of working at Enkoy
          </motion.h2>
          <motion.div
            className="flex flex-col sm:flex-row gap-8 lg:gap-10"
            {...fadeInUp}
          >
            {/* Left Benefits */}
            <motion.div className="flex-1 text-gray-900" {...fadeInUp}>
              <motion.div className="mb-5" {...fadeInUp}>
                <p className="text-xl font-semibold mb-2">For your health</p>
                <p>Medical, vision, dental, and basic life insurance</p>
              </motion.div>
              <motion.div className="mb-5" {...fadeInUp}>
                <p className="text-xl font-semibold mb-2">
                  Be with your family
                </p>
                <p>Maternity and paternity leave</p>
              </motion.div>
              <motion.div className="mb-5" {...fadeInUp}>
                <p className="text-xl font-semibold mb-2">
                  Spend time with the team
                </p>
                <p>
                  Regular group activities, such as local charity or
                  philanthropic events
                </p>
              </motion.div>
              <motion.div {...fadeInUp}>
                <p className="text-xl font-semibold mb-2">Save money</p>
                <p>FSA, HSA, and pre-tax commuter benefits</p>
              </motion.div>
            </motion.div>

            {/* Right Benefits */}
            <motion.div className="flex-1 text-gray-900" {...fadeInUp}>
              <motion.div className="mb-5" {...fadeInUp}>
                <p className="text-xl font-semibold mb-2">Keep learning</p>
                <p>
                  Quarterly speakers, DEI workshops, and monthly training
                  sessions
                </p>
              </motion.div>
              <motion.div className="mb-5" {...fadeInUp}>
                <p className="text-xl font-semibold mb-2">Stay fit</p>
                <p>
                  Reimbursement for fitness classes or gym/wellness membership
                </p>
              </motion.div>
              <motion.div className="mb-5" {...fadeInUp}>
                <p className="text-xl font-semibold mb-2">For your future</p>
                <p>401(k) plans available after three months of employment</p>
              </motion.div>
              <motion.div {...fadeInUp}>
                <p className="text-xl font-semibold mb-2">Take time off</p>
                <p>Vacation time, paid holidays, unlimited sick leave</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Careers;
