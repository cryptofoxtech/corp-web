// client/src/pages/Services/WebDevPage/WebDevPage.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './WebDevPage.css'; // Import the specific CSS for this page

// Consider a more specific image asset that hints at cloud, AI, or modern web
// For now, using 'services-devops.png' as it represents the technical depth and automation.
// Ideally, you might create a custom image that blends cloud, code, and a subtle AI element.
import webDevServiceImage from '../../../assets/images/services-devops.png'; 

const WebDevPage = () => {
  return (
    <div className="service-detail-page-wrapper">
      <main className="service-detail-main-content">
        {/* Hero Section for Web Development */}
        <section className="service-hero-webdev text-center py-5">
          <Container>
            <h1 className="service-detail-headline">Secure, Scalable, AI-Ready Web Development</h1>
            <p className="lead service-detail-intro">
              Leveraging Microsoft Azure and modern full-stack technologies, we build high-performance web platforms designed for reliability, automated quality, and future AI integration.
            </p>
          </Container>
        </section>

        {/* Web Development Content Section */}
        <section className="service-content-section py-5">
          <Container>
            <Row className="align-items-center">
              <Col lg={5} className="text-center order-lg-2"> {/* Image on right for this section */}
                <div className="service-detail-image-container">
                  {/* Placeholder image. Recommend a custom graphic representing cloud architecture, code, or AI integration. */}
                  <img src={webDevServiceImage} alt="AI-Ready Web Development Solutions" className="img-fluid rounded shadow" />
                </div>
              </Col>
              <Col lg={7} className="order-lg-1"> {/* Content on left for this section */}
                <div className="service-detail-content">
                  <h2>Your Digital Foundation, Built for Tomorrow</h2>
                  <p>In today's competitive landscape, your web presence must be more than just a site – it needs to be a robust, secure, and intelligent platform. Cryptofox Technology specializes in crafting bespoke web solutions that seamlessly integrate our deep corporate IT expertise with cutting-edge AI innovation. We focus on delivering practical, production-ready systems that offer tangible, measurable returns.</p>
                  <h3>Our Integrated Web Development Approach:</h3>
                  <ul>
                    <li>
                      <strong>Cloud-Native Infrastructure on Azure (IaC with Bicep):</strong>
                      <p>Building secure, scalable, and cost-effective cloud foundations on Microsoft Azure using Infrastructure as Code (Bicep) for consistent deployment across development, staging, and production environments. This includes App Services, PostgreSQL databases, and robust network configurations.</p>
                    </li>
                    <li>
                      <strong>Modern Full-Stack Application Development:</strong>
                      <p>Crafting dynamic and intuitive user experiences with React.js for the frontend, powered by resilient and high-performance Node.js backends. Data is securely managed with Azure Database for PostgreSQL Flexible Server.</p>
                    </li>
                    <li>
                      <strong>Automated Quality Assurance & DevOps Integration:</strong>
                      <p>Implementing comprehensive CI/CD pipelines (GitHub Actions) for automated builds, End-to-End (E2E) testing with Playwright, and Visual Regression Testing (VRT) to ensure functional accuracy and UI consistency across browsers.</p>
                    </li>
                    <li>
                      <strong>AI-Ready Architecture & Pathway:</strong>
                      <p>Designing your web platform with an inherent capability to integrate advanced Azure AI services. This ensures your solution is future-proof and ready to incorporate intelligent features like predictive analytics, personalized experiences, and smart automation.</p>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col>
                <div className="service-detail-offerings">
                  <h3>Our Core Technologies & Expertise:</h3>
                  <ul>
                    <li>**Frontend:** React.js, HTML5, CSS3, JavaScript.</li>
                    <li>**Backend:** Node.js (with Express), Python (Django/Flask).</li>
                    <li>**Cloud Platform:** Microsoft Azure (App Services, PostgreSQL, Key Vault, Log Analytics, VNets, NSGs).</li>
                    <li>**Infrastructure as Code (IaC):** Azure Bicep.</li>
                    <li>**Databases:** Azure Database for PostgreSQL Flexible Server, MySQL, MongoDB.</li>
                    <li>**DevOps & CI/CD:** GitHub Actions, automated testing (E2E, Visual Regression), Playwright, Docker.</li>
                    <li>**API Development & Integration:** Building secure and scalable APIs for seamless data exchange.</li>
                    <li>**Security & Performance:** Implementing robust security measures and optimizing for fast loading times and superior user experience.</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Call to Action Section */}
        <section className="service-detail-cta-section py-5 text-center">
          <Container>
            <h2 className="cta-title">Ready to Build Your AI-Ready Web Platform?</h2>
            <p className="cta-description">
              Connect with Cryptofox Technology to discuss how we can engineer a powerful, future-proof web solution for your business.
            </p>
            <Button as={Link} to="/contact" className="cta-button">
              Get a Web Development Quote
            </Button>
          </Container>
        </section>
      </main>
    </div>
  );
};

export default WebDevPage;