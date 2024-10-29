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
export default function Home() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll({ container: containerRef });
  const [currentSection, setCurrentSection] = useState(0);
  const [isLogoCenter, setIsLogoCenter] = useState(false);
  const isMobile = useIsMobile();
  if (isMobile !== true && isMobile !== false) {
    console.log("loading", isMobile);
    return <div>loading</div>;
  }
  const sections = [
    { component: Hero, id: "hero" },
    {
      component: <PayAsYouGo onInView={setIsLogoCenter} />,
      id: "pay-as-you-go",
    },
    { component: Process, id: "process" },
    { component: Impact, id: "impact" },
    { component: Compare, id: "compare" },
    { component: Plans, id: "plans" },
    { component: Testimonials, id: "testimonials" },
    { component: Contact, id: "contact" },
  ];

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
    <div className="h-screen overflow-scroll">
      {/* <Header isLogoCenter={isLogoCenter} />
      <Hero onInView={setIsLogoCenter} />
      <PayAsYouGo onInView={setIsLogoCenter} />
      <Process />
      <Impact />
      <Compare />
      <Plans />
      <Testimonials /> */}
      <Contact />
      {/* {sections.map(({ component: Section, id }, index) => (
          <Section key={id} />
        ))} */}
    </div>
  );
}
