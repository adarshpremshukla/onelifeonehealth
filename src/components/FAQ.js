import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  { question: 'What are your operating hours?', answer: 'We are open 24/7 for emergency services and regular consultations.' },
  { question: 'Do you accept insurance?', answer: 'Yes, we accept a wide range of insurance plans. Please contact us for more details.' },
  { question: 'How can I book an appointment?', answer: 'You can book an appointment online through our website or by calling our support team.' },
  { question: 'What services do you offer?', answer: 'We offer a comprehensive range of healthcare services, including general consultation, pediatrics, emergency care, and surgery.' },
  { question: 'Can I get a second opinion?', answer: 'Yes, we encourage patients to seek second opinions and can provide referrals if needed.' },
  { question: 'What is your cancellation policy?', answer: 'Please provide at least 24 hours notice if you need to cancel or reschedule your appointment.' },
  { question: 'Do you offer telehealth services?', answer: 'Yes, we offer telehealth services for certain types of appointments. Please contact us for more details.' },
  { question: 'How can I provide feedback about my experience?', answer: 'We value your feedback. You can provide feedback through our website or by speaking with a member of our team.' },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    document.body.style.overflow = openIndex === index ;
  };

  return (
    <section id="faq" className="bg-white py-12">
      <div className="container mx-auto text-center">
        <div>
          <h2 className="text-4xl font-bold text-blue-700 mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="mb-6 text-left cursor-pointer"
                whileHover={{ scale: 1.02 }}
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-semibold mb-2 bg-blue-100 p-4 rounded-lg shadow-lg">{faq.question}</h3>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-600 bg-gray-50 p-4 rounded-lg shadow-inner"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
