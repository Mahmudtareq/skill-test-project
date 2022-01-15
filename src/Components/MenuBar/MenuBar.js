import React from 'react';
// import { Navbar, Container, Nav } from 'react-bootstrap';
import './MenuBar.css';
import {Navbar ,Container, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const MenuBar = () => {
    return (
        <div>
               <Navbar className="p-3" bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className="text-info fs-6" href="#home">
                    App
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                    <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                    <Nav.Link as={Link} to="/register">Register</Nav.Link>
                    {/* {user.email ?
                            <button onClick={logOut} className="btn btn-info">Logout</button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    } */}
                    <Navbar.Text>
                            <span className="fs-5 text-info">
                                Signed in as :
                            </span>
                            {/* <a href="#login">{user?.displayName}</a> */}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </div>
    );
};

export default MenuBar;