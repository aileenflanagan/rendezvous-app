import React, { Component } from 'react';
import './App.css';
import Home from "./pages/Home/index";
import Group from "./pages/Group/index";

class App extends Component {
  state = {
    // get info from database and set state
  }

  render() {
    return (<>
      {/* TODO: create routes for each page */}
      {/* <Home /> */}
      <Group />
    </>
    );
  }
}

export default App;
