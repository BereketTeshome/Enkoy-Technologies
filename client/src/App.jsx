import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import SelfPacedLearning from "./pages/servicePages/SelfPacedLearning";
import Gamification from "./pages/servicePages/Gamification";
import AnimatedVideos from "./pages/servicePages/AnimatedVideos";
import Translation from "./pages/servicePages/Translation";
import Accessibility from "./pages/servicePages/Accessibility";
import LearningExperiences from "./pages/servicePages/LearningExperiences";
import AnimationVideos from "./pages/servicePages/AnimationVideos";
import LXD from "./pages/servicePages/LXD";
import CorporateTraining from "./pages/CorporateTraining.jsx";
import LeadershipDevelopment from "./pages/corporateTrainingPages/LeadershipDevelopment.jsx";
import LearningExperience from "./pages/corporateTrainingPages/LearningExperience.jsx";
import "./App.css";
import Story from "./pages/servicePages/Story";
import PersonalDevelopment from "./pages/corporateTrainingPages/PersonalDevelopment.jsx";
import BasicComputer from "./pages/corporateTrainingPages/BasicComputer.jsx";
import Employability from "./pages/corporateTrainingPages/Employability.jsx";
import DecentWork from "./pages/corporateTrainingPages/DecentWork.jsx";
import FairEmployment from "./pages/corporateTrainingPages/FairEmployment.jsx";
import Safety from "./pages/corporateTrainingPages/Safety.jsx";
import WorkLife from "./pages/corporateTrainingPages/WorkLife.jsx";
import SoftSkill from "./pages/corporateTrainingPages/SoftSkill.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import OurTeam from "./pages/aboutAsPages/OurTeam.jsx";
import OurDEI from "./pages/aboutAsPages/OurDEI.jsx";
import Careers from "./pages/aboutAsPages/Careers.jsx";
import InstructionalDesign from "./pages/servicePages/InstructionalDesign.jsx";
import TrainingDigitalization from "./pages/servicePages/TrainingDigitalization.jsx";
import VideoEditing from "./pages/servicePages/VideoEditing.jsx";
import GraphicsDesign from "./pages/servicePages/GraphicsDesign.jsx";
import BasicComputerSkill from "./pages/servicePages/BasicComputerSkill.jsx";
import EmployabilitySkill from "./pages/servicePages/EmployabilitySkill.jsx";
import PersonalDev from "./pages/servicePages/PersonalDev.jsx";
import LeadershipSkill from "./pages/servicePages/LeadershipSkill.jsx";
import Contact from "./pages/Contact.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import UnderConstruction from "./pages/UnderConstruction.jsx";
import Blogs from "./pages/learningHub/Blogs.jsx";
import Ebooks from "./pages/learningHub/Ebooks.jsx";
import OurWork from "./pages/OurWork.jsx";
import DetailedWork from "./pages/DetailedWork.jsx";
// import DigitalTraining from "./components/navbar_popups/DigitalTraining.jsx";
import DigitalTrainingOverview from "./pages/DigitalTrainingOverview.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";
import Login from "./pages/Login.jsx";
import MyBlog from "./pages/MyBlog.jsx";
import AddBlogPage from "./pages/AddBlogPage.jsx";
import EbookDetail from "./pages/learningHub/EbookDetail.jsx";
import Register from "./pages/Register.jsx";
import BlogAuthor from "./pages/authors/BlogAuthor.jsx";
import AddEbookPage from "./pages/AddEbookPage.jsx";
import MyEbook from "./pages/MyEbook.jsx";
import EbookAuthor from "./pages/authors/EbookAuthor.jsx";
import UserProfilePage from "./pages/UserProfilePage.jsx";
import EventCalendarPage from "./pages/EventCalendarPage.jsx";
import { useSelector } from "react-redux";
import ChatBot from "./components/ChatBot.jsx";
import ChatbotLauncher from "./components/ChatbotLauncher.jsx";

