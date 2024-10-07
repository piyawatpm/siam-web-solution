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
    <div id={id} className={`w-full relative min-h-[100dvh] ${className}`}>
      {children}
    </div>
  );
};

export default SectionContainer;
