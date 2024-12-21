import { useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionContainer from "./share/SectionContainer";
import AnimatedText from "./share/AnimatedText";
import Arrow from "./share/Arrow";
import LogoBg from "./share/logoBg";
const pricingPlans = [
  {
    name: "Package 1",
    description: "Custom web design + search engine optimisation",
    monthlyPrice: 299,
    yearlyPrice: 2990, // 10% savings annually
    color: "bg-primary",
    link: "https://buy.stripe.com/6oEeYz9OTelV9Z66oo",
    features: [
      "Custom design to match your Brand",
      "Responsive Web Design",
      "Search Engine Optimisation",
      "Unlimited Pages",
      "Free Unlimited Content updates",
    ],
  },
  {
    name: "Package 2",
    isBlur: true,
    description: "Custom web design + SEO + ordering system",
    monthlyPrice: 0,
    yearlyPrice: 0,
    color: "bg-gray-100",
    features: [
      "Everything in Package A, plus:",
      "Online Ordering / Booking System",
      "QR Code Ordering",
      "Online Payment",
      "Customise to match your Brand",
    ],
  },
  {
    name: "Package 3",
    isBlur: true,
    description: "Custom web + SEO + ordering system + review management",
    monthlyPrice: 0,
    yearlyPrice: 0,
    color: "bg-[#FEE797]",
    features: [
      "Everything in Package B, plus:",
      "Reviews Monitor & Sync",
      "Prevent Negative Reviews",
      "Automated Review Requests",
      "Review Widgets and Badges",
    ],
  },
  // {
  //   name: "Package D",
  //   description:
  //     "Custom web + SEO + ordering system + review management + direct marketing",
  //   monthlyPrice: 399,
  //   yearlyPrice: 3990,
  //   color: "bg-blue-100",
  //   features: [
  //     "Everything in Package C, plus:",
  //     "Send Email Marketing Campaign",
  //     "Send SMS Marketing Campaign",
  //     "Analyse Campaign Results",
  //     "Answer to all Reviews for you",
  //   ],
  // },
  // {
  //   name: "Package E",
  //   description:
  //     "Enterprise solution with dedicated support and custom features",
  //   monthlyPrice: null, // For custom quote
  //   yearlyPrice: null,
  //   color: "bg-green-100",
  //   features: [
  //     "Everything in Package D, plus:",
  //     "Dedicated Account Manager",
  //     "Priority Support 24/7",
  //     "Custom Feature Development",
  //     "Advanced Analytics & Reporting",
  //   ],
  // },
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
    <SectionContainer id="plans" className="py-12 sm:py-24 bg-white">
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
              Prices
            </span>
            <span className="text-2xl p-2 aspect-square font-bold bg-gray-100 rounded-full text-gray-600">
              $
            </span>
          </div>
        </div>

        <div className="text-center mb-4">
          <span className="*text-sm font-medium ">
            *All plans include Free Domain and Hosting
          </span>
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
          className={` grid grid-cols-1  lg:grid-cols-3 gap-6`}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              onClick={
                plan.link ? () => window.open(plan.link, "_blank") : null
              }
              key={plan.name}
              variants={cardVariants}
              className={`rounded-3xl  ${
                plan.isBlur ? " !blur-sm" : ""
              } border p-6 ${
                plan.color
              } transition-all relative min-h-[25rem] flex flex-col duration-300 hover:scale-105 group`}
            >
              <LogoBg color="white" />
              <div className="mx-auto relative z-20 text-black border border-black rounded-full py-2 w-[5rem] text-center mb-4">
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

              <div className="flex relative z-20 flex-col gap-y-4 my-4">
                <h2 className="text-2xl sm:text-4xl font-semibold text-center text-black">
                  {plan.name}
                </h2>
                <p className="text-sm sm:text-base text-black/80 text-center px-2">
                  {plan.description}
                </p>
              </div>

              <div className="flex flex-col gap-4 relative z-20 flex-1">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-black/70" />
                    <p className="text-sm text-black/80">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="flex relative z-20 items-center justify-between mt-6 pt-4 ">
                {plan.monthlyPrice ? (
                  <div className="flex flex-col">
                    <div className="text-xl sm:text-2xl font-medium text-black bg-white rounded-2xl px-4 py-2">
                      ${isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                    </div>
                    <span className="text-xs mt-1 text-black/70">
                      Initial Set-Up Fee
                    </span>
                  </div>
                ) : (
                  <div className="text-xl sm:text-2xl font-bold text-black">
                    Contact Us
                  </div>
                )}
                <Arrow className="w-10 h-10 transition-transform group-hover:translate-x-2" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default PricingPlans;
