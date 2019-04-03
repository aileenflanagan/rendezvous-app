import React from "react";
import "./style.css";

function GroupCard(props){
	return(
		<div id="group-card">
			<div id="img-container"></div>
			<div>Group name: {props.groupName}</div>
		</div>
	);
}

export default GroupCard;