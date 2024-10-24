import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

const PricingPlans: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-end items-center py-16 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-x-2 w-auto ">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-1 ${
                !isAnnual && "pl-1"
              }  rounded-full flex items-center gap-x-2 text-black border border-black`}
              onClick={() => setIsAnnual(false)}
            >
              <AnimatePresence>
                {!isAnnual && (
                  <motion.div
                    initial={{ width: 0, height: 0 }}
                    animate={{ width: "1.75rem", height: "1.75rem" }}
                    exit={{ width: 0, height: 0 }}
                    transition={{ duration: 2 }}
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
                    transition={{ duration: 2 }}
                    className="rounded-full bg-primary"
                  />
                )}
              </AnimatePresence>
              <p>Annual</p>
            </motion.button>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 py-2 px-4  bg-gray-100 rounded-full">
              Our Prices
            </span>
            <span className="text-2xl p-2 aspect-square font-bold bg-gray-100 rounded-full text-gray-600 ">
              $
            </span>
          </div>
        </div>

        <h1 className="text-[2.5rem] font-medium text-center mb-12 text-black">
          Explore Our Plans
        </h1>

        <div className="grid md:grid-cols-3 gap-4">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-3xl p-6 ${plan.color}`}
            >
              <div className=" mx-auto text-black border border-black rounded-full px-4 py-1  w-fit mb-4">
                Monthly
              </div>
              <h2 className="text-3xl font-medium mb-4 text-center text-black">
                {plan.name}
              </h2>
              <p className=" text-black mb-6 text-center">{plan.description}</p>
              <div className="flex items-center justify-between">
                {plan.monthlyPrice ? (
                  <div className="text-2xl font-medium text-black rounded-full px-4 py-1 bg-white">
                    ${isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                    <span className="text-sm font-normal text-black">/mo</span>
                  </div>
                ) : (
                  <div className="text-2xl font-bold text-black">Enquire</div>
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
                    className="h-6 w-6"
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
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
