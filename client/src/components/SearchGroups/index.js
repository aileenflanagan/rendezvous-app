import React from "react";
import "./style.css";
import GroupCard from "../GroupCard";


function Search() {
	return (<>

		<div className="row">
			<div className="col-md-1"></div>
			<div className="col-md-6">
				<h1>Search Groups</h1>

				<p>Search by Keyword</p>
				<input type="text"></input>
				<button>Search</button>

				<p>Search by Location</p>
				<input type="text"></input>
				<button>Search</button>
			</div>
		</div>

		<div className="row">
			<div className="col-md-1"></div>
			<div className="col-md-8">

				{/* TODO: dynamically add the groups that a user
					is part of and make new GroupCards for each one */}
				<GroupCard />
				<GroupCard />
				<GroupCard />
				<GroupCard />
				<GroupCard />
				<GroupCard />
				<GroupCard />
				<GroupCard />
				<GroupCard />
				<GroupCard />
				<GroupCard />
				<GroupCard />
			</div>

		</div>

	</>);
}

export default Search;