/**
 * HeroText.tsx
 * ---------------------
 * Displays animated hero text in the center of the screen using Framer Motion.
 *
 * Alan Roy
 * https://github.com/Alan21303/
 * Created: 2025-09-01
 */

import React from "react";
import { motion } from "framer-motion";
import "./css/HeroText.css";

const HeroText: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
      <motion.div
        className="text-center transform -translate-y-16"
        initial={{ opacity: 0, scale: 0.2, y: 40 }}
        animate={{ opacity: 1, scale: 1.2, y: -25, x: -30 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <h1 className="hero-text text-6xl md:text-7xl lg:text-8xl text-white leading-tight">
          Experts and
        </h1>
        <h2 className="hero-text text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
          AI co-create.
        </h2>
      </motion.div>
    </div>
  );
};

export default HeroText;
