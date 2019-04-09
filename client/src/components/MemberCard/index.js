import React from "react";

function MemberCard(props) {
	return (
		<div className="member-card-container">
			{props.members.map(member => (
				<p>hey</p>
			))}


		</div>
	);
}

export default MemberCard;