"use client";

import { motion } from "framer-motion";
import MovingText from "./share/MovingText";
import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 10);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-white text-6xl font-bold"
    >
      {formatTime(time)}
    </motion.div>
  );
};

const AnimatedText = ({
  text,
  className,
  delay = 0,
  big = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  big?: boolean;
}) => {
  const words = text.split("");

  const container = {
    hidden: { opacity: 1 },
    visible: () => ({
      opacity: 1,
      transition: { staggerChildren: 0.02, delayChildren: delay },
    }),
  };

  const child = {
    hidden: { opacity: 1, y: 90 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: big ? 0.5 : 0.3,
      },
    },
  };

  return (
    <motion.div
      className={`overflow-hidden h-[1em]  text-4xl text-black flex  ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block   whitespace-nowrap  mr-1"
          variants={child}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
const Hero: React.FC = () => {
  return (
    <div
      id="hero"
      className="w-screen relative  h-screen flex  items-center justify-center  overflow-hidden bg-black "
    >
      {/* <Timer /> */}
      <motion.div
        initial={{ width: "35%", height: "20%" }}
        animate={{
          width: ["35%", "35%", "35%", "35%", "50%", "50%", "100%"],
          height: ["20%", "20%", "20%", "20%", "50%", "50%", "100%"],
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
        className="flex z-20  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
      >
        <motion.div
          initial={{
            // position: "relative",
            transform: "translateY(-20%)",
            width: "50%",
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
            width: ["50%", "50%", "50%", "50%", "50%", "100%"],
          }}
          transition={{
            duration: 4,

            ease: "easeInOut",
            times: [0, 0.1, 0.33, 0.43, 0.66, 0.8, 1],
          }}
          className=" flex-1 flex items-center justify-center flex-col gap-y-1 z-10  absolute bg-white  inset-0"
        >
          <motion.div className="h-full flex  flex-col items-center justify-center mr-auto sm:w-1/2 s overflow-hidden">
            <div className=" absolute top-3 left-3">
              <MovingText text="Fast-Track" />
            </div>
            <div className="h-fit w-fit overflow-hidden ">
              <AnimatedText
                text="Your Website is"
                className=" !font-medium text-[3rem] mb-3"
                delay={3.5}
              />
            </div>
            <div className="h-fit w-fit overflow-hidden ">
              <AnimatedText
                className=" !font-medium text-[3rem] mb-3"
                text="the Digital Door"
                delay={3.6}
              />
            </div>
            <div className="h-fit w-fit overflow-hidden ">
              <AnimatedText
                className=" !font-medium text-[3rem]"
                text="to Your Store"
                delay={3.7}
              />
            </div>
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
          className="h-full  sm:w-1/2 s ml-auto relative z-20 bg-transparent "
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
              className="mt-auto  scale-125  absolute  left-0"
              initial={{
                opacity: 0,

                rotate: -7,
                scale: 1.25,
                bottom: -205,
              }}
              animate={{
                opacity: 1,
                translateY: 0,
                scale: 1.25,
                rotate: -7,
                bottom: -100,
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
          className="!text-white text-[5rem] h-[5rem] leading-[1em] w-[350px] justify-end"
          text="Dream"
        />
      </div>
    </div>
  );
};

export default Hero;
