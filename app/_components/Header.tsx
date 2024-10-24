"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Sidebar from "./Sidebar";
const Header = () => {
  console.log("piyawat header");
  const [lang, setLang] = useState("EN");
  const controls = useAnimation();
  const [theme, setTheme] = useState("dark");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    const animateHeader = async () => {
      // Appear from top to bottom
      await controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1, ease: "easeOut" },
      });

      // Delay for 1 second
      await new Promise((resolve) => setTimeout(resolve, 2500));

      // Change theme
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    animateHeader();
  }, [controls]);

  const circleVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.header
      className={`flex fixed py-10  !w-full justify-between  px-10 z-[9999999] transition-colors duration-[500ms]`}
      initial={{ y: -50, opacity: 0 }}
      animate={controls}
      style={{
        color: theme === "light" ? "#000000" : "#ffffff",
      }}
    >
      <div className="flex">
        <motion.div
          onClick={() => setIsSidebarOpen(true)}
          className="transition-all  hover:bg-black hover:text-white py-1 px-4 rounded-[2rem] border-[1px] border-current"
        >
          Menu
        </motion.div>
        {/* <Image src="/images/cursor.png" alt="cursor" width={16} height={16} /> */}

        <motion.div className="transition-all hover:bg-black hover:text-white *:py-1 h-full aspect-square px-4 rounded-full border-[1px] border-current"></motion.div>
        <motion.div className="transition-all hover:bg-black hover:text-white ml-2 py-1 px-4 rounded-[2rem] border-[1px] border-current">
          Contact
        </motion.div>
      </div>
      <div className="flex gap-2 ml-auto">
        {["EN", "TH"].map((language) => (
          <div
            key={language}
            className="relative p-1 h-8 w-8 flex items-center justify-center cursor-pointer"
            onClick={() => setLang(language)}
          >
            {language}
            {lang === language && (
              <motion.svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                initial="hidden"
                animate="visible"
              >
                <motion.circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  variants={circleVariants}
                />
              </motion.svg>
            )}
          </div>
        ))}
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </motion.header>
  );
};

export default Header;
