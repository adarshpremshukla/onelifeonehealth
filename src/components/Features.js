
import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { title: 'Quality Care', description: 'We provide the best quality care with a personal touch.', icon: '💊' },
  { title: 'Expert Staff', description: 'Our team consists of highly qualified and experienced professionals.', icon: '👨‍⚕️' },
  { title: 'Modern Facilities', description: 'Our facilities are equipped with the latest technology.', icon: '🏥' },
  { title: '24/7 Support', description: 'We are available 24/7 for all your healthcare needs.', icon: '📞' },
  { title: 'Affordable Prices', description: 'We offer high-quality care at affordable prices.', icon: '💵' },
  { title: 'Personalized Treatment', description: 'Tailored treatment plans to meet your individual needs.', icon: '🩺' },
  { title: 'Comprehensive Services', description: 'A wide range of services to cover all your health needs.', icon: '🩹' },
  { title: 'Patient Education', description: 'Empowering patients with knowledge for better health management.', icon: '📚' },
];

const Features = () => {
  return (
    <section id="features" className="bg-blue-100 py-12">
      <div className="container mx-auto text-center">
       
          <h2 className="text-4xl font-bold text-blue-700 mb-8">Our Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                <div className="text-5xl mb-4 text-blue-500">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Features;
