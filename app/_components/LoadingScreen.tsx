import { motion, useAnimate, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const [scope, animate] = useAnimate();
  useEffect(() => {
    const interval = setInterval(() => {
      if (count <= 100) {
        setCount((prevCount) => prevCount + 1);
      }
    }, 5);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const transform = async () => {
      if (count === 100) {
        animate("#svg", { opacity: 0, display: "none" }, { duration: 0 });
        animate(
          scope.current,
          {
            backgroundColor: ["#FFFFFF", "#FFFFFF", "#000000"],
            backgroundImage: [
              "radial-gradient(circle at center, #FFFFFF 75%, #FFFFFF 100%)",
              "radial-gradient(circle at center, #FFFFFF 65%, #000000 100%)",
              "radial-gradient(circle at center, #FFFFFF 50%, #000000 100%)",
              "radial-gradient(circle at center, #FFFFFF 35%, #000000 100%)",
              "radial-gradient(circle at center, #FFFFFF 15%, #000000 100%)",
              "radial-gradient(circle at center, #000000 0%, #000000 100%)",
            ],
          },
          {
            duration: 1, // Increased duration for smoother transition
            // ease: "easeInOut", // Changed to built-in easing function for smoother interpolation
            times: [0, 0.2, 0.4, 0.6, 0.8, 1], // Evenly distributed keyframes
          }
        );
        animate(
          "#line",
          { height: "100%", backgroundColor: "#FFFFFF" },
          { duration: 1 }
        );
        await animate(
          "#box",
          {
            borderRadius: "0",
            width: "20%",
            height: "22%",
            borderColor: "#FFFFFF",
          },
          { duration: 1 }
        );

        // await new Promise((resolve) => setTimeout(resolve, 1000));
        animate("#left", { opacity: 1 }, { duration: 0 });
        animate("#right", { opacity: 1 }, { duration: 0 });
        animate("#box", {
          borderColor: "transparent",
        });
        animate("#line", { height: "0%" });
        animate("#left", { transform: "translateY(-20%)" }, { duration: 0.5 });

        animate("#right", { transform: "translateY(20%)" }, { duration: 0.5 });
      }
    };
    transform();
  }, [count]);
  return (
    <motion.div
      ref={scope}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      animate={controls}
      initial={{ opacity: 1 }}
    >
      <div
        id="box"
        className="w-[280px]  h-[280px]  bg-transparent border-black rounded-[999px] flex absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 items-center justify-center border-[1px]  "
      >
        <motion.div
          id="left"
          // initial={{ transform: "translateY(-20%)" }}
          // transition={{ duration: 2, ease: "easeInOut" }}
          className="h-full opacity-0  sm:w-1/2 bg-white  ml-auto relative z-20  "
        ></motion.div>
        <div
          id="line"
          className=" absolute w-[1px] bg-black right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 "
        ></div>
        <motion.div
          id="right"
          // initial={{ transform: "translateY(20%)" }}
          // transition={{ duration: 2, ease: "easeInOut" }}
          className="h-full opacity-0   sm:w-1/2 bg-primary  ml-auto relative z-20   "
        ></motion.div>
      </div>
      {/* <motion.div
        id="box"
        className=" bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent ] "
      ></motion.div> */}
      <div id="svg" className="relative w-[280px] h-[280px]">
        {/* SVG Circle Background */}

        <svg
          width="280"
          height="280"
          viewBox="0 0 280 280"
          fill="none"
          className="absolute left-0 top-0"
        >
          {/* Background Circle */}
          <circle
            cx="140"
            cy="140"
            r="139.5"
            className="stroke-[#e5e7eb] stroke-2"
            fill="none"
          />
          {/* Progress Circle */}
          <motion.circle
            cx="140"
            cy="140"
            r="139.5"
            className="stroke-black stroke-1"
            fill="none"
            strokeDasharray="876.5" // Circumference of circle (2 * π * r)
            strokeDashoffset={876.5 - (876.5 * count) / 100} // Animation based on count
            strokeLinecap="round"
          />
        </svg>

        {/* Centered Percentage Text */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-5xl ">{count}%</span>
          <p className="text-sm text-gray-400">Loading...</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
