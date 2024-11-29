import { useState } from "react";
// import { dummyBlogs } from "../../assets/dummyBlogs";
import { FaFacebookF, FaCopy, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import NewsletterSubscription from "../NewsletterSubscription";

const categories = [
  "All",
  "Foundation of learning",
  "Design thinking",
  "Best practices",
  "Expert insights",
  "Mind training",
];

const Blogs = ({ blogs }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [copiedLink, setCopiedLink] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

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

  // Function to share on LinkedIn
  const shareOnLinkedIn = (title, url, imageUrl) => {
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url
    )}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(
      title
    )}&source=${encodeURIComponent(imageUrl || url)}`;
    window.open(linkedInShareUrl, "_blank", "noopener,noreferrer");
  };

  const handleCopyLink = (url, index) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(index);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  const filteredBlogs = blogs
    .filter((blog) => {
      // Show all blogs if 'All' or no category is selected
      if (selectedCategory === "All" || selectedCategory === "") {
        return true;
      }
      // Check if blog.category exists and matches selectedCategory
      return blog.category?.toLowerCase() === selectedCategory.toLowerCase();
    })
    .filter((blog) => {
      // Search query filtering (defensive programming)
      return (
        blog.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.author.username?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    })
    .sort((a, b) => {
      // Sorting logic
      if (sortOption === "alphabet") {
        return a.title.localeCompare(b.title);
      }
      if (sortOption === "date") {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA; // Most recent first
      }
      return 0;
    });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen p-5 sm:py-28 sm:p-10"
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

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center mb-10 space-x-2 overflow-auto sm:space-x-4">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.1 }}
            className={`px-4 py-2 mt-2 whitespace-nowrap rounded-full transition-all ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-blue-100"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs.map((blog, index) => {
          const date = new Date(blog.createdAt).toString().slice(0, 16);
          const blogUrl = `https://enkoytechnologies.com/blog/${blog._id}`;

          return (
            <motion.div
              key={index}
              className="p-4 rounded-lg shadow-md bg-gray-50"
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
                <h3 className="text-2xl font-bold h-[80px] text-gray-800">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500">{date}</p>
                <div
                  className="mt-3 mb-4 text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: blog.description.slice(0, 100),
                  }}
                >
                  {/* {blog.description.slice(0, 100)}... */}
                </div>
                <motion.a
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "2px 8px 13px rgba(0, 0, 0, 0.2)",
                  }}
                  href={`/blog/${blog._id}`}
                  className="p-2 text-blue-500 rounded-lg cursor-pointer hover:text-blue-600 focus:outline-none"
                >
                  See In Detail
                </motion.a>
                <a
                  href={`/blog/user/${blog.author._id}`}
                  className="block mt-4 text-sm text-blue-600 underline"
                >
                  <span className="font-semibold">Author: </span>
                  {blog.author.username}
                </a>
                <div className="flex items-center my-6 space-x-4">
                  <b className="text-gray-600">Share Blog on: </b>
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
                    className="p-3 text-white bg-[#1F1F1F] rounded-full shadow-md hover:shadow-lg"
                    onClick={() => shareOnTwitter(blog.title, blogUrl)}
                  >
                    <FaXTwitter size={18} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-3 text-white bg-[#0A66C2] rounded-full shadow-md hover:shadow-lg"
                    onClick={() =>
                      shareOnLinkedIn(blog.title, blogUrl, blog.imageUrl)
                    }
                  >
                    <FaLinkedinIn size={18} />
                  </motion.button>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "#FFC34D" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`flex items-center gap-2 px-4 py-2 text-white rounded-full shadow-md hover:shadow-lg ${
                    copiedLink === index ? "bg-green-500" : "bg-[#FFCD57]"
                  }`}
                  onClick={() => handleCopyLink(blogUrl, index)}
                >
                  <FaCopy size={18} />
                  <span className="font-medium">
                    {copiedLink === index ? "Copied!" : "Copy Link"}
                  </span>
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Newsletter Signup */}
      <NewsletterSubscription />
    </motion.div>
  );
};

export default Blogs;
