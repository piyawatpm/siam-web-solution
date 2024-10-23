"use client";

import { useState } from "react";
import { motion } from "framer-motion";
// import { ChevronLeft, ArrowUpRight } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    description:
      "Best for Squarespace or Shopify template-based websites with 10 or fewer pages.",
    monthlyPrice: 350,
    yearlyPrice: 3500,
    color: "bg-purple-100",
  },
  {
    name: "Pro+",
    description:
      "For more robust websites: custom sites, sites requiring login or live streaming, or Shopify Plus.",
    monthlyPrice: 550,
    yearlyPrice: 5500,
    color: "bg-gray-100",
  },
  {
    name: "Enterprise",
    description:
      "For your brand or organization, with change management and 99.99% uptime.",
    monthlyPrice: null,
    yearlyPrice: null,
    color: "bg-yellow-100",
  },
];

function Plans() {
  const [isAnnual, setIsAnnual] = useState(false);
    

  console.log("plans re-rendered");

  return (
    <div className=" bg-white mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-2">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full ${
              !isAnnual
                ? "bg-gray-200 text-gray-800"
                : "bg-white text-gray-500 border border-gray-300"
            }`}
            onClick={() => setIsAnnual(false)}
          >
            Annual
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full ${
              isAnnual
                ? "bg-purple-200 text-purple-800"
                : "bg-white text-gray-500 border border-gray-300"
            }`}
            onClick={() => setIsAnnual(true)}
          >
            Monthly
          </motion.button>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">Our Prices</span>
          <span className="text-2xl font-bold">$</span>
          <button className="text-purple-600 flex items-center">
            See more options
            {/* <ChevronLeft className="ml-1 h-4 w-4" /> */}
          </button>
        </div>
      </div>

      <h1 className="text-4xl font-bold text-center mb-12">
        Explore Our Plans
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`rounded-lg p-6 ${plan.color}`}
          >
            <div className="bg-white rounded-full px-4 py-1 inline-block mb-4">
              {plan.name === "Enterprise" ? "Monthly" : "Monthly"}
            </div>
            <h2 className="text-3xl font-bold mb-4">{plan.name}</h2>
            <p className="text-gray-600 mb-6">{plan.description}</p>
            <div className="flex items-center justify-between">
              {plan.monthlyPrice ? (
                <div className="text-2xl font-bold">
                  ${isAnnual ? plan.yearlyPrice / 12 : plan.monthlyPrice}
                  <span className="text-sm font-normal text-gray-500">
                    {isAnnual ? "/mo (billed annually)" : "/mo"}
                  </span>
                </div>
              ) : (
                <div className="text-2xl font-bold">Enquire</div>
              )}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-full ${
                  plan.name === "Starter"
                    ? "bg-black text-white"
                    : "bg-white text-black border border-gray-300"
                }`}
              >
                {/* <ArrowUpRight className="h-6 w-6" /> */}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default Plans;
