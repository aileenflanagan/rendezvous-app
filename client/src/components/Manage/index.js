import React, { Component } from "react";
import "./style.css";
import GroupInfo from "../GroupInfo/index";
import NavbarHome from "../NavbarHome";
import AccountInfo from "../AccountInfo";
import GroupCard from "../GroupCard";
import axios from "axios";
import API from "../../utils/API";
import { api } from "cloudinary/lib/cloudinary";

let editing = false;
let changingBtnTxt = "Edit";
// import user data from db
// import group data from db

let groupArr;
let user = sessionStorage.userDBId;
console.log("user blargh: ", user);

function clickHandler() {
	console.log("Event for editing goes here", editing);
	editing = !editing;
	console.log(editing);
}

class ManageGroups extends Component {
	constructor(props) {
		super(props)
		this.state = {
			image: "http://res.cloudinary.com/dqadqluxx/image/upload/v1554761308/xpqkcuij73ojzaadealv.jpg",
			name: "",
			email: "",
			zipCode: "",
			password: "",
			groupId: [],
			groups: [],
			admin: [],
			foundGroupInfo: [],
		}
	}

	componentDidMount = () => {
		this.loadInfo(user);
	}

	loadInfo = (id) => {
		API.findByUserId(id)
			.then(res => {
				console.log("res.data blargh ", res.data);
				this.setState({
					name: res.data.userName,
					image: res.data.image.length > 10 ? res.data.image : "http://res.cloudinary.com/dqadqluxx/image/upload/v1554761308/xpqkcuij73ojzaadealv.jpg",
					email: res.data.email,
					zipCode: res.data.zipCode,
					password: res.data.password,
					groupId: res.data.groupId,
					admin: res.data.admin
				})
				console.log(this.state);
			})
			.then(res => {
				groupArr = this.state.groupId;
				groupArr.map((i) => {
					console.log(i);
					API.findById(i)
						.then(res => {
							// console.log("test1234: ", res.data[0]);
							this.setState({
								foundGroupInfo: [...this.state.foundGroupInfo,
								{
									groupName: res.data[0].groupName,
									_id: res.data[0]._id
								}
								]
							})
						})
				})
			})
			.catch(err => console.log(err));
	}

	fileSelectedHandler = (event) => {
		console.log("this is our photo", event.target.files[0])
		const files = Array.from(event.target.files)
		const formData = new FormData()

		files.forEach((file, i) => {
			formData.append(i, file)
		})

		axios.post("http://localhost:3001/api/users/userSave", formData, {
			headers: {
				'Content-Type': 'multipart/form-data'

			}
		}).then(function (data) {
			console.log("pic we got back", data.data[0].secure_url)
			API.updateByUserId("5cab6b77ed48d201f9869789", data.data[0].secure_url)
				.then(function (data) {
					console.log("data we got back", data)
				})
		})

	}
	render() {

		return (<div id="main-manage-div">
			<NavbarHome />

			<div className="row" id="main-manage-row">
				<div className="col-md-1"></div>
				{/* Profile Pic */}
				<div className="col-md-3" id="profile-pic-div">
					<img src={this.state.image} alt="boohoo" style={{ width: "100px", height: "100px" }} className="img-responsive" id="profile-pic-img" />
					<input type="file" id="upload" accept="image/*" onChange={this.fileSelectedHandler} />

					{/* <button onClick={this.uploadHandler}>Upload!</button> */}

				</div>
				<div className="col-md-1"></div>

				{/* User Info */}
				<div className="col-md-6" id="user-info-div">
						{/* Use the className="col-md-10" div if we want the save/edit button. Otherwise, col-md-12 looks nicer */}
						{/* <div className="col-md-10" id="settings-div"> */}
						<div id="settings-div">
							<AccountInfo
								name={this.state.name}
								email={this.state.email}
								zipCode={this.state.zipCode}
								password="******"
							/>
						</div>
						{/* <div className="col-md-2" id="edit-btn-div">
							{editing ? <button onClick={clickHandler}>Save</button> : <button onClick={clickHandler}>edit</button>}
						</div> */}
				</div>
			</div>

			{/* Joined groups */}
			<div className="row" id="joined-groups-row">
				<div className="col-md-1"></div>
				<div className="col-md-10" id="joined-groups-div">

					<h3 id="groups-title-text">Groups</h3>
					{/* <p>{foundGroupInfo}</p>
					{foundGroupInfo? groups=foundGroupInfo:""} */}
					<GroupCard
						groups={this.state.foundGroupInfo}
					/>
				</div>
				{/* <div className="col-md-1"></div> */}
			</div>

			{/* Created Groups */}
			{/* <div className="row">
				<div className="col-md-1"></div>
				<div className="col-md-10" id="created-groups-div">
					<div>[group card component goes here: group image, group name, reassign btn, delete btn]</div>	
				</div>
				<div className="col-md-1"></div>
			</div> */}
		</div>);
	}
}

export default ManageGroups;