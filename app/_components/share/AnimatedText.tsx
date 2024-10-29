import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  big?: boolean;
  highlightWords?: string[];
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  delay = 0,
  big = false,
  highlightWords = [],
}) => {
  const [showHighlight, setShowHighlight] = useState(false);
  const words = text.split(" ");

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

  const highlightVariants = (long: boolean, delay?: number) => {
    return {
      initial: { width: 0 },
      animate: {
        width: long ? "105%" : "100%",
        transition: { duration: 0.5, ease: "easeInOut", delay: delay },
      },
    };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHighlight(true);
    }, (words.length * 0.02 + delay + (big ? 0.5 : 0.3)) * 940);

    return () => clearTimeout(timer);
  }, [words.length, delay, big]);

  return (
    <motion.div
      className={`overflow-hidden leading-[1.2em] text-4xl text-black flex ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block whitespace-nowrap mr-1 relative"
          variants={child}
        >
          <p className=" relative z-10">{word}</p>
          {showHighlight && highlightWords.includes(word) && (
            <>
              <motion.span
                className="absolute bottom-0 left-0 w-full  rounded-md h-full z-[2] bg-primary "
                variants={highlightVariants(false)}
                initial="initial"
                animate="animate"
              />
              <motion.span
                className="absolute bottom-0 left-0  rounded-md h-full z-[1] bg-secondary "
                variants={highlightVariants(true, 0.05)}
                initial="initial"
                animate="animate"
              />
            </>
          )}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
