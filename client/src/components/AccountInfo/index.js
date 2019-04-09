import React from "react";

function AccountInfo(props) {
	return (
		<p id="personal-info-tag">
			Name: {props.name}
			<br />
			Email: {props.email}
			<br />
			Zip Code: {props.zip}
		</p>
	);
}

export default AccountInfo;