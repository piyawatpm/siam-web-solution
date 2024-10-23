import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionContainer from "./share/SectionContainer";

const Contact = () => {
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
      className="bg-gradient-to-br from-purple-100 to-white"
    >
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Make Your Website Work In China
          </h2>
          <p className="text-gray-600">
            Enter in a few details and one of our team members will reach out to
            you shortly with a plan and next steps to 'Go Live' in China.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
        
            <label htmlFor="name" className="text-2xl font-semibold">
              Hi! I am
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="ml-2 p-2 border-b-2 border-gray-300 focus:border-purple-500 outline-none bg-transparent text-2xl"
              placeholder="Your Name"
              required
            />
            <span className="text-2xl">.</span>
          </div>

          <div>
            <label htmlFor="email" className="text-2xl font-semibold">
              My work email address is
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="ml-2 p-2 border-b-2 border-gray-300 focus:border-purple-500 outline-none bg-transparent text-2xl"
              placeholder="your@email.com"
              required
            />
            <span className="text-2xl">.</span>
          </div>

          <div>
            <label htmlFor="role" className="text-2xl font-semibold">
              My company role can be described as
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="ml-2 p-2 border-b-2 border-gray-300 focus:border-purple-500 outline-none bg-transparent text-2xl"
              placeholder="Your Role"
              required
            />
            <span className="text-2xl">.</span>
          </div>

          <div>
            <label htmlFor="website" className="text-2xl font-semibold">
              I want to Chinafy my website
            </label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="ml-2 p-2 border-b-2 border-gray-300 focus:border-purple-500 outline-none bg-transparent text-2xl"
              placeholder="www.yourwebsite.com"
              required
            />
            <span className="text-2xl">.</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-purple-600 text-white py-3 px-6 rounded-full text-xl font-semibold hover:bg-purple-700 transition duration-300"
          >
            Submit
          </motion.button>
        </motion.form>
      </div>
    </SectionContainer>
  );
};

export default Contact;
