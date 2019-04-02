import React from "react";
import "./style.css";
import NavbarGroup from "../../components/NavbarGroup";

import GroupInfo from "../../components/GroupInfo";
// import GroupPic from "../../components/GroupPic";

import Meetings from "../../components/Meetings";
// import Discussions from "../../components/Discussions";

/* get group info from database and put into state:
groupName
groupImage

below may be helpful
console.log(props.groceries.map(
    item => <li>{item.name}</li>
  ),
*/

function Group() {
	return (<>
		<NavbarGroup
			name={"[get name from db]"}
		/>


		<div className="row">
			<div className="col-md-1"></div>
			<div className="col-md-4 info-div">
				<GroupInfo
					name={"[get name from db]"}
				/>
			</div>
			<div className="col-md-2"></div>
			<div className="col-md-4 info-div">
				{/* <GroupPic /> */}[Group Picture goes here]
			</div>
		</div>



		<div className="row">
			<div className="col-md-1"></div>
			<div className="col-md-4 info-div">
				<Meetings />
			</div>
			<div className="col-md-2"></div>
			<div className="col-md-4 info-div">
				{/* <Discussions /> */}[Discussion Board go here]
			</div>
		</div>









	</>);
}

export default Group;