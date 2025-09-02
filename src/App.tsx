/**
 * App.tsx
 * ---------------------
 * Main landing page component.
 * Controls sequential rendering and animations of Background, Header, Hills, Runner, and HeroText.
 *
 * Alan Roy
 * https://github.com/Alan21303/
 * Created: 2025-09-01
 */

import React, { useState, useEffect } from "react";
import Background from "./components/Background";
import HillValleyWrapper from "./components/HillValleyWrapper";
import HillValley from "./components/HillValley";
import Runner from "./components/backgroundrunner";
import Header from "./components/Header";
import HeroText from "./components/HeroText";

const App: React.FC = () => {
  const [showHeader] = useState(true); // Header appears immediately
  const [showHillValley, setShowHillValley] = useState(false);
  const [showHeroText, setShowHeroText] = useState(false);
  const [showWrapper, setShowWrapper] = useState(false);

  // Trigger HillValley shortly after page load
  useEffect(() => {
    const timer = setTimeout(() => setShowHillValley(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Show HeroText shortly after HillValley starts
  useEffect(() => {
    if (showHillValley) {
      const heroTimer = setTimeout(() => setShowHeroText(true), 200);
      return () => clearTimeout(heroTimer);
    }
  }, [showHillValley]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background runs immediately */}
      <Background />

      {/* Header runs immediately */}
      {showHeader && <Header />}

      {/* HillValley with Runner */}
      {showHillValley && (
        <>
          <HillValley onAnimationComplete={() => setShowWrapper(true)} />
          <Runner hillWidth={1200} hillHeight={400} />
        </>
      )}

      {/* HeroText appears after a short delay */}
      {showHeroText && <HeroText />}

      {/* HillValleyWrapper after HillValley completes */}
      {showWrapper && <HillValleyWrapper />}
    </div>
  );
};

export default App;
