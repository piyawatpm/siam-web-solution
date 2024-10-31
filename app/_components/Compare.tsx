// components/Compare.tsx

import React from "react";
import { motion } from "framer-motion";
import SectionContainer from "./share/SectionContainer";
import { FaChartLine, FaRocket, FaUsers, FaDollarSign } from "react-icons/fa";

const Compare: React.FC = () => {
  return (
    <SectionContainer id="compare" className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-semibold text-gray-500 mb-2">
            See the Difference
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Compare Your Business Growth
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how our web solutions can transform your business metrics,
            enhancing sales, traffic, and customer engagement.
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          {/* Before Our Website Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md"
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="bg-red-200 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                Before Our Website
              </span>
              <FaChartLine
                className="text-red-500 text-2xl"
                aria-hidden="true"
              />
            </div>
            <div className="bg-white rounded-lg shadow-inner p-4">
              <div className="flex items-center mb-2">
                <FaDollarSign
                  className="text-red-500 text-2xl mr-2"
                  aria-hidden="true"
                />
                <span className="text-3xl font-bold text-red-500">$10,000</span>
              </div>
              <span className="text-gray-600">Monthly Sales</span>
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <FaUsers
                  className="text-red-500 text-xl mr-2"
                  aria-hidden="true"
                />
                <span className="text-lg text-gray-700">
                  Online Traffic: 2,000 Visits
                </span>
              </div>
              <div className="flex items-center mt-2">
                <FaChartLine
                  className="text-red-500 text-xl mr-2"
                  aria-hidden="true"
                />
                <span className="text-lg text-gray-700">
                  Booking Rate: 1.5%
                </span>
              </div>
            </div>
            <div className="mt-4 text-center">
              <span className="text-lg text-gray-700">
                Limited online presence and customer engagement.
              </span>
            </div>
          </motion.div>

          {/* After Our Website Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md"
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                After Our Website
              </span>
              <FaRocket
                className="text-green-500 text-2xl"
                aria-hidden="true"
              />
            </div>
            <div className="bg-white rounded-lg shadow-inner p-4">
              <div className="flex items-center mb-2">
                <FaDollarSign
                  className="text-green-500 text-2xl mr-2"
                  aria-hidden="true"
                />
                <span className="text-3xl font-bold text-green-500">
                  $50,000
                </span>
              </div>
              <span className="text-gray-600">Monthly Sales</span>
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <FaUsers
                  className="text-green-500 text-xl mr-2"
                  aria-hidden="true"
                />
                <span className="text-lg text-gray-700">
                  Online Traffic: 8,000 Visits
                </span>
              </div>
              <div className="flex items-center mt-2">
                <FaChartLine
                  className="text-green-500 text-xl mr-2"
                  aria-hidden="true"
                />
                <span className="text-lg text-gray-700">
                  Booking Rate: 4.5%
                </span>
              </div>
            </div>
            <div className="mt-4 text-center">
              <span className="text-lg text-gray-700">
                Expanded reach and improved conversion rates.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Compare;
