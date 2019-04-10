import React, { Component } from "react";
import NavbarHome from "../../components/NavbarHome";
import Logins from "../../components/Logins";
import "./style.css";

class Login extends Component {
	state = {

	}
	render() {
		return (<>
			<div id="logging-in-div">
				<NavbarHome />
				<Logins />
			</div>
		</>);
	}
}

export default Login;