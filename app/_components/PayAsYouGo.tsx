import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const PayAsYouGo: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isInView && isPlaying) {
      controls.start({ scale: 1, opacity: 1 });
    } else {
      controls.start({ scale: 0.8, opacity: 0.5 });
    }
  }, [isInView, controls, isPlaying]);

  const handlePlay = () => {
    const video = videoRef.current;
    if (video) {
      video.play();
      setIsPlaying(true);
    }
  };

  return (
    <motion.div
      id="video"
      ref={sectionRef}
      layoutScroll
      className="relative w-full min-h-[200vh]"
    >
      <div className="fixed top-0 h-screen w-full max-w-[100dvw] flex items-center justify-center">
        <motion.div
          className="w-full h-full relative"
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={controls}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            controls
            muted={false}
            poster="/images/video-poster.jpg"
          >
            <source src="/vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!isPlaying && (
            <motion.button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/60 transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img
                src="/images/vid.jpg"
                alt="Video thumbnail"
                className="w-full h-full object-cover absolute inset-0 -z-10"
              />
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center">
                    <svg
                      className="text-black"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.button>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PayAsYouGo;
