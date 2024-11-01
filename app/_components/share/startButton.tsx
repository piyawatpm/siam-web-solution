import { motion } from "framer-motion";

const StartButton = ({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.button
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileTap={{ scale: 0.95 }}
      className={` text-white font-medium relative group ${className}`}
      style={{
        background:
          "radial-gradient(141.631% 142.857% at 50% -37.5%, rgb(86, 86, 86) 0%, rgb(38, 38, 38) 100%)",
        border:
          "1px solid var(--token-c12473a8-7db2-4bed-8cca-3a9507b1e50e, rgb(96, 96, 96))",
        borderRadius: "10px",
        boxShadow:
          "rgba(48, 49, 51, 0.03) 0px 4px 4px 0px, rgba(20, 20, 20, 0.5) 0px 0px 8px 1px inset",
        opacity: 1,
        padding: "10px 20px 10px 20px",
      }}
      onClick={() => {
        // Handle CTA action, e.g., navigate to contact form with smooth scroll
        window.scrollTo({
          top: document.getElementById("contact").offsetTop,
          behavior: "smooth",
        });
      }}
    >
      <div className="bg-red-50 group-hover:left-[300] absolute -left-[32px] -top-[8px] h-[64px] w-[4px] rotate-45 blur-md transition-all duration-700 ease-in-out group-hover:left-[460px]"></div>
      Let s Discuss
    </motion.button>
  );
};

export default StartButton;
