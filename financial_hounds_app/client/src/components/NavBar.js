import { Outlet, Link } from "react-router-dom";
import {Container, Nav, Navbar} from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

const NavBar = () => {

    const handleLogout = async(e) => {
    try{
      alert("Logout pressed");
      await axios.get('/logout');
    } catch(error){
      console.log(error)
    }
      
    };
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
        <Link to="./CreateAccount" style={{color: "white", padding: 10, textDecoration: 'none'}}>Create Account</Link>
        <NavDropdown style={{padding: 2, color:"white"}} title="Account" >
          <NavDropdown.Item href="./Login">Login</NavDropdown.Item>
            <NavDropdown.Item as="button" onClick={()=> handleLogout()}>Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Outlet />
</>
    )
  };
  
export default NavBar;