import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import Blog from "../../components/learningHub/Blog";
import Ebook from "../../components/learningHub/Ebook";

const EbookAuthor = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [ebooks, setEbooks] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          `https://server.enkoytechnologies.com/api/user/users/${id}`
        );
        setUser(data.users);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUser();
  }, [id]);

  useEffect(() => {
    const fetchEbooks = async () => {
      try {
        const { data } = await axios.get("https://server.enkoytechnologies.com/api/ebook/get");
        const filteredEbook = data.ebooks.filter(
          (item) => item.author?._id === user?._id
        );
        setEbooks(filteredEbook);
      } catch (error) {
        console.error("Error fetching ebooks:", error);
        setEbooks([]);
      }
    };
    if (user._id) fetchEbooks();
  }, [user?._id]);

  return (
    <div className="min-h-screen p-5 bg-gray-100 dark:bg-gray-800">
      {/* Animated Header */}
      <motion.div
        className="p-6 mb-8 text-center bg-white rounded-lg shadow-md dark:bg-gray-700"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          {user.username ? `${user.username}'s Posts ` : "Loading Author... "} (
          {ebooks?.length})
        </h1>
        {/* <motion.div
          className="mt-3 text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p>{`Ebook Count: ${ebooks.length}`}</p>
        </motion.div> */}
      </motion.div>

      {/* Ebook List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <Ebook ebooks={ebooks} />
      </motion.div>
    </div>
  );
};

export default EbookAuthor;
