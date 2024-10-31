import { useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";

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
    isBlur: true,
  },
  {
    name: "Enterprise",
    description:
      "For your brand or organization, with change management and 99.99% uptime.",
    monthlyPrice: null,
    yearlyPrice: null,
    color: "bg-yellow-100",
    isBlur: true,
  },
];

const PricingPlans: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex gap-x-2 w-auto">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-1 ${
                !isAnnual && "pl-1"
              } rounded-full flex items-center gap-x-2 text-black border border-black`}
              onClick={() => setIsAnnual(false)}
            >
              <AnimatePresence>
                {!isAnnual && (
                  <motion.div
                    initial={{ width: 0, height: 0 }}
                    animate={{ width: "1.75rem", height: "1.75rem" }}
                    exit={{ width: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-full bg-primary"
                  />
                )}
              </AnimatePresence>
              <p>Monthly</p>
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-1 ${
                isAnnual && "pl-1"
              } rounded-full flex items-center justify-center gap-x-2 w-auto text-black border border-black`}
              onClick={() => setIsAnnual(true)}
            >
              <AnimatePresence>
                {isAnnual && (
                  <motion.div
                    initial={{ width: 0, height: 0 }}
                    animate={{ width: "1.75rem", height: "1.75rem" }}
                    exit={{ width: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-full bg-primary"
                  />
                )}
              </AnimatePresence>
              <p>Annual</p>
            </motion.button>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 py-2 px-4 bg-gray-100 rounded-full">
              Our Prices
            </span>
            <span className="text-2xl p-2 aspect-square font-bold bg-gray-100 rounded-full text-gray-600">
              $
            </span>
          </div>
        </div>

        <h1 className="text-[2rem] sm:text-[2.5rem] font-medium text-center mb-12 text-black">
          Explore Our Plans
        </h1>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className={`rounded-3xl p-6 ${plan.color} ${
                plan.isBlur ? "!backdrop-blur-sm !opacity-20" : ""
              } transition-all    duration-300 hover:scale-105`}
            >
              <div className="mx-auto text-black border border-black rounded-full px-4 py-1 w-fit mb-4">
                {isAnnual ? "Annual" : "Monthly"}
              </div>
              <h2 className="text-2xl sm:text-3xl font-medium mb-4 text-center text-black">
                {plan.name}
              </h2>
              <p className="text-sm sm:text-base text-black mb-6 text-center">
                {plan.description}
              </p>
              <div className="flex items-center justify-between">
                {plan.monthlyPrice ? (
                  <div className="text-xl sm:text-2xl font-medium text-black rounded-full px-4 py-1 bg-white">
                    ${isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                    <span className="text-xs sm:text-sm font-normal text-black">
                      /mo
                    </span>
                  </div>
                ) : (
                  <div className="text-xl sm:text-2xl font-bold text-black">
                    Enquire
                  </div>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPlans;
