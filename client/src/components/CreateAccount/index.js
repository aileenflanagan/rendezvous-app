import React from "react";
import "./style.css";

function CreateAccount() {
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
				<h2 className="headers">First Name</h2>
				<input type="text" id="first-name"></input>

				<h2 className="headers">Last Name</h2>
				<input type="text" id="last-name"></input>

				<h2 className="headers">Zip Code</h2>
				<input type="text" id="zip-code"></input>

				<h2 className="headers">Email</h2>
				<input type="email" id="email"></input>

				<h2 className="headers">Password</h2>
				<input type="password" id="password"></input>

				<button className="btn btn-primary" id="signup-btn">Sign Up</button>

			</div>

		</div>
	</div>);
}


export default CreateAccount;