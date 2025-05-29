// client/src/pages/Services/DevOpsPage/DevOpsPage.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../../App.css'; // <--- CHANGED PATH
import './DevOpsPage.css';

const DevOpsPage = () => {
  // ... (rest of your component code, no changes needed here) ...
  return (
    <div className="devops-page py-5">
      <Container>
        <h1 className="text-center mb-4">DevOps Strategy & Implementation</h1>
        <p className="lead text-center mb-5">
          Unlock agility, accelerate delivery, and enhance collaboration with our comprehensive DevOps services.
        </p>

        <Row className="mb-5 align-items-center">
          <Col md={6}>
            <img src="https://via.placeholder.com/600x400?text=DevOps+Consulting" alt="DevOps Consulting" className="img-fluid rounded shadow-sm" />
          </Col>
          <Col md={6}>
            <h2>Streamline Your Software Development Lifecycle</h2>
            <p>
              Our DevOps experts help you integrate development and operations to improve efficiency, reduce time-to-market, and ensure high-quality software releases. We work with your teams to implement continuous integration, continuous delivery (CI/CD), and automated testing.
            </p>
            <ul>
              <li>CI/CD Pipeline Automation</li>
              <li>Infrastructure as Code (IaC)</li>
              <li>Containerization & Orchestration (Docker, Kubernetes)</li>
              <li>Monitoring & Logging Solutions</li>
              <li>DevSecOps Integration</li>
            </ul>
          </Col>
        </Row>

        <Row className="text-center mt-5">
          <Col>
            <h3>Ready to Transform Your Operations?</h3>
            <p>
              Let's discuss how DevOps can drive innovation and operational excellence in your organization.
            </p>
            <a href="/contact" className="btn btn-primary btn-lg">Get a Free Consultation</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DevOpsPage;