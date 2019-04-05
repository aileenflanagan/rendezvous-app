import React, {Component} from "react";
import "./style.css";
import NavbarGroup from "../../components/NavbarGroup";

import GroupInfo from "../../components/GroupInfo";
// import GroupPic from "../../components/GroupPic";

import Meetings from "../../components/Meetings";
// import Discussions from "../../components/Discussions";


class Group extends Component {
	state = {
		
	}



componentDidMount = (props) => {
	console.log("props:", props); //undefined
}




	render() {
		return (<>
			<NavbarGroup
				name={"[get name from db]"}
			/>


			<div className="row" id="main-row">
				<div className="col-md-1"></div>
				<div className="col-md-4 info-div">
					groupName
				{/* name={"[get name from db]"} */}
					<GroupInfo />
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


			<div className="row">
				<div className="col-md-1"></div>
				<div className="col-md-4 info-div">
					{/* <Members /> */}[Group Members go here]
			</div>
				<div className="col-md-2"></div>
				<div className="col-md-4 info-div">
					{/* <Goals /> */}[Goals go here]
			</div>
			</div>

		</>);
	}
}

export default Group;