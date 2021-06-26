import React from 'react';
import { motion } from 'framer-motion';
import Typical from 'react-typical';

function Helper() {
  return (
    <motion.div
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ duration: 2, type: 'spring', delay: 1.5 }}
      className="helper"
    >
      <Typical
        steps={['WELCOME', 1000, 'Please follow', 1000, 'this message', 1000]} //useState로 매 page마다 안내사항을 적어보자...
        loop={Infinity}
        wrapper="p"
      />
    </motion.div>
  );
}

export default Helper;
