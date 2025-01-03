"use client";

import { motion, useInView } from "framer-motion";
import MovingText from "./share/MovingText";
import { useEffect, useState } from "react";
import AnimatedText from "./share/AnimatedText";
import CustomButton from "./share/CustomButton";
import { MdAttachMoney } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import StartButton from "./share/startButton";
import Arrow from "./share/Arrow";
import LogoBg from "./share/logoBg";
import LightBulb from "./LightBulb";
import MaskCursor from "./MaskCursor";
import { useLogoStore } from "../store/useLogoStore";

const Hero: React.FC = () => {
  // console.log("hero");
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    // Check for mobile on client-side only
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // You can adjust this breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // const [timer, setTimer] = useState<number>(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTimer((prevTimer) => prevTimer + 1);
  //   }, 1);

  //   return () => clearInterval(interval);
  // }, []);

  console.log("isMobile", isMobile);
  const leftSideWidth = isMobile ? "100%" : "50%";
  if (isMobile === null) return null;
  const handleGetStarted = () => {
    console.log("get started");
    const section = document.getElementById("video");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      id="hero"
      className="w-screen relative  h-screen flex  items-center justify-center  overflow-hidden bg-black z-10 "
    >
      {/* <div className="absolute top-10 right-10 z-[9999]  font-mono text-white/50">
        <div className="text-[50px]">{(timer / 1000).toFixed(3)}s</div>
      </div> */}
      <motion.div
        initial={{ width: "20%", height: "22%" }}
        animate={{
          width: ["20%", "20%", "20%", "20%", "50%", "50%", "100%"],
          height: ["22%", "22%", "22%", "22%", "50%", "50%", "100%"],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          // 0.1 = 0.4 sec
          // 0.33 = 1.32 sec
          // 0.43 = 1.72 sec
          // 0.66 = 2.64 sec
          times: [0, 0.1, 0.33, 0.43, 0.66, 0.8, 1],
        }}
        className="flex z-20   absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  "
      >
        <motion.div
          initial={{
            transform: "translateY(-20%)",
            width: leftSideWidth,
            padding: "0px",
          }}
          animate={{
            transform: [
              "translateY(-20%)",
              "translateY(0)",
              "translateY(0)",
              "translateY(0)",
              "translateY(0)",
              "translateY(0)",
              "translateY(0)",
              "translateY(0)",
            ],
            padding: ["0px", "0px", "0px", "0px", "0px", "0px", "40px", "0px"],
            width: [
              leftSideWidth,
              leftSideWidth,
              leftSideWidth,
              leftSideWidth,
              leftSideWidth,
              leftSideWidth,
              "100%",
            ],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            times: [0, 0.1, 0.33, 0.43, 0.66, 0.8, 0.9, 1],
          }}
          className=" flex-1 !pr-0 flex items-center justify-center flex-col gap-y-1 z-10  absolute bg-transparent  inset-0"
        >
          <motion.div className=" w-full h-full bg-white flex px-5 sm:px-10 relative">
            {isMobile && <LogoBg />}
            <motion.div className="h-full flex  flex-col   justify-center mr-auto w-full md:w-1/2  overflow-hidden z-20">
              <div className=" hidden sm:block absolute top-3 left-3">
                <MovingText text="Quality" />
              </div>
              <div className=" w-full h-full flex flex-col justify-center md:justify-end pt-[91px]  md:py-4">
                <div className=" flex flex-col my-auto ">
                  <div className=" flex flex-col text-start ">
                    <AnimatedText
                      text="Your Website is the"
                      className=" !font-medium text-[25px] sm:text-[3rem] mb-3"
                      delay={3.7}
                    />

                    <AnimatedText
                      className=" !font-medium text-[65px] sm:text-[5rem]  mb-3"
                      text="DigitalDoor"
                      highlightWords={["DigitalDoor"]}
                      delay={3.8}
                    />

                    <AnimatedText
                      className=" !font-medium text-[25px] sm:text-[3rem]"
                      text="to Your Store"
                      delay={3.9}
                    />
                  </div>
                  <div className=" w-full flex items-center justify-between pr-5 sm:pr-10">
                    <div className="flex flex-col text-start mt-4">
                      <div className="h-fit w-fit overflow-y-hidden ">
                        <AnimatedText
                          className=" !font-medium text-[1rem]"
                          text="Let's Build Something Amazing Together"
                          delay={3.7}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" w-full h-[15rem]   mt-10 flex pr-10 gap-x-5">
                  {/* <div className=" flex  flex-col rounded-2xl border-[1px] border-[#EDEFF3] bg-[#FBFCFC]  p-5 pt-10">
                    <Arrow className=" absolute top-0 right-0" />
                    <div className=" w-8 h-8 rounded-full   bg-white p-[1px]">
                      <div className=" bg-black w-full h-full rounded-full"></div>
                    </div>
                    <div className=" w-8 h-8 rounded-full   bg-white translate-x-[50%] p-[1px]">
                      <div className=" bg-black w-full h-full rounded-full"></div>
                    </div>
                    <div className=" w-8 h-8 rounded-full   bg-white translate-x-[100%] p-[1px]">
                      <div className=" bg-black w-full h-full rounded-full"></div>
                    </div>

                    <p>
                      Businesses with a website are likely to reach 55% more
                      customers than those without one.
                    </p>
                  </div> */}
                  <div className=" flex flex-col gap-y-5">
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 3.9 }}
                      className=" flex  group relative  h-fit flex-col rounded-2xl border-[1px] border-[#EDEFF3] bg-[#FBFCFC]  p-5 "
                    >
                      <Arrow className=" !absolute top-0 right-0 !translate-x-[50%] !translate-y-[-50%]" />
                      <p>
                        Businesses with a website are likely to reach 55% more
                        customers than those without one.
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 4.0 }}
                      className="flex relative h-fit flex-col items-center justify-center rounded-2xl p-5 pointer-events-auto"
                    >
                      <button
                        onClick={handleGetStarted}
                        className="group flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-white transition-all hover:bg-gray-800"
                      >
                        Get Started
                        <motion.div
                          animate={{
                            y: [0, 4, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                          </svg>
                        </motion.div>
                      </button>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 3.9 }}
                    className=" flex group ml-auto relative  h-fit flex-col rounded-2xl border-[1px] border-[#EDEFF3] bg-[#FBFCFC]  p-5 "
                  >
                    <Arrow className=" !absolute top-0 right-0 !translate-x-[50%] !translate-y-[-50%]" />
                    <div className=" flex ">
                      <div className=" overflow-hidden w-8 h-8 rounded-full  bg-white p-[1px]">
                        {/* <img className=" cover" src="/images/pp2.jpg" alt="" /> */}
                      </div>
                      <div className=" overflow-hidden w-8 h-8 rounded-full  bg-white translate-x-[-50%] p-[1px]">
                        {/* <img className=" cover" src="/images/pp2.jpg" alt="" /> */}
                      </div>
                      <div className=" overflow-hidden w-8 h-8 rounded-full  bg-white translate-x-[-100%] p-[1px]">
                        {/* <img className=" cover" src="/images/pp3.jpg" alt="" /> */}
                      </div>
                    </div>

                    <p className=" font-normal text-[2rem]">10X</p>
                    <p>Grow with us</p>
                  </motion.div>

                  {/* <div className=" w-12 h-12 rounded-full rounded-bl-none  bg-blue-500  z-50 absolute top-0 right-0"></div> */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ transform: "translateY(20%)" }}
          animate={{
            transform: [
              "translateY(20%)",
              "translateY(0)",
              "translateY(0)",
              "translateY(0)",
              "translateY(0)",
              "translateY(0)",
              "translateY(0)",
            ],
            paddingTop: ["0px", "0px", "0px", "0px", "0px", "20px"],
            paddingRight: ["0px", "0px", "0px", "0px", "0px", "20px"],
            paddingBottom: ["0px", "0px", "0px", "0px", "0px", "20px"],
            borderRadius: ["0px", "0px", "0px", "0px", "0px", "20px"],
          }}
          transition={{
            duration: 4,

            ease: "easeInOut",
            times: [0, 0.1, 0.33, 0.43, 0.66, 0.9, 1],
          }}
          // transition={{ duration: 2, ease: "easeInOut" }}
          className={`h-full w-full   sm:w-1/2  ml-auto relative z-20 bg-transparent ${
            isMobile ? "hidden" : ""
          }`}
        >
          <motion.div
            animate={{
              borderRadius: ["0px", "0px", "0px", "0px", "20px"],
            }}
            transition={{
              duration: 4,

              ease: "easeInOut",
              times: [0, 0.1, 0.33, 0.43, 0.66, 1],
            }}
            className={` w-full h-full bg-primary hidden sm:flex overflow-hidden relative ${
              isMobile ? "hidden" : ""
            }`}
          >
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.21, delay: 3.9 }}
              className="flex h-fit gap-x-2 pl-5 pt-25rem-20px"
            >
              <div className=" w-8 h-8 p-[6px] rounded-full text-black bg-white flex items-center  justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.24 3.88 10.9 6.42 10.21C7.11 11.95 8.59 13.29 10.42 13.79C10.92 13.93 11.45 14 12 14C12.55 14 13.08 13.93 13.58 13.79C13.85 14.47 14 15.22 14 16Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 16C22 19.31 19.31 22 16 22C14.46 22 13.06 21.42 12 20.46C13.23 19.37 14 17.77 14 16C14 15.22 13.85 14.47 13.58 13.79C15.41 13.29 16.89 11.95 17.58 10.21C20.12 10.9 22 13.24 22 16Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className=" w-8 h-8  rounded-full text-black bg-white flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.9889 14.6604L2.46891 13.1404C1.84891 12.5204 1.84891 11.5004 2.46891 10.8804L3.9889 9.36039C4.2489 9.10039 4.4589 8.59038 4.4589 8.23038V6.08036C4.4589 5.20036 5.1789 4.48038 6.0589 4.48038H8.2089C8.5689 4.48038 9.0789 4.27041 9.3389 4.01041L10.8589 2.49039C11.4789 1.87039 12.4989 1.87039 13.1189 2.49039L14.6389 4.01041C14.8989 4.27041 15.4089 4.48038 15.7689 4.48038H17.9189C18.7989 4.48038 19.5189 5.20036 19.5189 6.08036V8.23038C19.5189 8.59038 19.7289 9.10039 19.9889 9.36039L21.5089 10.8804C22.1289 11.5004 22.1289 12.5204 21.5089 13.1404L19.9889 14.6604C19.7289 14.9204 19.5189 15.4304 19.5189 15.7904V17.9403C19.5189 18.8203 18.7989 19.5404 17.9189 19.5404H15.7689C15.4089 19.5404 14.8989 19.7504 14.6389 20.0104L13.1189 21.5304C12.4989 22.1504 11.4789 22.1504 10.8589 21.5304L9.3389 20.0104C9.0789 19.7504 8.5689 19.5404 8.2089 19.5404H6.0589C5.1789 19.5404 4.4589 18.8203 4.4589 17.9403V15.7904C4.4589 15.4204 4.2489 14.9104 3.9889 14.6604Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 15L15 9"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.4945 14.5H14.5035"
                    stroke="#292D32"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.49451 9.5H9.50349"
                    stroke="#292D32"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.div>
            <div className=" absolute bottom-3 right-3">
              <MovingText text="Speed" invert />
            </div>
            <motion.div className="absolute inset-0  w-screen h-screen flex items-center justify-center">
              <div className=" w-1/2 h-full  mr-auto relative flex items-end justify-center">
                {/* <LightBulb /> */}
                <motion.img
                  src="/images/pc.png"
                  alt="computer"
                  className="mt-auto scale-125 absolute right-1/2  w-[97%] "
                  initial={{
                    x: "50%",
                    opacity: 0,
                    rotate: 0,
                    bottom: -100,
                    // scale: 1.4,
                  }}
                  animate={{
                    x: "50%",
                    opacity: 1,
                    translateY: 0,
                    rotate: 0,
                    bottom: 0,
                    // scale: 1.4,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 3.5,
                    ease: "easeOut",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* Add your hero content here */}
      {/* footer */}

      <div className="absolute bottom-5    z-10 px-5 sm:px-10 w-full flex justify-between ">
        <AnimatedText
          big
          delay={0.4}
          className="!text-white text-[5rem] h-[5.5rem] leading-[1em] w-[350px]"
          text="Loading"
        />
        <AnimatedText
          big
          delay={0.4}
          className="!text-white sm:block text-end hidden text-[5rem] h-[5.5rem] leading-[1em] w-[350px] justify-end"
          text="Dream"
        />
      </div>
    </div>
  );
};

export default Hero;
