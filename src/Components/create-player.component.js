// CreatePlayer Component for add new student

// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import PlayerForm from "./PlayerForm";

// CreatePlayer Component
const CreatePlayer = () => {
const [formValues, setFormValues] =
	useState({ name: '', email: '', rollno: '' })
// onSubmit handler
const onSubmit = playerObject => {
	axios.post(
'http://localhost:4000/players/create-player',
	playerObject)
	.then(res => {
		if (res.status === 200)
		alert('Player successfully registered')
		else
		Promise.reject()
	})
	.catch(err => alert('Something went wrong'))
}
	
// Return player form
return(
	<PlayerForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Create Player
	</PlayerForm>
)
}

// Export CreateStudent Component
export default CreatePlayer
