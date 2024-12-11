import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";
import BlogComments from "../components/learningHub/BlogComments";

const BlogDetail = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState({});
  const [_, setFetchAgain] = useState(false);
  const [allBlogs, setAllBlogs] = useState([]);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://server.enkoytechnologies.com/api/blog/get/${id}`
      );

      setBlogs(data.blogs);
    };
    fetchData();

    const fetchAllBlogs = async () => {
      try {
        const { data } = await axios.get(
          "https://server.enkoytechnologies.com/api/blog/get"
        );
        console.log(data.blogs);
        setAllBlogs(data.blogs);
      } catch (error) {
        console.error("Error fetching all blogs:", error);
      }
    };

    fetchData();
    fetchAllBlogs();
  }, []);

  useEffect(() => {
    if (blogs && allBlogs.length > 0) {
      const filteredPosts = allBlogs
        .filter((b) => b.category === blogs.category && b._id !== blogs._id)
        .slice(0, 2); // Limit to 2 related posts
      setRelatedPosts(filteredPosts);
    }
  }, [blogs, allBlogs]);

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
            {blogs.author?.username}
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
        className="mb-12 text-lg leading-8 text-gray-800 dark:text-gray-200 ql-editor"
        variants={textFadeIn}
        dangerouslySetInnerHTML={{ __html: blogs.description }}
      ></motion.p>

      <div className="mt-10">
        <div>
          <div></div>
          <div>
            <div>
              <BlogComments blogs={blogs} setFetchAgain={setFetchAgain} />
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}

      <motion.div className="mt-12" initial="hidden" animate="visible">
        <h2 className="mb-6 text-3xl font-bold text-gray-800 dark:text-white">
          Related Posts
        </h2>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {relatedPosts.length > 0 ? (
            relatedPosts.map((post) => (
              <motion.li
                key={post._id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 transition-shadow duration-300 bg-white shadow-md dark:bg-gray-700 rounded-xl hover:shadow-lg"
              >
                <a
                  href={`/blog/${post._id}`}
                  className="block text-lg font-semibold text-blue-600 dark:text-blue-400"
                >
                  {post.title}
                </a>
              </motion.li>
            ))
          ) : (
            <p className="text-gray-200">No related posts found.</p>
          )}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default BlogDetail;
