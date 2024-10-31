"use client";

import { motion, useInView } from "framer-motion";
import MovingText from "./share/MovingText";
import { useEffect, useRef, useState } from "react";
import AnimatedText from "./share/AnimatedText";
import isMobile from "../_hook/useIsMobile";
import useIsMobile from "../_hook/useIsMobile";
import CustomButton from "./share/CustomButton";
import { MdAttachMoney } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import StartButton from "./share/startButton";

const Hero: React.FC<{ onInView: (value: boolean) => void }> = ({
  onInView,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    onInView(!isInView);
  }, [isInView, onInView]);
  const isMobile = useIsMobile();
  const leftSideWidth = isMobile ? "100%" : "50%";
  return (
    <div
      id="hero"
      className="w-screen relative  h-screen flex  items-center justify-center  overflow-hidden bg-black "
    >
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
        className="flex z-20   absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
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
          <motion.div className=" w-full h-full bg-white flex px-5 sm:px-10">
            <motion.div className="h-full flex  flex-col   justify-center mr-auto sm:w-1/2  overflow-hidden">
              <div className=" absolute top-3 left-3">
                <MovingText text="Quality" />
              </div>
              <div className=" w-full h-full flex flex-col justify-end py-4">
                <div className=" flex flex-col ">
                  <div className=" flex flex-col text-start ">
                    <AnimatedText
                      text="Your Website is the"
                      className=" !font-medium text-[2rem] mb-3"
                      delay={3.5}
                    />

                    <AnimatedText
                      className=" !font-medium text-[4rem] mb-3"
                      text="DigitalDoor"
                      highlightWords={["DigitalDoor"]}
                      delay={3.6}
                    />

                    <AnimatedText
                      className=" !font-medium text-[2rem]"
                      text="to Your Store"
                      delay={3.7}
                    />
                  </div>
                  <div className=" w-full flex items-center justify-between pr-5 sm:pr-10">
                    <div className="flex flex-col text-start mt-4">
                      <div className="h-fit w-fit overflow-y-hidden ">
                        <AnimatedText
                          className=" !font-medium text-[1rem]"
                          text="Unlock Your Digital Potential"
                          delay={3.7}
                        />
                      </div>
                      <div className="h-fit w-fit overflow-y-hidden  ">
                        <AnimatedText
                          className=" !font-medium text-[1rem]"
                          text="with Cutting-Edge Solutions"
                          delay={3.7}
                        />
                      </div>
                    </div>
                    <StartButton className=" mt-5 w-fit" delay={1.7} />
                  </div>
                </div>
                <div className=" w-full h-[20rem]  border mt-10 flex">
                  <div className=" ml-auto rounded-2xl flex flex-col p-1   h-fit w-fit relative">
                    <div className=" w-12 h-12 rounded-full bg-blue-500 z-50 absolute top-3 right-0"></div>

                    <div className=" flex bg-red-500 relative w-3/4 h-12 rounded-t-2xl translate-y-[10px] p-2">
                      <div className=" w-8 h-8 rounded-full absolute  top-2 left-2 bg-white p-[1px]">
                        <div className=" bg-black w-full h-full rounded-full"></div>
                      </div>
                      <div className=" w-8 h-8 rounded-full absolute  top-2 left-2 bg-white translate-x-[50%] p-[1px]">
                        <div className=" bg-black w-full h-full rounded-full"></div>
                      </div>
                      <div className=" w-8 h-8 rounded-full absolute  top-2 left-2 bg-white translate-x-[100%] p-[1px]">
                        <div className=" bg-black w-full h-full rounded-full"></div>
                      </div>
                    </div>
                    <div className=" flex flex-col rounded-2xl rounded-tl-none bg-red-500 p-2">
                      <p className=" font-normal text-[2rem]">10X</p>
                      <p>Grow with us</p>
                    </div>
                  </div>
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
          className="h-full  sm:w-1/2  ml-auto relative z-20 bg-transparent "
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
            className=" w-full h-full bg-primary  flex overflow-hidden relative"
          >
            <motion.div
              ref={ref}
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
            <motion.div className="absolute inset-0  w-screen h-screen">
              <motion.img
                src="/images/computer.png"
                alt="computer"
                className="mt-auto  w-[750px] h-[750px]     absolute  "
                initial={{
                  opacity: 0,
                  rotate: 0,
                  bottom: -400,
                }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  rotate: 0,
                  bottom: -200,
                }}
                transition={{
                  duration: 0.5,
                  delay: 3.5,
                  ease: "easeOut",
                }}
              />
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
