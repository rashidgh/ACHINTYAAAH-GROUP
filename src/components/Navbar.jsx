import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";

const navItems = [
  { label: "Home", hash: "#home" },
  { label: "Services", hash: "#services" },
  { label: "About", hash: "#about" },
  { label: "Contact", hash: "#contact" },
];

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const isNight = theme === "night";

  const handleClick = (hash) => {
    setActive(hash);
    setOpen(false);
    document.querySelector(hash)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const toggleTheme = () => {
    setTheme(isNight ? "day" : "night");
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 z-50 transition-colors duration-300 w-screen
        ${isNight ? "bg-[#0B0F1A]/90 text-white backdrop-blur-lg" : "bg-white/90 text-gray-800 backdrop-blur-md shadow-md"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => handleClick("#home")}
          className={`flex items-center gap-2 text-lg font-bold cursor-pointer ${isNight ? "text-white" : "text-gray-900"}`}
        >
          <img className="rounded-full" src="/logo.jpeg" alt="Logo" width={36} />
          ACHINTYAAAH <span className={isNight ? "text-indigo-400" : "text-indigo-500"}>GROUP</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.hash}
              onClick={() => handleClick(item.hash)}
              className={`
                relative text-sm font-medium cursor-pointer transition
                ${active === item.hash
                  ? isNight
                    ? "text-indigo-400"
                    : "text-indigo-600"
                  : isNight
                    ? "text-white hover:text-indigo-300"
                    : "text-gray-800 hover:text-indigo-500"
                }
              `}
            >
              {item.label}
              {active === item.hash && (
                <motion.span
                  layoutId="activeLink"
                  className={`
                    absolute left-0 -bottom-1 w-full h-[2px]
                    ${isNight ? "bg-indigo-400" : "bg-indigo-500"}
                  `}
                />
              )}
            </button>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`
              ml-4 p-2 rounded-full transition
              ${isNight ? "bg-white/10 text-white hover:bg-white/20" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}
            `}
          >
            {isNight ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className={`
            md:hidden p-2 rounded-full transition
            ${isNight ? "bg-white/10 text-white hover:bg-white/20" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}
          `}
          onClick={() => setOpen(true)}
        >
          <Menu size={26} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "110%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "110%", opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={`
              fixed top-0 right-0 h-screen  p-6 overflow-y-auto transition-colors duration-300 z-50
              ${isNight ? "bg-[#0B0F1A] text-white" : "bg-white text-gray-800"}
              shadow-2xl border-l ${isNight ? "border-white/10 w-screen" : "border-gray-200 w-screen"}
            `}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={toggleTheme}
                className={`
                  p-2 rounded-full transition
                  ${isNight ? "bg-white/10 text-white hover:bg-white/20" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}
                `}
              >
                {isNight ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setOpen(false)}
                className={`
                  p-2 rounded-full transition
                  ${isNight ? "bg-white/10 text-white hover:bg-white/20" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}
                `}
              >
                <X size={20} />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col divide-y transition-colors duration-300"
                 style={{ borderColor: isNight ? "rgba(255,255,255,0.1)" : "rgba(209,213,219,1)" }}>
              {navItems.map((item) => (
                <button
                  key={item.hash}
                  onClick={() => handleClick(item.hash)}
                  className={`
                    py-4 px-3 text-left text-lg font-medium rounded-xl transition
                    ${active === item.hash
                      ? isNight
                        ? "text-indigo-400 bg-white/5"
                        : "text-indigo-600 bg-gray-100"
                      : isNight
                        ? "text-white hover:bg-white/10"
                        : "text-gray-800 hover:bg-gray-200"
                    }
                  `}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
