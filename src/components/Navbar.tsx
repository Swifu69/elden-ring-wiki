import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import NavLink from "./NavLink";

function NavBar() {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand>Elden Ring Wiki</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<NavLink name="Home" link="/" />
						<NavLink name="Bosses" link="/bosses" />
						<NavLink name="Classes" link="/classes" />
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
