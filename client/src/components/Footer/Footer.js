// client/src/components/Footer/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import siteConfig from '../../data/siteConfig.js'; // Import siteConfig

const Footer = () => {
  return (
    <footer className="cryptofox-footer mt-auto py-4">
      <Container>
        <Row>
          {/* Column 1: Branding / About */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="footer-heading">{siteConfig.company.name}</h5>
            <p className="footer-text">
              {siteConfig.company.tagline}
            </p>
          </Col>

          {/* Column 2: Quick Links - SPLIT INTO TWO COLUMNS */}
          <Col md={3} className="mb-4 mb-md-0">
            <h5 className="footer-heading">Quick Links</h5>
            <Row> {/* Nested Row for sub-columns */}
              <Col xs={6}> {/* First sub-column */}
                <ul className="list-unstyled">
                  <li><Link to="/" className="footer-link">Home</Link></li>
                  <li><Link to="/blog" className="footer-link">Blog</Link></li>
                  <li><Link to="/partners" className="footer-link">Partners</Link></li>
                  <li><Link to="/services" className="footer-link">All Services</Link></li>
                  <li><Link to="/services/development" className="footer-link">Development Services</Link></li>
                </ul>
              </Col>
              <Col xs={6}> {/* Second sub-column */}
                <ul className="list-unstyled">
                  <li><Link to="/services/operations" className="footer-link">Operations Services</Link></li>
                  <li><Link to="/about" className="footer-link">About Us</Link></li>
                  <li><Link to="/about/case-studies" className="footer-link">Case Studies</Link></li>
                  <li><Link to="/about/legal" className="footer-link">Legal (Terms & Privacy)</Link></li>
                  <li><Link to="/about/contact" className="footer-link">Contact Us</Link></li>
                  <li><Link to="/quote" className="footer-link">Get a Quote</Link></li>
                </ul>
              </Col>
            </Row>
          </Col>

          {/* Column 3: Contact Info */}
          <Col md={3} className="mb-4 mb-md-0">
            <h5 className="footer-heading">Contact Us</h5>
            <address className="footer-text">
              {siteConfig.contact.address.street}<br />
              {siteConfig.contact.address.city}, {siteConfig.contact.address.province} {siteConfig.contact.address.postalCode}<br />
              {siteConfig.contact.address.country}
            </address>
            <p className="footer-text">
              Phone: <a href={`tel:${siteConfig.contact.phone.replace(/-/g, '')}`} className="footer-link">{siteConfig.contact.phone}</a><br />
              Email: <a href={`mailto:${siteConfig.contact.email}`} className="footer-link">{siteConfig.contact.email}</a>
            </p>
          </Col>

          {/* Column 4: Social Media */}
          <Col md={2}>
            <h5 className="footer-heading">Follow Us</h5>
            <div className="social-icons">
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />

        {/* Copyright Section */}
        <Row>
          <Col className="text-center">
            {/* W3C CSS Validation Badges - Modified for horizontal display */}
            <div className="d-flex justify-content-center align-items-center mb-3"> {/* Added Bootstrap flex utilities and margin-bottom */}
                <p className="mb-0 me-2"> {/* mb-0 removes default bottom margin, me-2 adds margin-right */}
                    <a href="https://jigsaw.w3.org/css-validator/check/referer" target="_blank" rel="noopener noreferrer">
                        <img
                            style={{ border: '0', width: '88px', height: '31px' }}
                            src="https://jigsaw.w3.org/css-validator/images/vcss"
                            alt="Valid CSS!"
                        />
                    </a>
                </p>

                <p className="mb-0"> {/* mb-0 removes default bottom margin */}
                    <a href="https://jigsaw.w3.org/css-validator/check/referer" target="_blank" rel="noopener noreferrer">
                        <img
                            style={{ border: '0', width: '88px', height: '31px' }}
                            src="https://jigsaw.w3.org/css-validator/images/vcss-blue"
                            alt="Valid CSS!"
                        />
                    </a>
                </p>
            </div>

            <p className="copyright-text mb-0">&copy; {siteConfig.copyrightYear} {siteConfig.company.name}. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;