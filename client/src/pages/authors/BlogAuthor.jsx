import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Blog from "../../components/learningHub/Blog";

const BlogAuthor = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/user/users/${id}`
        );
        setUser(data.users);
        console.log(data.users);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/blog/get");

        // Check if data is an array

        const filteredBlog = data.blogs.filter((item) => {
          // Ensure `item.author` exists and matches the user ID
          return item.author?._id === user?._id;
        });
        setBlogs(filteredBlog);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]); // Set an empty array if the request fails
      }
    };

    fetchData();
  }, [user?._id]); // Add `user._id` as a dependency

  return (
    <div>
      <div>
        <Blog blogs={blogs} />
      </div>
    </div>
  );
};

export default BlogAuthor;
