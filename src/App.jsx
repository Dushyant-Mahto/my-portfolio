import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SkillSections from "./components/SkillSections";
import Projects from "./components/ProjectSection";

const App = () => {
  return (
    <div className="bg-[#11071F] min-h-screen font-sans">
      <Header />
      <HeroSection />
      <SkillSections />
      <Projects />
    </div>
  );
};

export default App;
