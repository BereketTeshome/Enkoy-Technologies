import { useState } from "react";
import { dummyBlogs } from "../../assets/dummyBlogs";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Ebook = () => {
  const [expanded, setExpanded] = useState(
    Array(dummyBlogs.length).fill(false)
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");

  const toggleDescription = (index) => {
    setExpanded((prevState) => {
      const newExpandedState = [...prevState];
      newExpandedState[index] = !newExpandedState[index];
      return newExpandedState;
    });
  };

  const shareOnFacebook = (title, url) => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}&quote=${encodeURIComponent(title)}`;
    window.open(facebookShareUrl, "_blank", "noopener,noreferrer");
  };

  const shareOnTwitter = (title, url) => {
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      title
    )}&url=${encodeURIComponent(url)}`;
    window.open(twitterShareUrl, "_blank", "noopener,noreferrer");
  };

  // Filter and sort blogs
  const filteredBlogs = dummyBlogs
    .filter((blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "alphabet") {
        return a.title.localeCompare(b.title);
      }
      if (sortOption === "date") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      return 0;
    });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen p-5 bg-gray-100 sm:py-28 sm:p-10"
    >
      {/* Search and Filter */}
      <div className="flex flex-col items-center justify-between gap-4 mb-10 sm:flex-row">
        <input
          type="text"
          placeholder="Search by title or author..."
          className="w-full px-4 py-2 border rounded-lg sm:w-1/3 focus:outline-none focus:ring focus:ring-blue-300"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="w-full px-4 py-2 border rounded-lg sm:w-1/5 focus:outline-none focus:ring focus:ring-blue-300"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="alphabet">Alphabetical</option>
          <option value="date">Date</option>
        </select>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs.map((blog, index) => {
          const date = new Date(blog.createdAt).toString().slice(0, 16);
          const blogUrl = `https://example.com/blog/${index}`; 

          return (
            <motion.div
              key={index}
              className="p-4 bg-white rounded-lg shadow-md"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="overflow-hidden rounded-lg">
                <motion.img
                  src={blog.image}
                  alt={blog.title}
                  className="object-cover w-full h-48"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-900">{blog.title}</h3>
                <p className="text-sm text-gray-500">{date}</p>
                <p className="mt-3 text-gray-700">
                  {expanded[index]
                    ? blog.description
                    : `${blog.description.slice(0, 50)}${
                        blog.description.length > 50 ? "..." : ""
                      }`}
                </p>
                <motion.button
                  onClick={() => toggleDescription(index)}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
                  }}
                  className="mt-4 text-blue-500 hover:text-blue-600 focus:outline-none"
                >
                  {expanded[index] ? "Show Less" : "See More"}
                </motion.button>
                <div className="mt-4 text-sm text-gray-600">
                  <span className="font-semibold">Author: </span>
                  {blog.author.name} <span>({blog.author.postsCount} posts)</span>
                </div>
                <div className="flex mt-6 space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-3 text-white bg-blue-500 rounded-full shadow-md hover:shadow-lg"
                    onClick={() => shareOnFacebook(blog.title, blogUrl)}
                  >
                    <FaFacebookF size={18} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-3 text-white bg-blue-400 rounded-full shadow-md hover:shadow-lg"
                    onClick={() => shareOnTwitter(blog.title, blogUrl)}
                  >
                    <FaTwitter size={18} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Newsletter Signup */}
      <motion.div
        className="max-w-2xl p-6 mx-auto mt-20 bg-white rounded-lg shadow-xl"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h2 className="text-3xl font-semibold text-gray-900">
          Subscribe to our Newsletter
        </h2>
        <form className="flex mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-l-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            type="submit"
            className="px-6 py-2 text-white bg-blue-500 rounded-r-lg hover:bg-blue-600"
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Ebook;
