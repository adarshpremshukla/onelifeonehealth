import React from "react";
import { motion } from "framer-motion";
import "../styles/custom.css";
import AboutImage from "../image/one2.png";

const AboutUs = () => {
  return (
    <section id="about" className="custom-about-us-bg py-12">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center text-white">
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold text-blue-700 mb-8">
            About Us
          </h2>
          <p className="text-lg text-custom-secondary text-justify">
            One Life Health Care is dedicated to providing the highest quality
            healthcare services. Our team of expert professionals is committed
            to ensuring your well-being through comprehensive and personalized
            care. Our mission is to enhance the quality of life for our patients
            by offering compassionate care, advanced medical technology, and a
            holistic approach to health. We believe that every individual
            deserves personalized attention and care tailored to their unique
            needs. We offer a wide range of services, including primary care,
            specialty care, and wellness programs designed to help you achieve
            your health goals. With state-of-the-art facilities and a
            patient-centered approach, we strive to create a welcoming and
            comfortable environment for all our patients. Our dedicated team of
            experienced professionals includes doctors, nurses, and support
            staff who are all committed to providing the best possible care. We
            use the latest medical technology and innovative treatment methods
            to ensure that our patients receive the most effective care. At One
            Life Health Care, we understand that healthcare is not just about
            treating illnesses but also about promoting overall well-being.
            That's why we offer a range of wellness programs and preventative
            care services to help our patients maintain their health and prevent
            future health issues. Join us on our journey to better health and
            wellness. Your health is our priority, and we are here to support
            you every step of the way.
          </p>
        </div>

        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <img
            src={AboutImage}
            alt="About Us"
            className="rounded-lg shadow-lg w-full object-cover lg:h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
