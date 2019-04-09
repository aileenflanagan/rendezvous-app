import React, { Component } from "react";
import NavbarHome from "../../components/NavbarHome";
import Title from "../../components/Title";
import Carousel from "../../components/Carousel";
import "./style.css";
// import LoginModal from "../../components/LoginModal";

class Home extends Component {
	state = {

	}
	
	render() {
		return (<>
		<div id="home-div">
			<NavbarHome />
			<Title />
			<Carousel />
		</div>
      </>
		);
	}
}

export default Home;