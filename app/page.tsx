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

export default function Home() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll({ container: containerRef });
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    { component: Hero, id: "hero" },
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
    <div className="h-screen overflow-hidden">
      <Header />
      <motion.div
        ref={containerRef}
        className="h-full overflow-y-scroll"
        style={{ scrollSnapType: "y mandatory" }}
      >
        {sections.map(({ component: Section, id }, index) => (
          <motion.div
            key={id}
            className="min-h-screen w-full"
            // style={{ scrollSnapAlign: "start" }}
          >
            <Section />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
