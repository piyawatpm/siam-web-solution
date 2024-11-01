import { useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionContainer from "./share/SectionContainer";
import AnimatedText from "./share/AnimatedText";
import Arrow from "./share/Arrow";

const pricingPlans = [
  {
    name: "Starter",
    description:
      "Best for Squarespace or Shopify template-based websites with 10 or fewer pages.",
    monthlyPrice: 10,
    yearlyPrice: 10,
    color: "bg-purple-100",
  },
  {
    name: "Pro+",
    description:
      "For more robust websites: custom sites, sites requiring login or live streaming, or Shopify Plus.",
    monthlyPrice: 10,
    yearlyPrice: 10,
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
    <SectionContainer id="plans">
      <div className="w-full px-5 sm:px-10 mx-auto ">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex gap-x-2 w-auto">
            <motion.button
              whileTap={{ scale: 0.95 }}
              initial={{ paddingLeft: "1rem", paddingRight: "1rem" }}
              animate={{
                paddingLeft: !isAnnual ? "0.5rem" : "1rem",
                paddingRight: !isAnnual ? "0.5rem" : "1rem",
              }}
              className={`px-4   rounded-full flex items-center  text-black border border-black h-[3rem]`}
              onClick={() => setIsAnnual(false)}
            >
              <AnimatePresence>
                {!isAnnual && (
                  <motion.div
                    initial={{ width: 0, height: 0 }}
                    animate={{ width: "2.25rem", height: "2.25rem" }}
                    exit={{ width: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-full bg-primary"
                  />
                )}
              </AnimatePresence>
              <p className=" ml-2">Monthly</p>
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              initial={{ paddingLeft: "1rem", paddingRight: "1rem" }}
              animate={{
                paddingLeft: isAnnual ? "0.5rem" : "1rem",
                paddingRight: isAnnual ? "0.5rem" : "1rem",
              }}
              className={`px-4 rounded-full flex items-center justify-center  w-auto text-black border border-black h-[3rem]`}
              onClick={() => setIsAnnual(true)}
            >
              <AnimatePresence>
                {isAnnual && (
                  <motion.div
                    initial={{ width: 0, height: 0 }}
                    animate={{ width: "2.25rem", height: "2.25rem" }}
                    exit={{ width: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-full bg-primary"
                  />
                )}
              </AnimatePresence>
              <p className=" ml-2">Annual</p>
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

        <AnimatedText
          text="Explore Our Plans"
          big
          className="text-[2rem] sm:text-[3.5rem] font-medium text-center mb-12 text-black justify-center"
        />

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
              } transition-all  min-h-[25rem] flex flex-col  duration-300 hover:scale-105 group`}
            >
              <div className="mx-auto text-black border border-black rounded-full  py-2 w-[5rem] text-center mb-4">
                <AnimatePresence mode="wait">
                  {isAnnual ? (
                    <motion.p
                      key="annual"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      Annual
                    </motion.p>
                  ) : (
                    <motion.p
                      key="monthly"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      Monthly
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
              <div className=" flex flex-col gap-y-4 my-auto">
                {" "}
                <h2 className="text-2xl sm:text-5xl font-medium mb-4 text-center text-black">
                  {plan.name}
                </h2>
                <p className="text-sm sm:text-base text-black mb-6 text-center">
                  {plan.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto">
                {plan.monthlyPrice ? (
                  <div className="text-xl sm:text-2xl font-medium text-black rounded-full px-5 py-4 bg-white">
                    ${isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                    <span className="text-xs sm:text-sm font-normal text-black ml-5">
                      / Initial Set-Up
                    </span>
                  </div>
                ) : (
                  <div className="text-xl sm:text-2xl font-bold text-black">
                    Enquire
                  </div>
                )}
                <Arrow className=" w-14 h-14" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default PricingPlans;
