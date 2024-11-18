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
import OurSustainability from "./pages/aboutAsPages/OurSustainability.jsx";

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
          <Route
            path="/about-us/our-sustainability"
            element={<OurSustainability />}
          />
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
