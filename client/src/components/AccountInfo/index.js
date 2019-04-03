import React from "react";

function AccountInfo(props) {
	return (
		<p id="personal-info-tag">
			Name: {props.name}
			<br />
			Email: {props.email}
			<br />
			Location: {props.location}
			<br />
			Password: {props.password}
		</p>
	);
}

export default AccountInfo;