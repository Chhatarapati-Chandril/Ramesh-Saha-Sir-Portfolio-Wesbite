import React, { useEffect, useState } from "react";

import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Timeline from "./components/Timeline";
import Education from "./components/Education";
import Expertise from "./components/Expertise";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FadeIn from "./components/FadeIn";
import ResearchPapers from "./components/ResearchPapers";

import "./index.scss";

type ThemeMode = "light" | "dark";

function App() {
  const [mode, setMode] = useState<ThemeMode>("light");

  const handleModeChange = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <div
      className={`main-container ${
        mode === "dark" ? "dark-mode" : "light-mode"
      }`}
    >
      {/* Navigation expects parentToChild + modeChange */}
      <Navigation
        parentToChild={{ mode }}
        modeChange={handleModeChange}
      />

      <FadeIn transitionDuration={700}>
        <Main />
        <Timeline />
        <Education />
        <Expertise />
        <Project />
        <ResearchPapers />
        <Contact />
      </FadeIn>

      <Footer />
    </div>
  );
}

export default App;
