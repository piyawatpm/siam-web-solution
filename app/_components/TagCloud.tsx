{
  /* <svg
  width="97.073"
  height="215.823"
  viewBox="0 0 97.073 215.823"
  xmlns="http://www.w3.org/2000/svg"
>
  <g
    id="svgGroup"
    stroke-linecap="round"
    fill-rule="evenodd"
    font-size="9pt"
    stroke="#000"
    stroke-width="2mm"
    fill="#000"
    style="stroke:#000;stroke-width:2mm;fill:#000"
  >
    <path
      d="M 38.19 68.534 A 64.014 64.014 0 0 0 38.283 65.43 Q 38.283 50.586 29.299 48.438 A 23.975 23.975 0 0 0 25.002 48.047 A 13.061 13.061 0 0 0 13.576 54.247 Q 10.351 59.051 8.986 67.578 L 8.596 71.094 Q 7.619 79.492 5.275 97.266 A 1363.923 1363.923 0 0 0 3.521 110.375 Q 0.002 137.748 0.002 148.438 A 141.841 141.841 0 0 0 1.294 168.294 Q 4.606 191.652 16.408 204.297 Q 27.346 215.82 43.947 215.82 A 60.854 60.854 0 0 0 62.663 212.882 A 71.536 71.536 0 0 0 81.643 203.32 Q 91.027 196.188 94.72 189.537 A 17.954 17.954 0 0 0 97.072 182.227 A 15.144 15.144 0 0 0 97.072 182.165 Q 97.056 178.276 95.041 175.314 A 13.778 13.778 0 0 0 91.603 171.875 Q 88.869 169.922 86.135 169.922 A 13.287 13.287 0 0 0 83.169 170.284 Q 79.25 171.184 74.16 174.317 A 71.008 71.008 0 0 0 69.143 177.734 Q 61.254 183.472 56.104 185.733 A 20.446 20.446 0 0 1 52.736 186.914 Q 50.588 187.305 48.635 187.305 Q 39.455 187.305 33.986 175.586 A 38.649 38.649 0 0 1 30.275 158.789 Q 30.275 147.839 34.272 109.168 A 3406.405 3406.405 0 0 1 36.33 89.844 A 991.428 991.428 0 0 0 36.98 83.416 Q 37.934 73.634 38.19 68.534 Z M 16.018 14.258 Q 16.018 10.742 17.58 7.617 Q 21.486 0 30.275 0 Q 33.791 0 36.916 1.563 Q 44.533 5.469 44.533 14.258 Q 44.533 17.774 42.971 20.899 Q 39.064 28.516 30.275 28.516 Q 26.76 28.516 23.635 26.953 Q 16.018 23.047 16.018 14.258 Z"
      id="0"
      vector-effect="non-scaling-stroke"
    />
  </g>
</svg>; */
}
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
