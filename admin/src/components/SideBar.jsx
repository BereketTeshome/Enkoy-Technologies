import {
  Event,
  Newspaper,
  PieChart,
  PostAdd,
  RssFeedRounded,
  VolunteerActivism,
  Work,
} from "@mui/icons-material";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SideBar = ({ isOpen }) => {
  const currentPath = useLocation().pathname.split("/")[1];
  const [isDisable, setIsDisable] = useState(true);

  useEffect(() => {
    if (
      currentPath === "login" ||
      currentPath === "forgot-password" ||
      currentPath === "reset-password"
    ) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [currentPath]);

  return (
    <div
      className={`h-screen lg:sticky fixed top-0 duration-300 ease-in-out ${
        isOpen && "-left-[100vw]"
      }  bg-[#070B22] z-40 ${isDisable && "hidden"}`}
    >
      <div className="w-[250px] pt-3 px-2">
        <div className="space-y-2">
          <a
            href="/"
            className={`flex items-center px-4 py-3 gap-2 text-gray-100 text-sm rounded-md ${
              currentPath === "" ? "bg-[#ffffff17]" : "hover:bg-[#ffffff17]"
            }`}
          >
            <PieChart fontSize="small" /> Dashboard
          </a>
          <a
            href="/blogs"
            className={`flex items-center px-4 py-3 gap-2 text-gray-100 text-sm rounded-md ${
              currentPath === "blogs"
                ? "bg-[#ffffff17]"
                : "hover:bg-[#ffffff17]"
            }`}
          >
            <RssFeedRounded fontSize="small" /> Blogs
          </a>
          <a
            href="/ebooks"
            className={`flex items-center px-4 py-3 gap-2 text-gray-100 text-sm rounded-md ${
              currentPath === "ebooks"
                ? "bg-[#ffffff17]"
                : "hover:bg-[#ffffff17]"
            }`}
          >
            <Newspaper fontSize="small" /> Ebooks
          </a>
          <a
            href="/jobs"
            className={`flex items-center px-4 py-3 gap-2 text-gray-100 text-sm rounded-md ${
              currentPath === "jobs" ? "bg-[#ffffff17]" : "hover:bg-[#ffffff17]"
            }`}
          >
            <Work fontSize="small" /> Jobs
          </a>
          <a
            href="/portfolio"
            className={`flex items-center px-4 py-3 gap-2 text-gray-100 text-sm rounded-md ${
              currentPath === "portfolio"
                ? "bg-[#ffffff17]"
                : "hover:bg-[#ffffff17]"
            }`}
          >
            <PostAdd fontSize="small" /> Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
