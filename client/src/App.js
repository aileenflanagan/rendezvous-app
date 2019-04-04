import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Group from "./pages/Group";
import Signup from "./pages/Signup";
import CreateGroup from "./pages/CreateGroup";
import Search from "./pages/Search";
import Manage from "./pages/ManageGroups";

const App = () => (
  <Router>
<<<<<<< HEAD
    <div>      
=======
    <div>
>>>>>>> 174a177f06467e620990d12ce0ce1553dc7501fd
      <Route exact path ="/" component= {Home}/>
      <Route exact path="/group" component={Group} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/createGroup" component={CreateGroup}/>
      <Route exact path="/search" component={Search}/>
      <Route exact path="/manage" component={Manage}/>
    </div>
  </Router>
);

export default App;