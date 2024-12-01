"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Plans from "./_components/Plans";
import Contact from "./_components/Contact";
import Testimonials from "./_components/Testimonials";
import Impact from "./_components/Impact";
import Compare from "./_components/Compare";
import PayAsYouGo from "./_components/PayAsYouGo";
import useIsMobile from "./_hook/useIsMobile";
import Process from "./_components/Process";
import TextCarousel from "./_components/TextCarousel";
import LoadingScreen from "./_components/LoadingScreen";
import Services from "./_components/Services";
import Work from "./_components/Work";

export default function Home() {
  const isMobile = useIsMobile();

  // Example usage
  const texts = [
    "APP",
    "/",
    "WEBSITES",
    "/",
    "MARKETING",
    "/",
    "SEO",
    "/",
    "BRANDING",
    "/",
    "AI",
    "/",
    "ANIMATIONS",
    "/",
  ];
  // Add this effect to save scroll position before navigation
  // useEffect(() => {
  //   const handleRouteChange = () => {
  //     console.log("scrollPosition", scrollPosition, window.scrollY.toString());
  //     sessionStorage.setItem("scrollPosition", window.scrollY.toString());
  //   };

  //   window.addEventListener("beforeunload", handleRouteChange);
  //   return () => {
  //     window.removeEventListener("beforeunload", handleRouteChange);
  //   };
  // }, []);
  // In your component
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const minLoadTime = 2200; // 1 seconds minimum
  //   const startTime = Date.now();

  //   const checkLoadingComplete = () => {
  //     const elapsedTime = Date.now() - startTime;
  //     if (elapsedTime >= minLoadTime && isMobile !== undefined) {
  //       console.log("loading complete");
  //       setIsLoading(false);
  //     }
  //   };

  //   const interval = setInterval(checkLoadingComplete, 100);

  //   return () => clearInterval(interval);
  // }, [isMobile]);

  // if (isLoading) {
  //   return <LoadingScreen />;
  // }

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (containerRef.current) {
  //       const container = containerRef.current;
  //       const scrollPosition = container.scrollTop;
  //       const windowHeight = window.innerHeight;

  //       let newSection = 0;
  //       let accumulatedHeight = 0;

  //       for (let i = 0; i < container.children.length; i++) {
  //         const sectionHeight = container.children[i].offsetHeight;
  //         if (scrollPosition < accumulatedHeight + sectionHeight / 2) {
  //           newSection = i;
  //           break;
  //         }
  //         accumulatedHeight += sectionHeight;
  //       }

  //       if (newSection !== currentSection) {
  //         setCurrentSection(newSection);
  //       }
  //     }
  //   };

  //   const container = containerRef.current;
  //   if (container) {
  //     container.addEventListener("scroll", handleScroll);
  //   }

  //   return () => {
  //     if (container) {
  //       container.removeEventListener("scroll", handleScroll);
  //     }
  //   };
  // }, [currentSection]);

  // useEffect(() => {
  //   if (containerRef.current) {
  //     const container = containerRef.current;
  //     const targetSection = container.children[currentSection];
  //     if (targetSection) {
  //       targetSection.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }
  // }, [currentSection]);

  return (
    <>
      <Header />
      
      <Hero />
      <PayAsYouGo />
      <Work />

      <Services />
      <Impact />
      <TextCarousel texts={texts} />

      {/* <Compare /> */}
      <Testimonials />
      <Plans />
      <Contact />
      {/* {sections.map(({ component: Section, id }, index) => (
          <Section key={id} />
        ))} */}
    </>
  );
}
