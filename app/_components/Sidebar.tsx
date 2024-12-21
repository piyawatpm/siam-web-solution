import { motion } from "framer-motion";
import AnimatedText from "./share/AnimatedText";
import { useEffect, useRef, useState } from "react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const circleVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const menuItems = [
  { name: "Home", id: "hero" },
  { name: "Video", id: "video" },
  { name: "Portfolio", id: "work" },
  { name: "Services", id: "services" },
  { name: "Benefits", id: "impact" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Plans", id: "plans" },
  { name: "Contact", id: "contact" },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, isMobile }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [lang, setLang] = useState("EN");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const sidebarVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: {
      x: "-100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  const handleMenuClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    onClose();
  };

  return (
    <>
      {isOpen && (
        <motion.div
          className="fixed inset-0 w-screen h-screen bg-black bg-opacity-40 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
      )}
      <motion.div
        ref={sidebarRef}
        className="fixed top-0  left-0 w-[20rem] sm:w-[30rem] h-screen bg-white rounded-r-[3rem] shadow-lg z-[99999999999] text-black"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
      >
        <div className="p-6 flex flex-col h-full">
          <button
            onClick={onClose}
            className="self-end text-2xl leading-none w-8 h-8 rounded-full border border-black"
          >
            ×
          </button>
          <nav className="flex flex-col gap-y-4">
            {menuItems.map((item) => (
              <div key={item.name} className="flex group gap-x-1">
                <div className=" flex items-center justify-center transition-all duration-500 h-0 group-hover:h-full group-hover:aspect-square rounded-md bg-primary">
                  <img
                    src="/images/arrow.svg"
                    className=" w-4/5 h-4/5 "
                    alt=""
                  />
                </div>
                <div className="relative p-1  ">
                  <p
                    className={`text-2xl sm:text-4xl relative z-10 !text-start !text-black   cursor-pointer`}
                    onClick={() => handleMenuClick(item.id)}
                  >
                    {item.name}
                  </p>
                  <div className=" w-0 inset-0 transition-all duration-500 group-hover:w-full absolute h-full bg-primary rounded-md  -z-1" />
                  <div className=" w-0 inset-0 transition-all duration-500 group-hover:w-[105%] absolute h-full  bg-secondary rounded-md  z-[-2]" />
                </div>
              </div>
            ))}
          </nav>
          <div className="flex gap-2 mt-auto">
            {["EN"].map((language) => (
              <div
                key={language}
                className="relative p-1 h-8 w-8 flex items-center justify-center cursor-pointer"
                onClick={() => setLang(language)}
              >
                {language}
                {lang === language && (
                  <motion.svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="48"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      variants={circleVariants}
                    />
                  </motion.svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
