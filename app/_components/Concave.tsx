import React, { useRef, useEffect } from "react";
import Matter from "matter-js";
import decomp from "poly-decomp"; // Import poly-decomp
import { motion } from "framer-motion";

Matter.Common.setDecomp(decomp); // Set the decomposer

const ConcaveExample: React.FC = () => {
  const requestRef = useRef<number>();
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const svgContainerRef = useRef<SVGSVGElement>(null);

  const animate = () => {
    if (!sceneRef.current || !svgContainerRef.current) return;

    // Create Matter.js engine and world
    engineRef.current = Matter.Engine.create({
      gravity: { x: 0, y: 1 },
    });
    const engine = engineRef.current;

    // Create boundaries (walls)
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

    // Add boundaries to the world
    Matter.Composite.add(engine.world, [ground, leftWall, rightWall, ceiling]);

    // Define concave shapes
    const shapes = [
      { name: "arrow", path: "40 0 40 20 100 20 100 80 40 80 40 100 0 50" },
      { name: "chevron", path: "100 0 75 50 100 100 25 100 0 50 25 0" },
      {
        name: "star",
        path: "50 0 63 38 100 38 69 59 82 100 50 75 18 100 31 59 0 38 37 38",
      },
      {
        name: "horseShoe",
        path: "35 7 19 17 14 38 14 58 25 79 45 85 65 84 65 66 46 67 34 59 30 44 33 29 45 23 66 23 66 7 53 7",
      },
    ];

    const shapeBodies = [];

    // Create bodies and SVG elements for each shape
    shapes.forEach((shape) => {
      const vertices = Matter.Vertices.fromPath(shape.path);
      const x = Math.random() * sceneRef.current!.clientWidth;
      const y = Math.random() * sceneRef.current!.clientHeight;
      const body = Matter.Bodies.fromVertices(
        x,
        y,
        [vertices],
        {
          restitution: 0.5,
          friction: 0.1,
          frictionAir: 0.01,
        },
        true
      );

      // Check if body was created successfully
      if (!body) {
        console.error(`Failed to create body for shape: ${shape.name}`);
        return;
      }

      // Compute centroid for correct rotation
      const centroid = Matter.Vertices.centre(body.vertices);

      // Adjust vertices to be relative to centroid
      const adjustedVertices = body.vertices.map((vertex) => ({
        x: vertex.x - body.position.x,
        y: vertex.y - body.position.y,
      }));

      // Create SVG path data
      const pathData =
        "M" +
        adjustedVertices
          .map((v) => `${v.x.toFixed(2)} ${v.y.toFixed(2)}`)
          .join("L") +
        "Z";

      // Create SVG path element
      const elem = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      elem.setAttribute("d", pathData);
      elem.setAttribute("fill", "#f19648");
      elem.setAttribute("stroke", "#000000");
      elem.setAttribute("stroke-width", "1");

      // Append SVG element to container
      svgContainerRef.current!.appendChild(elem);

      shapeBodies.push({
        body,
        elem,
        render() {
          const { x, y } = body.position;
          const angle = body.angle;
          elem.setAttribute(
            "transform",
            `translate(${x},${y}) rotate(${(angle * 180) / Math.PI})`
          );
        },
      });
    });

    // Add bodies to the world
    Matter.Composite.add(
      engine.world,
      shapeBodies.map((shape) => shape.body)
    );

    // Add mouse control
    const mouse = Matter.Mouse.create(svgContainerRef.current);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });
    Matter.Composite.add(engine.world, mouseConstraint);

    // Animation loop
    (function render() {
      Matter.Engine.update(engine);
      shapeBodies.forEach((shape) => shape.render());
      requestRef.current = requestAnimationFrame(render);
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
  }, []);

  return (
    <motion.div
      ref={sceneRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
    >
      <svg
        ref={svgContainerRef}
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0 }}
      ></svg>
    </motion.div>
  );
};

export default ConcaveExample;
