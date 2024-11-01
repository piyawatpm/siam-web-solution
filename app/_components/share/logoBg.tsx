const LogoBg = ({ color = "#EEEBF6" }: { color: string }) => {
  return (
    <div className=" absolute inset-0 w-full h-full z-[1] ">
      <svg
        className=" w-full h-full"
        viewBox="0 0 91.3 70.7"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="svgGroup"
          stroke-linecap="round"
          fill-rule="evenodd"
          font-size="20pt"
          stroke={color}
          className=" rotate-[20deg]"
          stroke-width="1.75mm"
          fill={color}
          // style="stroke:#000;stroke-width:0.25mm;fill:#000"
        >
          <path
            d="M 30.8 70.7 L 19 70.7 L 0 3 L 9.4 0 L 25.2 60.6 L 40.1 8 L 52 8 L 66.8 60.6 L 82.5 0.3 L 91.3 3 L 72.4 70.7 L 60.6 70.7 L 45.8 18.1 L 30.8 70.7 Z"
            // vector-effect="non-scaling-stroke"
          />
        </g>
      </svg>
    </div>
  );
};

export default LogoBg;
