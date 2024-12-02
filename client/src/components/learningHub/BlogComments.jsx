import { motion } from "framer-motion";
import { useState } from "react";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Delete } from "@mui/icons-material";

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
          `https://server.enkoytechnologies.com/api/blog/${id}/comments`,
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
        `https://server.enkoytechnologies.com/api/blog/${id}/comments/${commentId}`
      );
      setFetchAgain((pre) => !pre);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <h3 className="mb-10 text-3xl font-bold text-white">
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
              <div
                key={index}
                className="flex items-center justify-between p-5 bg-gray-800 rounded-lg shadow-lg"
              >
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4 "
                >
                  {/* Avatar */}
                  <div className="flex items-center justify-center w-12 h-12 text-lg font-bold text-black uppercase rounded-full bg-cyan-500">
                    {initials}
                  </div>
                  {/* Comment Details */}
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-cyan-300">
                      {item.username}
                    </p>
                    <p className="py-1 text-sm text-gray-300">{item.text}</p>
                    <p className="text-xs text-gray-500">{date}</p>
                  </div>
                </motion.div>
                {decode.userId === item.userId && (
                  <div
                    className="text-red-500 cursor-pointer"
                    onClick={() => deleteComment(item._id)}
                  >
                    <Delete fontSize="small" />
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <motion.p
            className="text-lg text-center text-gray-400"
            variants={itemVariants}
          >
            No reviews available.
          </motion.p>
        )}
      </motion.div>
      <form className="mt-5" onSubmit={(e) => addComment(e)}>
        <div className="mt-14">
          <p className="mb-2 text-sm font-semibold text-gray-500">
            Add Comment
          </p>
          <textarea
            name=""
            id=""
            className="w-full px-2 py-1 mb-5 text-sm bg-gray-600 border-none rounded-sm md:w-1/2 text-gray-50"
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
