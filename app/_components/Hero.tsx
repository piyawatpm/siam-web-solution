"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <div
      id="hero"
      className="w-screen h-screen flex items-center justify-center pt-20 overflow-hidden bg-black"
    >
      <motion.div
        initial={{ width: "25%", height: "15%" }}
        animate={{
          width: ["25%", "50%", "100%"],
          height: ["15%", "30%", "100%"],
        }}
        transition={{
          duration: 2,

          ease: "easeInOut",
          times: [0, 0.5, 1],
        }}
        onAnimationComplete={handleAnimationComplete}
        className="flex  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        {/* <motion.div
          initial={{
            transform: "translateY(-50%), translateX(-50%)",
            // top: "-50%",
            // left: "-50%",
            width: "33.33%",
            height: "33.33%",
          }}
          animate={{
            transform: "translateY(0), translateX(0)",

            width: "100%",
            height: "100%",
            paddingTop: "20px",
            paddingRight: "20px",
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className=" top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  absolute   bg-white"
        >
          {" "}
        </motion.div> */}
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
            transform: ["translateY(-20%)", "translateY(0)", "translateY(0)"],
            width: ["50%", "50%", "100%"],
            // transform: "translateY(0), translateX(0)",
            // width: "100%",
            // height: "100%",
            // paddingTop: "20px",
            // paddingRight: "20px",
            // position: ["relative", "relative", "relative", "absolute"],
          }}
          transition={{
            duration: 2,

            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
          // transition={{ duration: 2, ease: "easeInOut" }}
          className=" flex-1  absolute bg-white inset-0"
        >
          {" "}
        </motion.div>
        <motion.div
          // initial={{ }}
          // animate={{  }}
          initial={{ transform: "translateY(20%)" }}
          animate={{
            transform: ["translateY(20%)", "translateY(0)", "translateY(0)"],
            paddingTop: ["0px", "0px", "20px"],
            paddingRight: ["0px", "0px", "20px"],
            paddingBottom: ["0px", "0px", "20px"],
            borderRadius: ["0px", "0px", "20px"],
          }}
          transition={{
            duration: 2,

            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
          // transition={{ duration: 2, ease: "easeInOut" }}
          className="h-full w-1/2 ml-auto  bg-transparent "
        >
          <motion.div
            animate={{
              borderRadius: ["0px", "0px", "20px"],
            }}
            transition={{
              duration: 2,

              ease: "easeInOut",
              times: [0, 0.5, 1],
            }}
            className=" w-full h-full bg-primary"
          ></motion.div>
        </motion.div>
      </motion.div>
      {/* Add your hero content here */}
    </div>
  );
};

export default Hero;
