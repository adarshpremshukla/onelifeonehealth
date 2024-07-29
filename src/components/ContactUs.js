import React from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <section id="contact" className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-12">
      <div className="container mx-auto text-center">
        <div>
          <h2 className="text-4xl font-bold text-blue-700 mb-8">Contact Us</h2>
          <form className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="name">Name</label>
              <input className="w-full px-3 py-2 border rounded-lg text-gray-700" id="name" type="text" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="email">Email</label>
              <input className="w-full px-3 py-2 border rounded-lg text-gray-700" id="email" type="email" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="phone">Phone Number</label>
              <input className="w-full px-3 py-2 border rounded-lg text-gray-700" id="phone" type="tel" placeholder="Your Phone Number" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="message">Message</label>
              <textarea className="w-full px-3 py-2 border rounded-lg text-gray-700" id="message" placeholder="Your Message" rows="4"></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-blue-400 text-black hover:bg-purple-400 hover:text-white font-bold py-2 px-4 rounded"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
