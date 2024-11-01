import { motion } from "framer-motion";
import AnimatedText from "./share/AnimatedText";
import SectionContainer from "./share/SectionContainer";
import StartButton from "./share/startButton";
import TextContainer from "./share/TextContainer";

const benefits = [
  {
    title: "Increase Online Visibility",
    imgPath: "/images/benefits/online-visibility.png",
    description:
      "Ensure your business stands out in search results, making it easier for customers to find you.",
  },
  {
    title: "Showcase Your Unique Offerings",
    imgPath: "/images/benefits/unique.png",
    description:
      "Display your services with high-quality images and detailed descriptions.",
  },
  {
    title: "Customer Reviews and Testimonials",
    imgPath: "/images/benefits/reviews.png",
    description:
      "Build trust with potential customers by showcasing positive feedback from your clients.",
  },
  {
    title: "Mobile-Friendly Design",
    imgPath: "/images/benefits/mobile.png",
    description:
      "Provide a seamless experience for customers accessing your site on any device.",
  },
  {
    imgPath: "/images/benefits/seo.png",
    title: "SEO-Friendly to Boost Visibility",
    description:
      "Optimize your website for search engines to increase your online presence.",
  },
];

const Impact: React.FC = () => {
  return (
    <SectionContainer
      id="impact"
      className="bg-white py-24 relative overflow-visible !h-fit"
    >
      <div className="container mx-auto px-4 overflow-visible">
        <div className="flex flex-col md:flex-row gap-12 overflow-visible relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="sticky top-[150px]">
              <TextContainer className=" my-2">Benefits</TextContainer>
              <h2 className="text-4xl font-bold mb-6">
                Transform Your Digital Presence
              </h2>
              <p className="text-gray-600 mb-8">
                Enhance customer engagement and drive more bookings with a
                custom-designed website tailored for your business.
              </p>
              <StartButton />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 gap-y-4 flex flex-col  overflow-visible pr-4 styled-scrollbar"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group hover:shadow-lg  rounded-2xl p-6 transition-all duration-300 border border-greyPrimary"
              >
                <h3 className="text-2 font-semibold mb-3 flex items-center gap-x-3">
                  <div className="   bg-primary rounded-lg overflow-hidden flex items-center justify-center p-3">
                    <img
                      src={benefit.imgPath}
                      className=" w-16 h-16 group-hover:scale-150 transition-all duration-300"
                      alt=""
                    />
                  </div>
                  <p>{benefit.title}</p>
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Impact;
