import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import Services from './components/Services';
import Team from './components/Team';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './index.css';
import './styles/custom.css';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutUs />
      <Features />
      <Services />
      <Team />
      <Blog />
      <Testimonials />
      <FAQ />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
