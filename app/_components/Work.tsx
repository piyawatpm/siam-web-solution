import { motion } from "framer-motion";
import { useState } from "react";
import SectionContainer from "./share/SectionContainer";
import TextContainer from "./share/TextContainer";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "Restaurant" | "Massage";
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "FireFly",
    description: "Digital platform for creative professionals",
    image:
      "https://framerusercontent.com/images/NIZVyUxsAfTXib8VDzl1QuAdlUg.png",
    category: "Restaurant",
    link: "/work/firefly",
  },
  {
    id: 2,
    title: "Prola",
    description: "E-commerce website with modern design",
    image:
      "https://framerusercontent.com/images/NIZVyUxsAfTXib8VDzl1QuAdlUg.png",
    category: "Massage",
    link: "/work/prola",
  },
  {
    id: 3,
    title: "Nexus",
    description: "Brand identity for tech startup",
    image:
      "https://framerusercontent.com/images/NIZVyUxsAfTXib8VDzl1QuAdlUg.png",
    category: "Restaurant",
    link: "/work/nexus",
  },
  {
    id: 4,
    title: "Wave",
    description: "Motion graphics for product launch",
    image:
      "https://framerusercontent.com/images/NIZVyUxsAfTXib8VDzl1QuAdlUg.png",
    category: "Massage",
    link: "/work/wave",
  },
];

const categories = ["All", "Restaurant", "Massage"];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter((project) =>
    selectedCategory === "All" ? true : project.category === selectedCategory
  );

  return (
    <SectionContainer id="work" className=" py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <TextContainer className="mx-auto">Our Work</TextContainer>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured Projects
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-black text-white"
                    : "border-gray-300 hover:border-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden bg-grayPrimary rounded-2xl cursor-pointer flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 relative z-10"
                />
              </div>
              <div className=" inset-0   duration-300">
                <div className=" bottom-0 left-0 right-0 p-6 text-black">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  {/* <p className="text-gray-200 mb-4">{project.description}</p> */}
                  <span className="inline-block px-3 py-1 mt-3 bg-white/20 rounded-full text-sm border border-black">
                    {project.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="mt-16 text-center w-full col-span-2 group">
            <Link
              href="/works"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-black transition-all duration-200 border-2 border-black rounded-full hover:bg-black hover:text-white w-full"
            >
              See More
              <svg
                className="w-5 h-5 ml-2 group-hover:rotate-[360deg] transition-transform duration-1000"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default Work;
