// components/Impact.tsx

import React from "react";
import { motion } from "framer-motion";
import SectionContainer from "./share/SectionContainer";
import Image from "next/image";
import StartButton from "./share/startButton";

const benefits = [
  {
    icon: (
      <svg
        className="w-6 h-6 text-green-500 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </svg>
    ),
    title: "Increase Online Visibility",
    description:
      "Ensure your Thai restaurant or massage shop stands out in search results, making it easier for customers to find you.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-green-500 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
          whileHover={{ scale: 1.2, rotate: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </svg>
    ),
    title: "Showcase Your Unique Offerings",
    description:
      "Display your authentic Thai cuisine or massage services with high-quality images and detailed descriptions.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-green-500 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </svg>
    ),
    title: "Online Reservations and Booking",
    description:
      "Simplify the booking process for your customers with integrated reservation systems, increasing your booking rates.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-green-500 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
          whileHover={{ scale: 1.2, rotate: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </svg>
    ),
    title: "Customer Reviews and Testimonials",
    description:
      "Build trust with potential customers by showcasing positive feedback from your clients.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-green-500 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </svg>
    ),
    title: "Mobile-Friendly Design",
    description:
      "Provide a seamless experience for customers accessing your site on any device, enhancing user satisfaction.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-green-500 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
          whileHover={{ scale: 1.2, rotate: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </svg>
    ),
    title: "SEO-Friendly to Boost Visibility",
    description:
      "Optimize your website for search engines to increase your online presence and attract more customers.",
  },
];

const Impact: React.FC = () => {
  return (
    <SectionContainer id="impact" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Boost Business's Online Presence
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Enhance customer engagement and drive more bookings with a
              custom-designed website tailored for your business.
            </p>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 mb-8"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <div className="flex-shrink-0">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
            <StartButton />
          </motion.div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-full h-48 rounded-lg overflow-hidden"
              >
                <Image
                  src="/images/thai-restaurant-interior.jpg"
                  alt="Thai restaurant interior with customers enjoying their meals"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  priority
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-full h-48 rounded-lg overflow-hidden"
              >
                <Image
                  src="/images/thai-massage.jpg"
                  alt="Thai massage shop with a serene environment"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  priority
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-full h-48 rounded-lg overflow-hidden"
              >
                <Image
                  src="/images/thai-cuisine-dish.jpg"
                  alt="Delicious Thai cuisine dish served at a restaurant"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  priority
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-full h-48 rounded-lg overflow-hidden"
              >
                <Image
                  src="/images/thai-massage-therapist.jpg"
                  alt="Thai massage therapist providing a relaxing massage"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Optional: Success Stories or Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Clients Have Seen Amazing Results
          </h3>
          <p className="text-gray-600">
            "Since partnering with us, our online bookings have increased by
            40%, and our restaurant's visibility in search engines has never
            been better."
          </p>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default Impact;
