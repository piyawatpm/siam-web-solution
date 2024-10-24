import React from "react";
import { motion } from "framer-motion";
import SectionContainer from "./share/SectionContainer";
import Image from "next/image";

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  image?: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Michela Nalin",
    role: "Marketing Manager for Nolato",
    company: "",
    testimonial:
      "Chinafy has made it possible for us to be sure that our web visitors in China have the same good experience as all our other visitors in the rest of the world.",
  },
  {
    name: "Ignacio Cerro",
    role: "CFO, Global Alumni for MIT Professional Education",
    company: "",
    testimonial:
      "We are very happy with working with Chinafy. They went above and beyond to ensure we help MIT Professional Education deliver world-class online education in China.",
  },
  {
    name: "Natasha Baker",
    role: "CEO & Founder of SnapEDA",
    company: "",
    testimonial:
      "Over 1 million engineers use SnapEDA each year all over the world. We were attracted to Chinafy's service because of how easy they made it to support the Chinese market.",
    image: "/path/to/natasha-baker-image.jpg",
  },
  {
    name: "Nicolas Duchesne",
    role: "Product Marketing Manager",
    company: "",
    testimonial:
      "The process was super easy and I'm really glad we selected your team. The experience has been beyond my expectations.",
  },
];

const cover = {
  initial: {
    rotate: 0,
    scale: 1,
    translateY: 0,
    translateX: 0,
  },
  animate: {
    rotate: 12,
    scale: 1,
    translateY: "44%",
    translateX: 0,
  },
};
const testimonialVariants = {
  initial: {
    rotate: 0,
  },
  animate: {
    rotate: -2,
  },
};

const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  role,
  testimonial,
  image,
}) => (
  <motion.div
    className=" h-[17.5rem] text-black group rounded-3xl relative overflow-visible"
    initial="initial"
    animate="initial"
    whileHover="animate"
    transition={{ duration: 0.5 }} // Adjust this value to change the overall animation duration
  >
    <motion.div
      className="rounded-3xl   p-6 relative z-10 h-full bg-gray-100"
      variants={cover}
      transition={{ duration: 0.5 }} // Adjust this value to change the overall animation duration
    >
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-black text-sm mb-4">{role}</p>
    </motion.div>
    <motion.div
      variants={testimonialVariants}
      transition={{ duration: 0.5 }} // Adjust this value to change the overall animation duration
      className=" rounded-3xl  shadow-lg  absolute inset-0 w-full z-0 h-full  bg-gray-100 "
    >
      {/* <p className="text-white">{testimonial}</p> */}
    </motion.div>
  </motion.div>
);

const Testimonials: React.FC = () => {
  return (
    <SectionContainer id="testimonials" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-x-3 items-center mb-12">
          <motion.h2
            className="text-xl  bg-gray-100 px-6 py-2 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            Our Customers
          </motion.h2>
          <motion.div
            className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.1, backgroundColor: "#e5e7eb" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>
        </div>
        <h1 className="text-5xl font-normal mb-12 text-center">
          Don't Just Take <br />
          Our Word
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Testimonials;
