import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

import Initial from './Screen/Initial';
import SignUp from './Screen/SignUp';
import Login from './Screen/Login';
import Home from './Screen/Home';
import Chat from './Screen/Chat';
import Provider from './store';

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

export default props => {
  const localStorageStore = localStorage.getItem("store");
  const initialStore = localStorageStore ? JSON.parse(localStorageStore) : { user: {} };
  const [store, setStore] = useState(initialStore);
  
  useEffect(() => {
    console.log(store);
    localStorage.setItem("store", JSON.stringify(store));
  }, [store])

  return (<Provider value={{store,setStore}}><App /></Provider>)
};
