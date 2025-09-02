/**
 * HillShape.tsx
 * ---------------------
 * Renders a hill SVG with gradient fill. Gradient color depends on the "item" prop.
 *
 * Alan Roy
 * https://github.com/Alan21303/
 * Created: 2025-09-01
 */

import React from "react";

interface HillShapeProps {
  width?: number;
  height?: number;
  className?: string;
  item?: "orange" | "primary-hill" | "secondary-hill" | number;
}

const HillShape: React.FC<HillShapeProps> = ({
  width = 438.96,
  height = 420.18,
  className = "",
  item = "primary-hill",
}) => {
  const gradients: Record<string | number, [string, string]> = {
    orange: ["#E72612", "#FFA066"],
    "primary-hill": ["#0D1B4C", "#019DF7"],
    "secondary-hill": ["#5FC8FA", "#019DF7"],
    0: ["#023DE6", "#0D1B4C"],
    1: ["#019DF7", "#023DE6"],
    2: ["#5FC8FA", "#1030DB"],
    3: ["#D2DEFF", "#1C48E0"],
    4: ["#023DE6", "#1030DB"],
    5: ["#019DF7", "#023DE6"],
    6: ["#5FC8FA", "#023DE6"],
  };

  const [topColor, bottomColor] = gradients[item] || gradients["primary-hill"];

  return (
    <div className={`relative ${className}`}>
      <svg
        width={width}
        height={height * 2}
        viewBox="40 15 240 305"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient
            id={`hillGradient-${item}`}
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor={topColor} />
            <stop offset="100%" stopColor={bottomColor} />
          </linearGradient>
        </defs>
        <path
          d="M140 35 Q160 15 180 35 L260 100 Q280 110 280 130 L280 300 Q280 320 260 320 L60 320 Q40 320 40 300 L40 130 Q40 110 60 100 L140 35 Z"
          fill={`url(#hillGradient-${item})`}
        />
      </svg>
    </div>
  );
};

export default HillShape;
