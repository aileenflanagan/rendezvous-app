import React, { Component } from "react";
import NavbarSignup from "../../components/NavbarSignup/index";

import Logins from "../../components/Logins";
import NavbarHome from "../../components/NavbarHome";

class Login extends Component {
	state = {
		
	}
	render() {
		return (<>
			<NavbarHome />
			<Logins />
		</>);
	}
}

export default Login;