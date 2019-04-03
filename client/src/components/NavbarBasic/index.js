import React from "react";
// import "./style.css";

function NavbarBasic() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="navbar-brand">[Logo]</div>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link">Rendezvous <span className="sr-only">(current)</span></a>
					</li>

				</ul>
				<div id="button-div">
					<button className="btn btn-primary" id="signout-btn">Sign Out</button>
				</div>
			</div>
		</nav>
	);
}

export default NavbarBasic;