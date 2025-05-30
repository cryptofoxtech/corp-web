// client/src/components/Header/Header.js

import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/images/cryptofox-logo.png';

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Cryptofox Technology Ltd Logo"
            className="d-inline-block align-top"
          />{' '}
          <span>Cryptofox Technology Ltd</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            
            {/* START: Updated Services NavDropdown for clickability */}
            <NavDropdown
              title="Services"
              id="basic-nav-dropdown"
              // Add an onClick handler to navigate when the main 'Services' title is clicked
              onClick={(e) => {
                // Prevent default dropdown toggle behavior if a direct link is desired on title click
                // For React-Bootstrap, often the title itself won't navigate without this or a custom component
              }}
            >
              {/* This is the item that links to the main /services page */}
              <NavDropdown.Item as={Link} to="/services">All Services</NavDropdown.Item>
              <NavDropdown.Divider /> {/* Optional: Add a visual separator */}
              <NavDropdown.Item as={Link} to="/services/devops">DevOps Strategy</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/cloud">Cloud Computing</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/ai">AI Services</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/webdev">Web Development</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/sysadmin">System Administration</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/blockchain">Blockchain Development</NavDropdown.Item>
            </NavDropdown>
            {/* END: Updated Services NavDropdown */}

            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/partners">Partners</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            <Nav.Link href="tel:+14374947222">437-494-7222</Nav.Link>
            <Button as={Link} to="/contact" className="btn-get-quote">Get a Quote</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;