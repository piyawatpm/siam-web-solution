import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const PayAsYouGo: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      {
        // Adjust threshold as needed - 0.1 means video will play when 10% is visible
        threshold: 0.1,
      }
    );

    // Start observing the video element
    observer.observe(video);

    // Cleanup observer on component unmount
    return () => {
      observer.unobserve(video);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      ref={sectionRef}
      layoutScroll
      className="relative min-h-[200vh] w-full"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        <motion.div className="w-full h-full relative">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            playsInline
            poster="/images/video-poster.jpg"
          >
            <source src="/vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PayAsYouGo;
