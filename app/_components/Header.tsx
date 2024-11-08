"use client";

import { useState, useEffect, useRef } from "react";
import { animate, motion, useAnimation } from "framer-motion";
import Sidebar from "./Sidebar";
import { CgMenuRight } from "react-icons/cg";
import { useRouter } from "next/navigation";

const Header = ({ isLogoCenter }: { isLogoCenter: boolean }) => {
  const router = useRouter();
  console.log("piyawat header");
  const [lang, setLang] = useState("EN");
  const controls = useAnimation();
  const [theme, setTheme] = useState("dark");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
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
    console.log("logoRef.current", logoRef.current);
    animate(logoRef.current, {
      x: isLogoCenter ? "-50%" : "-120%",
      transition: { duration: 1.5 },
    });
  };
  const handleTransformHeader = () => {
    animate(headerRef.current, {
      backgroundColor: isLogoCenter ? "#ffffff" : "",
      borderColor: isLogoCenter ? "black" : "",
      borderBottomWidth: isLogoCenter ? "1px" : "",
      borderBottomRightRadius: isLogoCenter ? "40px" : "",
      borderBottomLeftRadius: isLogoCenter ? "40px" : "",
      transition: { duration: 1 },
    });
  };
  useEffect(() => {
    console.log("isLogoCenter", isLogoCenter);
    if (!isInitial) {
      console.log("");
      handleMoveLogo();
      handleTransformHeader();
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
  const handlePush = (path: string) => {
    console.log("path", path);
    router.push(path, { scroll: false });
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
      z-[9999] 
      transform-gpu
      will-change-transform
    `}
      ref={headerRef}
      initial={{
        y: -50,
        opacity: 0,
        backgroundColor: isLogoCenter ? "#ffffff" : "",
        borderColor: isLogoCenter ? "black" : "",
        borderBottomWidth: isLogoCenter ? "1px" : "",
        borderBottomRightRadius: isLogoCenter ? "40px" : "",
        borderBottomLeftRadius: isLogoCenter ? "40px" : "",
      }}
      animate={controls}
      style={{
        color: theme === "light" ? "#000000" : "#ffffff",
      }}
    >
      <div className="pointer-events-auto  w-screen absolute top-0 z-[9999999] h-[300px] flex items-center justify-center">
        <button
          onClick={() => handlePush("/")}
          className="w-[100px] bg-white rounded-full"
        >
          Home
        </button>
        <button
          onClick={() => handlePush("/blue")}
          className="w-[100px] bg-white rounded-full"
        >
          Blue
        </button>
        <button
          onClick={() => handlePush("/green")}
          className="w-[100px] bg-white rounded-full"
        >
          Green
        </button>
      </div>
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
        onAnimationComplete={(definition) => {
          setIsInitial(false);
        }}
        animate={{ x: "-120%" }}
        transition={{ duration: 0.33, delay: isInitial ? 3.82 : 0 }}
      >
        <div className="overflow-hidden transition-all duration-[100ms] max-w-[10rem] flex items-center justify-center  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 400 350"
            className={`  h-auto w-10 ${
              isLogoCenter ? "w-14" : "w-10"
            } transition-all duration-[100ms]`}
            version="1.0"
          >
            <g clipPath="url(#5a55806272)">
              <path
                fill="currentColor"
                d="M 198.992188 37.5 L 78.375 107.140625 L 78.375 246.425781 L 198.992188 316.066406 L 319.613281 246.425781 L 319.613281 107.140625 Z M 198.992188 60.507812 L 299.667969 118.617188 L 299.667969 159.847656 L 198.992188 101.738281 L 124.617188 144.691406 L 234.703125 208.261719 L 198.992188 228.875 L 98.320312 170.765625 L 98.320312 118.675781 Z M 198.992188 124.691406 L 299.667969 182.800781 L 299.667969 234.890625 L 198.992188 293.058594 L 98.320312 234.890625 L 98.320312 193.664062 L 198.992188 251.773438 L 273.371094 208.875 L 163.28125 145.304688 Z M 198.992188 124.691406 "
                fill-opacity="1"
                fillRule="nonzero"
              />
            </g>
          </svg>
          <div className="flex flex-col ">
            <span
              className={` ${
                isLogoCenter ? "text-base" : "text-sm"
              }  leading-[1em] transition-all duration-[100ms]`}
            >
              SIAM
            </span>
            <span
              className={` ${
                isLogoCenter ? "text-[0.7rem]" : "text-[0.5rem]"
              }  leading-[1em] transition-all duration-[100ms]`}
            >
              WEBSOLUTION
            </span>
          </div>
        </div>
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
