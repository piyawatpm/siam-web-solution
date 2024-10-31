const Arrow = ({ className }: { className?: string } = {}) => {
  return (
    <div
      className={` flex w-10 h-10 items-center  justify-center overflow-hidden relative top-0 right-0 p-3 rounded-full border-[1px] border-[#EDEFF3] bg-[#FBFCFC]  ${className}`}
    >
      <img
        src="/images/arrow.svg"
        className=" absolute translate-x-[-300%] translate-y-[300%]  group-hover:translate-x-[0%] group-hover:translate-y-[0%] transition-all duration-[500ms]"
        alt=""
      />
      <img
        src="/images/arrow.svg"
        className=" absolute   group-hover:translate-x-[300%] group-hover:translate-y-[-300%] transition-all duration-[500ms]"
        alt=""
      />
    </div>
  );
};
export default Arrow;
