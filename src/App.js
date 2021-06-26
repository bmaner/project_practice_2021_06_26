import './App.css';
import React, { useState } from 'react';
import Main from './page/Main';
import Bg from './page/Bg';
import TodoPos from './page/TodoPos';
import Opt from './page/Opt';
import Nav from './components/Nav';
import Helper from './components/Helper';
import { Switch, Route, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [selected, setSelected] = useState('');
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.8,
  };

  return (
    <div className="App">
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/bg">
            <Bg
              pageVariants={pageVariants}
              pageTransition={pageTransition}
              selected={selected}
              setSelected={setSelected}
            />
          </Route>
          <Route exact path="/todopos">
            <TodoPos
              pageVariants={pageVariants}
              pageTransition={pageTransition}
              selected={selected}
            />
          </Route>
          <Route exact path="/opt">
            <Opt pageVariants={pageVariants} pageTransition={pageTransition} />
          </Route>
        </Switch>
      </AnimatePresence>
      <Helper />
      <Nav NavLink={NavLink} />
    </div>
  );
}

export default App;
