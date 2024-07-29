
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { title: 'General Consultation', description: 'Comprehensive health check-ups and consultations.', icon: '🩺' },
  { title: 'Pediatrics', description: 'Specialized care for infants, children, and adolescents.', icon: '👶' },
  { title: 'Emergency Care', description: 'Immediate medical attention in case of emergencies.', icon: '🚑' },
  { title: 'Surgery', description: 'Advanced surgical procedures performed by experts.', icon: '🔪' },
  { title: 'Dental Care', description: 'Professional dental check-ups and treatments.', icon: '🦷' },
  { title: 'Nutrition Counseling', description: 'Personalized dietary plans and nutrition advice.', icon: '🥗' },
  { title: 'Physical Therapy', description: 'Rehabilitation services to help you recover.', icon: '🏋️‍♂️' },
  { title: 'Mental Health Services', description: 'Support for mental health and well-being.', icon: '🧠' },
];

const Services = () => {
  return (
    <section id="services" className="bg-blue-50 py-12">
      <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-8">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border border-blue-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-5xl mb-4 text-blue-500">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Services;
