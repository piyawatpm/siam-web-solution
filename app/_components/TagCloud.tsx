
import React, { useRef, useEffect, useState, useCallback } from "react";
import Matter, { Bodies, Vertices } from "matter-js";
import "pathseg";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { letterS, letterI, letterA, letterM } from "./letterPath";

const tags = [
  "RESOURCES",
  "SOLUTIONS",
  "PRICING",
  "ABOUT",
  "CONTACT",
  "TEAM",
  "CAREERS",
];

const TagCloud: React.FC = () => {
  const [isInView, setIsInView] = useState(false);

  const requestRef = useRef<number>();
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const tagRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bigWordRef = useRef<HTMLDivElement>(null);
  const svgOneRef = useRef<SVGSVGElement>(null);

  const animate = () => {
    if (!sceneRef.current) return;

    engineRef.current = Matter.Engine.create({
      gravity: {
        x: 0,
        y: 0.1,
      },
    });
    const engine = engineRef.current;

    const ground = Matter.Bodies.rectangle(
      sceneRef.current.clientWidth / 2,
      sceneRef.current.clientHeight + 50,
      sceneRef.current.clientWidth,
      100,
      { isStatic: true }
    );
    const leftWall = Matter.Bodies.rectangle(
      -50,
      sceneRef.current.clientHeight / 2,
      100,
      sceneRef.current.clientHeight,
      { isStatic: true }
    );

    const rightWall = Matter.Bodies.rectangle(
      sceneRef.current.clientWidth + 50,
      sceneRef.current.clientHeight / 2,
      100,
      sceneRef.current.clientHeight,
      { isStatic: true }
    );

    const ceiling = Matter.Bodies.rectangle(
      sceneRef.current.clientWidth / 2,
      -50,
      sceneRef.current.clientWidth,
      100,
      { isStatic: true }
    );

    // const bigWord = Matter.Bodies.rectangle(
    //   sceneRef.current.clientWidth / 2,
    //   sceneRef.current.clientHeight - 50,
    //   300,
    //   100,
    //   {
    //     label: "BIGWORD",
    //     isStatic: true,
    //   }
    // );

    const tagBodies = [...tags, "SVG"].map((tag, index) => {
      const x = Math.random() * sceneRef.current!.clientWidth;
      const y = Math.random() * sceneRef.current!.clientHeight;
      return {
        body: Matter.Bodies.rectangle(x, y, 100, 40, {
          label: tag,
          restitution: 1, // Reduced restitution
          friction: 0.1, // Added some friction
          frictionAir: 0.01, // Added air friction

          // velocity: {
          //   x: (Math.random() - 0.5) * 2,
          //   y: (Math.random() - 0.5) * 2,
          // },
        }),
        elem: tag === "SVG" ? svgOneRef.current : tagRefs.current[index],
        render() {
          if (this.elem) {
            const { x, y } = this.body.position;
            this.elem.style.transform = `translate(${x - 50}px, ${
              y - 20
            }px) rotate(${this.body.angle}rad)`;
          }
        },
      };
    });

    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      element: sceneRef.current,
    });
    const verTexts = [];
    [
      letterS,
      letterI,
      letterA,
      letterM,
      //   letter3,
      //   letter4,
    ].forEach((e, index) => {
      const scaled = Vertices.scale(e, 1.4, 1.4);
      console.log("e", e, scaled);
      let extraSpace = 0;
      switch (index) {
        case 1:
          extraSpace = -100;
          break;
        case 2:
          extraSpace = -150;
          break;
      }
      const v = Bodies.fromVertices(
        200 + index * 300 + extraSpace,
        1000,
        scaled,
        {
          isStatic: true,
          render: {
            fillStyle: "#FFD74C",
            strokeStyle: "#FFD74C",
            lineWidth: 5, // Add this line to increase stroke width
          },
        },
        true
      );
      verTexts.push(v);
    });
    Matter.Composite.add(engine.world, [
      ...verTexts,
      ...tagBodies.map((tag) => tag.body),
      ground,
      leftWall,
      rightWall,
      ceiling,
      // bigWord,
      mouseConstraint,
    ]);
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    let lastTime = 0;
    const interval = 5000; // 5 seconds

    (function rerender() {
      tagBodies.forEach((tag) => tag.render());

      // engineRef.current.gravity.x =  ? 0.1 : -0.1;
      // changeGravityWithRAF(performance.now());
      Matter.Engine.update(engine);
      requestRef.current = requestAnimationFrame(rerender);
    })();
  };

  useEffect(() => {
    animate();
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      if (engineRef.current) {
        Matter.Engine.clear(engineRef.current);
      }
    };
  }, [isInView]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("in view");

          setTimeout(() => setIsInView(true), 1000);
        }
      },
      { threshold: 0.1 }
    );

    if (sceneRef.current) {
      observer.observe(sceneRef.current);
    }

    return () => {
      if (sceneRef.current) {
        observer.unobserve(sceneRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={sceneRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    >
      {tags.map((tag, index) => (
        <motion.div
          key={tag}
          ref={(el) => (tagRefs.current[index] = el)}
          className={`absolute bg-white text-black border rounded-full p-2 select-none cursor-move ${
            index % 2 === 0 ? "bg-yellow-200" : "bg-white"
          }`}
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {tag}
        </motion.div>
      ))}
      {/* <svg
        className="absolute bg-red-500"
        ref={svgOneRef}
        width="100px"
        height="100px"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        style={{ pointerEvents: "none" }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 16L3.54223 12.3383C1.93278 11.0162 1 9.04287 1 6.96005C1 3.11612 4.15607 0 8 0C11.8439 0 15 3.11612 15 6.96005C15 9.04287 14.0672 11.0162 12.4578 12.3383L8 16ZM3 6H5C6.10457 6 7 6.89543 7 8V9L3 7.5V6ZM11 6C9.89543 6 9 6.89543 9 8V9L13 7.5V6H11Z"
          fill="#000000"
        />
      </svg> */}
      {/* <div
        ref={bigWordRef}
        className="absolute bg-red-500 bottom-0 left-1/2 transform -translate-x-1/2 text-8xl font-bold text-black opacity-20 pointer-events-none"
      >
        SIAM
      </div> */}
    </motion.div>
  );
};

export default TagCloud;
