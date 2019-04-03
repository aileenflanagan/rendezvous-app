import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Group from "./pages/Group/index";
import Signup from "./pages/Signup/index";
import CreateGroup from "./pages/CreateGroup/index";
import Search from "./pages/Search/index";
// import Manage from "./pages/ManageGroups/index"

const App = () => (
  <Router>
    <div>
      <Route exact path ="/" component= {Home}/>
      <Route exact path="/group" component={Group} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/createGroup" component={CreateGroup}/>
      <Route exact path="/search" component={Search}/>
      {/* <Route exact path="/manage" component={Manage}/> */}
    </div>
  </Router>
);

export default App;