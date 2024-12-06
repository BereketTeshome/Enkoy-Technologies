import React, { useEffect, useState } from "react";
import Ebook from "../../components/learningHub/Ebook";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Ebooks = () => {
  const [ebooks, setEbooks] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const cookie = new Cookies();

  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    viewport: { amount: 0.2, once: true },
  };

  const handlePostEbookClick = () => {
    const token = cookie.get("user");
    if (token) {
      navigate("/manage-ebooks");
    } else {
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://server.enkoytechnologies.com/api/ebook/get"
        );
        // Sort eBooks by latest (descending order of `createdAt` field)
        const sortedEbooks = data.ebooks.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setEbooks(sortedEbooks);
      } catch (error) {
        console.error("Error fetching eBooks:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <motion.div
      className={`px-5 md:px-20 py-7 ${
        isDarkTheme ? "bg-gray-800" : "bg-white"
      }`}
    >
      <br />
      <br />
      <br />
      {/* Hero Section */}
      <motion.div
        className="flex items-center justify-between mb-6"
        {...fadeInUp}
      >
        <motion.h2
          className={`mb-4 text-3xl text-center ${
            isDarkTheme ? "text-gray-100" : "text-gray-900"
          } md:text-5xl md:text-left`}
          {...fadeInUp}
        >
          Latest Ebooks
        </motion.h2>

        <button
          className={`px-6 py-2 ${
            isDarkTheme
              ? "text-gray-800 bg-[#FFCD57]"
              : "bg-[#FFCD57] text-gray-800"
          } rounded-lg shadow-md hover:bg-opacity-90 hover:shadow-lg transition-all duration-300`}
          onClick={handlePostEbookClick}
        >
          Manage Ebooks
        </button>

        {/* Pop-Up Modal */}
        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-11/12 max-w-md p-6 text-center bg-white rounded-lg shadow-lg">
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                You are not logged in!
              </h3>
              <p className="mb-6 text-gray-600">
                Please log in to post an ebook.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <button
                  className="px-6 py-2 bg-[#FFCD57] text-gray-800 rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300"
                  onClick={() => navigate("/login")}
                >
                  Log In
                </button>
                <button
                  className="px-6 py-2 text-gray-800 transition-all duration-300 bg-gray-300 rounded-lg shadow-md hover:bg-gray-400"
                  onClick={closePopup}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {/* Latest Ebook Display */}
      <motion.div
        className="flex flex-col items-center gap-8 md:flex-row"
        {...fadeInUp}
      >
        <div className="flex-1">
          <div className="w-full h-[250px] md:h-[350px] relative overflow-hidden rounded-lg">
            <motion.img
              src={ebooks[0]?.image}
              alt="Ebook Image"
              className="object-cover object-center w-full h-full"
              {...fadeInUp}
            />
          </div>
        </div>

        <div className="flex-1 my-auto">
          <div>
            <motion.h2
              className={`mb-5 text-2xl font-semibold text-center ${
                isDarkTheme ? "text-gray-100" : "text-gray-900"
              } md:text-3xl md:text-left`}
              {...fadeInUp}
            >
              {ebooks[0]?.title}
            </motion.h2>
            <motion.p
              className={`mt-3 mb-4  ${
                isDarkTheme ? "text-gray-100" : "text-gray-700"
              }`}
              dangerouslySetInnerHTML={{
                __html: ebooks[0]?.description.slice(0, 500),
              }}
              {...fadeInUp}
            ></motion.p>

            <div className="text-center md:text-left">
              <motion.a
                href="#ebooks"
                className={`px-6 py-3 text-white transition ${
                  isDarkTheme
                    ? "bg-yellow-500 hover:bg-gray-700"
                    : "bg-gray-900 hover:bg-gray-700"
                }`}
                {...fadeInUp}
              >
                See More
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Ebook Component Section */}
      <motion.div id="ebooks" {...fadeInUp}>
        <Ebook ebooks={ebooks} />
      </motion.div>
    </motion.div>
  );
};

export default Ebooks;
