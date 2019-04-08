import axios from "axios";

export default {

	findById: function(id) {
		console.log("On: API.js");
		console.log("id:", id);
		return axios.get("/api/groups/" + id);
	},
	
	findByKeywords: function (keyword) {
		console.log("On: API.js");
		console.log("keyword:", keyword);
		return axios.get("/api/groups/search/" + keyword);
	}


};