import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import '../styles/custom.css';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Restore background scrolling
  };

  return (
    <section id="home" className="hero-bg text-white h-screen flex items-center justify-center">
      <div className="container mx-auto p-12 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-shadow"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Welcome to One Life Health Care
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-6 text-shadow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Your Health, Our Priority
        </motion.p>
        <motion.button
          className="learn-more-btn py-3 px-6 rounded-lg shadow-lg relative overflow-hidden bg-gradient-to-r from-blue-400 to-purple-400 text-black hover:bg-blue-600 transition duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
          onClick={openModal}
        >
          <span className="flex items-center justify-center">
            Learn More
          </span>
          <div className="ripple-effect"></div>
        </motion.button>

        {isModalOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="modal-content gradient-modal-content learnmore"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-extrabold mb-4 ">Learn More About Us</h2>
              <p className="mb-4 text-justify ">
                At One Life Health Care, we are dedicated to providing comprehensive and personalized health care services to meet the diverse needs of our patients. With a team of experienced professionals, we offer a range of services designed to promote wellness, prevent illness, and support recovery.
                Our mission is to enhance the quality of life for our patients by offering compassionate care, advanced medical technology, and a holistic approach to health. We believe that every individual deserves personalized attention and care tailored to their unique needs.
              </p>
              <button
                className="close-modal-btn bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                onClick={closeModal}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
