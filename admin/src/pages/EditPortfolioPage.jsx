import axios from "axios";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import VideoUpload from "../components/VideoUpload";

const EditPortfolioPage = () => {
  const [video, setVideo] = useState("");
  const [portfolio, setPortfolio] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  // Decode the JWT token
  const addPortfolio = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const portfolioData = {
        title: title ? title : portfolio.title,
        video: video ? video : portfolio.video,
      };
      await axios.put(
        `${import.meta.env.VITE_SERVER_URL}/api/portfolio/edit/${id}`,
        portfolioData
      );
      navigate("/portfolio");
      window.location.reload();
    } catch (error) {
      alert("Something went wrong!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/api/portfolio/get/${id}`
        );
        setPortfolio(res.data.portfolio);
      } catch (error) {
        console.error("Error fetching portfolios:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20  flex justify-center items-center"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.8 } }}
        className="p-10 bg-white shadow-lg shadow-yellow rounded-lg w-[90%] "
        whileHover={{ scale: 1.02, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="mb-6 text-3xl font-bold text-center text-gray-600"
        >
          Edit Portfolio Post
        </motion.h1>

        <form onSubmit={(e) => !loading && addPortfolio(e)}>
          {[{ label: "Title", value: title, onChange: setTitle }].map(
            (field, idx) => (
              <motion.div
                key={idx}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { delay: idx * 0.1 } }}
                className="mb-4"
              >
                <label className="block text-sm font-medium text-gray-700">
                  {field.label}
                </label>
                <motion.input
                  type="text"
                  className="w-full p-2 mt-1 border border-gray-300 rounded focus:border-[#ffa216]"
                  defaultValue={portfolio.title}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              </motion.div>
            )
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Change Video
            </label>
            <VideoUpload setVideo={setVideo} />
          </div>
          <br />
          <div className="mt-4">
            <p className="text-gray-600 text-sm">Current Uploaded Video:</p>
            <video
              src={portfolio.video}
              controls
              className="mt-2 w-48 h-48 object-cover border rounded-md shadow-sm"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <motion.button
            type="submit"
            className="w-full p-3 mt-4 text-white bg-[#ffa216] rounded hover:bg-[#ff8c00]"
            whileHover={{ scale: 1.05 }}
          >
            {loading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity }}
                className="loader"
              ></motion.div>
            ) : (
              "Edit Portfolio"
            )}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default EditPortfolioPage;