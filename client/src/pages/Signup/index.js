import React, { Component } from "react";
import NavbarSignup from "../../components/NavbarSignup/index";
import CreateAccount from "../../components/CreateAccount";

class Navbar extends Component {
	constructor(props){
		super(props)

		this.state = {
			firstName: "",
			lastName: "",
		};
	}

	handler() {
		// this.setState({
		// 	firstName: this.props.firstName
		// })
		// console.log(this.state);
	}




	render() {
		return (<>
			<NavbarSignup />
			<CreateAccount signup={this.handler} />
		</>);
	}
}

export default Navbar;

