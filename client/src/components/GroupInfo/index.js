import React from "react";

function GroupInfo(props) {
	return (<>
		<div id="info-div">
			<div>
				<ul>
					{/* <li>Location: {props.meeting.address}</li> */}
					{/* <li>Meetup time: {props.meeting.Time}</li> */}
					<li>Location: {props.meeting}</li>
					<li>Meetup time: {props.meeting}</li>
					<li>Description: {props.groupName}</li>
				</ul>
			</div>
		</div>
	</>);
}

export default GroupInfo;