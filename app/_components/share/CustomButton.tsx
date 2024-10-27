import React from "react";
import { motion } from "framer-motion";

type CustomButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  className = "",
  children,
  ...props
}) => {
  const defaultClasses =
    "bg-primary text-black py-2 px-4 rounded-full border border-black relative overflow-hidden transition-all duration-300 ease-out transform-gpu";
  const combinedClasses = `${defaultClasses} ${className}`;

  return (
    <motion.button
      className={combinedClasses}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <div className="relative z-10">{children}</div>
      <motion.div
        className="absolute inset-0 bg-white opacity-0"
        whileHover={{ opacity: 0.1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default CustomButton;
