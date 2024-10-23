import React from "react";
import { motion } from "framer-motion";
import SectionContainer from "./share/SectionContainer";

const tags = [
  "RESOURCES",
  "SOLUTIONS",
  "PRICING",
  "FEATURES",
  "PARTNERS",
  "OTHER SERVICES",
  "SUPPORT",
  "TRUST",
  "TECHNOLOGIES",
  "LEGAL",
  "TOOLS",
];

const TagCloud: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
      {tags.map((tag, index) => (
        <motion.div
          key={tag}
          className={`px-3 py-1 rounded-full text-sm md:text-base ${
            index % 2 === 0 ? "bg-yellow-200" : "bg-white"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {tag}
        </motion.div>
      ))}
    </div>
  );
};

const Conclusion: React.FC = () => {
  return (
    <SectionContainer id="conclusion" className="bg-purple-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-end mb-4">
          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.20l-.20 2H15a1 1 0 110 2H8.85l-.2 2H12a1 1 0 110 2H8.5l-.2 2H10a1 1 0 110 2H7a1 1 0 01-.99-1.14l1.44-14.4A1 1 0 017 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Faster, Fuller Website Delivery
          <br />
          For China
        </h2>
        <TagCloud />
        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold"
          >
            Get Started
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-6xl md:text-8xl font-bold text-purple-300 opacity-50">
            Chinafy
          </h3>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default Conclusion;
