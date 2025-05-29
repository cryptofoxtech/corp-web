// client/src/components/Header/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import './Header.css';

import cryptofoxLogo from '../../assets/images/cryptofox-logo.png';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary cryptofox-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="cryptofox-brand">
          <img
            src={cryptofoxLogo}
            alt="Cryptofox Technology Ltd Logo"
            className="cryptofox-logo"
          />
          <span className="cryptofox-company-name">Cryptofox Technology Ltd</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>

            <NavDropdown title="Services" id="services-nav-dropdown">
              <NavDropdown.Item as={Link} to="/services/devops">DevOps Strategy</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/cloud">Cloud Computing</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/ai">AI Services</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/services/other">Other IT Services</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/partners">Partners</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            {/* MODIFIED: Changed from Nav.Link to a regular <a> tag */}
            <a href="tel:437-494-7222" className="nav-link phone-number">437-494-7222</a>
            <Nav.Link as={Link} to="/quote" className="btn btn-primary get-a-quote-btn">Get a Quote</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;