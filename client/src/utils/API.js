import axios from "axios";

export default {

	findById: function(id) {
		// console.log("On: API.js");
		// console.log("id:", id);
		return axios.get("http://localhost:3001/api/groups/" + id);
	},

	findByUserId: function(id){
		console.log(" UserId: ", id);
		return axios.get("http://localhost:3001/api/users/"+ id);
	},

	updateByUserId: function(id,data){
		console.log(" UserId: ", id);
		var updateImage = {image: data}
		return axios.put("http://localhost:3001/api/users/"+ id, updateImage);
	},
	
	findByKeywords: function (keyword) {
		// console.log("On: API.js");
		// console.log("keyword:", keyword);
		return axios.get("http://localhost:3001/api/groups/search/" + keyword);
	},

	userLogin: function(loginObj){
		// console.log("Login Info", loginObj);

		return axios.post("http://localhost:3001/api/users/login", loginObj);
	},

	createNewUser: function(newUserObj){
		// console.log("NewUser",newUserObj);
		return axios.post("http://localhost:3001/api/users/register", newUserObj);
	},


	findCommentsInGroup: function(id) {
		console.log("the group's id: ", id);
		return axios.get("http://localhost:3001/api/comments/" + id)
	}

};