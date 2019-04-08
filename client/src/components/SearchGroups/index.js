import React, { Component } from "react";
import "./style.css";
import GroupCard from "../GroupCard";
import Group from "../../pages/Group";
import API from "../../utils/API";

class Search extends Component {
	state = {
		groups: [],
		search: "",
		groupid: "",
		findById: ""
	}

	handleInputChange = event => {
		// console.log("event.target.value: ", event.target.value)
		this.setState({ search: event.target.value })
	}

	searchGroupsKeyword = () => {
		// console.log("keyword:",this.state.search);
		API.findByKeywords(this.state.search)
			.then(response => {
				this.setState({ groups: response.data })
				console.log("response.data: ", response.data)
			})
			.catch((err) => { console.log(".catch error:", err) })
	}


	findById = id => {
		console.log("The clicked button's id is:", id);
		API.findById(id)
			.then(response => {
				console.log("response123:", response.data);
				// NEXT STEP: BRING RESPONSE.DATA INTO THE GROUP PAGE
				this.setState({ findById: response.data});
				// console.log("this.state.findById: ", this.state.findById);
			})
	}


	render() {
		return (<>

			<div className="row group-search-rows">
				<div className="col-md-1"></div>
				<div className="col-md-6">
					<h1>Search Groups</h1>

					<p className="pea-tags">Search by Keyword</p>
					<input type="text" onChange={this.handleInputChange}></input>
					<button onClick={this.searchGroupsKeyword}>Search</button>

					<p className="pea-tags">Search by Location</p>
					<input type="text"></input>
					<button>Search</button>
				</div>
			</div>

			<div className="row group-search-rows">
				<div className="col-md-1"></div>
				<div className="col-md-8">

					<GroupCard
						groups={this.state.groups}
						findById={this.findById}
					/>

				</div>

			</div>

		</>);
	}
}

export default Search;