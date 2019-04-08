import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Group from "./pages/Group";
import Signup from "./pages/Signup";
import CreateGroup from "./pages/CreateGroup";
import Search from "./pages/Search";
import Manage from "./pages/ManageGroups";
import Login from "./pages/Login";

const App = () => (
  <Router>
    <div>
      <Route exact path ="/" component= {Home}/>
      <Route exact path="/group/:id" component={Group} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/createGroup" component={CreateGroup}/>
      <Route exact path="/search" component={Search}/>
      <Route exact path="/manage" component={Manage}/>
      <Route exact path="/login" component={Login}/>
    </div>
  </Router>
);

export default App;