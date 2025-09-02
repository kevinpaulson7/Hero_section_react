/**
 * BackgroundRunner.tsx
 * ---------------------
 * Animates a hill image with swing and stretch effects using Framer Motion.
 * Props control size and animation speed.
 *
 * Alan Roy
 * https://github.com/Alan21303/
 * Created: 2025-09-01
 */

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import hillImage from "../assets/third-hill.png";

interface BackgroundRunnerProps {
  hillWidth?: number;
  hillHeight?: number;
  swingDuration?: number;
  stretchDuration?: number;
}

const BackgroundRunner: React.FC<BackgroundRunnerProps> = ({
  hillWidth = 1000,
  hillHeight = 300,
  swingDuration = 30,
  stretchDuration = 2,
}) => {
  const controls = useAnimation();
  const horizontalOffset = 250;

  useEffect(() => {
    const animate = async () => {
      // Stretch effect
      await controls.start({
        scaleY: [1, 1.25, 1],
        scaleX: [1, 1.5, 1],
        transition: { duration: stretchDuration, ease: "easeOut" },
      });

      // Continuous swing
      controls.start({
        x: [0, -horizontalOffset, 0, horizontalOffset, 0],
        transition: {
          repeat: Infinity,
          duration: swingDuration,
          ease: "easeInOut",
        },
      });
    };

    animate();
  }, [controls, stretchDuration, swingDuration]);

  return (
    <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
      <motion.img
        src={hillImage}
        alt="hill"
        className="absolute"
        style={{ width: hillWidth, height: hillHeight }}
        initial={{ scaleY: 1, scaleX: 1, x: 0 }}
        animate={controls}
      />
    </div>
  );
};

export default BackgroundRunner;
