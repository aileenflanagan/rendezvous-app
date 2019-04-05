import React from "react";
import "./style.css";

function GroupCard(props) {
	console.log("props:", props);
	return (
		<div className="group-card-container">
			{props.groups.map(group => (
				<div key={group._id} className="group-cards">
					<img id="img-container" src="https://www.akc.org/wp-content/themes/akc/component-library/assets/img/register.jpg"/>
					<h4 className="group-names">{group.groupName}</h4>
					<button>View Group</button>
				</div>
			))}

		</div>
	);
}

export default GroupCard;