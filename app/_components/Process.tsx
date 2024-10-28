import React from 'react';
import { motion } from 'framer-motion';

const processSteps = [
  {
    icon: '📥',
    title: 'Submit your site',
    description: 'Submit your site',
    step: 1,
  },
  {
    icon: '🔍',
    title: 'We\'ll scan your site',
    description: 'We\'ll scan your site to create a Chinafy version, and generate your plan.',
    step: 2,
  },
  {
    icon: '🛠️',
    title: 'Our engineers set-up',
    description: 'Once you subscribe, our engineers then set-up and test the Chinafy version of your website.',
    step: 3,
  },
  {
    icon: '🚀',
    title: 'Launch your Chinafy site',
    description: 'Launch your Chinafy site with a quick 15 minute DNS update.',
    step: 4,
  },
];

const ChinafyProcess: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What's The Chinafy Process?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <div className="inline-block bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                Step {step.step}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChinafyProcess;