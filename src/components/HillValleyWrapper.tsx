/**
 * HillValleyWrapper.tsx
 * ---------------------
 * Renders hills with sequential pop-up animation for target hills.
 * Uses shared hill positioning logic and highlights specific hills in orange.
 *
 * Alan Roy
 * https://github.com/Alan21303/
 * Created: 2025-09-01
 */

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import HillShape from "./HillShape";
import {
  calculateHillPositions,
  getHillItem,
  isTargetHill,
} from "../utils/hillUtils";

interface HillValleyProps {
  rows?: number;
  gapY?: number;
  hillSize?: number;
  baseY?: number;
}

const HillValleyWrapper: React.FC<HillValleyProps> = ({
  rows = 7,
  gapY = 20,
  hillSize = 200,
  baseY = 80,
}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [highlightedHills, setHighlightedHills] = useState<number[]>([]);

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

  // Animation controllers for 4 target hills
  const hillControls = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  // Sequential pop-up animation for target hills
  useEffect(() => {
    async function animateHills() {
      for (let i = 0; i < 4; i++) {
        setHighlightedHills((prev) => [...prev, i]);

        const control = hillControls[i];

        // Pop up
        await control.start({
          y: -150,
          transition: { duration: 1.2, ease: "easeInOut" },
        });

        // Come down with bounce
        await control.start({
          y: -20,
          transition: { type: "tween", duration: 1, ease: "easeInOut" },
        });
      }
    }

    animateHills();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hills = hillPositions.map((hill) => {
    const targetIndex = isTargetHill(hill.row, hill.col);
    const hillItem =
      targetIndex !== -1 && highlightedHills.includes(targetIndex)
        ? "orange"
        : getHillItem(hill.row);

    if (targetIndex !== -1) {
      // Animated target hill
      return (
        <motion.div
          key={`${hill.row}-${hill.col}`}
          className="absolute"
          initial={{ y: 0 }}
          animate={hillControls[targetIndex]}
          style={{
            left: hill.left,
            top: hill.top,
            width: hill.size,
            height: hill.size,
          }}
        >
          <HillShape width={hill.size} height={hill.size} item={hillItem} />
        </motion.div>
      );
    } else {
      // Static hill
      return (
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
          <HillShape width={hill.size} height={hill.size} item={hillItem} />
        </div>
      );
    }
  });

  return (
    <div className="absolute bottom-0 left-0 w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden flex justify-center">
      <div className="relative w-full h-full">{hills}</div>
    </div>
  );
};

export default HillValleyWrapper;
