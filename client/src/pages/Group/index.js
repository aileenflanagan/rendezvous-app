import React, { Component } from "react";
import "./style.css";
import NavbarGroup from "../../components/NavbarGroup";
import API from "../../utils/API";


class Group extends Component {
	state = {
		groupName: ""
	}



	componentDidMount() {
		// console.log("test", this.props.match.params.id);

		API.findById(this.props.match.params.id)
			.then(response => {

				console.log("response123:", response.data);
				// this.setState({ findById: response.data });
				console.log("response.data.groupName: ", response.data[0].groupName)
				this.setState({ groupName: response.data[0].groupName })

			})





	}




	render() {
		return (<>
			<NavbarGroup />


			<div className="row" id="main-row">
				<div className="col-md-1"></div>
				<div className="col-md-4 info-div">
					<h1>{this.state.groupName}</h1>
				</div>
				<div className="col-md-2"></div>
				<div className="col-md-4 info-div">
					[Group Picture goes here]
				</div>
			</div>


			{/* Meeting/Location */}
			<div className="row">
				<div className="col-md-1"></div>
				<div className="col-md-10 info-div">
					
				</div>
				<div className="col-md-1"></div>
			</div>





			{/* Discussion Board */}
			<div className="row">
				<div className="col-md-1"></div>
				<div className="col-md-10 info-div">
					[Discussion Board go here]
				</div>
				<div className="col-md-1"></div>
			</div>


			{/* Group Members */}
			<div className="row">
				<div className="col-md-1"></div>
				<div className="col-md-10 info-div">
					[Group Members go here]
				</div>
				<div className="col-md-1"></div>
			</div>

		</>);
	}
}

export default Group;