import React from 'react';
import { motion } from 'framer-motion';

function Opt({ pageVariants, pageTransition }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="check"
    >
      <h1>Opt</h1>
      <p>
        Let's animate transitions between React Router routes with Framer Motion
      </p>
      <h2>Framer Motion</h2>
      <p>
        Framer Motion is a great library for animations in React easily and
        quickly.
      </p>
      <h2>React Router</h2>
      <p>One of the most well known routers in the React ecosystem.</p>
    </motion.div>
  );
}

export default Opt;
