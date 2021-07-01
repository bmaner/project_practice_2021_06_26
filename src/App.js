import './App.css';
import React, { useState } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import He from './projects/He';
import Hs from './projects/Hs';
import Sh from './projects/Sh';
import Landing from './page/Landing';

function App() {
  const [status, setStatus] = useState(false);

  // return <Sh />;
  return status ? (
    <Switch>
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
  ) : (
    <div
      className="app-container"
      style={{ overflowX: 'hidden', overflowY: 'hidden' }}
    >
      {/* <h1>under construction</h1>
      <p>양질의 화면으로 찾아오겠습니다. 기다려주세요.</p>
      <img
        src="/images/underconstruction.jpg"
        style={{ width: '50%', height: '50%' }}
      /> */}
      <Landing />
      <div className="router-container">
        <div className="router-item" onClick={() => setStatus(true)}>
          <NavLink to="/sh" exact className="router-link">
            투두
          </NavLink>
        </div>
        <div className="router-item" onClick={() => setStatus(true)}>
          <NavLink to="/hs" exact className="router-link">
            채팅
          </NavLink>
        </div>
        <div className="router-item" onClick={() => setStatus(true)}>
          <NavLink to="/he" exact className="router-link">
            알고
          </NavLink>
        </div>
      </div>
      <Switch>
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
