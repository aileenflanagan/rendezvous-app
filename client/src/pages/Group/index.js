import React, { Component } from "react";
import "./style.css";
import CommentCard from "../../components/CommentCard";
import MemberCard from "../../components/MemberCard";
import API from "../../utils/API";
import NavbarHome from "../../components/NavbarHome";

class Group extends Component {
	state = {
		searchedGroup: "",
		groupName: "",
		description: "",
		location: "",
		comments: [],
		members: [],
	}

	componentDidMount() {

		console.log("this.props.match.params.id: ", this.props.match.params.id);
		this.setState({ searchedGroup: this.props.match.params.id });

		// API call to get the group and set the state to the results
		API.findById(this.props.match.params.id)
			.then(response => {
				console.log("response123: ", response.data);

				this.setState({ groupName: response.data[0].groupName })
				this.setState({ description: response.data[0].description })
				this.setState({ location: response.data[0].location })
			})

		// API call to get the comments from the particular group
		API.findCommentsInGroup(this.props.match.params.id)
			.then(response => {

				console.log("response456: ", response.data);

				this.setState({ comments: response.data })

				console.log("this.state.comments: ", this.state.comments);


			})

		// API call to get the user's userName from their userId
		// API.findByUserId(this.state.comments)
	}


	joinGroupClickHandler = () => {
		console.log("current group's _id: ", this.state.searchedGroup);
		let user = sessionStorage.userDBId;
		console.log("currently-logged-in userId: ", user);
		// [x] step 1: find the user's userId
		// [x] step 2: find the group's _id (this.state.searchedGroup)

		// step 3: api call to append the groupId to the user's groupId array
		// maybe this would work 
		/*
			var query = { name: 'borne' };
			Model.findOneAndUpdate(query, { name: 'jason bourne' }, options, callback)
		*/

		// join button route attempt
		// API.findByUserIdAndUpdateGroupArray(user)
		// 	.then(response => {
		// 		console.log("chazz princeton: ", response);

		// 	})
	}


	render() {
		return (<div id="main-group-container">
			<NavbarHome />

			<div className="row" id="main-row">
				<div className="col-md-1"></div>
				<div className="col-md-4 info-div">
					<div className="pretty-div">
						<h1>{this.state.groupName}</h1>
						<button onClick={this.joinGroupClickHandler}>Join</button>
					</div>
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
					<div className="pretty-div">
						<p>Description: {this.state.description}</p>
						<p>Where: {this.state.location}</p>
					</div>
				</div>
				<div className="col-md-3"></div>
			</div>


			{/* Discussion Board */}
			<div className="row">
				<div className="col-md-1"></div>
				<div className="col-md-10 info-div" id="comment-container">
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
					{/* <MemberCard /> */}
				</div>
				<div className="col-md-1"></div>
			</div>

		</div>);
	}
}

export default Group;