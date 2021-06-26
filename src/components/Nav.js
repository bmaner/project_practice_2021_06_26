import React from 'react';
import { motion } from 'framer-motion';

function Nav({ NavLink }) {
  return (
    <motion.nav
      style={{ zIndex: 1000 }}
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ duration: 2, type: 'spring', delay: 1.5 }}
    >
      <ul className="nav-container">
        <li className="nav-item">
          <NavLink to="/" exact className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/bg" className="nav-link">
            BG
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/todopos" className="nav-link">
            POS
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/opt" className="nav-link">
            OPT
          </NavLink>
        </li>
      </ul>
    </motion.nav>
  );
}

export default Nav;
