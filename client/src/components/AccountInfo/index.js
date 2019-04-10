import React from "react";

function AccountInfo(props) {
	return (
		<p id="personal-info-tag">
			Name: {props.name}
			<br />
			Email: {props.email}
			<br />
<<<<<<< HEAD
			Zip Code: {props.zip}
=======
			Zip Code: {props.zipCode}
			<br />
			Password: {props.password}
>>>>>>> a5d4067dbd1b525026063745c8429860917c0af6
		</p>
	);
}

export default AccountInfo;