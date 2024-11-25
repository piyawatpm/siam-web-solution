"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  categories: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "FireFly",
    description: "Digital transformation platform",
    image: "/images/works/firefly.png",
    categories: ["UI/UX", "Branding", "Motion"],
    link: "/works/firefly",
  },
  {
    id: 2,
    title: "Prola",
    description: "E-commerce website with modern design",
    image: "/images/works/prola.png",
    categories: ["UI/UX", "Branding", "Motion"],
    link: "/works/prola",
  },
];

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "UI/UX", "Branding", "Motion"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(selectedCategory)
        );

  return (
    <div className="min-h-screen bg-white px-4 py-24">
      <div className="container mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h1 className="text-7xl font-bold mb-6">Case Studies</h1>
          <p className="text-gray-600 text-xl max-w-2xl">
            I have had the privilege of working with some of the most well-known
            companies in the world. Here are some of the works I'm most proud
            of.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full border-2 transition-all duration-300 ${
                selectedCategory === category
                  ? "border-black bg-black text-white"
                  : "border-gray-200 hover:border-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex gap-2">
                  {project.categories.map((category) => (
                    <span
                      key={category}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Works;
