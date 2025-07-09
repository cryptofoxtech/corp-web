// client/src/pages/Partners/Partners.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import partnersData from '../../data/partnersData.js';
import './Partners.css';

function Partners() {
  return (
    <Container className="partners-page py-5">
      <div className="section-text-container">
        <h1 className="mb-4">Our Valued Partners</h1>
        <p className="lead mb-5">
          To deliver best-in-class, AI-augmented IT solutions, we strategically partner with leading technology and cloud innovators. Our collaborations ensure you receive cutting-edge tools and robust support from:
        </p>
      </div>

      <Row className="partners-grid justify-content-center">
        {partnersData.map(partner => (
          <Col key={partner.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <div className="partner-card h-100">
              <img
                src={partner.logo}
                alt={`${partner.name} Logo`}
                className="partner-logo img-fluid"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x50/cccccc/000000?text=Logo'; }}
              />
              <h3>{partner.name}</h3>
              <p>{partner.description}</p>
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-info btn-sm mt-auto"
              >
                Visit Website
              </a>
            </div>
          </Col>
        ))}
      </Row>

      <Row className="mt-5">
        <Col className="text-center">
         {/* UPDATED: Button text and href for partnerships */}
          <a href="mailto:info@cryptofoxtech.com" className="btn btn-primary">
            Partner with Us
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Partners;