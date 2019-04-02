import React from "react";

function ManageGroups() {
	return (<>
		<div className="row">
			<div className="col-md-3" id="profile-pic-div">[profile picture]</div>

			<div className="col-md-7" id="settings-div">[settings: name, email, pw, zipcode]
				<button id="edit-btn">Edit</button>
			</div>

		</div>

		<div className="row">
			<div className="col-md-12" id="joined-groups-div">[group card component goes here: group image, group name]</div>
		</div>

		<div className="row">
			<div className="col-md-12" id="created-groups-div">[group card component goes here: group image, group name, reassign btn, delete btn]</div>
		</div>
	</>);
}

export default ManageGroups;