import React, { Component } from "react";

function CommentCard(props) {
	console.log("props: ", props);
	return (
		<div>
			{props.comments.map((comment) => (
				<div key={comment._id} className="comment-cards">
					<div id="user-id-div">1. {comment.userId}</div>
					<div id="desc-div">2. {comment.description}</div>
					<div id="date-created">3. {comment.date}</div>
				</div>
			))}



		</div>);
}

export default CommentCard