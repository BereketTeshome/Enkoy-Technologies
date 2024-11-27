import axios from "axios";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles for the editor
import { useNavigate } from "react-router-dom";

const AddBlogPage = () => {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Predefined categories
  const categories = [
    "Foundation of learning",
    "Design thinking",
    "Best practices",
    "Expert insights",
    "Mind training",
  ];

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],
    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction
    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],
    ["clean"], // remove formatting button
  ];
  const modules = {
    toolbar: toolbarOptions, // Pass the custom toolbar options here
  };

  const handleDescriptionChange = (value) => {
    setDescription(value); // Update Description state
  };

  const addBlog = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      // Replace the `author` value with the actual logged-in user data if available
      const blogData = {
        title,
        description,
        image,
        category,
        author: "Your Name", // Replace with dynamic author data if available
        comments: [], // Initialize as an empty array
      };
      await axios.post(`http://localhost:3000/api/blog/create`, blogData);
      setLoading(false);
      navigate("/blogs");
      window.location.reload();
    } catch (error) {
      setLoading(false);
      alert("Sorry, something went wrong!");
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center px-0 pt-40 pb-5 md:px-20">
      <div className="py-10 mx-8 bg-white rounded shadow-md">
        <p className="mb-2 text-xl font-semibold text-center text-gray-900">
          Add Blog Post
        </p>
        <form className="px-10" onSubmit={(e) => !loading && addBlog(e)}>
          {/* Title */}
          <div className="mb-3">
            <p className="mb-2 text-sm font-semibold text-gray-500">Title:</p>
            <input
              type="text"
              className="w-full px-2 py-2 text-xs border rounded"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Image */}
          <div className="mb-3">
            <p className="mb-2 text-sm font-semibold text-gray-500">
              Upload Blog Image URL:
            </p>
            <input
              type="text"
              className="w-full px-2 py-2 text-xs border rounded"
              required
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          {/* Category Dropdown */}
          <div className="mb-3">
            <p className="mb-2 text-sm font-semibold text-gray-500">
              Category:
            </p>
            <select
              className="w-full px-2 py-2 text-xs border rounded"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div className="mb-3">
            <p className="mb-2 text-sm font-semibold text-gray-500">
              Description:
            </p>
            <ReactQuill
              value={description}
              onChange={handleDescriptionChange}
              modules={modules} // Add modules to Quill
              theme="snow" // Ensure snow theme is applied
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#ffa216] px-6 py-2 uppercase text-sm text-gray-50 rounded"
          >
            {loading ? "Posting..." : "Post Blog"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlogPage;
