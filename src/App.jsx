import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SkillSections from "./components/SkillSections";

const App = () => {
  return (
    <div className="bg-[#11071F] min-h-screen font-sans">
      <Header />
      <HeroSection />
      <SkillSections />
    </div>
  );
};

export default App;
