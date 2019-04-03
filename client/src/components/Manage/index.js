import React from "react";
import "./style.css";
import GroupInfo from "../GroupInfo/index";
import NavbarBasic from "../NavbarBasic/index";
import AccountInfo from "../AccountInfo";
import GroupCard from "../GroupCard";


// import user data from db
// import group data from db



function clickHandler() {
	console.log("Event for editing goes here");
}


function ManageGroups(props) {
	return (<>
		<NavbarBasic />
		<div className="row">
			<div className="col-md-1"></div>
			{/* Profile Pic */}
			<div className="col-md-3" id="profile-pic-div">[profile picture goes here]</div>
			<div className="col-md-1"></div>

			{/* User Info */}
			<div className="col-md-6">
				<div className="row" id="edit-row">
					<div className="col-md-10" id="settings-div">
						<AccountInfo
							name={"this.state.name"}
							email={"this.state.email"}
							location={"this.state.location"}
							password={"this.state.password"}
						/>
					</div>
					<div className="col-md-2" id="edit-btn-div">
						<button onClick={clickHandler} id="edit-btn">Edit</button>
					</div>
				</div>
			</div>
		</div>

		{/* Joined groups */}
		<div className="row">
			<div className="col-md-1"></div>
			<div className="col-md-10" id="joined-groups-div">


					<GroupCard />
					{/* <GroupCard />
					<GroupCard />
					<GroupCard />
					<GroupCard />
					<GroupCard />
					<GroupCard />
					<GroupCard />
					<GroupCard />
					<GroupCard /> */}


					{/* below assumes a state with a `group: group` has been made. it might not be the right thing to do. */}
					{/* {this.state.group.map(
						group => <GroupCard
							// this is where the group's image appears
							groupName={group.groupName}
						/>
					)} */}


			</div>
			<div className="col-md-1"></div>
		</div>

		{/* Created Groups */}
		<div className="row">
			<div className="col-md-1"></div>
			<div className="col-md-10" id="created-groups-div">
				[group card component goes here: group image, group name, reassign btn, delete btn]



			<GroupCard
				groupName={props.groupName}
			/>


			</div>
			<div className="col-md-1"></div>
		</div>
	</>);
}

export default ManageGroups;