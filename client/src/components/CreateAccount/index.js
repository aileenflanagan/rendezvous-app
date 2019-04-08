import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import { exec } from "child_process";

class CreateAccount extends Component {
	state = {
		firstName: "",
		lastName: "",
		zipCode: "",
		email: "",
		password: ""
	}

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	createNewUser = () => {
		let newUserObj = {
			userName: `${this.state.firstName} ${this.state.lastName}`,
			email: this.state.email,
			zipCode: this.state.zipCode,
			password: this.state.password
		}

		API.createNewUser(newUserObj);
	}

	render() {
		return (<div id="container">
			<div id="color" className="row">
				<div className="col-md-2"></div>
				<div className="col-md-8" id="title-div">Your Journey Starts
				<div id="description-div">
						<p>Are you ready to change your life? Sign up and start doing the things you love!

					</p>
					</div>
				</div>
			</div>


			<div className="row" id="input-row">
				<div className="col-md-5"></div>
				<div className="col-md-2">
					<div className="headers">First Name:</div>
					<input name="firstName" onChange={this.handleInputChange} type="text" id="first-name"></input>

					<div className="headers">Last Name:</div>
					<input name="lastName" onChange={this.handleInputChange} type="text" id="last-name"></input>

					<div className="headers">Zip Code:</div>
					<input name="zipCode" onChange={this.handleInputChange} type="text" id="zip-code"></input>

					<div className="headers">Email:</div>
					<input name="email" onChange={this.handleInputChange} type="email" id="email"></input>

					<div className="headers">Password:</div>
					<input name="password" onChange={this.handleInputChange} type="password" id="password"></input>

					<button className="btn btn-dark btn-sm"
						id="signup-btn"
						onClick={this.createNewUser}
					>Sign Up</button>

				</div>

				</div>
			</div>);

	}


}


export default CreateAccount;