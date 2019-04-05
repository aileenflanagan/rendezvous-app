import React, { Component } from "react";
import SearchGroups from "../../components/SearchGroups";
import NavbarGroup from "../../components/NavbarGroup";


class Search extends Component {
	render() {
		return (<>
			<div><NavbarGroup />
			<SearchGroups /> </div>
		</>);
	}
}

export default Search;