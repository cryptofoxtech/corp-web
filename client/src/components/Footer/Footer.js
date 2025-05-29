// client/src/components/Footer/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

// If you installed Font Awesome, keep these imports.
// If you decided NOT to install Font Awesome for now, you can remove these lines.
// For now, I'm including them as it seemed like a next step.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'; // Corrected import for LinkedIn and Twitter

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="cryptofox-footer mt-auto py-4">
      <Container>
        <Row>
          {/* Column 1: Branding / About */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="footer-heading">Cryptofox Technology Ltd</h5>
            <p className="footer-text">
              Accelerating your digital future with expert DevOps, Cloud, and AI solutions tailored for your business.
            </p>
          </Col>

          {/* Column 2: Quick Links */}
          <Col md={3} className="mb-4 mb-md-0">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/services/devops" className="footer-link">DevOps Services</Link></li>
              <li><Link to="/services/cloud" className="footer-link">Cloud Services</Link></li>
              <li><Link to="/services/ai" className="footer-link">AI Services</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
              <li><Link to="/quote" className="footer-link">Get a Quote</Link></li>
            </ul>
          </Col>

          {/* Column 3: Contact Info */}
          <Col md={3} className="mb-4 mb-md-0">
            <h5 className="footer-heading">Contact Us</h5>
            <address className="footer-text">
              123 Main St, Suite 400<br />
              Toronto, ON M1A 1A1<br />
              Canada
            </address>
            <p className="footer-text">
              Phone: <a href="tel:437-494-7222" className="footer-link">437-494-7222</a><br />
              Email: <a href="mailto:info@cryptofox.com" className="footer-link">info@cryptofox.com</a>
            </p>
          </Col>

          {/* Column 4: Social Media */}
          <Col md={2}>
            <h5 className="footer-heading">Follow Us</h5>
            <div className="social-icons">
              {/* Using Font Awesome icons now */}
              <a href="https://linkedin.com/company/cryptofox" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="https://twitter.com/cryptofox" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              {/* Add more icons as needed, e.g., faFacebook, faInstagram, faYoutube */}
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />

        {/* Copyright Section */}
        <Row>
          <Col className="text-center">
            <p className="copyright-text mb-0">&copy; {currentYear} Cryptofox Technology Ltd. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; // <--- THIS IS THE CRUCIAL LINE FOR DEFAULT EXPORT