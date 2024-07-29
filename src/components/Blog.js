import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import img1 from '../image/healthy.png';
import img2 from '../image/mental.jpg';
import img3 from '../image/exercise.jpg';
import img4 from '../image/food.jpg';

const blogPosts = [
  {
    title: 'Healthcare Tips for 2024',
    date: 'July 20, 2024',
    excerpt: 'Stay updated with the latest healthcare tips for a healthy lifestyle.',
    image: img1,
    content: '1. Regular Health Check-ups: Ensure you schedule regular health check-ups to monitor your overall health.\n\n2. Balanced Diet: Incorporate a balanced diet rich in fruits, vegetables, and lean proteins. Avoid processed foods and sugars.\n\n3. Exercise: Engage in regular physical activities like walking, jogging, or yoga to keep your body fit.\n\n4. Mental Health: Take care of your mental health by practicing mindfulness, meditation, and seeking professional help if needed.\n\n5. Hydration: Drink plenty of water throughout the day to stay hydrated.\n\n6. Sleep: Ensure you get 7-8 hours of sleep every night to help your body recover and rejuvenate.\n\nFollowing these tips can help you maintain a healthy lifestyle and prevent potential health issues.',
  },
  {
    title: 'Understanding Mental Health',
    date: 'July 18, 2024',
    excerpt: 'Mental health is as important as physical health. Learn more.',
    image: img2,
    content: '1. Talk About Your Feelings: Sharing your feelings with others can help you cope with problems.\n\n2. Stay Active: Physical activities can boost your mood and reduce stress.\n\n3. Eat Well: A balanced diet can improve your mood and energy levels.\n\n4. Take a Break: Short breaks can help you relax and improve your concentration.\n\n5. Connect with Others: Building strong relationships can provide emotional support.\n\n6. Get Enough Sleep: Good sleep is essential for mental and physical health.\n\n7. Seek Help: If you are struggling, do not hesitate to seek professional help. Remember, its okay to ask for help.',
  },
  {
    title: 'Benefits of Regular Exercise',
    date: 'July 15, 2024',
    excerpt: 'Discover the numerous benefits of staying active and fit.',
    image: img3,
    content: '1. Improves Physical Health: Exercise helps in maintaining a healthy weight, reduces the risk of chronic diseases, and improves cardiovascular health.\n\n2. Enhances Mental Health: Physical activities release endorphins, which can reduce stress, anxiety, and depression.\n\n3. Boosts Energy Levels: Regular exercise can improve your muscle strength and boost your endurance.\n\n4. Promotes Better Sleep: Engaging in physical activities can help you fall asleep faster and deepen your sleep.\n\n5. Improves Brain Function: Exercise enhances cognitive function and reduces the risk of cognitive decline.\n\n6. Supports Healthy Aging: Regular physical activity can slow the aging process and improve the quality of life in older adults.\n\nIncorporate different types of exercises like aerobic, strength training, and flexibility exercises into your routine for maximum benefits.',
  },
  {
    title: 'Healthy Eating Habits',
    date: 'July 10, 2024',
    excerpt: 'Learn about healthy eating habits to maintain a balanced diet.',
    image: img4,
    content: '1. Eat a Variety of Foods: Ensure your diet includes a variety of foods from all food groups.\n\n2. Control Portion Sizes: Be mindful of portion sizes to avoid overeating.\n\n3. Limit Sugary Drinks: Avoid sugary drinks and opt for water, herbal teas, or fresh juices.\n\n4. Eat More Fruits and Vegetables: Incorporate a variety of fruits and vegetables into your diet.\n\n5. Choose Whole Grains: Opt for whole grains over refined grains.\n\n6. Limit Processed Foods: Avoid processed foods that are high in sugar, salt, and unhealthy fats.\n\n7. Eat Mindfully: Pay attention to what you eat and savor each bite.\n\nBy adopting these healthy eating habits, you can improve your overall health and well-being.',
  },
];

const Blog = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = (post) => {
    setSelectedPost(post);
    setModalIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="blog" className="bg-white py-12">
      <div className="container mx-auto text-center">
        <div>
          <h2 className="text-4xl font-bold text-blue-700 mb-8">Our Blog</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                className="bg-gray-200 p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <img className="w-full h-40 rounded-lg mb-4" src={post.image} alt={post.title} />
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-2">{post.date}</p>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button
                  className="bg-blue-400 text-white py-2 px-4 rounded-lg hover:bg-purple-400 transition duration-300"
                  onClick={() => openModal(post)}
                >
                  Read More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {selectedPost && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <div className="modal-content">
            <h2 className="text-2xl font-bold mb-4">{selectedPost.title}</h2>
            <p className="text-gray-600 mb-4">{selectedPost.date}</p>
            <img className="w-full h-40 rounded-lg mb-4" src={selectedPost.image} alt={selectedPost.title} />
            <pre className="text-gray-600 mb-4 whitespace-pre-wrap">{selectedPost.content}</pre>
            <button
              className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Blog;
