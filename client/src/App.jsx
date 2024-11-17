import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import SelfPacedLearning from "./pages/servicePages/SelfPacedLearning";
import Gamification from "./pages/servicePages/Gamification";
import AnimatedVideos from "./pages/servicePages/AnimatedVideos";
import Storytelling from "./pages/servicePages/storytelling";
import Translation from "./pages/servicePages/Translation";
import Accessibility from "./pages/servicePages/Accessibility";
import LearningExperiences from "./pages/servicePages/LearningExperiences";
import AnimationVideos from "./pages/servicePages/AnimationVideos";
import LXD from "./pages/servicePages/LXD";
import CorporateTraining from "./pages/CorporateTraining.jsx";
import LeadershipDevelopment from "./pages/corporateTrainingPages/LeadershipDevelopment.jsx";
import LearningExperience from "./pages/corporateTrainingPages/LearningExperience.jsx";
import "./App.css";

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
          <Route path="/services/storytelling" element={<Storytelling />} />
          <Route path="/services/translation" element={<Translation />} />
          <Route path="/services/accessibility" element={<Accessibility />} />
          <Route
            path="/services/learning-experiences"
            element={<LearningExperiences />}
          />
          <Route
            path="/services/animation-videos"
            element={<AnimationVideos />}
          />
          <Route path="/services/LXD" element={<LXD />} />

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
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
