import React from "react";
import "./style.css";

function GroupCard(props) {

	return (
		<div className="group-card-container">
			{props.groups.map(group => (
				<div key={group._id} id={group._id} className="group-cards">
					<img id="img-container" src="https://www.akc.org/wp-content/themes/akc/component-library/assets/img/register.jpg" />
					<h4 className="group-names">{group.groupName}</h4>

					{/* <a href="/group"> */}
					<button
						id={group._id}
						onClick={() => props.findById(group._id)}
					>View this group
					</button>
					{/* </a> */}
				</div>
			))}

		</div>
	);
}

export default GroupCard;