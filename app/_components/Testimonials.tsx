import React from "react";
import { motion } from "framer-motion";
import SectionContainer from "./share/SectionContainer";

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Michela Nalin",
    role: "Marketing Manager",
    company: "for Nolato",
    testimonial:
      "Chinafy has made it possible for us to be sure that our web visitors in China have the same good experience as all our other visitors in the rest of the world.",
  },
  {
    name: "Ignacio Cerro",
    role: "CFO, Global Alumni",
    company: "for MIT Professional Education",
    testimonial:
      "We are very happy with working with Chinafy. They went above and beyond to ensure we help MIT Professional Education deliver world-class online education in China.",
  },
  {
    name: "Natasha Baker",
    role: "CEO & Founder",
    company: "of SnapEDA",
    testimonial:
      "Over 1 million engineers use SnapEDA each year all over the world. We were attracted to Chinafy's service because of how easy they made it to support the Chinese market.",
  },
  {
    name: "Nicolas Duchesne",
    role: "Product Marketing Manager",
    company: "",
    testimonial:
      "The process was super easy and I'm really glad we selected your team. The experience has been beyond my expectations.",
  },
];

const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  role,
  company,
  testimonial,
}) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <h3 className="text-xl font-semibold mb-1">{name}</h3>
    <p className="text-gray-500 text-sm mb-4">
      {role} {company}
    </p>
    <p className="text-gray-700">{testimonial}</p>
  </motion.div>
);

const Testimonials: React.FC = () => {
  return (
    <SectionContainer id="testimonials" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Our Customers</h2>
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-12 text-center">
          Don't Just Take Our Word
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
