"use client";

import { motion } from "framer-motion";
import MovingText from "./share/MovingText";
import { useEffect, useState } from "react";
import AnimatedText from "./share/AnimatedText";
import isMobile from "../_hook/useIsMobile";
import useIsMobile from "../_hook/useIsMobile";
import CustomButton from "./share/CustomButton";

const Hero: React.FC = () => {
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
            // position: "relative",
            transform: "translateY(-20%)",
            width: leftSideWidth,
            // // top: "-50%",
            // // left: "-50%",
            // width: "33.33%",
            // height: "33.33%",
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
            ],
            width: [
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
            times: [0, 0.1, 0.33, 0.43, 0.66, 0.8, 1],
          }}
          className=" flex-1 flex items-center justify-center flex-col gap-y-1 z-10  absolute bg-white  inset-0"
        >
          <motion.div className="h-full flex  flex-col pl-5 sm:pl-10  justify-center mr-auto sm:w-1/2 s overflow-hidden">
            <div className=" absolute top-3 left-3">
              <MovingText text="Fast-Track" />
            </div>
            <div className=" flex flex-col text-start">
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
            <div className="flex flex-col text-start mt-4">
              <div className="h-fit w-fit overflow-y-hidden ">
                <AnimatedText
                  className=" !font-medium text-[1rem]"
                  text="Connecting the world's largest companies"
                  delay={3.7}
                />
              </div>
              <div className="h-fit w-fit overflow-y-hidden  ">
                <AnimatedText
                  className=" !font-medium text-[1rem]"
                  text="with the largest market"
                  delay={3.7}
                />
              </div>
            </div>
            <CustomButton className=" w-fit font-bold mt-5">Get Started</CustomButton>
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
            times: [0, 0.1, 0.33, 0.43, 0.66, 0.8, 1],
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
            <div className=" absolute bottom-3 right-3">
              <MovingText text="Secure Reality" invert />
            </div>
            <motion.img
              src="/images/computer.png"
              alt="computer"
              className="mt-auto  w-[700px] h-[700px] object-cover   absolute  left-0"
              initial={{
                opacity: 0,
                rotate: -7,
                bottom: -400,
              }}
              animate={{
                opacity: 1,
                translateY: 0,
                rotate: -7,
                bottom: -261,
              }}
              transition={{
                duration: 1,
                delay: 3.5,
                ease: "easeOut",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
      {/* Add your hero content here */}
      {/* footer */}
      <div className="absolute bottom-3    z-10 px-5 w-full flex justify-between ">
        <AnimatedText
          big
          delay={0.4}
          className="!text-white text-[5rem] h-[5rem] leading-[1em] w-[350px]"
          text="Loading"
        />
        <AnimatedText
          big
          delay={0.4}
          className="!text-white sm:block hidden text-[5rem] h-[5rem] leading-[1em] w-[350px] justify-end"
          text="Dream"
        />
      </div>
    </div>
  );
};

export default Hero;
