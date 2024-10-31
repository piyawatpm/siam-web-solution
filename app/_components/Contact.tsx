import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import SectionContainer from "./share/SectionContainer";

import Animated from "./Animated";

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
    <SectionContainer id="contact" className=" bg-primary/30 flex flex-col">
      <div className="max-w-4xl  mx-auto px-4 pt-16  ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Transform Your Digital Presence
            <br />
            <span className="bg-yellow-200 px-2">
              With Expert Web Solutions
            </span>
          </h2>
          <p className="text-gray-600 mt-4">
            Share your vision with us and let our team of expert developers
            <br />
            craft the perfect digital solution for your business.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-8  bg-white p-8 rounded-3xl"
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
                className="flex-grow p-2 border-b-2 border-gray-300 focus:border-purple-500 outline-none bg-transparent text-2xl"
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
                className="flex-grow p-2 border-b-2 border-gray-300 focus:border-purple-500 outline-none bg-transparent text-2xl"
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
                className="flex-grow p-2 border-b-2 border-gray-300 focus:border-purple-500 outline-none bg-transparent text-2xl"
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
                focus:border-purple-500 outline-none 
                bg-transparent text-2xl w-full h-24
              `}
              placeholder="Your enquiry"
              required
            />
            <span className="text-2xl ml-1">.</span>
          </div>

          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-black text-white py-3 px-6 rounded-full text-xl font-semibold hover:bg-gray-800 transition duration-300 mt-8"
          >
            Submit
          </motion.button> */}
        </motion.form>
      </div>
      <div className=" bg-primary  !min-h-[80vh]   flex flex-col rounded-t-[4.25rem]  relative overflow-hidden  w-full">
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold"
            >
              Get Started
            </motion.button>
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