const App = () => {
  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";

  return (
    <div className={`${isDarkTheme ? "bg-gray-800 " : "bg-white"} `}>
      <NavBar />
      <ChatbotLauncher />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* services */}
          <Route
            path="/services/self-paced-learning"
            element={<SelfPacedLearning />}
          />
          <Route path="/services/gamification" element={<Gamification />} />
          <Route
            path="/services/animated-videos"
            element={<AnimatedVideos />}
          />
          <Route path="/services/storytelling" element={<Story />} />
          <Route path="/services/translation" element={<Translation />} />
          <Route
            path="/services/instructional-design"
            element={<InstructionalDesign />}
          />
          <Route
            path="/services/training-digitalization"
            element={<TrainingDigitalization />}
          />
          <Route path="/services/accessibility" element={<Accessibility />} />
          <Route
            path="/services/learning-experiences"
            element={<LearningExperiences />}
          />

          <Route path="/services/LXD" element={<LXD />} />

          <Route
            path="/services/animation-videos"
            element={<AnimationVideos />}
          />

          <Route path="/services/video-editing" element={<VideoEditing />} />

          <Route
            path="/services/graphics-design"
            element={<GraphicsDesign />}
          />
          <Route
            path="/services/leadership-skill"
            element={<LeadershipSkill />}
          />
          <Route
            path="/services/personal-development"
            element={<PersonalDev />}
          />
          <Route
            path="/services/employability-skill"
            element={<EmployabilitySkill />}
          />
          <Route
            path="/services/computer-skill"
            element={<BasicComputerSkill />}
          />

          {/* Corporate Training */}

          <Route path="/corporate-training" element={<CorporateTraining />} />

          <Route
            path="/corporate-training/leadership"
            element={<LeadershipDevelopment />}
          />
          <Route
            path="/corporate-training/learning-experience"
            element={<LearningExperience />}
          />
          <Route
            path="/corporate-training/personal-development"
            element={<PersonalDevelopment />}
          />
          <Route
            path="/corporate-training/basic-computer"
            element={<BasicComputer />}
          />

          <Route
            path="/corporate-training/employability"
            element={<Employability />}
          />
          <Route
            path="/corporate-training/decent-Work"
            element={<DecentWork />}
          />
          <Route
            path="/corporate-training/fair-employment"
            element={<FairEmployment />}
          />
          <Route path="/corporate-training/safety" element={<Safety />} />
          <Route path="/corporate-training/work-life" element={<WorkLife />} />
          <Route
            path="/corporate-training/soft-skill"
            element={<SoftSkill />}
          />

          {/* aboutUs */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-us/our-team" element={<OurTeam />} />
          <Route path="/about-us/our-DEI" element={<OurDEI />} />
          <Route path="/about-us/careers" element={<Careers />} />

          {/* Learning Hub */}
          <Route path="/blog" element={<Blogs />} />
          <Route path="/ebooks" element={<Ebooks />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/ebooks/:id" element={<EbookDetail />} />

          {/* Add blog page */}
          <Route path="/manage-blogs" element={<MyBlog />} />
          <Route path="/add-blog" element={<AddBlogPage />} />

          {/* Authors page */}
          <Route path="/blog/user/:id" element={<BlogAuthor />} />
          <Route path="/ebook/user/:id" element={<EbookAuthor />} />

          {/* Add ebook page */}
          <Route path="/manage-ebooks" element={<MyEbook />} />
          <Route path="/add-ebook" element={<AddEbookPage />} />

          {/* Our work */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/our-work/:id" element={<DetailedWork />} />

          {/* User Profile Page  */}
          <Route path="/profile" element={<UserProfilePage />} />

          {/* Event Calender Page  */}
          <Route path="/events" element={<EventCalendarPage />} />

          {/* DIgital training Page */}
          <Route
            path="/digital-training"
            element={<DigitalTrainingOverview />}
          />

          {/* Contact Us Page */}
          <Route path="/contact" element={<Contact />} />

          {/* Login and Registration Page */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/bot" element={<ChatBot />} />

          {/* Add a fallback route (optional) */}
          <Route path="*" element={<UnderConstruction />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
