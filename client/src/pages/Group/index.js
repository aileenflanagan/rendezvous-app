import React, { Component } from "react";
import "./style.css";
import CommentCard from "../../components/CommentCard";
import MemberCard from "../../components/MemberCard";
import API from "../../utils/API";
import NavbarHome from "../../components/NavbarHome";
import { TextArea, FormBtn } from "../../components/Form";

let user = sessionStorage.userDBId

class Group extends Component {
	state = {
		searchedGroup: "",
		groupName: "",
		description: "",
		location: "",
		comments: [],
		members: [],
		currentComment: ""
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

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.currentComment) {
			API.createComment({
				description: this.state.currentComment,
				userId: user,
				groupId: this.state.searchedGroup
			})
				.then(res => {
					console.log("submitted comment");
					this.setState({ currentComment: "" });
				})
				.catch(err => console.log(err));
		}
	};

	// Click handler for a user joining a group
	joinGroupClickHandler = () => {
		console.log("current group's _id: ", this.state.searchedGroup);
		let user = sessionStorage.userDBId;
		console.log("currently-logged-in userId: ", user);
		/*
			var query = { name: 'borne' };
			Model.findOneAndUpdate(query, { name: 'jason bourne' }, options, callback)
		*/
		API.joinGroup(this.state.searchedGroup, user)
			.then(response => {
				console.log(response);

			})
			.then(response => {
				console.log("doing API.joinGroupUser(", this.state.searchedGroup, ", ", user, ")");
				API.joinGroupUser(this.state.searchedGroup, user)
					.then(response => {
						console.log(response);
					})
			})
			.catch(err => console.log(err));
	}

	render() {
		return (<>
			<NavbarHome />
			<div id="main-group-container">

				{/* Profile Picture */}
				<div className="row" id="main-row">
					<div className="col-md-1"></div>
					<div className="col-md-4 info-div">
						<div className="pretty-div">
							<h1>{this.state.groupName}</h1>
							<button className="btn btn-secondary" onClick={this.joinGroupClickHandler}>Join</button>
						</div>
					</div>
					<div className="col-md-2"></div>
					<div className="col-md-4 info-div">
						<p id="group-pic-temp-text">[Group Picture goes here]</p>
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
					{/* <div className="col-md-1"></div> */}
					<div className="col-auto info-div"><h3>Discussion Board</h3></div>
				</div>

				{/* Comments */}
				<div className="row">
					<div className="col-md-1"></div>
					<div className="col-md-10 info-div" id="comment-container">
						<CommentCard
							comments={this.state.comments}
						/>
					</div>
					<div className="col-md-1"></div>
				</div>
				<div className="row">
					<div className="col-md-1"></div>
					<div className="col-md-10">
						<form>
							<TextArea
								value={this.state.currentComment}
								onChange={this.handleInputChange}
								name="currentComment"
								placeholder="Add to the discussion..."
							/>
							<FormBtn
								disabled={!(this.state.currentComment)}
								onClick={this.handleFormSubmit}
							>
								Submit
							  </FormBtn>
						</form>
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

			</div>
		</>);
	}
}

export default Group;