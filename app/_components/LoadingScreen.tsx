import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    let startTime = Date.now();
    let animationFrame: number;

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / 1000, 1); // 3 seconds duration
      const newCount = Math.floor(progress * 100);

      if (newCount <= 100) {
        setCount(newCount);
        animationFrame = requestAnimationFrame(animate);
      } else {
        controls.start({
          opacity: 0,
          transition: { duration: 0.5 },
        });
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [controls]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      animate={controls}
      initial={{ opacity: 1 }}
    >
      <div className="relative">
        <motion.div
          className="flex flex-col items-start gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="text-8xl font-bold"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {count}%
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
