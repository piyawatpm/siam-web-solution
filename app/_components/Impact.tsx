import React from "react";
import { motion } from "framer-motion";
import SectionContainer from "./share/SectionContainer";
import Image from "next/image";

const Impact: React.FC = () => {
  return (
    <SectionContainer id="impact" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/team-meeting.jpg"
                alt="Team meeting"
                width={300}
                height={200}
                className="rounded-lg"
              />
              <Image
                src="/images/wireframe-sketch.jpg"
                alt="Wireframe sketch"
                width={300}
                height={200}
                className="rounded-lg"
              />
              <Image
                src="/images/lightbulb-idea.jpg"
                alt="Idea concept"
                width={300}
                height={200}
                className="rounded-lg"
              />
              <Image
                src="/images/designer-working.jpg"
                alt="Designer working"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Expert & Innovative Custom Web Design
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Transform your online presence with our cutting-edge web design
              solutions. We blend creativity with functionality to deliver
              websites that captivate your audience and drive results.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Tailored to your unique brand identity
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Optimized for user engagement and conversions
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Responsive design for all devices
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                SEO-friendly to boost your online visibility
              </li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Impact;
