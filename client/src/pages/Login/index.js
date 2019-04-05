import React, { Component } from "react";
import NavbarSignup from "../../components/NavbarSignup/index";
import Login from "../../components/Login";

class Login extends Component {
	state = {
		
	}
	render() {
		return (<>
			<NavbarSignup />
			<Login />
		</>);
	}
}

export default Login;