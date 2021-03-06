import React from "react";
import API from "../../utils/API";
import "./style.css";

class Logins extends React.Component {
	state = {
		email: '',
		password: ''
	}

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	loginSubmit = () => {
		let loginObj = {
			email: this.state.email,
			password: this.state.password
		}

		API.userLogin(loginObj).then(response => {
			console.log("Correct Password", "userID", response.data);
			sessionStorage.setItem("userDBId", response.data);
			sessionStorage.setItem("logged", true);
			window.location.href = "/"
		}).catch(err => {
			console.log("LOGIN ERR0R", err);
			alert('Password or Email Incorrect')
		});
	}

	render() {
		return (
			<div id="main-logins-container">
				<div id="color2" className="row">
					<div className="col-md-2"></div>
					<div className="col-md-8" id="title-div">
						Log in
					</div>
				</div>

				<div className="row" id="color3">
					<div className="col-md-5"></div>
					<div className="col-md-2" id="input-form-div">
						<form>
							<div className="headers">Email:</div>
							<input type="email" id="email" name="email" onChange={this.handleInputChange}></input>

							<div className="headers">Password:</div>
							<input type="password" id="password" name="password" onChange={this.handleInputChange}></input>
						</form>
						<div>
							<button className="btn btn-dark btn-sm" id="signup-btn" onClick={this.loginSubmit}>Log in</button>
						</div>
					</div>
				</div>

				<div className="row" id="input-row"></div>

			</div>);
	}
}


export default Logins;