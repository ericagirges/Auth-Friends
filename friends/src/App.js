import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import FriendRegistration from "./components/FriendRegistration";

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1><span className="red">F</span><span className="blue">r</span><span className="yellow">i</span><span className="red">e</span><span className="blue">n</span><span className="yellow">d</span><span className="red">s</span></h1>
        <div className="nav-container">
        <nav>
          <Link style={{ background: "white", borderRadius: "20px", border: "4px solid #0EC2EE", padding: "10px", textDecoration: 'none', color: "black", marginRight: "15px"}} to="/login">Login</Link>
          <Link style={{ background: "white", borderRadius: "20px", border: "4px solid #D90505", padding: "10px", textDecoration: 'none', color: "black"}} to="/protected">Friends List</Link>
          <Link style={{ background: "white", borderRadius: "20px", border: "4px solid #F5DA16", padding: "10px", textDecoration: 'none', color: "black",  marginLeft: "15px"}} to="/protected">Add Friends</Link>
        </nav>
        </div>
      </header>
      <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path ="/friendslist" component={FriendRegistration} />
        </Switch>     
    </div>
    </Router>
  );
}

export default App;
