// client/src/pages/Services/SysAdminPage/SysAdminPage.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SysAdminPage.css'; // Import the specific CSS for this page

// Import a generic image asset for now
import genericServiceImage from '../../../assets/images/services-other.png'; 

const SysAdminPage = () => {
  return (
    <div className="service-detail-page-wrapper">
      <main className="service-detail-main-content">
        {/* Hero Section for System Administration */}
        <section className="service-hero-sysadmin text-center py-5">
          <Container>
            <h1 className="service-detail-headline">Expert System Administration & IT Architectural Support</h1>
            <p className="lead service-detail-intro">
              Ensuring the stability, security, and efficiency of your IT infrastructure with proactive management and strategic architectural guidance.
            </p>
          </Container>
        </section>

        {/* SysAdmin Content Section */}
        <section className="service-content-section py-5">
          <Container>
            <Row className="align-items-center">
              <Col lg={7}>
                <div className="service-detail-content">
                  <h2>Robust Infrastructure, Seamless Operations</h2>
                  <p>A resilient and efficiently managed IT infrastructure is the backbone of any successful business. Cryptofox Technology provides comprehensive system administration and architectural support, ensuring your systems are secure, performant, and always available. From implementing Infrastructure as Code (IaC) to continuous system monitoring and robust network security, we manage the complexities so you can focus on your core business.</p>
                  <h3>Our Commitment to Your Infrastructure:</h3>
                  <ul>
                    <li><strong>Proactive Monitoring:</strong> Detect and resolve issues before they impact your operations.</li>
                    <li><strong>Enhanced Security:</strong> Implement best-in-class security protocols to protect your data and systems.</li>
                    <li><strong>Performance Optimization:</strong> Fine-tune your infrastructure for maximum speed and efficiency.</li>
                    <li><strong>Disaster Recovery & Backup:</strong> Comprehensive plans to ensure business continuity and data integrity.</li>
                    <li><strong>Scalability:</strong> Design architectures that grow seamlessly with your business needs.</li>
                  </ul>
                </div>
              </Col>
              <Col lg={5} className="text-center">
                <div className="service-detail-image-container">
                  <img src={genericServiceImage} alt="System Administration Support" className="img-fluid rounded shadow" />
                </div>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col>
                <div className="service-detail-offerings">
                  <h3>Our System Administration & IT Architectural Services:</h3>
                  <ul>
                    <li><strong>Infrastructure as Code (IaC):</strong> Automate infrastructure provisioning and management using Terraform, Ansible, Chef, Puppet.</li>
                    <li><strong>Containerization Expertise:</strong> Deployment and management of Docker containers and Kubernetes orchestration.</li>
                    <li><strong>System Monitoring & Maintenance:</strong> Continuous monitoring, patch management, and preventative maintenance for servers and applications.</li>
                    <li><strong>Network & Security Management:</strong> Configuration and management of firewalls, VPNs, intrusion detection systems, and network optimization.</li>
                    <li><strong>Backup & Disaster Recovery:</strong> Implementation and testing of robust backup solutions and disaster recovery plans.</li>
                    <li><strong>Cloud Infrastructure Management:</strong> Administration of cloud resources on various platforms (e.g., IBM Cloud, Azure, AWS).</li>
                    <li><strong>Database Administration:</strong> Setup, optimization, and maintenance of database systems (SQL, NoSQL).</li>
                    <li><strong>System Auditing & Optimization:</strong> Regular audits to identify bottlenecks and optimize system performance.</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Call to Action Section */}
        <section className="service-detail-cta-section py-5 text-center">
          <Container>
            <h2 className="cta-title">Need Reliable IT Infrastructure Management?</h2>
            <p className="cta-description">
              Secure and optimize your systems with Cryptofox Technology's expert administrators.
            </p>
            <Button as={Link} to="/contact" className="cta-button">
              Get IT Support
            </Button>
          </Container>
        </section>
      </main>
    </div>
  );
};

export default SysAdminPage;