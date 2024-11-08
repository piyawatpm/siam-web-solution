const LogoBg = ({ color = "#EEEBF6" }: { color: string }) => {
  return (
    <div className=" absolute inset-0 w-full h-full z-[1] overflow-hidden flex items-center justify-end ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 400 350"
        className=" w-[150%] h-[150%]  "
        version="1.0"
      >
        <g clipPath="url(#5a55806272)">
          <path
            fill={color}
            d="M 198.992188 37.5 L 78.375 107.140625 L 78.375 246.425781 L 198.992188 316.066406 L 319.613281 246.425781 L 319.613281 107.140625 Z M 198.992188 60.507812 L 299.667969 118.617188 L 299.667969 159.847656 L 198.992188 101.738281 L 124.617188 144.691406 L 234.703125 208.261719 L 198.992188 228.875 L 98.320312 170.765625 L 98.320312 118.675781 Z M 198.992188 124.691406 L 299.667969 182.800781 L 299.667969 234.890625 L 198.992188 293.058594 L 98.320312 234.890625 L 98.320312 193.664062 L 198.992188 251.773438 L 273.371094 208.875 L 163.28125 145.304688 Z M 198.992188 124.691406 "
            fill-opacity="1"
            fillRule="nonzero"
          />
        </g>
      </svg>
    </div>
  );
};

export default LogoBg;
