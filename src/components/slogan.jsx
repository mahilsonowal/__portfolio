import React from 'react';
import { motion } from 'framer-motion';

const Slogan = () => {
  // Animation variants for the heading
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  // Animation variants for the paragraph
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: 'easeOut' } },
    hover: { color: '#3B82F6', transition: { duration: 0.3 } }, // Change color on hover
  };

  return (
    <div className="text-center py-16 bg-black text-white px-4">
      {/* Animated Heading */}
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-4xl mx-auto leading-tight"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        Innovative Web Developer Driving Excellence and Professionalism
      </motion.h1>

      {/* Animated Paragraph */}
      <motion.p
        className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        variants={paragraphVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        Building scalable, real-time web applications with modern React patterns and Supabase backend services. 
        From concept to deployment, I create robust solutions that drive business growth and user engagement.
      </motion.p>
    </div>
  );
};

export default Slogan;