"use client";

import React, { useEffect, useRef } from "react";
import {
  Engine,
  Render,
  World,
  Bodies,
  Runner,
  Vertices,
  Events,
  Composite,
} from "matter-js";
import { motion, useInView } from "framer-motion";
import { letterS, letterI, letterA, letterM } from "./letterPath"; // Ensure these paths are correct
import "tailwindcss/tailwind.css"; // If you're using TailwindCSS

// Define your tags
const tags = [
  "FAST",
  "PRODUCTS",
  "SERVICES",
  "INFORMATION",
  "RESOURCES",
  "SOLUTIONS",
  "PRICING",
  "CREATIVE",
  "ENGAGEMENT",
  "FEATURED",
  "BUDGET",
  "PAYG",
];

// Initialize poly-decomp for Matter.js
if (typeof window !== "undefined") {
  window.decomp = require("poly-decomp");
}

const Animated: React.FC = () => {
  // Ref for the canvas container

  const canvasRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(canvasRef);
  // Refs for tag elements (if you plan to use them)
  const tagRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Matter.js Engine
  const engine = useRef<Engine>(
    Engine.create({
      gravity: {
        x: 0,
        y: 0.3, // Adjust gravity as needed
      },
    })
  );

  // Matter.js Render
  const render = useRef<Render | null>(null);

  // Matter.js Runner
  const runner = useRef<Runner | null>(null);

  // Mouse position refs (optional, for interactivity)
  const posX = useRef<number | null>(null);
  const posY = useRef<number | null>(null);

  // Initialize Matter.js and set up the scene
  useEffect(() => {
    if (isInView) {
      initializeMatter();
    }

    // Optional: Add mouse move listener
    // window.addEventListener("mousemove", updateMousePosition);

    // // Cleanup on unmount
    // return () => {
    //   clearMatter();
    //   window.removeEventListener("mousemove", updateMousePosition);
    // };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  // Function to initialize Matter.js
  const initializeMatter = () => {
    console.log("initializeMatter");
    if (!canvasRef.current) return;

    const width = canvasRef.current.offsetWidth;
    const height = canvasRef.current.offsetHeight;

    // Create the renderer
    render.current = Render.create({
      element: canvasRef.current,
      engine: engine.current,
      options: {
        width: width,
        height: height,
        wireframes: false, // Disable wireframes for custom rendering
        background: "#FEF8E7",
      },
    });

    // Run the renderer
    Render.run(render.current);

    // Create and run the runner
    runner.current = Runner.create();
    Runner.run(runner.current, engine.current);

    // Add 'afterRender' event listener to render text
    Events.on(render.current, "afterRender", () => {
      const context = render.current?.context;
      if (!context) return;

      Composite.allBodies(engine.current.world).forEach((body) => {
        if ((body.render as any).text) {
          const { content, color, size, family } = (body.render as any).text;
          context.save();
          context.translate(body.position.x, body.position.y);
          context.rotate(body.angle);
          context.textAlign = "center";
          context.textBaseline = "middle";
          context.fillStyle = color || "#000000";
          context.font = `${size || 16}px ${family || "Arial"}`;
          context.fillText(content, 0, 0);
          context.restore();
        }
      });
    });

    // Create hexagons with text
    const hexagons = tags.map((label, index) => {
      const pillWidth = 150; // Width of the pill
      const pillHeight = 50; // Height of the pill

      return Bodies.rectangle(
        Math.random() * 2500, // Random positioning with some offset
        0,
        pillWidth,
        pillHeight,
        {
          label: label,
          restitution: 0.4,
          friction: 0.1,
          frictionAir: 0.01,
          isStatic: false, // Set to true if you want the pill to be static
          render: {
            fillStyle: index % 2 === 0 ? "#331922" : "#FFFFFF", // Yellow fill color
            strokeStyle: "#000000", // Black border
            lineWidth: 2,
            text: {
              content: label,
              color: index % 2 === 0 ? "#FFFFFF" : "#000000",
              size: 20,
              family: "Arial",
            },
          },
          chamfer: {
            radius: pillHeight / 2, // Creates rounded edges to form a pill shape
          },
        }
      );
    });
    console.log("hexagons", hexagons);
    // Add boundaries (floor and walls)
    const boundaries = [
      // Floor
      Bodies.rectangle(width / 2, height + 10, width, 20, {
        isStatic: true,
        friction: 10,
      }),
      // Right wall
      Bodies.rectangle(width + 10, height / 2, 20, height, {
        isStatic: true,
        friction: 10,
      }),
      // Left wall
      Bodies.rectangle(-10, height / 2, 20, height, {
        isStatic: true,
        friction: 10,
      }),
    ];

    // Additional shapes (letters and triangle)
    const additionalBodies = createAdditionalBodies();

    // Add all bodies to the world
    World.add(engine.current.world, [
      ...boundaries,
      // ...hexagons,
      // ...additionalBodies.verTexts,
      // additionalBodies.triangle,
    ]);
  };

  // Function to create additional bodies (letters and triangle)
  const createAdditionalBodies = () => {
    const verTexts: Body[] = [];

    [letterS, letterI, letterA, letterM].forEach((verticesPath, index) => {
      const scaled = Vertices.scale(verticesPath, 1.4, 1.4);
      let extraSpace = 0;
      switch (index) {
        case 1:
          extraSpace = 0;
          break;
        case 2:
          extraSpace = 0;
          break;
        case 3:
          extraSpace = 200;
          break;
        default:
          extraSpace = 0;
      }

      const body = Bodies.fromVertices(
        200 + index * 300 + extraSpace,
        900, // Starting below the canvas
        scaled,
        {
          isStatic: true,
          render: {
            fillStyle: "#FFD74C",
            strokeStyle: "#FFD74C",
            lineWidth: 5,
          },
        },
        true
      );

      verTexts.push(body);
    });

    // Create a large white triangle
    const triangle = Bodies.fromVertices(
      820,
      850,
      Vertices.fromPath("M 0 0 L 80 0 L 40 -80 z"),
      {
        isStatic: true,
        render: {
          fillStyle: "#FFFFFF",
          strokeStyle: "#FFFFFF",
          lineWidth: 70,
        },
      },
      true
    );

    // Reaction text (example)

    return { verTexts, triangle };
  };

  // Function to clear Matter.js on component unmount
  const clearMatter = () => {
    console.log("clearMatter");
    if (render.current) {
      Render.stop(render.current);
      render.current.canvas.remove();
      render.current.textures = {};
    }

    if (runner.current) {
      Runner.stop(runner.current);
    }

    Engine.clear(engine.current);
    World.clear(engine.current.world, false);
  };

  // Function to update mouse position (optional)
  // const updateMousePosition = (event: MouseEvent) => {
  //   if (!canvasRef.current) return;
  //   posX.current =
  //     event.clientX - canvasRef.current.getBoundingClientRect().left;
  //   posY.current =
  //     event.clientY - canvasRef.current.getBoundingClientRect().top;
  //   // You can use posX and posY for interactivity if needed
  // };

  // JSX Structure
  return (
    <div
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    >
      {/* Uncomment the following block if you want to overlay HTML elements with Matter.js bodies */}
      {/*
        {tags.map((tag, index) => (
          <motion.div
            key={tag}
            ref={(el) => (tagRefs.current[index] = el)}
            className={`absolute bg-white text-black border rounded-full p-2 select-none cursor-move ${
              index % 2 === 0 ? "bg-yellow-200" : "bg-white"
            }`}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {tag}
          </motion.div>
        ))}
        */}
      {/* You can add additional overlay elements here */}
    </div>
  );
};

export default Animated;
