const SectionContainer = ({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id: string;
  className?: string;
}) => {
  return (
    <div
      id={id}
      className={`w-full relative min-h-[100dvh] ${className} py-10 flex flex-col items-center justify-center`}
    >
      {children}
    </div>
  );
};

export default SectionContainer;
