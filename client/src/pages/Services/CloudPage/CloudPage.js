// client/src/pages/Services/CloudPage/CloudPage.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CloudPage.css'; // Import the specific CSS for this page

// Import the specific image asset
import cloudImage from '../../../assets/images/services-cloud.png';

const CloudPage = () => {
  return (
    <div className="service-detail-page-wrapper">
      <main className="service-detail-main-content">
        {/* Hero Section for Cloud Computing */}
        <section className="service-hero-cloud text-center py-5">
          <Container>
            <h1 className="service-detail-headline">Cloud Computing Strategy, Planning, Architecture, and Administration</h1>
            <p className="lead service-detail-intro">
              Embrace the agility, scalability, and cost-efficiency of the cloud with Cryptofox Technology, specializing in IBM Cloud and Microsoft Azure.
            </p>
          </Container>
        </section>

        {/* Cloud Content Section */}
        <section className="service-content-section py-5">
          <Container>
            <Row className="align-items-center">
              <Col lg={5} className="text-center order-lg-2"> {/* Image on right for this section */}
                <div className="service-detail-image-container">
                  <img src={cloudImage} alt="Cloud Computing Solutions" className="img-fluid rounded shadow" />
                </div>
              </Col>
              <Col lg={7} className="order-lg-1"> {/* Content on left for this section */}
                <div className="service-detail-content">
                  <h2>Seamless Cloud Adoption & Management</h2>
                  <p>Embrace the agility, scalability, and cost-efficiency of the cloud with Cryptofox Technology. We specialize in architecting, migrating, and managing robust cloud environments primarily on **IBM Cloud** and **Microsoft Azure**. Our cloud experts ensure your transition is seamless, secure, and optimized for peak performance and business continuity, enabling you to innovate faster and scale on demand.</p>
                  <h3>Why Cloud with Cryptofox?</h3>
                  <ul>
                    <li><strong>Strategic Roadmap:</strong> Develop a clear cloud adoption strategy aligned with your business objectives.</li>
                    <li><strong>Cost Optimization:</strong> Leverage cloud-native services and best practices to reduce operational expenditures.</li>
                    <li><strong>Enhanced Security & Compliance:</strong> Implement enterprise-grade security measures and ensure regulatory adherence.</li>
                    <li><strong>High Availability & Disaster Recovery:</strong> Design resilient architectures to minimize downtime and protect data.</li>
                    <li><strong>Scalability & Elasticity:</strong> Build systems that effortlessly scale up or down with your evolving needs.</li>
                  </ul>
                </div>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col>
                <div className="service-detail-offerings">
                  <h3>Our Cloud Computing Services:</h3>
                  <ul>
                    <li><strong>Cloud Readiness Assessment & Strategy:</strong> Determine the best cloud approach for your organization.</li>
                    <li><strong>Cloud Migration Services:</strong> Seamlessly move your applications and data to IBM Cloud or Azure.</li>
                    <li><strong>Cloud Native Application Development:</strong> Architect and build modern applications leveraging serverless, containers, and microservices.</li>
                    <li><strong>Infrastructure as a Service (IaaS) Management:</strong> Provision and manage virtual machines, networking, and storage.</li>
                    <li><strong>Platform as a Service (PaaS) Optimization:</strong> Utilize managed databases, app services, and more for accelerated development.</li>
                    <li><strong>Cloud Security & Governance:</strong> Implement robust security frameworks, identity management, and compliance controls.</li>
                    <li><strong>Cloud Cost Management:</strong> Monitor, analyze, and optimize your cloud spending.</li>
                    <li><strong>Managed Cloud Services:</strong> Ongoing administration, monitoring, and support for your cloud infrastructure.</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Call to Action Section */}
        <section className="service-detail-cta-section py-5 text-center">
          <Container>
            <h2 className="cta-title">Ready for Your Cloud Transformation?</h2>
            <p className="cta-description">
              Contact us to discuss a tailored cloud strategy that drives your business forward.
            </p>
            <Button as={Link} to="/contact" className="cta-button">
              Start Your Cloud Journey
            </Button>
          </Container>
        </section>
      </main>
    </div>
  );
};

export default CloudPage;