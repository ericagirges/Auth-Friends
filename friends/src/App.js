import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1><span className="red">F</span><span className="blue">r</span><span className="yellow">i</span><span className="red">e</span><span className="blue">n</span><span className="yellow">d</span><span className="red">s</span></h1>
        <div className="nav-container">
        <nav>
          <Link style={{ textDecoration: 'none', color: "white", marginRight: "25px"}} to="/login">Login</Link>
          <Link style={{ textDecoration: 'none', color: "white", paddingTop: "10px", marginLeft: "25px"}} to="/protected">Friends List</Link>
        </nav>
        </div>
      </header>
      <Switch>
          <Route exact path="/protected" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>     
    </div>
    </Router>
  );
}

export default App;
