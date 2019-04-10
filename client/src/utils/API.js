import axios from "axios";

export default {

	findById: function(id) {
		// console.log("On: API.js");
		// console.log("id:", id);
		return axios.get("/api/groups/" + id);
	},

	findByUserId: function(id){
		console.log(" UserId: ", id);
		return axios.get("/api/users/"+ id);
	},

	joinGroup: function(groupId, userId){
		console.log("in utils/ and ");
		return axios.put("/api/groups/join/" + groupId +"/"+ userId);
		
	},
	joinGroupUser: function(groupId, userId){
		console.log("going to join group user");
		return axios.put("/api/users/join/" + userId +"/"+ groupId);
		
	},

	findByKeywords: function (keyword) {
		// console.log("On: API.js");
		// console.log("keyword:", keyword);
		return axios.get("/api/groups/search/" + keyword);
	},

	userLogin: function(loginObj){
		// console.log("Login Info", loginObj);

		return axios.post("/api/users/login", loginObj);
	},

	userLogout: function(){
		return axios.get("/api/users/logout")
	},

	createNewUser: function(newUserObj){
		// console.log("NewUser",newUserObj);
		return axios.post("/api/users/register", newUserObj);
	},

	findCommentsInGroup: function(id) {
		console.log("the group's id: ", id);
		return axios.get("/api/comments/" + id)
	},

	createNewGroup: function(newGroupObj) {
		console.log();
		return axios.post("/api/groups", newGroupObj)
	}, 

	createComment: function(newCommentObj){
		console.log("commentobj", newCommentObj);
		return axios.post("/api/comments/", newCommentObj);
	},

	picAPICall: function(data, header){
		return axios.post("/api/users/userSave", data, header);
	},

	updateByUserId: function(id, data){
		return axios.put("/api/users/"+id, data);
	}

};