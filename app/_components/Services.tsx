import { motion } from "framer-motion";
import {
  FiMonitor,
  FiCode,
  FiSearch,
  FiSmartphone,
  FiTrendingUp,
  FiBox,
} from "react-icons/fi";
import SectionContainer from "./share/SectionContainer";
import TextContainer from "./share/TextContainer";

const services = [
  {
    icon: <FiMonitor className="w-6 h-6" />,
    available: true,
    title: "Web Design Package",
    description:
      "Delivering comprehensive web design solutions tailored to your business needs, ensuring a unique online presence.",
    features: [
      "Content Management System (CMS) integration",
      "Responsive design for optimal user experience",
      "Full technical support for seamless functionality",
      "Incorporation of fancy animations for visual appeal",
      "Affordable pricing for all businesses",
      "Search Engine Optimization (SEO) for better visibility",
      "Google Analytics integration for performance tracking",
      "Unique design tailored to your brand's identity",
    ],
  },
  {
    icon: <FiCode className="w-6 h-6" />,
    available: false,
    title: "Web Development",
    description:
      "Building robust websites with advanced functionality and seamless performance, tailored to your business needs.",
    features: [
      "Custom backend development",
      "Security and data protection",
      "Content management systems",
      "API integration and development",
    ],
  },
  {
    icon: <FiSearch className="w-6 h-6" />,
    available: false,
    title: "SEO Optimization",
    description:
      "Enhancing your online visibility and driving organic traffic through strategic search engine optimization.",
    features: [
      "Keyword research & strategy",
      "On-page optimization",
      "Technical SEO",
      "Performance optimization",
    ],
  },
  {
    icon: <FiSmartphone className="w-6 h-6" />,
    available: false,
    title: "App Development",
    description:
      "Creating powerful mobile applications that provide seamless user experiences across all platforms.",
    features: [
      "Native & cross-platform apps",
      "User-friendly interfaces",
      "Performance optimization",
      "Ongoing maintenance",
    ],
  },
];

const Services = () => {
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

  return (
    <SectionContainer id="services" className="bg-white py-12 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <TextContainer className=" mx-auto">Services</TextContainer>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Explore Our Core Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of services tailored to enhance
            your digital presence.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group p-8 rounded-2xl border border-gray-100  transition-all duration-300 bg-white ${
                !service.available
                  ? "blur-sm"
                  : "hover:border-primary  hover:shadow-lg"
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-black group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold ml-4">{service.title}</h3>
              </div>

              <p className="text-gray-600 mb-6">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.2 * idx }}
                      className="w-2 h-2 rounded-full bg-primary mr-3"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default Services;
