import axios from "axios";

export default {

	findByKeywords: function (keyword) {
		console.log("On: API.js");
		return axios.get("/api/groups/search/" + keyword);
	}



	//root2{

	// }

	//root3{

	// }
}