import React, { useRef } from 'react';
import { motion } from 'framer-motion';

function TodoForm({ posConRef }) {
  const formRef = useRef(null);

  const modifyTarget = target => {
    if (formRef.current && posConRef.current) {
      const constraintsRect = posConRef.current.getBoundingClientRect();
      const formRect = formRef.current.getBoundingClientRect();
      const formMiddleX = formRect.width / 2;
      const formMiddleY = formRect.height / 2;
      //width 계산
      if (
        target + formMiddleX > constraintsRect.width / 3 &&
        target + formMiddleX < (constraintsRect.width / 3) * 2
      ) {
        return (constraintsRect.width / 7) * 2.5;
      } else if (target + formMiddleX > (constraintsRect.width / 3) * 2) {
        return (constraintsRect.width / 7) * 6;
      }
      //height 계산
      else if (
        target + formMiddleY > constraintsRect.height / 3 &&
        target + formMiddleY < (constraintsRect.height / 3) * 2
      ) {
        return constraintsRect.height / 2;
      } else if (target + formMiddleY > (constraintsRect.height / 3) * 2) {
        return (constraintsRect.height / 7) * 6;
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
    <motion.form
      className="todo-form"
      ref={formRef}
      drag
      dragConstraints={posConRef}
      dragElastic={0.1}
      dragTransition={transition}
      whileTap={{ cursor: 'grabbing' }}
      style={{ position: 'absolute', zIndex: 3000 }}
    >
      <input
        placeholder="What's your plan?"
        name="text"
        className="todo-input"
      />
      <button className="todo-button">write</button>
    </motion.form>
  );
}

export default TodoForm;
