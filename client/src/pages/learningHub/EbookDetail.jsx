import { useParams } from "react-router-dom";
import { dummyBlogs } from "../../assets/dummyBlogs";
import { motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";
import { Delete, Star } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import EbookComments from "../../components/learningHub/EbookComments";
// import BlogComments from "../../components/learningHub/BlogComments";

const EbookDetail = () => {
  const { id } = useParams();
  const blog = dummyBlogs.find((blog) => blog.id === parseInt(1));
  const [ebooks, setEbooks] = useState({});
  const [filteredComment, setFilteredComment] = useState([]);
  const [fetchAgain, setFetchAgain] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://server.enkoytechnologies.com/api/ebook/get/${id}`
        );
        setEbooks(data.ebooks);
        setFilteredComment(data.ebooks.comments);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [fetchAgain]);

  if (!ebooks) {
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        Blog not found!
      </div>
    );
  }

  let ave = [];
  const total = () =>
    filteredComment.forEach((item) => {
      ave = [...ave, item.rating];
    });
  total();
  let average = 0;
  const findAverage = () => {
    if (ave.length === 0) {
      average = 0;
    } else {
      for (let index = 0; index < ave.length; index++) {
        let element = ave[index];
        average += element;
      }
      average = Number(average / ave.length).toFixed(1);
    }
  };
  findAverage();

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
        {ebooks.title}
      </motion.h1>

      {/* ebooks Meta */}
      <motion.div
        className="mb-8 text-gray-600 dark:text-gray-400"
        variants={textFadeIn}
      >
        <p className="mb-2">
          {/* <span className="font-semibold">Category:</span> {ebooks.category} */}
        </p>
        <p className="flex items-center gap-1">
          Posted by:{" "}
          <span className="font-medium text-gray-800 dark:text-gray-200 mr-1">
            {ebooks.author?.username}
          </span>{" "}
          | {new Date(ebooks.createdAt).toLocaleDateString()} |{" "}
          <span className=" grid grid-cols-2 w-fit ml-1">
            <Star
              size="small"
              sx={{
                color: "gold", // Optional, if you want rounded borders
              }}
            />{" "}
            {average === 0 ? "new" : average}
          </span>
        </p>
      </motion.div>

      {/* ebooks Image */}
      <motion.img
        src={ebooks.image}
        alt={ebooks.title}
        className="w-[50%] mb-10 shadow-lg rounded-xl"
        variants={imageFadeIn}
      />

      {/* ebooks Content */}
      <motion.p
        className="mb-12 text-lg leading-8 text-gray-800 dark:text-gray-200 ql-editor"
        variants={textFadeIn}
        dangerouslySetInnerHTML={{ __html: ebooks.description }}
      ></motion.p>

      <div className="mt-10">
        <EbookComments ebooks={ebooks} setFetchAgain={setFetchAgain} />
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

export default EbookDetail;
