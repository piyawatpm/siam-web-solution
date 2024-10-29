import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import SectionContainer from "./share/SectionContainer";

const PayAsYouGo: React.FC = ({
  onInView,
}: {
  onInView: (isInView: boolean) => void;
}) => {
  // const ref = useRef(null);
  // const isInView = useInView(ref);

  // useEffect(() => {
  //   onInView(true);
  // }, [isInView, onInView]);
  const stats = [
    { value: "95%", label: "Less Upfront Cost" },
    { value: "3.7x", label: "Faster Return on Investment" },
  ];

  return (
    <SectionContainer id="pay-as-you-go" className="bg-gray-50">
      <div  className=" container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-4xl font-bold mb-4">
              Pay As You Go <br />
              <span className="text-blue-600">Custom Web Design</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Experience exceptional personalised website design tailored to fit
              your distinct requirements at a budget-friendly rate with our Pay
              As You Go plan. No hefty initial upfront cost required.
            </p>
            <div className="flex justify-center md:justify-start gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-5xl font-bold text-blue-600">
                    {stat.value}
                  </p>
                  <p className="text-gray-600 mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:w-1/2 flex justify-center"
          >
            <Image
              src="/images/bonsai.png"
              alt="Bonsai"
              width={400}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Start Your Project
          </motion.button>
        </motion.div> */}
      </div>
    </SectionContainer>
  );
};

export default PayAsYouGo;
