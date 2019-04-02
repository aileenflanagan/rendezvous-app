import React from "react";

function GroupInfo(props) {
	return (
		<div id="info-div">
			<div>{props.name}
				<ul>
					<li>Location</li>
					<li>Scheduled Meetup Time</li>
					<li>Description</li>
				</ul>
			</div>
		</div>
	);
}

export default GroupInfo;