import React, { useState } from "react";

const Ebook = ({ ebooks }) => {
  const [expanded, setExpanded] = useState(Array(ebooks.length).fill(false));

  const toggleDescription = (index) => {
    const newExpandedState = [...expanded];
    newExpandedState[index] = !newExpandedState[index];
    setExpanded(newExpandedState);
  };

  return (
    <div className="bg-white sm:p-10 p-5 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ebooks.map((blog, index) => {
          const date = new Date(blog.createdAt).toString().slice(0, 16);
          return (
            <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500">{date}</p>
                <p className="mt-2 text-gray-700">
                  {expanded[index]
                    ? blog.description
                    : `${blog.description.slice(0, 50)}${
                        blog.description.length > 50 ? "..." : ""
                      }`}
                </p>
                <button
                  onClick={() => toggleDescription(index)}
                  className="text-blue-500 mt-4"
                >
                  {expanded[index] ? "Show Less" : "See More"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ebook;
