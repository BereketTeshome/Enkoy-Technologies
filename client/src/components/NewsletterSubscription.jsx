import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";

const NewsletterSubscription = () => {
  // const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const cookie = new Cookies();
  const token = cookie.get("user");
  const decode = token ? jwtDecode(token) : "";
  const email = decode?.email

  const handleSubscription = (e) => {
    e.preventDefault();
    if (email) {
      setShowModal(true);
    }
  };

  const containerVariants = {
    hover: { scale: 1.1, boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.2)" },
    tap: { scale: 0.95 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 200 },
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.4 } },
  };

  return (
    <>
      {/* Subscription Form */}
      <motion.div
        className="max-w-2xl p-6 mx-auto mt-20 bg-white rounded-lg shadow-xl"
        whileHover="hover"
        whileTap="tap"
        variants={containerVariants}
        style={{ backgroundColor: "#FFCD57" }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-700">
          Subscribe to our Newsletter
        </h2>
        <form className="flex mt-6" onSubmit={handleSubscription}>
        <motion.input
  type="email"
  placeholder="Enter your email"
  value={email}
  className="w-full px-4 py-2 !placeholder-gray-500 border rounded-l-lg focus:outline-none focus:ring focus:ring-yellow-400"
  whileFocus={{ scale: 1.02 }}
/>

          <motion.button
            type="submit"
            className="px-6 py-2 text-white rounded-r-lg"
            style={{ backgroundColor: "#FFB347" }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#FFA834",
              boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.2)",
            }}
          >
            Subscribe
          </motion.button>
        </form>
      </motion.div>

      {/* Animated Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
          >
            <motion.div
              className="p-8 text-center bg-white rounded-lg shadow-xl"
              style={{ backgroundColor: "#FFCD57" }}
            >
              <motion.h3
                className="text-2xl font-extrabold text-gray-900"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Thank You!
              </motion.h3>
              <motion.p
                className="mt-4 text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                You have successfully subscribed to our newsletter.
              </motion.p>
              <motion.button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 mt-6 text-white rounded-lg"
                style={{ backgroundColor: "#FFA834" }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#FF9E24",
                  boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.2)",
                }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NewsletterSubscription;
