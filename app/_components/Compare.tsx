import React from "react";
import { motion } from "framer-motion";
import SectionContainer from "./share/SectionContainer";
// import { FaChartLine, FaRocket } from "react-icons/fa";

const Impact: React.FC = () => {
  return (
    <SectionContainer id="impact" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-semibold text-gray-500 mb-2">
            Empowering Growth
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Boost Your Sales with Our Web Solutions
          </h1>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="bg-red-200 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                Before Our Website
              </span>
              {/* <FaChartLine className="text-red-500 text-2xl" /> */}
            </div>
            <div className="bg-white h-40 rounded-lg shadow-md p-4 flex flex-col justify-center items-center">
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-4xl font-bold text-red-500"
              >
                $10,000
              </motion.span>
              <span className="text-gray-600 mt-2">Monthly Sales</span>
            </div>
            <div className="mt-4 text-center">
              <span className="text-lg text-gray-700">
                Limited online presence
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                After Our Website
              </span>
              {/* <FaRocket className="text-green-500 text-2xl" /> */}
            </div>
            <div className="bg-white h-40 rounded-lg shadow-md p-4 flex flex-col justify-center items-center">
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-4xl font-bold text-green-500"
              >
                $50,000
              </motion.span>
              <span className="text-gray-600 mt-2">Monthly Sales</span>
            </div>
            <div className="mt-4 text-center">
              <span className="text-lg text-gray-700">
                Expanded reach & improved conversion
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            400% Increase in Sales!
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our web solutions not only enhance your online presence but also
            significantly boost your sales. Let us help you achieve similar
            results for your business.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold"
          >
            Get Started Now
          </motion.button>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default Impact;
