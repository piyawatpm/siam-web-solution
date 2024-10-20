import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

const MovingText = ({
  text,
  invert = false,
  stayed = false,
  className,
}: {
  text: string;
  invert?: boolean;
  stayed?: boolean;
  className?: string;
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setIsVisible(false);
      },
      stayed ? 100000 : 1450
    ); // Adjust this value to control how long the text stays visible

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`h-[2rem]  flex justify-center  overflow-hidden relative w-[150px] text-start ${className}`}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: invert ? "100%" : "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: invert ? "100%" : "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
            className={`absolute w-full text-center text-xl font-bold text-black ${className}`}
          >
            <p
              className={`whitespace-nowrap ${
                invert ? "text-right" : "text-left"
              }`}
            >
              {text}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MovingText;
