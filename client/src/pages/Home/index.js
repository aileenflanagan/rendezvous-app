import React, { Component } from "react";
import NavbarHome from "../../components/NavbarHome";
import Title from "../../components/Title";
import Carousel from "../../components/Carousel";
// import LoginModal from "../../components/LoginModal";

class Home extends Component {
	state = {

	}
	
	
	render() {
		return (<>
		
			<NavbarHome />
			<Title />
			<Carousel />
		
      
      </>
		);
	}
}

export default Home;