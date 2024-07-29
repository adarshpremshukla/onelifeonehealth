import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-purple-300 shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-3xl font-sans font-bold text-black-800">One Life Health Care</div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black-800 focus:outline-none toggle">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <nav className={`md:flex md:space-x-6 font-bold absolute lg:top-0 md:top-0 sm:top-16 right-0 md:relative md:right-auto md:bg-transparent bg-purple-300 md:p-0 p-6 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0`}>
          <ul className={`md:flex md:space-x-6 space-y-4 md:space-y-0 md:flex-row flex-col ${isOpen ? 'block' : 'hidden'} md:block`}>
            <li><ScrollLink to="home" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="cursor-pointer text-black-600 hover:text-blue-700">Home</ScrollLink></li>
            <li><ScrollLink to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="cursor-pointer text-black-600 hover:text-blue-700">About Us</ScrollLink></li>
            <li><ScrollLink to="features" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="cursor-pointer text-black-600 hover:text-blue-700">Features</ScrollLink></li>
            <li><ScrollLink to="services" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="cursor-pointer text-black-600 hover:text-blue-700">Services</ScrollLink></li>
            <li><ScrollLink to="team" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="cursor-pointer text-black-600 hover:text-blue-700">Team</ScrollLink></li>
            <li><ScrollLink to="blog" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="cursor-pointer text-black-600 hover:text-blue-700">Blog</ScrollLink></li>
            <li><ScrollLink to="faq" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="cursor-pointer text-black-600 hover:text-blue-700">FAQ</ScrollLink></li>
            <li><ScrollLink to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="cursor-pointer text-black-600 hover:text-blue-700">Contact</ScrollLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;


