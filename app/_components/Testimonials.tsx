import React from "react";
import { motion } from "framer-motion";
import SectionContainer from "./share/SectionContainer";
import Image from "next/image";
import TextContainer from "./share/TextContainer";
import AnimatedText from "./share/AnimatedText";

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  image?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
const testimonials: TestimonialProps[] = [
  {
    name: "TBD",
    role: "Coming Soon",
    company: "",
    testimonial:
      "We're currently collecting testimonials from our valued clients. Check back soon!",
  },
  {
    name: "TBD",
    role: "Coming Soon",
    company: "",
    testimonial:
      "Our commitment to excellence will be reflected in our client testimonials. Stay tuned!",
  },
  {
    name: "TBD",
    role: "Coming Soon",
    company: "",
    testimonial:
      "Real success stories from our clients will be featured here shortly.",
  },
  {
    name: "TBD",
    role: "Coming Soon",
    company: "",
    testimonial:
      "We're working with amazing clients and will share their experiences soon.",
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
    backgroundColor: "#D4CDED",
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
    initial={{ opacity: 0, y: Math.random() * (300 - 100) + 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className=" h-[23.5rem] text-black group rounded-3xl relative overflow-visible"
      initial="initial"
      whileHover="animate"
      transition={{ duration: 0.5 }} // Adjust this value to change the overall animation duration
    >
      <motion.div
        className="rounded-3xl flex flex-col   p-6 relative z-10 h-full bg-gray-100"
        variants={cover}
        transition={{ duration: 0.5 }} // Adjust this value to change the overall animation duration
      >
        <h3 className="text-2xl font-semibold mb-1">{name}</h3>
        <p className=" text-sm mb-4 text-gray-400">{role}</p>
        <p className=" mt-auto">{testimonial}</p>
      </motion.div>
      <motion.div
        variants={testimonialVariants}
        transition={{ duration: 0.5 }} // Adjust this value to change the overall animation duration
        className=" rounded-3xl  overflow-hidden  shadow-lg  absolute inset-0 w-full z-0 h-full  bg-gray-100 "
      >
        <img src="/images/pp2.jpg" alt="" />
        {/* <p className="text-white">{testimonial}</p> */}
      </motion.div>
    </motion.div>
  </motion.div>
);

const Testimonials: React.FC = () => {
  return (
    <SectionContainer id="testimonials" className="bg-white py-12 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-x-3 items-center mb-2">
          <TextContainer>Customers</TextContainer>

          <TextContainer className="w-12 h-12 bg-gray-100 !rounded-full flex items-center justify-center !p-2">
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
          </TextContainer>
        </div>
        <AnimatedText
          text="Don't Just Take"
          className="text-5xl font-normal justify-center text-center mx-auto"
        />
        <AnimatedText
          text="Our Word"
          className="text-5xl font-normal justify-center mb-12 text-center mx-auto"
        />
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
