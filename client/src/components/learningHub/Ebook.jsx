import { useState } from "react";
import { FaFacebookF, FaCopy, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import NewsletterSubscription from "../NewsletterSubscription";
import { Star } from "@mui/icons-material";

const Ebook = ({ ebooks }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [copiedLink, setCopiedLink] = useState(null);

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

  const filteredEbooks = ebooks
    ?.filter((ebook) => {
      // Ensure the title and author exist before filtering
      const titleMatch = ebook.title
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());
      const authorMatch = ebook.author
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());
      return titleMatch || authorMatch;
    })
    .sort((a, b) => {
      if (sortOption === "alphabet") {
        // Sort alphabetically by title (case-insensitive)
        return a.title?.localeCompare(b.title) || 0;
      }
      if (sortOption === "date") {
        // Sort by creation date (most recent first)
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA;
      }
      return 0; // No sorting if sortOption is empty or invalid
    });

  const filterRating = (id) => {
    let ratings = [];
    ebooks.forEach((ebook) => {
      if (ebook._id === id) {
        ratings = ebook.comments.map((item) => item.rating);
      }
    });

    if (ratings.length === 0) return 0;
    const total = ratings.reduce((sum, rating) => sum + rating, 0);
    return Number((total / ratings.length).toFixed(1));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen p-5 sm:py-28 sm:p-10"
    >
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

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredEbooks.map((ebook, index) => {
          const date = new Date(ebook.createdAt).toString().slice(0, 16);
          const ebookUrl = `https://enkoytechnologies.com/ebooks/${ebook._id}`;
          const pdfUrl = ebook.pdf; // Assuming `ebook.pdf` contains the URL to the PDF file

          return (
            <motion.div
              key={index}
              className="p-4 rounded-lg shadow-md bg-gray-50"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="overflow-hidden rounded-lg">
                <motion.img
                  src={ebook.image}
                  alt={ebook.title}
                  className="object-cover w-full h-48"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold h-[80px] text-gray-800">
                  {ebook.title}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">{date}</p>
                  <span className="grid grid-cols-2 ml-1 w-fit">
                    <Star size="small" sx={{ color: "gold" }} />
                    {filterRating(ebook._id)}
                  </span>
                </div>

                <div
                  className="mt-3 mb-4 text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: ebook.description.slice(0, 100),
                  }}
                ></div>

                <motion.a
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "2px 8px 13px rgba(0, 0, 0, 0.2)",
                  }}
                  href={`/ebooks/${ebook._id}`}
                  className="p-2 text-blue-500 rounded-lg cursor-pointer hover:text-blue-600 focus:outline-none"
                >
                  See In Detail
                </motion.a>
                <div className="mt-4 text-sm text-gray-600">
                  <span className="font-semibold">Author: </span>
                  {ebook.author}
                </div>

                <div className="flex items-center my-6 space-x-4">
                  <b className="text-gray-600">Share ebook on: </b>
                  <motion.button
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-3 text-white bg-blue-500 rounded-full shadow-md hover:shadow-lg"
                    onClick={() => shareOnFacebook(ebook.title, ebookUrl)}
                  >
                    <FaFacebookF size={18} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-3 text-white bg-[#1F1F1F] rounded-full shadow-md hover:shadow-lg"
                    onClick={() => shareOnTwitter(ebook.title, ebookUrl)}
                  >
                    <FaXTwitter size={18} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-3 text-white bg-[#0A66C2] rounded-full shadow-md hover:shadow-lg"
                    onClick={() =>
                      shareOnLinkedIn(ebook.title, ebookUrl, ebook.imageUrl)
                    }
                  >
                    <FaLinkedinIn size={18} />
                  </motion.button>
                </div>

                <div className="flex justify-between mt-4">
                  <a
                    href={pdfUrl}
                    download
                    className="px-4 py-2 text-white bg-green-500 rounded-lg cursor-pointer hover:bg-green-600"
                  >
                    Download PDF
                  </a>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-white bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600"
                  >
                    Read Online
                  </a>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "#FFC34D" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`flex items-center mt-4 gap-2 px-4 py-2 text-white rounded-full shadow-md hover:shadow-lg ${
                    copiedLink === index ? "bg-green-500" : "bg-[#FFCD57]"
                  }`}
                  onClick={() => handleCopyLink(ebookUrl, index)}
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

      <NewsletterSubscription />
    </motion.div>
  );
};

export default Ebook;
