import React from "react";
import { motion } from "framer-motion";
import SectionContainer from "./share/SectionContainer";

const keywords = [
  "GLOBAL REACH",
  "INNOVATION",
  "PERFORMANCE",
  "SCALABILITY",
  "USER EXPERIENCE",
  "SECURITY",
  "ANALYTICS",
  "INTEGRATION",
  "RESPONSIVENESS",
  "ACCESSIBILITY",
  "OPTIMIZATION",
];

const KeywordCloud: React.FC = () => {
  console.log("keyword cloud re-rendered");
  return (
    <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
      {keywords.map((keyword, index) => (
        <motion.div
          key={keyword}
          className={`px-3 py-1 rounded-full text-sm md:text-base ${
            index % 2 === 0 ? "bg-blue-200" : "bg-white"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {keyword}
        </motion.div>
      ))}
    </div>
  );
};

const Impact: React.FC = () => {
  return (
    <SectionContainer
      id="impact"
      className="bg-gradient-to-br from-blue-100 to-white py-16"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-end mb-4">
          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Empowering Global Connectivity
          <br />
          Through Web Innovation
        </h2>
        <KeywordCloud />
        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold"
          >
            Explore Solutions
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-6xl md:text-8xl font-bold text-blue-300 opacity-50">
            WebImpact
          </h3>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default Impact;
