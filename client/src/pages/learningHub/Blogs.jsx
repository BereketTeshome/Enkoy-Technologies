import { useEffect, useState } from "react";
import Blog from "../../components/learningHub/Blog";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const cookie = new Cookies();

  const handlePostBlogClick = () => {
    const token = cookie.get("user");
    if (token) {
      navigate("/manage-blogs");
    } else {
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:3000/api/blog/get");
      console.log(data.blogs);
      setBlogs(data.blogs);
    };
    fetchData();
  }, []);

  return (
    <div className="px-5 md:px-20 py-7">
      <br />
      <br />
      <br />
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="mb-4 text-3xl text-center text-gray-900 md:text-5xl md:text-left">
            Latest Blogs
          </h2>

          <button
            className="px-6 py-2 text-gray-800 bg-[#FFCD57] rounded-lg shadow-md hover:bg-opacity-90 hover:shadow-lg transition-all duration-300"
            onClick={handlePostBlogClick}
          >
            Manage Blog
          </button>

          {/* Pop-Up Modal */}
          {showPopup && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="w-11/12 max-w-md p-6 text-center bg-white rounded-lg shadow-lg">
                <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                  You are not logged in!
                </h3>
                <p className="mb-6 text-gray-600">
                  Please log in to post a blog.
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <button
                    className="px-6 py-2 bg-[#FFCD57] text-gray-800 rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300"
                    onClick={() => navigate("/login")}
                  >
                    Log In
                  </button>
                  <button
                    className="px-6 py-2 text-gray-800 transition-all duration-300 bg-gray-300 rounded-lg shadow-md hover:bg-gray-400"
                    onClick={closePopup}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="flex-1">
            <div className="w-full h-[250px] md:h-[350px] relative overflow-hidden rounded-lg">
              <img
                src={blogs[0]?.image}
                alt=""
                className="object-cover object-center w-full h-full"
              />
            </div>
          </div>

          <div className="flex-1 my-auto">
            <div>
              <h2 className="mb-5 text-2xl font-semibold text-center md:text-3xl md:text-left">
                {blogs[0]?.title}
              </h2>
              <p className="mb-10 text-center text-gray-800 md:text-left">
                {blogs[0]?.description}
              </p>
              <div className="text-center md:text-left">
                <a
                  href="#blogs"
                  className="px-6 py-3 text-white transition bg-gray-900 rounded hover:bg-gray-700"
                >
                  See More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      {/* Blog Component Section */}
      <div id="blogs">
        <Blog blogs={blogs} />
      </div>
    </div>
  );
};

export default Blogs;
