// client/src/pages/Services/OtherServicesPage/OtherServicesPage.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../../App.css'; // <--- CHANGED PATH
import './OtherServicesPage.css';

const OtherServicesPage = () => {
  // ... (rest of your component code, no changes needed here) ...
  return (
    <div className="other-services-page py-5">
      <Container>
        <h1 className="text-center mb-4">Other IT Services</h1>
        <p className="lead text-center mb-5">
          Beyond our core offerings, Cryptofox Technology provides a range of specialized IT services tailored to your unique business needs.
        </p>

        <Row className="mb-5 align-items-center">
          <Col md={6}>
            <h2>Comprehensive IT Support & Consulting</h2>
            <p>
              Our team offers flexible and reliable IT support, from general consulting to specialized project management. We aim to be your trusted partner in navigating the complex IT landscape.
            </p>
            <ul>
              <li>IT Consulting & Strategy</li>
              <li>Custom Software Development</li>
              <li>Cybersecurity Consulting</li>
              <li>Data Analytics & Business Intelligence</li>
              <li>IT Infrastructure Management</li>
              <li>Legacy System Modernization</li>
            </ul>
          </Col>
          <Col md={6}>
            <img src="https://via.placeholder.com/600x400?text=General+IT+Services" alt="General IT Services" className="img-fluid rounded shadow-sm" />
          </Col>
        </Row>

        <Row className="text-center mt-5">
          <Col>
            <h3>Need a Specific IT Solution?</h3>
            <p>
              Contact us to discuss your unique requirements. We're here to help you achieve your technology goals.
            </p>
            <a href="/contact" className="btn btn-primary btn-lg">Inquire About Our Services</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OtherServicesPage;