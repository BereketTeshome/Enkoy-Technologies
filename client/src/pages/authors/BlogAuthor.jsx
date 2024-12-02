import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import Blog from "../../components/learningHub/Blog";

const BlogAuthor = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/user/users/${id}`
        );
        setUser(data.users);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUser();
  }, [id]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/blog/get");
        const filteredBlog = data.blogs.filter(
          (item) => item.author?._id === user?._id
        );
        setBlogs(filteredBlog);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]);
      }
    };
    if (user._id) fetchBlogs();
  }, [user?._id]);

  return (
    <div className="min-h-screen p-5 bg-gray-100 dark:bg-gray-800">
      {/* Animated Header */}
      <motion.div
        className="p-6 mb-8 text-center bg-white rounded-lg shadow-md dark:bg-gray-700 flex items-center justify-center gap-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {user.profileImg ? (
          <div className="">
            <img
              src={user.profileImg}
              alt="Uploaded preview"
              className="mt-2 w-16 h-16 object-cover border shadow-sm rounded-full"
            />
          </div>
        ) : (
          <div className="w-16 h-16 bg-cyan-500 flex items-center justify-center rounded-full text-3xl font-bold text-black uppercase">
            {user.username?.slice(0, 2) || ""}
          </div>
        )}

        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          {user.username ? `${user.username}'s Posts ` : "Loading Author... "} (
          {blogs?.length})
        </h1>
        {/* <motion.div
          className="mt-3 text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p>{`Blog Count: ${blogs.length}`}</p>
        </motion.div> */}
      </motion.div>

      {/* Blog List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <Blog blogs={blogs} />
      </motion.div>
    </div>
  );
};

export default BlogAuthor;
