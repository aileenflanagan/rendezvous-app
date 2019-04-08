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
		this.setState({ search: event.target.value })
	}

	searchGroupsKeyword = () => {
		API.findByKeywords(this.state.search)
			.then(response => {
				this.setState({ groups: response.data })
				console.log("response.data: ", response.data)
			})
			.catch((err) => { console.log(".catch error:", err) })
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
					/>

				</div>

			</div>

		</>);
	}
}

export default Search;