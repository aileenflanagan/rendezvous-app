import React from "react";
import "./style.css";

function NavbarHome() {
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
					<a className="btn btn-Light home-buttons" id="login-btn" href="/login">Log in</a>
					<a className="btn btn-Light home-buttons" id="create-acct-btn" href="/signup">Create account</a>
				</div>
			</div>
		</nav>
	);
}

export default NavbarHome;