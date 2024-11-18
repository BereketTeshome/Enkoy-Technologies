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

const App = () => {
  return (
    <div className="">
      <NavBar />
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

          {/* Our work */}
          <Route path="/portfolio" element={<Portfolio />} />

          {/* Contact Us Page */}
          <Route path="/contact" element={<Contact />} />

          {/* Add a fallback route (optional) */}
          <Route path="*" element={<UnderConstruction />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
