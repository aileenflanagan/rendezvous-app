import React, { Component } from "react";
import SearchGroups from "../../components/SearchGroups";
// import NavbarGroup from "../../components/NavbarGroup";
import NavbarHome from "../../components/NavbarHome";


function Search(props) {
	return (<>
		<NavbarHome />
		<SearchGroups />
	</>);
}

export default Search;