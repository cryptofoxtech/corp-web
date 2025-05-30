// client/src/pages/Services/DevOpsPage/DevOpsPage.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DevOpsPage.css'; // Import the specific CSS for this page

// Import the specific image asset
import devopsImage from '../../../assets/images/services-devops.png';

const DevOpsPage = () => {
  return (
    <div className="service-detail-page-wrapper">
      <main className="service-detail-main-content">
        {/* Hero Section for DevOps */}
        <section className="service-hero-devops text-center py-5">
          <Container>
            <h1 className="service-detail-headline">DevOps Strategy, Consulting, and Tooling Support</h1>
            <p className="lead service-detail-intro">
              Streamline your development and operations with our expert DevOps consulting, automation, and continuous integration/delivery solutions.
            </p>
          </Container>
        </section>

        {/* DevOps Content Section */}
        <section className="service-content-section py-5">
          <Container>
            <Row className="align-items-center">
              <Col lg={7}>
                <div className="service-detail-content">
                  <h2>Breaking Down Silos, Building Bridges</h2>
                  <p>In the rapidly evolving landscape of software development, traditional silos between development and operations teams lead to inefficiencies and slow delivery. Cryptofox Technology helps you break down these barriers, fostering a culture of collaboration, automation, and continuous improvement through comprehensive DevOps strategies. Our expertise ensures faster release cycles, improved software quality, and enhanced operational stability.</p>

                  <h3>Key Benefits:</h3>
                  <ul>
                    <li><strong>Accelerated Time-to-Market:</strong> Streamline your CI/CD pipelines to deliver features and updates at an unprecedented pace.</li>
                    <li><strong>Enhanced Collaboration:</strong> Foster a culture of shared responsibility and communication between development, operations, and QA.</li>
                    <li><strong>Reduced Operational Costs:</strong> Automate repetitive tasks, minimize manual errors, and optimize resource utilization.</li>
                    <li><strong>Improved System Reliability:</strong> Implement robust monitoring, logging, and incident response frameworks.</li>
                    <li><strong>Scalable Infrastructure:</strong> Design and implement infrastructure as code (IaC) solutions for resilient and elastic environments.</li>
                  </ul>
                </div>
              </Col>
              <Col lg={5} className="text-center">
                <div className="service-detail-image-container">
                  <img src={devopsImage} alt="DevOps Consulting" className="img-fluid rounded shadow" />
                </div>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col>
                <div className="service-detail-offerings">
                  <h3>Our DevOps Offerings:</h3>
                  <ul>
                    <li><strong>DevOps Maturity Assessment:</strong> Evaluate your current practices and identify areas for improvement.</li>
                    <li><strong>CI/CD Pipeline Implementation:</strong> Design, build, and optimize automated integration and deployment workflows using Jenkins, GitLab CI, Azure DevOps, etc.</li>
                    <li><strong>Infrastructure as Code (IaC):</strong> Automate infrastructure provisioning and management with Terraform, Ansible, CloudFormation.</li>
                    <li><strong>Containerization & Orchestration:</strong> Expert guidance on Docker, Kubernetes, and OpenShift for scalable application deployment.</li>
                    <li><strong>Monitoring & Logging:</strong> Implement comprehensive solutions with Prometheus, Grafana, ELK Stack, Splunk.</li>
                    <li><strong>DevSecOps Integration:</strong> Embed security practices throughout your development lifecycle.</li>
                    <li><strong>Version Control Management:</strong> Best practices for Git, GitHub, GitLab, Bitbucket.</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Call to Action Section */}
        <section className="service-detail-cta-section py-5 text-center">
          <Container>
            <h2 className="cta-title">Ready to Enhance Your Development Workflow?</h2>
            <p className="cta-description">
              Contact us today to discuss how Cryptofox Technology can elevate your DevOps strategy.
            </p>
            <Button as={Link} to="/contact" className="cta-button">
              Get a Free DevOps Consultation
            </Button>
          </Container>
        </section>
      </main>
    </div>
  );
};

export default DevOpsPage;