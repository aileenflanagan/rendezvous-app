import React, { Component } from "react";
import NavbarSignup from "../../components/NavbarSignup/index";
import Logins from "../../components/Logins";
import "./style.css";

class Login extends Component {
	state = {

	}
	render() {
		return (<>
			<div id="logging-in-div">
				<NavbarSignup />
				<Logins />
			</div>
		</>);
	}
}

export default Login;