/**
 * Header.tsx
 * ---------------------
 * Displays the top navigation with logo, nav items, and a connect button.
 * Includes fade-in and drop-down animations using Framer Motion.
 *
 * Alan Roy
 * https://github.com/Alan21303/
 * Created: 2025-09-01
 */

import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const navItems = ["Home", "About", "Terms"];

interface HeaderProps {
  onAnimationComplete?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAnimationComplete }) => {
  const [active, setActive] = useState("Home");

  // Animation variants
  const fallDownVariant = {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 },
  };
  const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];
  const baseTransition = { duration: 1.5, ease: easeOut };

  return (
    <>
      {/* Background overlay during animation */}
      <motion.div
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 0 }}
        transition={baseTransition}
        className="fixed inset-0 bg-[#010144] z-40 pointer-events-none"
        onAnimationComplete={onAnimationComplete}
      />

      <header className="w-full fixed top-0 left-0 z-50 px-8 py-4 flex items-center justify-between bg-transparent">
        {/* Logo */}
        <motion.div
          variants={fallDownVariant}
          initial="hidden"
          animate="visible"
          transition={{ ...baseTransition, delay: 0 }}
          className="flex items-center"
        >
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </motion.div>

        {/* Navigation items */}
        <nav className="relative flex gap-10">
          {navItems.map((item, index) => (
            <motion.button
              key={item}
              variants={fallDownVariant}
              initial="hidden"
              animate="visible"
              transition={{ ...baseTransition, delay: (index + 1) * 0.2 }}
              onClick={() => setActive(item)}
              className="relative text-white font-medium pb-2 transition-colors duration-300"
            >
              {item}
              <span
                className={`absolute left-0 -bottom-1 h-[3px] bg-orange-500 rounded-md transition-all duration-500 origin-left ${
                  active === item ? "w-full scale-x-100" : "w-full scale-x-0"
                }`}
              />
            </motion.button>
          ))}
        </nav>

        {/* Connect button */}
        <motion.div
          variants={fallDownVariant}
          initial="hidden"
          animate="visible"
          transition={{ ...baseTransition, delay: (navItems.length + 1) * 0.2 }}
        >
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-200 transition">
            Connect
          </button>
        </motion.div>
      </header>
    </>
  );
};

export default Header;
