import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";
import { useSelector } from "react-redux";
import ChatBot from "./components/ChatBot.jsx";
import ChatbotLauncher from "./components/ChatbotLauncher.jsx";
import Loader from "./components/Loader.jsx";
import ReactGA from 'react-ga'

ReactGA.initialize('G-S3EY21WLWQ')

const HomePage = lazy(() => import("./pages/HomePage"));
const SelfPacedLearning = lazy(() => import("./pages/servicePages/SelfPacedLearning"));
const Gamification = lazy(() => import("./pages/servicePages/Gamification"));
const AnimatedVideos = lazy(() => import("./pages/servicePages/AnimatedVideos"));
const Translation = lazy(() => import("./pages/servicePages/Translation"));
const Accessibility = lazy(() => import("./pages/servicePages/Accessibility"));
const LearningExperiences = lazy(() => import("./pages/servicePages/LearningExperiences"));
const AnimationVideos = lazy(() => import("./pages/servicePages/AnimationVideos"));
const LXD = lazy(() => import("./pages/servicePages/LXD"));
const CorporateTraining = lazy(() => import("./pages/CorporateTraining"));
const LeadershipDevelopment = lazy(() => import("./pages/corporateTrainingPages/LeadershipDevelopment"));
const LearningExperience = lazy(() => import("./pages/corporateTrainingPages/LearningExperience"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Story = lazy(() => import("./pages/servicePages/Story"));
const PersonalDevelopment = lazy(() => import("./pages/corporateTrainingPages/PersonalDevelopment"));
const BasicComputer = lazy(() => import("./pages/corporateTrainingPages/BasicComputer"));
const Employability = lazy(() => import("./pages/corporateTrainingPages/Employability"));
const DecentWork = lazy(() => import("./pages/corporateTrainingPages/DecentWork"));
const Safety = lazy(() => import("./pages/corporateTrainingPages/Safety"));
const FairEmployment = lazy(() => import("./pages/corporateTrainingPages/FairEmployment"));
const WorkLife = lazy(() => import("./pages/corporateTrainingPages/WorkLife"));
const Blogs = lazy(() => import("./pages/learningHub/Blogs"));
const Contact = lazy(() => import("./pages/Contact"));
const UnderConstruction = lazy(() => import("./pages/UnderConstruction"));
const SoftSkill = lazy(() => import("./pages/corporateTrainingPages/SoftSkill.jsx"));
const OurTeam = lazy(() => import("./pages/aboutAsPages/OurTeam.jsx"));
const OurDEI = lazy(() => import("./pages/aboutAsPages/OurDEI.jsx"));
const Careers = lazy(() => import("./pages/aboutAsPages/Careers.jsx"));
const InstructionalDesign = lazy(() => import("./pages/servicePages/InstructionalDesign.jsx"));
const TrainingDigitalization = lazy(() => import("./pages/servicePages/TrainingDigitalization.jsx"));
const VideoEditing = lazy(() => import("./pages/servicePages/VideoEditing.jsx"));
const GraphicsDesign = lazy(() => import("./pages/servicePages/GraphicsDesign.jsx"));
const BasicComputerSkill = lazy(() => import("./pages/servicePages/BasicComputerSkill.jsx"));
const EmployabilitySkill = lazy(() => import("./pages/servicePages/EmployabilitySkill.jsx"));
const PersonalDev = lazy(() => import("./pages/servicePages/PersonalDev.jsx"));
const LeadershipSkill = lazy(() => import("./pages/servicePages/LeadershipSkill.jsx"));
const Portfolio = lazy(() => import("./pages/Portfolio.jsx"));
const Ebooks = lazy(() => import("./pages/learningHub/Ebooks.jsx"));
const OurWork = lazy(() => import("./pages/OurWork.jsx"));
const DetailedWork = lazy(() => import("./pages/DetailedWork.jsx"));
const DigitalTrainingOverview = lazy(() => import("./pages/DigitalTrainingOverview.jsx"));
const BlogDetail = lazy(() => import("./pages/BlogDetail.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const MyBlog = lazy(() => import("./pages/MyBlog.jsx"));
const AddBlogPage = lazy(() => import("./pages/AddBlogPage.jsx"));
const EbookDetail = lazy(() => import("./pages/learningHub/EbookDetail.jsx"));
const Register = lazy(() => import("./pages/Register.jsx"));
const BlogAuthor = lazy(() => import("./pages/authors/BlogAuthor.jsx"));
const AddEbookPage = lazy(() => import("./pages/AddEbookPage.jsx"));
const MyEbook = lazy(() => import("./pages/MyEbook.jsx"));
const EbookAuthor = lazy(() => import("./pages/authors/EbookAuthor.jsx"));
const UserProfilePage = lazy(() => import("./pages/UserProfilePage.jsx"));
const EventCalendarPage = lazy(() => import("./pages/EventCalendarPage.jsx"));
const Jobs = lazy(() => import("./pages/learningHub/Jobs.jsx"));


const App = () => {
  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";

  return (
        <Suspense fallback={<Loader />}>
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
          <Route path="/careers" element={<Jobs />} />

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
        </Suspense>
  );
};

export default App;
