import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../../assets/lms.webp'
import { FaHome } from "react-icons/fa";
import { VscSignIn } from "react-icons/vsc";
import { LiaSignInAltSolid } from "react-icons/lia";


export const Header = ()=> {
  return (
    <Navbar expand="md" className="bg-dark" variant='dark'>
      <Container>
        <Link to="/">
            <img src={logo} width="100px" alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link' to="/">
              <FaHome />
            </Link>
            <Link className='nav-link' to="/signup">
              <VscSignIn />
            </Link>
            <Link className='nav-link' to="/login">
              <LiaSignInAltSolid />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

