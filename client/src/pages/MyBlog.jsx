import { useEffect, useState } from "react";
// import { blogs } from "../assets/blogs";
import axios from "axios";
// import { useLocation } from "react-router-dom";

const MyBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [btnLoading, setBtnLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleted, setdeleted] = useState(false);

  // `https://enkoy-technologies-server.vercel.app/api/blog/get/${id}`

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://enkoy-technologies-server.vercel.app/api/blog/get"
      );
      setBlogs(res.data.blogs);
      setLoading(false);
    };
    fetchData();
  }, [deleted]);

  const deleteBlog = async (id) => {
    setBtnLoading(true);
    const res = await axios.delete(
      `https://enkoy-technologies-server.vercel.app/api/blog/get/${id}`
    );
    setdeleted(!deleted);
    setBtnLoading(false);
    return res;
  };

  return (
    <div className="h-screen">
      <div className="px-8 pt-36 lg:px-32 md:px-20">
        <h1 className="text-center uppercase text-3xl font-bold text-[#070b22] mb-4">
          User dashboard
        </h1>
        <div className="bg-white shadow-md">
          <p className="capitalize bg-[#070b22] py-1 px-3 text-gray-100 text-sm">
            manage blog posts
          </p>
          <div className="px-3 py-3 ">
            <a
              href="/add-blog"
              className="bg-[#ffa216] px-3 py-1 uppercase text-sm text-gray-50"
            >
              create new blog post
            </a>
            <div className="overflow-x-scroll">
              <table className="*:bg-[#f8f9fa] w-full mt-4 *:text-sm text-gray-600 min-w-[650px]">
                <thead className="border-b *:py-1">
                  {/* <tr> */}
                  <th>Image</th>
                  <th>Title</th>
                  <th>Posted Date</th>
                  <th>Views</th>

                  <th>Actions</th>
                  {/* </tr> */}
                </thead>
                <tbody>
                  {loading ? (
                    <div className="w-full text-center">Loading...</div>
                  ) : (
                    blogs.map((item, index) => {
                      let date = new Date(item.createdAt)
                        .toString()
                        .slice(0, 16);
                      return (
                        <tr key={index} className="text-center">
                          <td className="flex justify-center">
                            <img
                              src={item.image}
                              alt=""
                              className="w-[80px] my-1 rounded"
                            />
                          </td>
                          <td>{item.title}</td>
                          <td>{date}</td>
                          <td>{item.views}</td>
                          <td>
                            <a
                              href={`/dashboard/edit-blog/${item._id}`}
                              className="bg-[#ffa216] px-6 py-1 uppercase text-sm text-gray-50 rounded mr-2"
                            >
                              edit
                            </a>
                            <button
                              className="px-6 py-1 text-sm uppercase bg-red-600 rounded text-gray-50"
                              onClick={() =>
                                !btnLoading && deleteBlog(item._id)
                              }
                            >
                              {btnLoading ? "deleting..." : "delete"}
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBlog;