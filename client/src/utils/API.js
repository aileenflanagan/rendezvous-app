import axios from "axios";

export default {

	findById: function(id) {
		console.log("On: API.js");
		console.log("id:", id);
		return axios.get("/api/groups/" + id);
	},
	
	findByKeywords: function (keyword) {
		// console.log("On: API.js");
		console.log("keyword:", keyword);
		return axios.get("/api/groups/search/" + keyword);
	},

	userLogin: function(loginObj){
		console.log("Login Info", loginObj);

		return axios.post("/api/users/login", loginObj);

		// return axios.post("/api/users/login",{
		// 	email: loginObj.email,
		// 	password: loginObj.password
		// });
	},

	createNewUser: function(newUserObj){
		return axios.post("/api/users/register",{
			//newUserObj key: value pairs
		});
	},

};