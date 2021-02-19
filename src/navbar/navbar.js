import React from 'react';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import {FaUserCircle} from 'react-icons/fa';
import './nav.css';

function navbar() {
    return (
        <div className="container">
            <Navbar  expand="lg">
                <Navbar.Brand href="#home" style={{color:"red", fontSize:"30px",fontWeight:"bold"}}>E-Food71</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto"  >
                    <Nav.Link className="m" style={{color:"blue "}} href="#home">Menu One</Nav.Link>
                    <Nav.Link href="#link" style={{color:"blue "}}>Menu Two</Nav.Link>
                    <Nav.Link href="#tyh" style={{color:"blue "}}>Menu Three</Nav.Link>
                    <Nav.Link href="#grg" style={{color:"blue "}}>Menu Four</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                    <Nav.Link className="mr-auto" href="fefreih" className="user-icon" ><FaUserCircle style={{background:"white",fontSize:"35px",padding:"2px",borderRadius:"50%"}}/></Nav.Link>
                    <NavDropdown title="User" className="mr-auto" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default navbar;
