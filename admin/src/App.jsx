import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogsPage";

import AddBlogPage from "./pages/AddBlogPage";

import EditBlogPage from "./pages/EditBlogPage";

import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import EbooksPage from "./pages/EbooksPage";
import AddEbookPage from "./pages/AddEbooksPage";
import JobsPage from "./pages/JobsPage";
import AddJobPage from "./pages/AddJobPage";
import EditEbookPage from "./pages/EditEbookPage";
import EditJobPage from "./pages/EditJobsPage";
import PortfolioPage from "./pages/PortfolioPage";
import EditPortfolioPage from "./pages/EditPortfolioPage";
import AddPortfolioPage from "./pages/AddPortfolioPage";

const App = () => {
  const navigate = useNavigate();
  const locationName = useLocation().pathname.split("/")[1];
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      <SideBar isOpen={isOpen} />
      <div className="flex-grow bg-[#F0F2FF] px-8">
        <Routes>
          {sessionStorage.getItem("user_token") && (
            <>
              <Route path="/" element={<HomePage />} />
              <Route path="/blogs" element={<BlogPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/ebooks" element={<EbooksPage />} />
              <Route path="/jobs" element={<JobsPage />} />
              <Route path="/add-blog" element={<AddBlogPage />} />
              <Route path="/edit-blog/:id" element={<EditBlogPage />} />
              <Route path="/add-ebooks" element={<AddEbookPage />} />
              <Route path="/edit-ebook/:id" element={<EditEbookPage />} />
              <Route path="/add-portfolio" element={<AddPortfolioPage />} />
              <Route path="/add-jobs" element={<AddJobPage />} />
              <Route path="/edit-jobs/:id" element={<EditJobPage />} />
              <Route
                path="/edit-portfolio/:id"
                element={<EditPortfolioPage />}
              />
            </>
          )}
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/reset-password/:id/:token"
            element={<ResetPassword />}
          />
          {/* Catch-all route that redirects to login */}
          {/* <Route path="*" element={<Navigate to="/login" />} /> */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
      <button
        className={`fixed top-4 left-5 rotate-90 font-semibold ${
          !isOpen ? "text-gray-50" : "text-[#121e2d]"
        } lg:hidden z-50 `}
        onClick={() => setIsOpen(!isOpen)}
      >
        |||
      </button>
    </div>
  );
};

export default App;
