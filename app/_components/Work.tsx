import { motion } from "framer-motion";
import { useState } from "react";
import SectionContainer from "./share/SectionContainer";
import TextContainer from "./share/TextContainer";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "Restaurant" | "Massage";
  link: string;
  logo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Pinto Thai Station",
    description: "Thai restaurant website",
    image: "/images/works/pinto-thai-station.png",
    logo: "/images/works/pinto-thai-station-logo.png",
    category: "Restaurant",
    link: "https://major-wheel-003975.framer.app/",
  },
  {
    id: 2,
    title: "TBD",
    description: "E-commerce website with modern design",
    image:
      "https://framerusercontent.com/images/NIZVyUxsAfTXib8VDzl1QuAdlUg.png",
    logo: "https://framerusercontent.com/images/NIZVyUxsAfTXib8VDzl1QuAdlUg.png",
    category: "Massage",
    link: "/work/prola",
  },

  {
    id: 3,
    title: "TBD",
    description: "Brand identity for tech startup",
    image:
      "https://framerusercontent.com/images/NIZVyUxsAfTXib8VDzl1QuAdlUg.png",
    logo: "https://framerusercontent.com/images/NIZVyUxsAfTXib8VDzl1QuAdlUg.png",
    category: "Restaurant",
    link: "/work/nexus",
  },
  {
    id: 4,
    title: "TBD",
    description: "Motion graphics for product launch",
    image:
      "https://framerusercontent.com/images/NIZVyUxsAfTXib8VDzl1QuAdlUg.png",
    logo: "https://framerusercontent.com/images/NIZVyUxsAfTXib8VDzl1QuAdlUg.png",
    category: "Massage",
    link: "/work/wave",
  },
];

const categories = ["All", "Restaurant", "Massage"];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const router = useRouter();

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const filteredProjects = projects.filter((project) =>
    selectedCategory === "All" ? true : project.category === selectedCategory
  );

  return (
    <SectionContainer id="work" className="py-12 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <TextContainer className="mx-auto">Our Work</TextContainer>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured Projects
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-black text-white"
                    : "border-gray-300 hover:border-black"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-y-5 sm:gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              variants={itemVariants}
              layout
              key={project.id}
              className="group relative overflow-hidden bg-grayPrimary rounded-2xl cursor-pointer flex flex-col"
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                scroll={false}
                className="w-full h-full flex flex-col"
              >
                <div className="overflow-hidden aspect-[4/3] relative flex">
                  <motion.img
                    src={project.logo}
                    alt={project.title}
                    initial={{ opacity: 1, scale: 1 }}
                    whileHover={{ opacity: 0, scale: 1.2 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                    className="w-[350px] h-[350px] m-auto object-cover absolute inset-0 z-10"
                  />
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    initial={{ opacity: 0, scale: 1.1 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                    className="w-full h-full object-cover absolute inset-0 z-20"
                  />
                </div>
                <div className="inset-0 duration-300">
                  <div className="bottom-0 left-0 right-0 p-6 text-black">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <span className="inline-block px-3 py-1 mt-3 bg-white/20 rounded-full text-sm border border-black">
                      {project.category}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          <motion.div
            variants={itemVariants}
            className="mt-16 text-center w-full col-span-2 group"
          >
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
          </motion.div>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default Work;
