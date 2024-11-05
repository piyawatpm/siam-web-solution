import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import SectionContainer from "./share/SectionContainer";

import Animated from "./Animated";
import AnimatedText from "./share/AnimatedText";
import StartButton from "./share/startButton";
import LogoBg from "./share/logoBg";

const Contact: React.FC = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    website: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <SectionContainer
      id="contact"
      className=" bg-white flex flex-col !pb-0 relative"
    >
      <div className=" w-full mx-auto px-4 pt-16 text-center min-h-[80vh] flex flex-col justify-center items-center relative ">
        <LogoBg />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <AnimatedText
            className=" text-5xl font-bold mb-4"
            text="Transform Your Digital Presence"
          />
          <AnimatedText
            className=" text-5xl font-bold mb-4 !text-center !justify-center"
            text="With Expert WebSolutions"
            highlightWords={["WebSolutions"]}
          />

          <AnimatedText
            className="text-gray-600  !text-base items-center justify-center"
            text="Share your vision with us and let our team of expert developers"
          />

          <AnimatedText
            className="text-gray-600  !text-base items-center justify-center"
            text="craft the perfect digital solution for your business."
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          // onSubmit={handleSubmit}
          className="space-y-8  bg-white p-8 rounded-3xl relative flex flex-col z-10 border-2 border-grayPrimary"
        >
          <div className="flex flex-col items-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-6 h-6"
                  animate={{
                    rotate: [0, -10, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </motion.svg>
              </div>
              <AnimatedText
                text="art.pm99@gmail.com"
                className="text-xl font-medium"
                delay={0.2}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center space-x-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-6 h-6"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </motion.svg>
              </div>
              <AnimatedText
                text="0493236642"
                className="text-xl font-medium"
                delay={0.4}
              />
            </motion.div>
          </div>
        </motion.div>
        {/* <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-8  bg-white p-8 rounded-3xl relative flex flex-col z-10"
        >
          <div className="flex flex-col space-y-4">
            <div className="flex items-baseline">
              <label htmlFor="name" className="text-2xl font-semibold mr-2">
                Hi! I am
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="flex-grow p-2 border-b-2 border-gray-300 focus:border-secondary outline-none bg-transparent text-2xl"
                placeholder="Your Name"
                required
              />
              <span className="text-2xl ml-1">.</span>
            </div>
            <div className="flex items-baseline">
              <label htmlFor="phone" className="text-2xl font-semibold mr-2">
                My Phone Number is
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="flex-grow p-2 border-b-2 border-gray-300 focus:border-secondary outline-none bg-transparent text-2xl"
                placeholder="Your Phone Number"
                required
              />
            </div>
            <div className="flex items-baseline">
              <label htmlFor="email" className="text-2xl font-semibold mr-2">
                My Email is
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="flex-grow p-2 border-b-2 border-gray-300 focus:border-secondary outline-none bg-transparent text-2xl"
                placeholder="Your Email"
                required
              />
            </div>
          </div>

          <div className="flex items-baseline flex-col">
            <label htmlFor="role" className="text-2xl font-semibold mr-2">
              My enquiry is about
            </label>
            <textarea
              id="enquiry"
              name="enquiry"
              value={formData.enquiry}
              onChange={handleChange}
              className={`
                flex-grow p-2 border-b-2 border-gray-300 
                focus:border-secondary outline-none 
                bg-transparent text-2xl w-full h-24
              `}
              placeholder="Your enquiry"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-black text-white py-3 px-6 rounded-full text-xl font-semibold hover:bg-gray-800 transition duration-300 mt-8"
          >
            Submit
          </motion.button>
        </motion.form> */}
      </div>
      <div className=" bg-primary  !min-h-[80vh]   flex flex-col rounded-t-[5.25rem]  relative overflow-hidden  w-full">
        <div className="container  w-fit  relative z-20   flex-1 mx-auto px-4 flex flex-col justify-center items-center mb-24">
          {/* <div className="flex justify-end mb-4">
          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.20l-.20 2H15a1 1 0 110 2H8.85l-.2 2H12a1 1 0 110 2H8.5l-.2 2H10a1 1 0 110 2H7a1 1 0 01-.99-1.14l1.44-14.4A1 1 0 017 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div> */}
          <div className="text-4xl flex flex-col md:text-5xl font-bold text-center  text-black">
            <p>Modern</p>
            <p>Responsive</p>
            <p>Custom Websites</p>
            <p>For Your Business</p>
          </div>

          <div className="mt-12 text-center">
            <StartButton className="w-fit" delay={0} />
          </div>
        </div>
        <Animated />
        {/* <div className=" absolute text-center bottom-0  w-full bg-transparent translate-y-[40%]  ">
          <h3 className=" text-[300px] leading-[1em] font-bold text-white bg-transparent ">
            SIAM
          </h3>
        </div> */}
      </div>
    </SectionContainer>
  );
};

export default Contact;
