import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

import Initial from './Screen/Initial';
import SignUp from './Screen/SignUp';
import Login from './Screen/Login';
import Home from './Screen/Home';
import Chat from './Screen/Chat';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Initial} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/chat" component={Chat} />
      </Router>
    </div>
  );
}

export default App;
