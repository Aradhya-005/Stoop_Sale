import React from 'react';
import { motion } from 'framer-motion';

const ScrollAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ margin: '20px', padding: '20px', background: '#f0f0f0' }}
    >
    
    </motion.div>
  );
};

export default ScrollAnimation;
