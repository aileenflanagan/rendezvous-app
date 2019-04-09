import React, { Component } from "react";
import "./style.css";

function CommentCard(props) {
	return (
		<div>
			{props.comments.map((comment) => (
				<div key={comment._id} className="comment-cards">
					<div id="desc-div">{comment.description}</div>
					<hr/>
					<div id="user-id-div">{comment.userId}</div>
					<p id="date-created">{comment.date}</p>
				</div>
			))}



		</div>);
}

export default CommentCard