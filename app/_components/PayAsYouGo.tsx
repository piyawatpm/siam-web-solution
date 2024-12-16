import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  useInView,
  useAnimation,
} from "framer-motion";

const PayAsYouGo: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start({ scale: 1, opacity: 1 });
    } else {
      controls.start({ scale: 0.8, opacity: 0.5 });
    }
  }, [isInView, controls]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

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
        threshold: 0.1,
      }
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      id="video"
      ref={sectionRef}
      layoutScroll
      className="relative sm:min-h-[200vh] w-full"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
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
            muted
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
