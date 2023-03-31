import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container  from "react-bootstrap/Container";

const NavBar = () => {
	const [expand, updateExpanded] = useState(false);
	return(
		<>
			<Navbar bg="dark" variant="dark" expanded={expand} fixed="top" expand="sm">
				<Container className="container">
					<Navbar.Toggle 
						aria-controls="responsive-navbar-nav"
						onClick={ () => {
							updateExpanded(expand ? false : "expanded")
						}}
					>
						<div className="toggleButton">
							<span></span>
							<span></span>
							<span></span>
						</div>
					</Navbar.Toggle>
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ms-auto" defaultActiveKey="#home">
							<Nav.Item>
								<Nav.Link href="#home">
									Home
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="#modalidades">
									Modalidades
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="#planos">
									Planos
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default NavBar;