import React from "react";
import {  Link } from "react-router-dom";
import "./style.css";

function GroupCard(props) {
	console.log("props ",props);
	return (
		// <div className="group-card-container">
		// 	{props.groups.map(group => (
		// 		<div key={group._id} className="group-cards">
		// 			<img id="img-container" alt="" src="https://www.akc.org/wp-content/themes/akc/component-library/assets/img/register.jpg"/>
		// 			<h4 className="group-names">{group.groupName}</h4>


					{/* <a href="/group"> */}
					<Link
						id={group._id}
						// onClick={() => props.findById(group._id)}
						to={"/group/" + group._id}
					>View this group
					</Link>
					{/* </a> */}
				</div>
			))}


		// </div>
		<p>hi</p>
	);
}

export default GroupCard;