import React, { useState, useEffect } from "react";
import SignOut from "./SignOut";
import SendMessage from "./SendMessage";
import { db } from "../Firebase";
import { auth } from "../Firebase";
function Line() {
	const [messages, setMessages] = useState([]);
	useEffect(() => {
		db.collection("messages")
			.orderBy("createdAt")
			.limit(50)
			.onSnapshot((snapshot) => {
				setMessages(
					snapshot.docs.map((doc) => {
						console.log(doc.data());
						return doc.data();
					})
				);
			});
	}, []);

	return (
		<div>
			{console.log(messages)}
			<SignOut />
			<div className='msgs'>
				{messages.map(({ id, text, photoURL, uid }) => (
					<div>
						<div
							key={id}
							className={`msg ${
								uid === auth.currentUser.uid ? "sent" : "received"
							}`}>
							<img src={photoURL} />
							<p>{text}</p>
						</div>
					</div>
				))}
			</div>
			<SendMessage />
		</div>
	);
}

export default Line;
