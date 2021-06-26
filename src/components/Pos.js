import React from 'react';
import { motion } from 'framer-motion';

function Pos() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pos-item"
      style={{
        width: '33vw',
        height: '33vh',
        borderRadius: '20px',
        border: '2px solid rgba(0, 0, 0, 0.5)',
      }}
    ></motion.div>
  );
}

export default Pos;
