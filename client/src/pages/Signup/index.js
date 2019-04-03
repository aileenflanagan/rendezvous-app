import React, { Component } from "react";
import NavbarSignup from "../../components/NavbarSignup/index";
import CreateAccount from "../../components/CreateAccount";

class Navbar extends Component {
	state = {
		
	}
	render() {
		return (<>
			<NavbarSignup />
			<CreateAccount />
		</>);
	}
}

export default Navbar;