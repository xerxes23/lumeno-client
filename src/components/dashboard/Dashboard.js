import { Navbar } from "../navbar/Navbar";
import React from "react";

export function Dashboard() {
	const upVote = () => {
		console.log("Upvoted");
	};

	const downVote = () => {
		console.log("Downvoted");
	};
	return (
		<div>
			<Navbar />
			<h1>Dashboard</h1>
			<div>
				<div>Question: How are you?</div>
				<div>Answer: I'm good.</div>
				<div>
					<button onClick={upVote}>Upvote</button>
					<button onClick={downVote}>Downvote</button>
					<button>Share</button>
				</div>
			</div>
		</div>
	);
}
