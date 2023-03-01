import { Outlet, Link } from "react-router-dom";
import {Container, Nav, Navbar} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

const NavBar = () => {
    return (
        <>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
    <Navbar.Brand>
      <Link to="./Home" style={{color: "white", textDecoration: 'none'}}>Home</Link>
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Link to="./About" style={{color: "white", padding: 10, textDecoration: 'none'}}>About</Link>
        <Link to="./Features" style={{color: "white", padding: 10, textDecoration: 'none'}}>Features</Link>
        <Link to="./CreateAccount" style={{color: "white", padding: 10, textDecoration: 'none'}}>Create Account</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Outlet />
</>
    )
  };
  
export default NavBar;

/*
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </>*/