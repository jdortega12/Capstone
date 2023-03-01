import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./Home"
import About from "./About"

function NavBar() {
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="./Home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./About">About</Nav.Link>
            <Nav.Link href="./Features">Features</Nav.Link>
            <Nav.Link href="./CreateAccount">Create Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      );
    }

export default NavBar;