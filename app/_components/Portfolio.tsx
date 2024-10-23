import Image from "next/image";

const projects = [
  {
    title: "E-commerce Website",
    description:
      "A fully responsive online store with secure payment integration.",
    image: "/images/project1.jpg",
  },
  {
    title: "Corporate Branding",
    description: "Complete brand identity design for a tech startup.",
    image: "/images/project2.jpg",
  },
  {
    title: "Mobile App",
    description: "Cross-platform mobile application for fitness tracking.",
    image: "/images/project3.jpg",
  },
];

const Portfolio = () => {
  console.log("portfolio re-rendered");

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
