import { useParams } from "react-router-dom";
import { dummyBlogs } from "../assets/dummyBlogs";
import { motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";
import BlogComments from "../components/learningHub/BlogComments";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = dummyBlogs.find((blog) => blog.id === parseInt(1));
  const [blogs, setBlogs] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `http://localhost:3000/api/blog/get/${id}`
      );

      setBlogs(data.blogs);
    };
    fetchData();
  }, []);

  if (!blogs) {
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        Blog not found!
      </div>
    );
  }

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: { opacity: 0, y: 50, transition: { duration: 0.5 } },
  };

  const textFadeIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  const imageFadeIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.5 },
    },
  };

  return (
    <motion.div
      className="p-6 md:p-12 lg:px-32 xl:px-64 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Blog Header */}
      <motion.h1
        className="mb-6 text-5xl font-extrabold leading-tight text-gray-900 dark:text-white"
        variants={textFadeIn}
      >
        {blogs.title}
      </motion.h1>

      {/* Blogs Meta */}
      <motion.div
        className="mb-8 text-gray-600 dark:text-gray-400"
        variants={textFadeIn}
      >
        <p className="mb-2">
          <span className="font-semibold">Category:</span> {blogs.category}
        </p>
        <p>
          By{" "}
          <span className="font-medium text-gray-800 dark:text-gray-200">
            {blogs.author}
          </span>{" "}
          | {new Date(blogs.createdAt).toLocaleDateString()}
        </p>
      </motion.div>

      {/* Blogs Image */}
      <motion.img
        src={blogs.image}
        alt={blogs.title}
        className="w-[50%] mb-10 shadow-lg rounded-xl"
        variants={imageFadeIn}
      />

      {/* Blogs Content */}
      <motion.p
        className="mb-12 text-lg leading-8 text-gray-800 dark:text-gray-200"
        variants={textFadeIn}
      >
        {blogs.description}
      </motion.p>

      <div className="mt-10">
        <div>
          <div></div>
          <div>
            <div>
              <BlogComments blogs={blogs} />
            </div>
          </div>
          {/* <form className="mt-5" onSubmit={(e) => addComment(e)}>
                  <div className="mb-3">
                    <p className="text-sm text-gray-500 mb-2 font-semibold">
                      Your Name
                    </p>
                    <input
                      type="text"
                      className="w-full border rounded-sm py-1 px-2"
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <p className="text-sm text-gray-500 mb-2 font-semibold">
                      Your Comment
                    </p>
                    <textarea
                      name=""
                      id=""
                      className="w-full border rounded-sm py-1 px-2"
                      rows={5}
                      onChange={(e) => setText(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <button className="bg-[#ffa216] px-6 py-2 uppercase text-sm text-gray-50 rounded">
                    {commentloading ? "submitting" : "Submit Comment"}
                  </button>
                </form> */}
        </div>
      </div>

      {/* Related Posts */}
      <motion.div
        className="mt-12"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        <h2 className="mb-6 text-3xl font-bold text-gray-800 dark:text-white">
          Related Posts
        </h2>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {blog.relatedPosts.map((post) => (
            <motion.li
              key={post.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 transition-shadow duration-300 bg-white shadow-md dark:bg-gray-700 rounded-xl hover:shadow-lg"
            >
              <span className="block text-lg font-semibold text-blue-600 dark:text-blue-400">
                {post.title}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default BlogDetail;
