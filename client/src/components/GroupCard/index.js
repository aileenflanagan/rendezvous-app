import React from "react";
import "./style.css";

function GroupCard(props) {
	console.log("props:", props);
	return (
		<div id="group-card">
			{props.groups.map(group => (
				<div key={group._id}>
					<div id="img-container">img</div>
					<div>Group name: {group.groupName}</div>
				</div>
			))}

		</div>
	);
}

export default GroupCard;