"use client";
import { useEffect, useRef } from "react";
import {
  Engine,
  Render,
  World,
  Bodies,
  Runner,
  Vertices,
  Composites,
  Common,
  Vector,
  Composite,
  Svg,
} from "matter-js";
import {
  letterS,
  letter3,
  letter4,
  letter5,
  letter6,
  letterI,
  letterA,
  letterM,
} from "../_components/letterPath";
import Matter from "matter-js";

window.decomp = require("poly-decomp");
function App() {
  const canvas = useRef<HTMLDivElement>(); //Your div element

  //Matter.js references
  const engine = useRef(Engine.create());
  const render = useRef();
  const runner = useRef();

  //Mouse position. Will be updated at every move.
  const posX = useRef<number | null>(null);
  const posY = useRef<number | null>(null);

  //Used to keep the mouse interval trigger.
  const mouseIntervalRef = useRef<number | null>(null);

  //This will only run once. It will initialize the Matter.js render and add the mouse listener.
  useEffect(() => {
    initializeRenderer(); //Initialize Matter.js objects
    window.addEventListener("mousemove", updateMousePosition); //Add mouse listener

    return () => {
      //Done when the component closes. Do the opposite.
      clearRenderer(); //Remove all data from Matter.js
      window.removeEventListener("mousemove", updateMousePosition); //Remove mouse listener.
    };
  }, []);
  //Initialize everything from Matter.js
  const initializeRenderer = () => {
    if (!canvas.current) return; //It's good to always check if your reference exists.

    const height = canvas.current.offsetHeight; //div height
    const width = canvas.current.offsetWidth; //div width

    render.current = Render.create({
      //Start renderer, per Matter.js docs.
      element: canvas.current, //Our JSX element
      engine: engine.current, //The engine
      options: {
        width: width,
        height: height,
        wireframes: false, //Just for testing. Remove all colors and details.
        background: "#BBBBBB", //Background color
      },
    });

    
    World.add(engine.current.world, [
      Bodies.rectangle(width / 2, height + 10, width, 20, {
        isStatic: true,
        friction: 10,
      }), //Floor
      Bodies.rectangle(width + 10, height / 2, 20, height, {
        isStatic: true,
        friction: 10,
      }), //Right wall
      Bodies.rectangle(-10, height / 2, 20, height, {
        isStatic: true,
        friction: 10,
      }), //Left wall
    ]);
    // Create a triangle

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
    const triangle = Bodies.fromVertices(
      670,
      850,
      Vertices.fromPath("M 0 0 L 80 0 L 40 -80 z"), // Flipped the triangle by changing the y-coordinate of the third point
      {
        isStatic: true,
        render: {
          fillStyle: "#FFFFFF", // Changed fill color to white
          strokeStyle: "#FFFFFF", // Changed stroke color to white for a uniform look
          lineWidth: 70, // Increased line width for better visibility
        },
      },
      true
    );
    World.add(engine.current.world, verTexts);
    World.add(engine.current.world, triangle);
    // World.add(engine.current.world, logoBottom);
    // World.add(engine.current.world, stack);
    // Start the engine, the renderer, and the runner. As defined in Matter.js documentation
    Engine.run(engine.current);
    Render.run(render.current);
    runner.current = Runner.create();
    Runner.run(runner.current, engine.current);
  };

  //Used to add grains to the renderer. Is the same thing we did when
  //added the rigid objects to the scene before.

  //Remove everything when closed. Self-explanatory.
  const clearRenderer = () => {
    if (!render.current) return;
    Render.stop(render.current);
    Runner.stop(runner.current);
    render.current.canvas.remove();

    if (!engine.current) return;
    World.clear(engine.current.world);
    Engine.clear(engine.current);
  };
  //Just update the mouse position to the references.
  const updateMousePosition = (event: MouseEvent) => {
    if (!canvas.current) return;
    posX.current = event.clientX - canvas.current.getBoundingClientRect().x;
    posY.current = event.clientY - canvas.current.getBoundingClientRect().y;
  };

  //Our JSX is pretty simple. I am using TailwindCSS, but you don't have to.
  return (
    <div className="fixed w-full h-full bg-slate-700 flex flex-col justify-center items-center">
      <div
        ref={canvas}
        className="bg-white h-[85%] w-[85%] flex justify-center items-center rounded-[12px] border-[3px] border-slate-800 overflow-hidden"
      >
        {/* <div className="w-full h-full bg-white absolute top-0 left-0  flex items-center justify-center">
          <img src="/images/svg.svg" alt="" />
        </div> */}
      </div>
    </div>
  );
}

export default App;
