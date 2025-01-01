import axios from "axios";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { jwtDecode } from "jwt-decode";
import VideoUpload from "../components/VideoUpload";
import ImageUpload from "../components/ImageUpload";

const AddPortfolioPage = () => {
  const [video, setVideo] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }, { background: [] }],
    ["clean"],
  ];
  const modules = { toolbar: toolbarOptions };

  const handleDescriptionChange = (value) => setDescription(value);

  // Decode the JWT token
  const addPortfolio = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const portfolioData = {
        title,
        video,
        thumbnail: image,
        description,
      };
      await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/portfolio/create`,
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
          Create a New Portfolio Post
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
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              </motion.div>
            )
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Video
            </label>
            <VideoUpload setVideo={setVideo} />
          </div>
          <br />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Video Cover Image
            </label>
            <ImageUpload setImage={setImage} />
          </div>
          <br />
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: 0.4 } }}
            className="mb-4"
          >
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <ReactQuill
              value={description}
              onChange={handleDescriptionChange}
              modules={modules}
              theme="snow"
            />
          </motion.div>

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
              "Post Portfolio"
            )}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default AddPortfolioPage;
