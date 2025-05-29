// client/src/pages/Services/CloudPage/CloudPage.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../../App.css'; // <--- CHANGED PATH
import './CloudPage.css';

const CloudPage = () => {
  // ... (rest of your component code, no changes needed here) ...
  return (
    <div className="cloud-page py-5">
      <Container>
        <h1 className="text-center mb-4">Cloud Computing Solutions</h1>
        <p className="lead text-center mb-5">
          Leverage the power of the cloud for scalability, flexibility, and cost-efficiency with our expert cloud services.
        </p>

        <Row className="mb-5 align-items-center">
          <Col md={6}>
            <h2>Migrate, Optimize, and Manage Your Cloud Infrastructure</h2>
            <p>
              Whether you're looking to migrate existing applications, build cloud-native solutions, or optimize your current cloud spend, Cryptofox Technology provides end-to-end cloud computing services. We work with major cloud providers to ensure robust, secure, and high-performing environments.
            </p>
            <ul>
              <li>Cloud Migration & Strategy</li>
              <li>Infrastructure as a Service (IaaS)</li>
              <li>Platform as a Service (PaaS)</li>
              <li>Software as a Service (SaaS) Integration</li>
              <li>Cloud Cost Optimization</li>
              <li>Hybrid & Multi-Cloud Solutions</li>
            </ul>
          </Col>
          <Col md={6}>
            <img src="https://via.placeholder.com/600x400?text=Cloud+Infrastructure" alt="Cloud Infrastructure" className="img-fluid rounded shadow-sm" />
          </Col>
        </Row>

        <Row className="text-center mt-5">
          <Col>
            <h3>Ready for Cloud Transformation?</h3>
            <p>
              Explore how cloud computing can revolutionize your business operations and IT infrastructure.
            </p>
            <a href="/contact" className="btn btn-primary btn-lg">Learn More</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CloudPage;