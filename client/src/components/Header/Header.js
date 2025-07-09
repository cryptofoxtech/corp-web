// client/src/components/Header/Header.js

import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/images/cryptofox-logo.png';
import siteConfig from '../../data/siteConfig.js'; // Import siteConfig

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt={`${siteConfig.company.name} Logo`}
            className="d-inline-block align-top"
          />{' '}
          <span>{siteConfig.company.name}</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            
            {/* Blog - Second position */}
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>

            <Nav.Link as={Link} to="/partners">Partners</Nav.Link>

            {/* Services NavDropdown - Second from last */}
            <NavDropdown
              title="Services"
              id="services-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/services">All Services</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/services/development">Development Services</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/operations">Operations Services</NavDropdown.Item>
            </NavDropdown>

            {/* About Us NavDropdown - Last menu item */}
            <NavDropdown
              title="About Us"
              id="about-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/about">About {siteConfig.company.name.split(' ')[0]}</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/about/case-studies">Case Studies</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/legal">Legal (Terms & Privacy)</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/contact">Contact Us</NavDropdown.Item>
            </NavDropdown>
            
            <Button as={Link} to="/quote" className="btn-get-quote">Get a Quote</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
