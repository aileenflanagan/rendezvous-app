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

		if(logCheck){
			logInBut.style.display = "none";
			signUpBut.style.display = "none";
		}else{
			logOutBut.style.display = "none";
			groupBut.style.display = "none";
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
				{/* <i class="fas fa-users"></i> */}

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						{/* <li className="nav-item active"> */}
							{/* <a className="nav-link" id ="logo" href="/">Rendezvous <span className="sr-only">(current)</span></a> */}
						{/* </li> */}
						
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Rendezvous
							</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<a className="dropdown-item" href="/group">Group 1</a>
								<a className="dropdown-item" href="#">Group 2</a>
								<div className="dropdown-divider"></div>
								<a className="dropdown-item" href="/manage">Manage my groups</a>
							</div>

						</li>

					</ul>
					<div   id="button-div">
						<a className="btn btn-Light home-buttons" id="group-btn" href="/creategroup">Manage Group</a>
						<a className="btn btn-Light home-buttons" id="login-btn" href="/login">Log in</a>
						<a className="btn btn-Light home-buttons" id="logout-btn" href="/" onClick={this.userLogOut}>Log Out</a>
						<a className="btn btn-Light home-buttons" id="create-acct-btn" href="/signup">Create account</a>
					</div>
				</div>
			
		</nav>
	)
};

export default NavbarHome;