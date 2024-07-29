import React from 'react';
import { motion } from 'framer-motion';
import img from '../image/dr1.jpg';
import img1 from '../image/dr2.jpg';
import img2 from '../image/dr3.jpg';
import img3 from '../image/dr4.jpg';
import img4 from '../image/dr5.jpg';
import img5 from '../image/dr6.jpg';
import img6 from '../image/dr7.jpg';
import img7 from '../image/dr8.jpg';

const teamMembers = [
  { name: 'Dr. John Doe', role: 'Chief Medical Officer', image: img },
  { name: 'Jane Smith', role: 'Head of Pediatrics', image: img1 },
  { name: 'Richard Roe', role: 'Lead Surgeon', image: img2 },
  { name: 'Emily Johnson', role: 'Senior Nurse', image: img3 },
  { name: 'Dr. Alice Brown', role: 'Cardiologist', image: img4 },
  { name: 'Michael Lee', role: 'Orthopedic Surgeon', image:img5},
  { name: 'Sarah White', role: 'Dermatologist', image: img7 },
  { name: 'David Green', role: 'Psychiatrist', image: img6 },
];

const Team = () => {
  return (
    <section id="team" className="bg-gradient-to-r py-12">
      <div className="container mx-auto text-center">
        
          <h2 className="text-4xl font-bold text-blue-700 mb-8">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border border-blue-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-300" src={member.image} alt={member.name} />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Team;
