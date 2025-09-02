/**
 * HillValley.tsx
 * ---------------------
 * Renders a grid of hills with animated pop and scale effects.
 * Hill positions are calculated dynamically based on screen width and props.
 *
 * Alan Roy
 * https://github.com/Alan21303/
 * Created: 2025-09-01
 */

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HillShape from "./HillShape";
import { calculateHillPositions, getHillItem } from "../utils/hillUtils";

interface HillValleyProps {
  rows?: number;
  gapY?: number;
  hillSize?: number;
  baseY?: number;
  onAnimationComplete?: () => void;
}

const HillValley: React.FC<HillValleyProps> = ({
  rows = 7,
  gapY = 20,
  hillSize = 200,
  baseY = 80,
  onAnimationComplete,
}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update screen width on resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hillPositions = calculateHillPositions({
    rows,
    gapY,
    hillSize,
    baseY,
    screenWidth,
  });

  return (
    <div className="absolute bottom-0 left-0 w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden flex justify-center">
      <motion.div
        className="relative w-full h-full"
        initial={{ opacity: 0.3, y: 180, x: -20, scale: 1 }}
        animate={{
          opacity: [0.3, 0.7, 1],
          y: [0, -150, 0],
          x: 0,
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 3, ease: "easeInOut", times: [0, 0.6, 1] }}
        onAnimationComplete={onAnimationComplete}
      >
        {hillPositions.map((hill) => (
          <div
            key={`${hill.row}-${hill.col}`}
            className="absolute"
            style={{
              left: hill.left,
              top: hill.top,
              width: hill.size,
              height: hill.size,
              opacity: hill.opacity,
            }}
          >
            <HillShape
              width={hill.size}
              height={hill.size}
              item={getHillItem(hill.row)}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HillValley;
