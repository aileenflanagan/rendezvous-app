import React, { Component } from "react";
import NavbarSignup from "../../components/NavbarSignup/index";

import Logins from "../../components/Logins";

class Login extends Component {
	state = {
		
	}
	render() {
		return (<>
			<NavbarSignup />
			<Logins />
		</>);
	}
}

export default Login;