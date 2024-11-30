import { motion } from "framer-motion";
import { useState } from "react";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Delete, Star } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const EbookComments = ({ ebooks, setFetchAgain }) => {
  const [commentLoading, setCommentLoading] = useState(false);
  const [text, setText] = useState("");
  const [value, setValue] = useState(0);
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
    if (!token) {
      alert("you must login first");
      navigate("/login");
    } else {
      setCommentLoading(true);
      const res = await axios.post(
        `http://localhost:3000/api/ebook/${id}/comments`,
        {
          text,
          username: decode.username,
          userId: decode.userId,
          rating: value,
        }
      );
      setCommentLoading(false);
      setFetchAgain((pre) => !pre);
      return res;
    }
  };

  const deleteComment = async (commentId) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/api/ebook/${id}/comments/${commentId}`
      );
      setFetchAgain((pre) => !pre);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <h3 className="text-3xl font-bold text-white mb-10">
        All Reviews ({ebooks.comments?.length || 0})
      </h3>
      <motion.div
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {ebooks.comments?.length > 0 ? (
          ebooks.comments?.map((item, index) => {
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
                className="flex items-center justify-between p-5 bg-gray-800 shadow-lg rounded-lg"
              >
                <div className="flex items-start space-x-4  bg-gray-800 shadow-lg rounded-lg">
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
                </div>
                <div className="flex gap-2 items-center">
                  <Stack spacing={1}>
                    <Rating
                      name="read-only"
                      value={item.rating}
                      readOnly
                      size="small"
                      sx={{
                        "& .MuiRating-icon": {
                          color: "gold", // Optional, if you want rounded borders
                        },
                      }}
                    />
                  </Stack>
                  {decode.userId === item.userId && (
                    <div
                      className="text-red-500 cursor-pointer"
                      onClick={() => deleteComment(item._id)}
                    >
                      <Delete fontSize="small" />
                    </div>
                  )}
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
            How would you rate this book?*
          </p>
          <Stack spacing={1}>
            <Rating
              name="simple-controlled"
              size="small"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              sx={{
                "& .MuiRating-icon": {
                  color: "gold", // Optional, if you want rounded borders
                },
              }}
            />
          </Stack>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-500 mb-2 font-semibold">
            Share your feedback or suggestions.*
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
          {commentLoading ? "submitting" : "Submit review"}
        </button>
      </form>
    </div>
  );
};

export default EbookComments;
