import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import PlayerTableRow from "./PlayerTableRow";

const PlayerList = () => {
const [players, setPlayers] = useState([]);

useEffect(() => {
	axios
	.get("http://localhost:4000/players/")
	.then(({ data }) => {
		setPlayers(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return players.map((res, i) => {
	return <PlayerTableRow obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>Name</th>
			<th>Email</th>
			<th>Roll No</th>
			<th>Action</th>
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default PlayerList;
