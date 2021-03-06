import React from "react";
import "./style.css";
import API from "../../utils/API";

class NavbarHome extends React.Component {
	state = {
		
	}

	componentDidMount(){
		let logCheck = sessionStorage.logged;
		let logInBut = document.getElementById('login-btn');
		let logOutBut = document.getElementById('logout-btn');
		let signUpBut = document.getElementById('create-acct-btn');
		let groupBut = document.getElementById('group-btn');
		let createGroupBut = document.getElementById('create-group-btn');

		if(logCheck){
			logInBut.style.display = "none";
			signUpBut.style.display = "none";
		}else{
			logOutBut.style.display = "none";
			groupBut.style.display = "none";
			createGroupBut.style.display = "none";
			console.log("not logged");
		}
	}	
	
	userLogOut = () => {
		sessionStorage.removeItem("userDBId");
		sessionStorage.removeItem("logged");

		API.userLogout().then(() => {
			window.location.href = "/";
		});
	}

	render() {
		return (
			<nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
				<div className="navbar-brand"></div>
				{/* <i className="fas fa-users"></i> */}

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<div className="navbar-brand" ><i className="fas fa-users"></i></div>
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
						<a className="nav-link" id="logo" href="/">Rendezvous <span className="sr-only">(current)</span></a>
						</li>

					</ul>
					<a className="btn btn-Light home-buttons" id="search-btn" href="/search"><b>Go to Group Search</b></a>
					<div id="button-div">
						<a className="btn btn-Light home-buttons" id="group-btn" href="/manage"><b>Manage Group</b></a>
						<a className="btn btn-Light home-buttons" id="create-group-btn" href="/createGroup"><b>Create Groups</b></a>
						<a className="btn btn-Light home-buttons" id="login-btn" href="/login"><b>Log in</b></a>
						<a className="btn btn-Light home-buttons" id="logout-btn" href="/" onClick={this.userLogOut}><b>Log Out</b></a>
						<a className="btn btn-Light home-buttons" id="create-acct-btn" href="/signup"><b>Create account</b></a>
					</div>
				</div>
			</nav>
		);
	}
}

export default NavbarHome;