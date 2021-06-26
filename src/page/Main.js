import '../App.css';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Main() {
  const [position, setPosition] = useState(0);

  function onScroll() {
    setPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.addEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="main-container"
    >
      <div className="container">
        <div className="container-title">
          <motion.h1
            className="title"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: 'spring' }}
          >
            Make
            <br />
            <span>Todos!</span>{' '}
          </motion.h1>
        </div>
        <div className="container-subtitle">
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: 'spring', delay: 0.3 }}
          >
            with beautiful pic.
          </motion.p>
        </div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, type: 'spring', delay: 0.6 }}
          className="container-images"
        >
          <img
            src="/images/img1.jpg"
            style={{
              position: 'absolute',
              width: '40%',
              top: '20%',
              left: '80%',
              transform: `translateY(${position / 3}px)`,
            }}
          />
          <img
            src="/images/img2.jpg"
            style={{
              position: 'absolute',
              width: '30%',
              top: '10%',
              left: '20%',
              transform: `translateY(${position / 1.5}px)`,
            }}
          />
          <img
            src="/images/img3.jpg"
            style={{
              position: 'absolute',
              width: '35%',
              top: '30%',
              left: '50%',
              transform: `translateY(${position / 2}px)`,
            }}
          />
          <img
            src="/images/img4.jpg"
            style={{
              position: 'absolute',
              width: '43%',
              top: '50%',
              left: '60%',
              transform: `translateY(${position / 1}px)`,
            }}
          />
          <img
            src="/images/img5.jpg"
            style={{
              position: 'absolute',
              width: '55%',
              top: '80%',
              left: '10%',
              transform: `translateY(${position / 4}px)`,
            }}
          />
          <img
            src="/images/img6.jpg"
            style={{
              position: 'absolute',
              width: '40%',
              top: '70%',
              left: '70%',
              transform: `translateY(${position / 2}px)`,
            }}
          />
          <img
            src="/images/img7.jpg"
            style={{
              position: 'absolute',
              width: '55%',
              top: '40%',
              left: '0%',
              transform: `translateY(${position / 1.5}px)`,
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Main;
