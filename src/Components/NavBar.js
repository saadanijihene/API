import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ auth, setAuth }) => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {auth ? (
                <>
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Users">
                    Users
                  </Nav.Link>
                  <Nav.Link onClick={() => setAuth(!auth)}>
                    {" "}
                    {auth ? "logout" : "login"}
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link onClick={() => setAuth(!auth)}>
                    {" "}
                    {auth ? "logout" : "login"}
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
