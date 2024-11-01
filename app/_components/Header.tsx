"use client";

import { useState, useEffect, useRef } from "react";
import { animate, motion, useAnimation } from "framer-motion";
import Sidebar from "./Sidebar";
import { CgMenuRight } from "react-icons/cg";

const Header = ({ isLogoCenter }: { isLogoCenter: boolean }) => {
  console.log("piyawat header");
  const [lang, setLang] = useState("EN");
  const controls = useAnimation();
  const [theme, setTheme] = useState("dark");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);
  console.log("header", isLogoCenter);
  const [isInitial, setIsInitial] = useState(true);
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
  const handleMoveLogo = () => {
    animate(logoRef.current, {
      x: isLogoCenter ? "-50%" : "-120%",
      transition: { duration: 1 },
    });
  };
  useEffect(() => {
    console.log("isLogoCenter", isLogoCenter);
    if (!isInitial) {
      handleMoveLogo();
    }
  }, [isLogoCenter, isInitial]);

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
      className={`
      pointer-events-none 
      fixed 
      flex 
      w-full 
      justify-between 
      py-7 
      px-5 
      sm:px-10 
      z-[9999999] 
      transition-colors 
      duration-[500ms]
      bg-white/50
      transform-gpu
      will-change-transform
      supports-[backdrop-filter]:bg-white/50
      supports-[backdrop-filter]:backdrop-blur-xl
      supports-[backdrop-filter]:backdrop-saturate-[160%]
      supports-[backdrop-filter]:backdrop-contrast-[45%]
      supports-[backdrop-filter]:backdrop-brightness-[140%]
    `}
      initial={{ y: -50, opacity: 0 }}
      animate={controls}
      style={{
        color: theme === "light" ? "#000000" : "#ffffff",
      }}
    >
      <div className="flex  pointer-events-auto">
        <div className=" flex group">
          <motion.div
            onClick={() => setIsSidebarOpen(true)}
            className="transition-all   group-hover:bg-black group-hover:text-white py-1 px-4 rounded-[2rem] border-[1px] border-current"
          >
            Menu
          </motion.div>
          {/* <Image src="/images/cursor.png" alt="cursor" width={16} height={16} /> */}

          <motion.div className="transition-all group-hover:bg-black group-hover:text-white  h-full aspect-square flex items-center justify-center rounded-full border-[1px] border-current">
            <CgMenuRight className="w-[20px] h-[20px]" />
          </motion.div>
        </div>
        <motion.div className="transition-all hover:bg-black hover:text-white ml-2 py-1 px-4 rounded-[2rem] border-[1px] border-current">
          Contact
        </motion.div>
      </div>
      <motion.div
        ref={logoRef}
        className="flex gap-x-2 -translate-y-[50%] left-1/2 -translate-x-[50%] top-1/2  mx-auto items-center text-2xl font-semibold absolute "
        initial={{ x: "-50%", y: "-50%" }}
        onLayoutAnimationComplete={() => {
          console.log("onLayoutAnimationComplete");
        }}
        onAnimationComplete={(definition) => {
          setIsInitial(false);
        }}
        animate={{ x: "-120%" }}
        transition={{ duration: 0.33, delay: isInitial ? 3.82 : 0 }}
      >
        <div
          style={{
            backgroundColor: theme == "light" ? "#000000" : "#ffffff",
          }}
          className="overflow-hidden transition-all duration-[100ms] w-6 h-6 flex items-center justify-center gap-x-2"
        >
          <span
            style={{
              color: theme !== "light" ? "#000000" : "#ffffff",
            }}
            className="-rotate-[10deg] transition-all duration-[100ms] text-[15px] font-bold font-sans"
          >
            S
          </span>
        </div>
        <p className="text-base font-semibold">SSolution</p>
      </motion.div>
      <div className="flex gap-2  pointer-events-auto ">
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
