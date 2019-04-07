import axios from "axios";

export default {

	findByKeywords: function (keyword) {
		console.log("On: API.js");
		console.log("keyword:", keyword);
		return axios.get("/api/groups/search/" + keyword);
	},

	createNewUser: function(){

	},

	

};