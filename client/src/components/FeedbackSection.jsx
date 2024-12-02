import { motion } from "framer-motion";

const FeedbackSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="max-w-4xl p-8 mx-auto my-10 rounded-lg shadow-lg bg-gradient-to-r from-blue-100 to-blue-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2
        className="mb-4 text-3xl font-bold text-center text-gray-800"
        variants={itemVariants}
      >
        Feedback & Suggestions
      </motion.h2>
      <motion.p
        className="mb-6 text-center text-gray-600"
        variants={itemVariants}
      >
        We value your feedback! Let us know your thoughts or suggest topics you'd like us to cover.
      </motion.p>
      <motion.form
        className="flex flex-col gap-4"
        variants={itemVariants}
      >
        <motion.input
          type="text"
          placeholder="Your Name"
          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
          variants={itemVariants}
        />
        <motion.input
          type="email"
          placeholder="Your Email"
          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
          variants={itemVariants}
        />
        <motion.textarea
          rows="5"
          placeholder="Your Message"
          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
          variants={itemVariants}
        ></motion.textarea>
        <motion.button
          type="submit"
          className="px-6 py-2 font-semibold text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit Feedback
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default FeedbackSection;
