import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";

const MyEbook = () => {
  const [ebooks, setEbooks] = useState([]);
  const [btnLoading, setBtnLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEbook, setSelectedEbook] = useState(null);
  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
  });

  const cookie = new Cookies();
  const token = cookie.get("user");
  const decode = token ? jwtDecode(token) : "";
  const userId = decode?.userId;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://server.enkoytechnologies.com/api/ebook/get"
        );
        const filteredEbooks = res.data.ebooks.filter(
          (ebook) => ebook.author?._id === userId
        );
        setEbooks(filteredEbooks);
      } catch (error) {
        console.error("Error fetching ebooks:", error);
        setEbooks([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [deleted, userId]);

  const deleteEbook = async (id) => {
    setBtnLoading(true);
    try {
      await axios.delete(
        `https://server.enkoytechnologies.com/api/ebook/delete/${id}`
      );
      setDeleted(!deleted);
    } catch (error) {
      console.error("Error deleting ebook:", error);
    } finally {
      setBtnLoading(false);
    }
  };

  const openModal = (ebook) => {
    setSelectedEbook(ebook);
    setFormData({
      title: ebook.title,
      description: ebook.description,
      image: ebook.image,
    });
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `https://server.enkoytechnologies.com/api/ebook/edit/${selectedEbook._id}`,
        formData
      );
      setIsModalOpen(false);
      setDeleted(!deleted); // Refresh ebooks list
    } catch (error) {
      console.error("Error updating ebook:", error);
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <div className={`flex flex-col min-h-screen ${isDarkTheme ? "bg-gray-800" : "bg-gray-100"}`}>
      <div className="flex-grow px-8 pb-10 lg:px-32 md:px-20">
        <motion.h1
                    className={`text-center uppercase text-4xl font-semibold ${isDarkTheme ? "text-gray-100" : "text-[#070b22]"} mb-6 mt-10`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          User Dashboard
        </motion.h1>

        <motion.div
          className={`overflow-hidden ${isDarkTheme ? "bg-gray-900" : "bg-white"} rounded-md shadow-lg`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="capitalize bg-[#070b22] py-3 px-4 text-gray-100 text-lg font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Manage Ebook Posts
          </motion.div>

          <div className="px-6 py-4">
            <motion.a
              href="/add-ebook"
              className="inline-block bg-[#ffa216] px-4 py-2 rounded-md text-white text-sm font-medium mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Create New Ebook Post
            </motion.a>

            <div className="overflow-auto">
            <table className={`w-full mt-4 text-gray-700 min-w-[650px] ${isDarkTheme ? "bg-gray-800" : "bg-gray-50"} border border-gray-200 rounded-md`}>
                <thead>
                <tr className={`text-sm ${isDarkTheme ? "text-white" : "text-gray-900"} text-left ${isDarkTheme ? "bg-gray-900" : "bg-gray-200"}`}>
                    <th className="p-3">Image</th>
                    <th className="p-3">Title</th>
                    <th className="p-3">Posted Date</th>
                    <th className="p-3"> </th>
                    <th className="p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="5" className="py-6 text-center">
                        Loading...
                      </td>
                    </tr>
                  ) : ebooks.length > 0 ? (
                    ebooks.map((item, index) => {
                      let date = new Date(item.createdAt).toLocaleDateString();
                      return (
                        <motion.tr
                          key={index}
                          className={`${isDarkTheme ? "text-white" : "text-gray-900"} border-b`}
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <td className="py-3">
                            <img
                              src={item.image}
                              alt=""
                              className="w-[80px] h-auto rounded-md mx-auto"
                            />
                          </td>
                          <td className="py-3">{item.title}</td>
                          <td className="py-3">{date}</td>
                          <td className="py-3">{item.views}</td>
                          <td className="py-3 space-x-2">
                            <a
                              className="bg-[#ffa216] px-6 py-[6px] font-bold rounded-md text-white"
                              href={`/edit-ebook/${item._id}`}
                            >
                              Edit
                            </a>
                            <button
                              className="px-4 py-1 font-bold text-white bg-red-600 rounded-md"
                              onClick={() =>
                                !btnLoading && deleteEbook(item._id)
                              }
                            >
                              {btnLoading ? "Deleting..." : "Delete"}
                            </button>
                          </td>
                        </motion.tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="5" className="py-6 text-center">
                        No Ebooks Found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
          >
            <motion.div
              className="bg-[#FFCD4C] rounded-md shadow-lg p-6 w-[95%] max-w-[800px] overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
            >
              <h2 className="mb-4 text-2xl font-semibold text-[#070b22]">
                Edit Ebook
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-800">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800">
                    description
                  </label>
                  <textarea
                    name="description"
                    placeholder="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-md h-[200px] resize-none overflow-y-auto"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800">
                    Image URL
                  </label>
                  <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={formData.image}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-6 space-x-2">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-white bg-gray-600 rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="px-4 py-2 text-white bg-green-600 rounded-md"
                >
                  Update
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MyEbook;
