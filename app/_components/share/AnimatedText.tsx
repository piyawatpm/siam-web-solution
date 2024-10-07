import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const textVariants = {
  initial: { scaleX: 1, fontWeight: "normal" },
  hover: {
    scaleX: 1.05,
    fontWeight: "bold",
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
  onClick,
}) => {
  return (
    <motion.button
      className={`relative ${className}`}
      initial="initial"
      whileHover="hover"
      onClick={onClick}
    >
      <motion.span
        className="inline-block tracking-[-0.01em] whitespace-nowrap transition-all duration-200"
        variants={textVariants}
      >
        {text}
      </motion.span>
    </motion.button>
  );
};

export default AnimatedText;
