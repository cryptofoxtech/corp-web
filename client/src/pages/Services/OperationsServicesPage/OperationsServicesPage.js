// client/src/pages/Services/OperationsServicesPage/OperationsServicesPage.js

import React from 'react';
import { Helmet } from 'react-helmet-async'; // For SEO
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Import common page styles and this page's specific styles
import '../../../styles/pages-common.css';
import './OperationsServicesPage.css'; // This will contain styles specific to this page

// Import images for the sections. We will use two.
import devopsImage from '../../../assets/images/services-devops.png'; // Image for proactive ops/security
import cloudImage from '../../../assets/images/services-cloud.png';   // Image for continuous improvement/support

const OperationsServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>IT Operations & Optimization: Sustaining Performance & Security - Cryptofox Technology</title>
        <meta name="description" content="Ensure peak IT performance, robust security, and cost-efficiency with Cryptofox Technology's AI-augmented IT Operations & DevOps support." />
        {/* Consider adding a canonical tag if this page has a stable, preferred URL, e.g.: */}
        {/* <link rel="canonical" href="https://www.cryptofoxtech.com/services/it-operations-optimization" /> */}
      </Helmet>

      <div className="page-wrapper">
        <main className="main-content">

          {/* Hero/Introduction Section - Emphasizing overall value and AI augmentation */}
          <section className="service-hero-intro py-5 bg-lighter-gray-intro">
            <Container>
              <Row className="align-items-center">
                <Col lg={7}>
                  <h1 className="section-title">IT Operations & Optimization: Sustain Performance, Enhance Security</h1>
                  <p></p>
                  <p className="lead section-intro">
                    Effective IT operations are crucial for sustained business growth. Cryptofox Technology provides
                    comprehensive IT operations and DevOps support, <strong>augmented by AI</strong>, to ensure your systems
                    don't just run, but thrive. We deliver continuous performance, robust security, and operational
                    efficiency, minimizing overhead and maximizing stability.
                  </p>
                  {/* Wrap button in a div with text-center to center it without making it full width */}
                  <div className="text-center">
                    <Button as={Link} to="/contact" className="cta-button primary-theme-bg mt-3">
                      Optimize Your Operations Now
                    </Button>
                  </div>
                </Col>
                <Col lg={5} className="text-center mt-4 mt-lg-0">
                  <img
                    src={devopsImage} // Primary image for hero
                    alt="Optimized IT Operations and DevOps"
                    className="img-fluid rounded shadow-lg service-hero-image"
                  />
                </Col>
              </Row>
            </Container>
          </section>

          {/* Main Content Section 1: Proactive Operations, Security & Optimization */}
          <section className="service-content-section py-5">
            <Container>
              <Row className="align-items-center">
                <Col lg={6}>
                  <img
                    src={cloudImage} // First content section image
                    alt="Proactive IT Performance Monitoring and Cybersecurity"
                    className="img-fluid rounded shadow mb-4 mb-lg-0"
                  />
                </Col>
                <Col lg={6}>
                  <h2 className="mb-4">Proactive Performance, Ironclad Security & Cost Optimization</h2>
                  <p>
                    Inefficient systems, security vulnerabilities, and unpredictable costs can hinder any business.
                    Cryptofox mitigates these risks, ensuring your IT infrastructure operates at peak efficiency with maximum security.
                    We leverage <strong>AI-driven insights</strong> to monitor system health, predict potential issues, and optimize resource usage for predictable spending.
                  </p>
                  <p>Our comprehensive services include:</p>
                  <ul className="mb-4">
                    <li className="mb-2"><strong>Intelligent Monitoring:</strong> Implementing robust frameworks (Azure Monitor, New Relic, Zabbix, ELK) for continuous performance tuning and predictive maintenance.</li>
                    <li className="mb-2"><strong>Secure CI/CD Pipelines:</strong> Designing and deploying automated pipelines (Jenkins, Ansible, GitHub Actions, Azure DevOps) for rapid, secure releases.</li>
                    <li className="mb-2"><strong>Built-in Security & Compliance:</strong> Covering SSL/TLS, PGP, SSH, Kerberos, MFA, and Azure Key Vault, with a strong focus on data privacy, especially for AI components.</li>
                    <li className="mb-2"><strong>Cloud Cost Optimization:</strong> Managing and optimizing your cloud spend (Azure, IBM Cloud, IaC) through smart resource management and automated shutdowns for tangible ROI.</li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </section>

          <hr className="section-separator" />

          {/* Main Content Section 2: Empowering Your Team & Sustaining Value */}
          <section className="service-content-section py-5 bg-light-gray-custom">
            <Container>
              <Row className="align-items-center flex-row-reverse"> {/* Reverse columns for visual variety */}
                <Col lg={6}>
                  <img
                    src={devopsImage} // Second content section image (could be sysadminImage if you re-add it)
                    alt="IT Team Empowerment and Continuous System Support"
                    className="img-fluid rounded shadow mb-4 mb-lg-0"
                  />
                </Col>
                <Col lg={6}>
                  <h2 className="mb-4">Empowering Your Team for Continuous Improvement & Sustained Value</h2>
                  <p>
                    Operational excellence extends beyond technology to include your people and processes. Cryptofox
                    empowers your internal teams with the knowledge and tools needed for effective day-to-day management,
                    ensuring lasting success. We also provide expert 24/7 administration for your critical enterprise
                    applications and underlying infrastructure, minimizing disruptions.
                  </p>
                  <p>Our support and administration services cover:</p>
                  <ul className="mb-4">
                    <li className="mb-2"><strong>Team Empowerment:</strong> Customized training sessions and development of clear operational playbooks to foster self-sufficiency.</li>
                    <li className="mb-2"><strong>Middleware Administration:</strong> Expert management of platforms like WebSphere ND 9, IBM Sterling, Mule, Tomcat, Apache, and Nginx.</li>
                    <li className="mb-2"><strong>Operating System Management:</strong> Comprehensive administration for Linux and Windows Server environments.</li>
                    <li className="mb-2"><strong>Database Administration:</strong> Robust support for PostgreSQL, MongoDB, MySQL, SQL Server, Redis, and Cosmos DB.</li>
                    <li className="mb-2"><strong>Advanced Log Management:</strong> Utilizing Graylog and ELK stack with AI analysis for proactive issue identification.</li>
                    <li className="mb-2"><strong>Backup & Disaster Recovery:</strong> Implementing robust plans to ensure maximum uptime and business continuity.</li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </section>

          {/* Consolidated Call to Action Section */}
          <section className="service-detail-cta-section py-5 text-center primary-theme-bg text-white">
            <Container>
              <h2 className="cta-title">Ready for Resilient & Efficient IT Operations?</h2>
              <p className="cta-description text-white-75">
                Let Cryptofox Technology be your partner in achieving unparalleled operational excellence.
                Contact us today for a consultation tailored to your unique infrastructure needs.
              </p>
              {/* This section already has text-center on its section, but wrapping the button ensures consistency */}
              <div className="text-center">
                <Button as={Link} to="/contact" className="cta-button secondary-theme-bg">
                  Get Your Operations Assessment
                </Button>
              </div>
            </Container>
          </section>

        </main>
      </div>
    </>
  );
};

export default OperationsServicesPage;