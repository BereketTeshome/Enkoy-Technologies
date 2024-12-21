import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const FeedbackSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const serviceID = "service_hbuyjwk";
    const templateID = "template_5x2aigl";
    const userID = "exbDEOF6w8_vEVNex";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your feedback has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send your feedback. Please try again later.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

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

  // Check if the form fields are empty
  const isDisabled = !formData.name || !formData.email || !formData.message;

  return (
    <div className="flex justify-center ">

    <motion.div
      className="max-w-[550px] p-8 mx-4 my-24 rounded-lg shadow-lg bg-gradient-to-r from-blue-600 to-blue-300"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2
        className="mb-4 text-3xl font-bold text-center text-gray-900"
        variants={itemVariants}
      >
        Feedback & Suggestions
      </motion.h2>
      <motion.p
        className="mb-6 font-semibold text-center text-gray-900"
        variants={itemVariants}
      >
        We value your feedback! Let us know your thoughts or suggest topics you'd like us to cover.
      </motion.p>
      <motion.form
        className="flex flex-col gap-4"
        variants={itemVariants}
        onSubmit={handleSubmit}
      >
        <motion.input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
          variants={itemVariants}
        />
        <motion.input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
          variants={itemVariants}
        />
        <motion.textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleInputChange}
          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
          variants={itemVariants}
        ></motion.textarea>
        <motion.button
          type="submit"
          className={`px-6 py-2 font-semibold text-white transition duration-300 bg-blue-900 rounded-lg ${
            isDisabled || isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-800"
          }`}
          whileHover={!isDisabled && !isSubmitting ? { scale: 1.05 } : {}}
          whileTap={!isDisabled && !isSubmitting ? { scale: 0.95 } : {}}
          disabled={isDisabled || isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Feedback"}
        </motion.button>
      </motion.form>
    </motion.div>

    </div>

  );
};

export default FeedbackSection;
