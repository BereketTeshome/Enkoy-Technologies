import React from "react";
import { motion } from "framer-motion";

const ContactUsSection = () => {
  // Variants for animation
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="py-20 text-white bg-[#FFCD57] overflow-hidden">
      <div className="container px-6 mx-auto lg:px-16">
        <motion.div
          className="grid grid-cols-1 gap-12 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Section */}
          <motion.div
            className="flex flex-col justify-center"
            variants={itemVariants}
          >
            <motion.h2
              className="mb-4 text-3xl font-semibold md:text-4xl"
              whileHover={{ scale: 1.05 }}
            >
              Let's talk
            </motion.h2>
            <motion.p className="mb-4 text-gray-800" variants={itemVariants}>
              Have a question? Want to talk about your project? We’re ready when
              you are.
            </motion.p>
            <motion.p className="text-gray-800" variants={itemVariants}>
              To view our current job openings, please visit our
              <a
                href="#"
                className="ml-1 text-pink-500 underline hover:text-pink-400"
              >
                careers page
              </a>
              .
            </motion.p>
            <motion.div
              className="mt-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 1 } }}
            >
              <img
                src="/img/services/accessibility.png"
                alt="Illustration"
                className="w-full max-w-md mx-auto lg:mx-0"
              />
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="p-8 text-gray-900 bg-white shadow-lg shadow-white "
            initial={{ opacity: 0, rotateX: -15, scale: 0.9 }}
            animate={{
              opacity: 1,
              rotateX: 0,
              scale: 1,
              transition: { duration: 1 },
            }}
            whileHover={{
              rotateX: 5,
              rotateY: -5,
              scale: 1.02,
              transition: { duration: 0.5 },
            }}
          >
            <form className="space-y-6">
              {[
                { id: "first-name", label: "First Name *", type: "text" },
                { id: "last-name", label: "Last Name *", type: "text" },
                { id: "email", label: "Email *", type: "email" },
                { id: "phone", label: "Phone", type: "tel" },
                { id: "company", label: "Company", type: "text" },
              ].map((field) => (
                <motion.div key={field.id} variants={itemVariants}>
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {field.label}
                  </label>
                  <motion.input
                    type={field.type}
                    id={field.id}
                    placeholder={`Your ${field.label
                      .toLowerCase()
                      .replace(" *", "")}`}
                    className="block w-full px-4 py-2 mt-1 border rounded= shadow-sm focus:ring-pink-500 focus:border-pink-500"
                    whileFocus={{ scale: 1.05 }}
                  />
                </motion.div>
              ))}

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="project-details"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tell us about your project
                </label>
                <motion.textarea
                  id="project-details"
                  placeholder="Enter project details"
                  rows="4"
                  className="block w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
                  whileFocus={{ scale: 1.05 }}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  className="w-full px-4 py-2 font-medium text-white bg-blue-500 rounded-lg hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUsSection;
