import React from "react";
import "./style.css";

function Logins() {
	return (
	<div id="container">
	<div id="color" className="row">
			<div className="col-md-2"></div>
			<div className="col-md-8" id="title-div">
            Log in
				
				</div>
			</div>		

		<div className="row" id="input-row">
			<div className="col-md-5"></div>
			<div className="col-md-2">
				<div className="headers">User Name:</div>
				<input type="text" id="user-name"></input>

				<div className="headers">Email:</div>
				<input type="email" id="email"></input>

				<div className="headers">Password:</div>
				<input type="password" id="password"></input>	

				<button className="btn btn-dark btn-sm" id="login-btn">Log in</button>			

			</div>

		</div>
	</div>);
}


export default Logins;