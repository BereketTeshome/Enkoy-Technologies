import React, { useEffect, useState } from "react";
import Blog from "../../components/learningHub/Blog";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://enkoy-technologies-server.vercel.app/api/blog/get"
      );
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
        <h2 className="mb-4 text-3xl text-center text-gray-900 md:text-5xl md:text-left">
          Latest Blogs
        </h2>
        {/* <div className="flex flex-col items-center gap-8 md:flex-row">
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
        </div> */}
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
