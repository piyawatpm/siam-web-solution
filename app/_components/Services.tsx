import Image from "next/image";

const services = [
  {
    title: "Web Design",
    description:
      "Custom-designed websites that reflect your brand and engage your audience.",
    icon: "/icons/web-design.svg",
  },
  {
    title: "Web Development",
    description:
      "Robust and scalable web applications built with the latest technologies.",
    icon: "/icons/web-development.svg",
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your search engine rankings and drive more organic traffic.",
    icon: "/icons/seo.svg",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src={service.icon}
                alt={service.title}
                width={64}
                height={64}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
