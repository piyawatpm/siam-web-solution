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
  { name: "Home", id: "home" },
  { name: "Video", id: "video" },
  { name: "Portfolio", id: "portfolio" },
  { name: "Services", id: "services" },
  { name: "Benefits", id: "benefits" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Plans", id: "plans" },
  { name: "Contact", id: "contact" },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
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
        className="fixed top-0 left-0 w-[30rem] h-screen bg-white rounded-r-[3rem] shadow-lg z-50 text-black"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
      >
        <div className="p-6 flex flex-col h-full">
          <button onClick={onClose} className="self-end text-2xl mb-8">
            ×
          </button>
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <AnimatedText
                key={item.name}
                text={item.name}
                className={`text-4xl !text-start !text-black hover:text-purple-500 cursor-pointer`}
                onClick={() => handleMenuClick(item.id)}
              />
            ))}
          </nav>
          <div className="flex gap-2 mt-auto">
            {["EN", "TH"].map((language) => (
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
