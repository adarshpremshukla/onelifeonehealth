import React from 'react';
import { motion } from 'framer-motion';
import img from '../image/dr1.jpg';
import img1 from '../image/dr2.jpg';
import img2 from '../image/dr3.jpg';
import img3 from '../image/dr4.jpg';

const testimonials = [
  { name: 'Alice Brown', feedback: 'The care and attention I received at One Life Health Care were exceptional. Highly recommended!', image: img },
  { name: 'Michael White', feedback: 'Professional staff and state-of-the-art facilities. They truly care about their patients.', image: img1 },
  { name: 'Sophia Green', feedback: 'Excellent service and support. I felt very comfortable and well-cared for.', image:img2 },
  { name: 'David Johnson', feedback: 'Their team is highly skilled and compassionate. I had a great experience.', image: img3 },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <div>
          <h2 className="text-4xl font-bold text-blue-700 mb-8">What Our Patients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <img className="w-24 h-24 rounded-full mx-auto mb-4" src={testimonial.image} alt={testimonial.name} />
                <p className="text-gray-600 italic mb-4">&ldquo;{testimonial.feedback}&rdquo;</p>
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
