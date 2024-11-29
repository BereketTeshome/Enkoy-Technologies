import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Cookies from "universal-cookie";
import {jwtDecode} from "jwt-decode";

const MyEbook = () => {
  const [ebooks, setEbooks] = useState([]);
  const [btnLoading, setBtnLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const cookie = new Cookies();
  const token = cookie.get("user");
  const decode = token ? jwtDecode(token) : "";
  const userId = decode?.userId;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:3000/api/ebook/get");
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
      await axios.delete(`http://localhost:3000/api/ebook/delete/${id}`);
      setDeleted(!deleted);
    } catch (error) {
      console.error("Error deleting ebook:", error);
    } finally {
      setBtnLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow px-8 pb-10 lg:px-32 md:px-20">
        <motion.h1
          className="text-center uppercase text-4xl font-extrabold text-[#070b22] mb-6 mt-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          User Dashboard
        </motion.h1>

        <motion.div
          className="overflow-hidden bg-white rounded-md shadow-lg"
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
              <table className="w-full mt-4 text-gray-700 min-w-[650px] bg-gray-50 border border-gray-200 rounded-md">
                <thead>
                  <tr className="text-sm text-left bg-gray-200">
                    <th className="p-3">Image</th>
                    <th className="p-3">Title</th>
                    <th className="p-3">Posted Date</th>
                    <th className="p-3">    </th>
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
                          className="border-b "
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
                            {/* <a
                              href={`/dashboard/edit-ebook/${item._id}`}
                              className="bg-[#ffa216] px-4 py-1 rounded-md text-white"
                            >
                              Edit
                            </a> */}
                            <button
                              className="px-4 py-1 text-white bg-red-600 rounded-md"
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
    </div>
  );
};

export default MyEbook;
