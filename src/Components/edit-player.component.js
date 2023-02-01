// EditPlayer Component for update player data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import PlayerForm from "./PlayerForm";

// EditPlayer Component Player
const EditPlayer = (props) => {
const [formValues, setFormValues] = useState({
	name: "",
	email: "",
	rollno: "",
});
	
//onSubmit handler
const onSubmit = (playerObject) => {
	axios
	.put(
		"http://localhost:4000/players/update-player/" +
		props.match.params.id,
		playerObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("Player successfully updated");
		props.history.push("/player-list");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

// Load data from server and reinitialize player form
useEffect(() => {
	axios
	.get(
		"http://localhost:4000/players/update-player/"
		+ props.match.params.id
	)
	.then((res) => {
		const { name, email, rollno } = res.data;
		setFormValues({ name, email, rollno });
	})
	.catch((err) => console.log(err));
}, [props.match.params.id]);

// Return player form
return (
	<PlayerForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update Player
	</PlayerForm>
);
};

// Export EditStudent Component
export default EditPlayer;
