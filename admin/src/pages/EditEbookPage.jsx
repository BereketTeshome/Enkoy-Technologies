import axios from "axios";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import ImageUpload from "../components/ImageUpload";
import PdfUpload from "../components/PdfUpload";

const EditEbookPage = () => {
  const [ebooks, setEbooks] = useState([]);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
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
    "Entrepreneurship",
    "Marketing",
    "Leadership",
    "Innovation",
    "Personal Development",
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

  const editEbook = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const ebookData = {
        title: title ? title : ebooks.title,
        description: description ? description : ebooks.description,
        image: image ? image : ebooks.image,
        category: category ? category : ebooks.category,
        pdfUrl: pdfUrl ? pdfUrl : ebooks.pdfUrl,
      };
      await axios.put(
        `${import.meta.env.VITE_SERVER_URL}/api/ebook/edit/${id}`,
        ebookData
      );
      navigate("/ebooks");
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
          `${import.meta.env.VITE_SERVER_URL}/api/ebook/get/${id}`
        );
        setEbooks(res.data.ebooks);
        setDescription(res.data.ebooks.description);
      } catch (error) {
        console.error("Error fetching ebooks:", error);
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
        className="p-10 bg-white shadow-lg shadow-yellow rounded-lg w-[90%] "
        whileHover={{ scale: 1.02, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="mb-6 text-3xl font-bold text-center text-gray-600"
        >
          Edit Ebook Post
        </motion.h1>

        <form onSubmit={(e) => !loading && editEbook(e)}>
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
                  defaultValue={ebooks.title}
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
            <img src={ebooks.image} alt="" className="h-24 w-24" />
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
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              PDF File
            </label>
            <PdfUpload setPdfUrl={setPdfUrl} />
          </div>

          <br />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Old PDF
            </label>
            <div className="mt-4">
              <a
                href={ebooks.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View PDF
              </a>
            </div>
          </div>
          <br />
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
              "Edit Ebook"
            )}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default EditEbookPage;
