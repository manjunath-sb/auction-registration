// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
		from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Routes,
	Route, Link } from "react-router-dom";
  

// Import other React Component
import CreatePlayer from
	"./Components/create-player.component";
import EditPlayer from
	"./Components/edit-player.component";
import PlayerList from
	"./Components/player-list.component";

// App Component
const App = () => {
return (
	<Router>
	<div className="App">
		<header className="App-header">
		<Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand>
				<Link to={"/create-player"}
				className="nav-link">
				React MERN Stack App
				</Link>
			</Navbar.Brand>

			<Nav className="justify-content-end">
				<Nav>
				<Link to={"/create-player"}
					className="nav-link">
					Register Player
				</Link>
				</Nav>

				<Nav>
				<Link to={"/player-list"}
					className="nav-link">
					Player List
				</Link>
				</Nav>
			</Nav>
			</Container>
		</Navbar>
		</header>

		<Container>
		<Row>
			<Col md={12}>
			<div className="wrapper">
				<Routes>
				<Route exact path="/"
					component={CreatePlayer} />
				<Route path="/create-player"
					component={CreatePlayer} />
				<Route path="/edit-player/:id"
					component={EditPlayer} />
				<Route path="/player-list"
					component={PlayerList} />
				</Routes>
			</div>
			</Col>
		</Row>
		</Container>
	</div>
	</Router>
);
};

export default App;
