import React, { Component } from "react";
import "./style.css";
import NavbarGroup from "../../components/NavbarGroup";
import CommentCard from "../../components/CommentCard";
import API from "../../utils/API";


class Group extends Component {
	state = {
		groupName: "",
		meetingName: "",
		meetingTime: "",
		meetingDate: "",
		locationAddress: "",
		locationCity: "",
		locationState: "",
		locationZip: "",
		comments: [],
	}

	componentDidMount() {

		console.log("this.props.match.params.id: ", this.props.match.params.id);
		API.findById(this.props.match.params.id)
			.then(response => {

				console.log("response123: ", response.data);

				this.setState({ groupName: response.data[0].groupName })
				this.setState({ meetingName: response.data[0].meeting.name })
				this.setState({ meetingTime: response.data[0].meeting.time })
				this.setState({ meetingDate: response.data[0].meeting.date })
				this.setState({ locationAddress: response.data[0].meeting.location.address })
				this.setState({ locationCity: response.data[0].meeting.location.city })
				this.setState({ locationState: response.data[0].meeting.location.state })
				this.setState({ locationZip: response.data[0].meeting.location.zip })
			})

		//api call to get the comments from the group{

		API.findCommentsInGroup(this.props.match.params.id)
			.then(response => {
				console.log("response456: ", response.data);
				this.setState({ comments: response.data })

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
				<div className="col-md-3"></div>
				<div className="col-md-6 info-div">
					<p>Description: {this.state.meetingName}</p>
					<p>When: {this.state.meetingDate} at {this.state.meetingTime}</p>
				</div>
				<div className="col-md-3"></div>
			</div>

			{/* Discussion Board */}
			<div className="row">
				<div className="col-md-1"></div>
				<div className="col-md-10 info-div">
					<CommentCard
						comments={this.state.comments}
					/>
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