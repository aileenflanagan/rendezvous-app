import React from "react";
import "./style.css";

function CreateAccount() {
	return (<div id="container">

		<div className="row" id="input-row">
			<div className="col-md-5"></div>
			<div className="col-md-2">
				<h2>First Name</h2>
				<input type="text" id="first-name"></input>

				<h2>Last Name</h2>
				<input type="text" id="last-name"></input>

				<h2>Zip Code</h2>
				<input type="text" id="zip-code"></input>

				<h2>Email</h2>
				<input type="email" id="email"></input>

				<h2>Password</h2>
				<input type="password" id="password"></input>

				<button className="btn btn-primary" id="signup-btn">Sign Up</button>

			</div>

		</div>
	</div>);
}


export default CreateAccount;