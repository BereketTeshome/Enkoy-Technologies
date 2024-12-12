import axios from "axios";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import ImageUpload from "../../../admin/src/components/ImageUpload";
// import ImageUpload from "../components/ImageUpload";

const EditBlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const cookie = new Cookies();

  // Decode the JWT token
  const token = sessionStorage.getItem("user_token");
  let author;
  if (token) {
    author = jwtDecode(token).userId;
  }

  const categories = [
    "Foundation of learning",
    "Design thinking",
    "Best practices",
    "Expert insights",
    "Mind training",
  ];

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }, { background: [] }],
    ["clean"],
  ];
  const modules = { toolbar: toolbarOptions };

  const handleDescriptionChange = (value) => setDescription(value);

  const addBlog = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const blogData = {
        title: title ? title : blogs.title,
        description: description ? description : blogs.description,
        image: image ? image : blogs.image,
        category: category ? category : blogs.category,
      };
      await axios.put(
        `https://server.enkoytechnologies.com/api/blog/edit/${id}`,
        blogData
      );
      navigate("/blogs");
      window.location.reload();
    } catch (error) {
      alert("Something went wrong!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://server.enkoytechnologies.com/api/blog/get/${id}`
        );
        setBlogs(res.data.blogs);
        setDescription(res.data.blogs.description);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20  flex justify-center items-center"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.8 } }}
        className="p-10 bg-white shadow-lg shadow-yellow rounded-lg w-[90%] md:w-[70%]"
        whileHover={{ scale: 1.02, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="mb-6 text-3xl font-bold text-center text-gray-600"
        >
          Edit Blog Post
        </motion.h1>

        <form onSubmit={(e) => !loading && addBlog(e)}>
          {[{ label: "Title", value: title, onChange: setTitle }].map(
            (field, idx) => (
              <motion.div
                key={idx}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { delay: idx * 0.1 } }}
                className="mb-4"
              >
                <label className="block text-sm font-medium text-gray-700">
                  {field.label}
                </label>
                <motion.input
                  type="text"
                  className="w-full p-2 mt-1 border border-gray-300 rounded focus:border-[#ffa216]"
                  // value={field.value}
                  defaultValue={blogs.title}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              </motion.div>
            )
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Change Image
            </label>
            <ImageUpload setImage={setImage} />
          </div>
          <br />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Old Image
            </label>
            <img src={blogs.image} alt="" className="h-24 w-24" />
          </div>
          <br />
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
            className="mb-4"
          >
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <motion.select
              className="w-full p-2 mt-1 border border-gray-300 rounded focus:border-[#ffa216]"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </motion.select>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: 0.4 } }}
            className="mb-4"
          >
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <ReactQuill
              value={description}
              onChange={handleDescriptionChange}
              modules={modules}
              theme="snow"
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full p-3 mt-4 text-white bg-[#ffa216] rounded hover:bg-[#ff8c00]"
            whileHover={{ scale: 1.05 }}
          >
            {loading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity }}
                className="loader"
              ></motion.div>
            ) : (
              "Edit Blog"
            )}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default EditBlogPage;
