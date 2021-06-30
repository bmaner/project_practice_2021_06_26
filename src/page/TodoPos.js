import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Pos from '../components/Pos';
import TodoForm from '../components/TodoForm';
import Todo from '../components/Todo';

function TodoPos({ pageVariants, pageTransition, selected }) {
  const arr = new Array(9).fill(0);
  const posConRef = useRef(null);
  return (
    <motion.div
      ref={posConRef}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="pos-container"
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundImage: `url(../images/${selected})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
      }}
    >
      <TodoForm posConRef={posConRef} />
      <Todo posConRef={posConRef} />
      <div
        className="pos-wrapper"
        style={{
          width: '100vw',
          height: '100vh',
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
        }}
      >
        {arr.map((el, i) => {
          return <Pos key={i} />;
        })}
      </div>
    </motion.div>
  );
}

export default TodoPos;
