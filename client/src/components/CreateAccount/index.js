import React, { Component } from "react";
import "./style.css";
import { exec } from "child_process";

class CreateAccount extends Component {
	state = {
		firstName: "",
		lastName: "",
	}

	handleInputChange = event => {
		console.log("event.target.value: ", event.target.value);
		this.setState({
			firstName: event.target.value
		});
		console.log("this.state: ", this.state);
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
					<input value={this.state.firstName} onChange={this.handleInputChange} type="text" id="first-name"></input>

					<div className="headers">Last Name:</div>
					<input type="text" id="last-name"></input>

					<div className="headers">Zip Code:</div>
					<input type="text" id="zip-code"></input>

					<div className="headers">Email:</div>
					<input type="email" id="email"></input>

					<div className="headers">Password:</div>
					<input type="password" id="password"></input>

					<button className="btn btn-dark btn-sm"
						id="signup-btn"
						onClick={this.props.signup}
					>Sign Up</button>

				</div>

			</div>
		</div>);

	}


}


export default CreateAccount;