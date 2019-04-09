import React, { Component } from "react";
import "./style.css";
import GroupInfo from "../GroupInfo/index";
import NavbarBasic from "../NavbarBasic";
import AccountInfo from "../AccountInfo";
import GroupCard from "../GroupCard";
import axios from "axios";
import API from "../../utils/API";
import { api } from "cloudinary/lib/cloudinary";

let editing = false;
let changingBtnTxt = "Edit";
// import user data from db
// import group data from db


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
			zip: "",
			password: "",
			groupId: [],
			groups: [],
			admin: []
		}
	}

	componentDidMount = () => {
		this.loadInfo();
	}

	loadInfo = (id) => {
		API.findByUserId("5cabdd3d6c6b343d08ef3610")
			.then(res => {
				console.log("res.data ", res.data);
				this.setState({
					name: res.data.userName,
					image: res.data.image.length > 10 ? res.data.image : "http://res.cloudinary.com/dqadqluxx/image/upload/v1554761308/xpqkcuij73ojzaadealv.jpg",
					email: res.data.email,
					zip: res.data.zip,
					password: res.data.password,
					groupId: res.data.groupId,
					admin: res.data.admin
				})
				console.log(this.state);
			})
			.then(

			)
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
			API.updateByUserId("5cabdd3d6c6b343d08ef3610", data.data[0].secure_url)
				.then(function (data) {
					console.log("data we got back", data)
				})
		})

	}
	render() {


		return (<div id="main-manage-div">
			<NavbarBasic />


			<div className="row">
				<div className="col-md-1"></div>
				{/* Profile Pic */}
				<div className="col-md-3" id="profile-pic-div">
					<img src={this.state.image} alt="boohoo" style={{ width: "100px", height: "100px" }} className="img-responsive" />
					<input type="file" id="upload" accept="image/*" onChange={this.fileSelectedHandler} />
					<div id="poop">
					<button onClick={this.uploadHandler}>Upload!</button>
					</div>
				</div>
				<div className="col-md-1"></div>

				{/* User Info */}
				<div className="col-md-6" id="user-info-div">
					<div className="row" id="edit-row">
						<div className="col-md-10" id="settings-div">
							<AccountInfo
								name={this.state.name}
								email={this.state.email}
								zip={this.state.zip}
								password="******"
							/>
						</div>
						<div className="col-md-2" id="edit-btn-div">
							{editing ? <button onClick={clickHandler}>Save</button> : <button onClick={clickHandler}>edit</button>}
							{/* <button onClick={clickHandler} className="btn btn-primary" id="edit-btn">{editing? "Save": "Edit"}</button> */}
						</div>
					</div>
				</div>
			</div>

			{/* Joined groups */}
			<div className="row">
				<div className="col-md-1"></div>
				<div className="col-md-10" id="joined-groups-div">

					<div>[group card component goes here: group image, group name]</div>	{/* temporary */}
					<p>{this.state.groups}groups</p>
					<GroupCard
						groups={this.state.groups}


					/>
					{/* <GroupCard />
					<GroupCard />
					<GroupCard />
					<GroupCard />
					<GroupCard />
					<GroupCard />
					<GroupCard />
					<GroupCard />
					<GroupCard /> */}


				</div>
				<div className="col-md-1"></div>
			</div>

			{/* Created Groups */}
			<div className="row">
				<div className="col-md-1"></div>
				<div className="col-md-10" id="created-groups-div">
					<div>[group card component goes here: group image, group name, reassign btn, delete btn]</div>	{/* temporary */}
					{/* <GroupCard
					groupName={"props.groupName"}
				/> */}


				</div>
				<div className="col-md-1"></div>
			</div>
		</div>);
	}
}

export default ManageGroups;