import React, { Component } from "react";
import "./style.css";
import GroupInfo from "../GroupInfo/index";
import NavbarBasic from "../NavbarBasic";
import AccountInfo from "../AccountInfo";
import GroupCard from "../GroupCard";
import axios from "axios";
import API from "../../utils/API";

let editing=false;
let changingBtnTxt="Edit";
// import user data from db
// import group data from db


function clickHandler() {
	console.log("Event for editing goes here", editing);
		editing=!editing;
		console.log(editing);
}


class ManageGroups extends Component {
	constructor(props) {
		super(props)
		this.state = {
			image:"",
			name:"",
			email:"",
			zip:"",
			password:"",
			groupId:[], 
			groups:[],
			admin:[]
		}
	}

	componentDidMount=()=>{
		this.loadInfo();
	}

	loadInfo=(id)=>{
		API.findByUserId("5cab86375fb512895b1f91f8")
		.then(res => {
			console.log("res.data " ,res.data);
			this.setState({
				name:res.data.userName,
				image: res.data.image,
				email: res.data.email,
				zip:res.data.zip,
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
		console.log("pic we got back", data)
	})
	}
	render () {

	
	return (<>
		<NavbarBasic />
		

		<div className="row">
			<div className="col-md-1"></div>
			{/* Profile Pic */}
			<div className="col-md-3" id="profile-pic-div">[current profile pic] <input  
            type="file" 
            id="upload" 
            onChange = {this.fileSelectedHandler} /> </div>
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
						{editing? <button onClick={clickHandler}>Save</button>: <button onClick={clickHandler}>edit</button>}
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
	</>);
}}

export default ManageGroups;