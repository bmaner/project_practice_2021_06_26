import './App.css';
import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import He from './projects/He';
import Hs from './projects/Hs';
import Sh from './projects/Sh';
import Landing from './page/Landing';

function App() {
  return (
    <div
      className="app-container"
      style={{ overflowX: 'hidden', overflowY: 'hidden' }}
    >
      <Switch>
        <Route exact path="/">
          <Landing />
          <div className="router-container">
            <div className="router-item">
              <NavLink to="/sh" exact className="router-link">
                투두
              </NavLink>
            </div>
            <div className="router-item">
              <NavLink to="/hs" exact className="router-link">
                채팅
              </NavLink>
            </div>
            <div className="router-item">
              <NavLink to="/he" exact className="router-link">
                알고
              </NavLink>
            </div>
          </div>
        </Route>
        <Route exact path="/sh">
          <Sh />
        </Route>
        <Route exact path="/hs">
          <Hs />
        </Route>
        <Route exact path="/he">
          <He />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
