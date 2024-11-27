import { motion } from "framer-motion";
import { useState } from "react";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const BlogComments = ({ blogs, setFetchAgain }) => {
  const [commentLoading, setCommentLoading] = useState(false);
  const [text, setText] = useState("");
  const cookie = new Cookies();
  const token = cookie.get("user");
  const decode = token ? jwtDecode(token) : "";
  const { id } = useParams();
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const addComment = async (e) => {
    e.preventDefault();
    try {
      if (!token) {
        alert("you must login first");
        navigate("/login");
      } else {
        setCommentLoading(true);
        const res = await axios.post(
          `http://localhost:3000/api/blog/${id}/comments`,
          {
            text,
            username: decode.username,
            userId: decode.userId,
          }
        );
        setCommentLoading(false);
        setFetchAgain((pre) => !pre);
        return res;
      }
    } catch (error) {
      setCommentLoading(false);
      console.log(error);
    }
  };
  const deleteComment = async (commentId) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/api/blog/get/${id}/comments${commentId}`
      );
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <h3 className="text-3xl font-bold text-white mb-10">
        Comments ({blogs.comments?.length || 0})
      </h3>
      <motion.div
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {blogs.comments?.length > 0 ? (
          blogs.comments.map((item, index) => {
            const date = new Date(item.createdAt).toLocaleDateString("en-US", {
              weekday: "short",
              year: "numeric",
              month: "short",
              day: "numeric",
            });
            const initials = item.username
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase())
              .join("")
              .slice(0, 2);

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-4 p-5 bg-gray-800 shadow-lg rounded-lg"
              >
                {/* Avatar */}
                <div className="w-12 h-12 bg-cyan-500 flex items-center justify-center rounded-full text-lg font-bold text-black uppercase">
                  {initials}
                </div>
                {/* Comment Details */}
                <div className="flex-1">
                  <p className="text-lg font-semibold text-cyan-300">
                    {item.username}
                  </p>
                  <p className="text-sm text-gray-300 py-1">{item.text}</p>
                  <p className="text-xs text-gray-500">{date}</p>
                </div>
              </motion.div>
            );
          })
        ) : (
          <motion.p
            className="text-center text-gray-400 text-lg"
            variants={itemVariants}
          >
            No reviews available.
          </motion.p>
        )}
      </motion.div>
      <form className="mt-5" onSubmit={(e) => addComment(e)}>
        <div className="mt-14">
          <p className="text-sm text-gray-500 mb-2 font-semibold">
            Add Comment
          </p>
          <textarea
            name=""
            id=""
            className="w-full md:w-1/2  rounded-sm py-1 px-2 bg-gray-600 border-none text-gray-50 text-sm mb-5"
            rows={5}
            onChange={(e) => setText(e.target.value)}
            required
          ></textarea>
        </div>
        <button className="bg-[#ffa216] px-6 py-2 uppercase text-sm text-gray-50 rounded">
          {commentLoading ? "submitting" : "Submit Comment"}
        </button>
      </form>
    </div>
  );
};

export default BlogComments;
