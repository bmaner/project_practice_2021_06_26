import React, { useRef } from 'react';
import { motion } from 'framer-motion';

function Todo({ posConRef }) {
  const todoConRef = useRef(null);

  const modifyTarget = target => {
    if (todoConRef.current && posConRef.current) {
      const constraintsRect = posConRef.current.getBoundingClientRect();
      const todoConRect = todoConRef.current.getBoundingClientRect();
      const todoConMiddleX = todoConRect.width / 2;
      const todoConMiddleY = todoConRect.height / 2;
      //width 계산
      if (
        target + todoConMiddleX > constraintsRect.width / 3 &&
        target + todoConMiddleX < (constraintsRect.width / 3) * 2
      ) {
        return constraintsRect.width / 3;
      } else if (target + todoConMiddleX > (constraintsRect.width / 3) * 2) {
        return (constraintsRect.width / 3) * 2;
      }
      //height 계산
      else if (
        target + todoConMiddleY > constraintsRect.height / 3 &&
        target + todoConMiddleY < (constraintsRect.height / 3) * 2
      ) {
        return constraintsRect.height / 3;
      } else if (target + todoConMiddleY > (constraintsRect.height / 3) * 2) {
        return (constraintsRect.height / 3) * 2;
      }

      return 0;
    }
  };

  const transition = {
    power: 0,
    min: 0,
    max: 200,
    timeConstant: 250,
    modifyTarget,
  };

  return (
    <motion.div
      className="todo-row-con"
      ref={todoConRef}
      drag
      dragConstraints={posConRef}
      dragElastic={0.1}
      dragTransition={transition}
      whileTap={{ cursor: 'grabbing' }}
      style={{ position: 'absolute', zIndex: 3000 }}
    >
      <div className="todo-row">
        <div className="todo-content">코드스테이츠 개극혐</div>
        <div className="icons">
          <div className="icon">✏️</div>
          <div className="icon">❌</div>
        </div>
      </div>
    </motion.div>
  );
}

export default Todo;
