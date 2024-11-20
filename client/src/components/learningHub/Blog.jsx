// Blogs.jsx
import React, { useState } from "react";

// const blogs = [
//   {
//     title: "Breaking News: Market Shifts",
//     date: "2024-09-10",
//     description:
//       "A significant shift in the market has been observed over the past few months, leading to a reevaluation of strategies among key industry players. The current economic climate has driven businesses to adapt quickly.",
//     image: "/blog.png",
//   },
//   {
//     title: "Tech Innovation on the Rise",
//     date: "2024-09-12",
//     description:
//       "New advancements in AI and blockchain are rapidly changing the landscape of technology, creating new opportunities and challenges for businesses. These technologies are not only optimizing operations.",
//     image: "/blog.png",
//   },
//   {
//     title: "Advertising Trends of 2024",
//     date: "2024-09-13",
//     description:
//       "In 2024, advertising strategies are shifting towards more personalized, data-driven approaches to better reach target audiences. Marketers are leveraging tools that analyze consumer.",
//     image: "/blog.png",
//   },
//   {
//     title: "Global Economic Update",
//     date: "2024-09-14",
//     description:
//       "The global economy is witnessing a major transition as new financial policies and global trade deals reshape economic power balances. This period of change is characterized by new alliances forming and adjustments.",
//     image: "/blog.png",
//   },
//   {
//     title: "Sustainability in Business",
//     date: "2024-09-15",
//     description:
//       "Businesses are increasingly focused on sustainability, with many companies implementing green practices and eco-friendly initiatives. This movement is driven by a combination of regulatory pressure, consumer demand, and a growing recognition of the need for long-term .",
//     image: "/blog.png",
//   },
// ];

const Blogs = ({ blogs }) => {
  const [expanded, setExpanded] = useState(Array(blogs.length).fill(false));

  const toggleDescription = (index) => {
    const newExpandedState = [...expanded];
    newExpandedState[index] = !newExpandedState[index];
    setExpanded(newExpandedState);
  };

  return (
    <div className="bg-white sm:p-10 p-5 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => {
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

export default Blogs;
