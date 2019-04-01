import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Carousel from "./components/Carousel";

class App extends Component {
  render() {
    return (<>
      <Navbar />
      <Title />
      <Carousel />
    </>
    );
  }
}

export default App;
