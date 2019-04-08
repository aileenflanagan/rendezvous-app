import axios from "axios";

export default {

	findById: function(id) {
<<<<<<< HEAD
=======
		console.log("On: API.js");
		console.log("id:", id);
		return axios.get("/api/groups/" + id);
	},
	
	findByKeywords: function (keyword) {
>>>>>>> 721cf053e2f8c77383687d14d1762368144d67e4
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
		// console.log("keyword:", keyword);
		// return axios.get("/api/user/login");
	},

	createNewUser: function(){

	},

};