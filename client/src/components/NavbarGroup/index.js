import React from "react";


function NavbarGroup(props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="navbar-brand">[Logo]</div>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="/">Rendezvous <span className="sr-only">(current)</span></a>
					</li>

					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							My Groups
					</a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<a className="dropdown-item" href="#">Group 1</a>
							<a className="dropdown-item" href="#">Group 2</a>
							<div className="dropdown-divider"></div>
							<a className="dropdown-item" href="#">Manage my groups</a>
						</div>

					</li>

				</ul>
				<div id="button-div">
					<button className="btn btn-primary" id="signout-btn">Sign Out</button>
				</div>
			</div>
		</nav>
	);
}

export default NavbarGroup;