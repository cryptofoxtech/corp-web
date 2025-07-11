// client/src/pages/Services/OperationsServicesPage/OperationsServicesPage.js

import React, { useState } from 'react'; // Import useState
import { Helmet } from 'react-helmet-async'; // For SEO
import { Container, Row, Col, Button, Card, Collapse } from 'react-bootstrap'; // Added Card and Collapse
import { Link } from 'react-router-dom';

// Import common page styles and this page's specific styles
import '../../../styles/pages-common.css';
import './OperationsServicesPage.css'; // This will contain styles specific to this page

// Import images for the sections. Reusing existing for now.
import heroOpsImage from '../../../assets/images/services-devops.png'; // Hero image
import opsCard1Image from '../../../assets/images/services-cloud.png'; // Image for Proactive Ops card
import opsCard2Image from '../../../assets/images/services-devops.png'; // Image for Cloud Infra card
import opsCard3Image from '../../../assets/images/services-other.png'; // Image for Enterprise Admin card (placeholder)


const OperationsServicesPage = () => {
  // State for managing collapse open/close for each service card
  const [openOpsDevOps, setOpenOpsDevOps] = useState(false);
  const [openCloudInfra, setOpenCloudInfra] = useState(false);
  const [openSysAdmin, setOpenSysAdmin] = useState(false);

  return (
    <>
      <Helmet>
        <title>IT Operations & Optimization: Sustaining Performance & Security - Cryptofox Technology</title>
        <meta name="description" content="Ensure peak IT performance, robust security, and cost-efficiency with Cryptofox Technology's AI-augmented IT Operations & DevOps support." />
        {/* Consider adding a canonical tag if this page has a stable, preferred URL, e.g.: */}
        {/* <link rel="canonical" href="https://www.cryptofoxtech.com/services/it-operations-optimization" /> */}
      </Helmet>

      <div className="page-wrapper operations-services-page-wrapper">
        <main className="main-content operations-services-main-content">

          {/* Hero/Introduction Section - Emphasizing overall value and AI augmentation */}
          <section className="service-hero-intro"> {/* 'py-5 bg-lighter-gray-intro' removed, handled by CSS */}
            <Container>
              <Row className="align-items-center justify-content-center">
                <Col lg={7} className="text-center text-lg-start">
                  <h1 className="section-title">IT Operations & Optimization: Sustain Performance, Enhance Security</h1>
                  <p className="lead section-intro">
                    Effective IT operations are crucial for sustained business growth. Cryptofox Technology provides
                    comprehensive IT operations and DevOps support, <strong>augmented by AI</strong>, to ensure your systems
                    don't just run, but thrive. We deliver continuous performance, robust security, and operational
                    efficiency, minimizing overhead and maximizing stability.
                  </p>
                  <Button as={Link} to="/contact" className="cta-button primary-theme-bg mt-3">
                    Optimize Your Operations Now
                  </Button>
                </Col>
                <Col lg={5} className="text-center mt-4 mt-lg-0">
                  <img
                    src={heroOpsImage} // Primary image for hero
                    alt="Optimized IT Operations and DevOps"
                    className="img-fluid rounded shadow-lg service-hero-image"
                  />
                </Col>
              </Row>
            </Container>
          </section>

          {/* New Section: Service Overview Grid with Cards and Collapsible Details */}
          <section className="service-cards-grid"> {/* 'py-5' removed, handled by CSS */}
            <Container>
              <h2 className="section-title text-center mb-5">Our Core Operations & DevOps Offerings</h2>
              <Row className="justify-content-center g-4"> {/* g-4 adds gutter space */}

                {/* Proactive IT Operations, DevOps & Security Card */}
                <Col md={6} lg={4}>
                  <Card className="h-100 shadow-sm service-card">
                    <Card.Img variant="top" src={opsCard1Image} alt="Proactive IT Operations & Security" />
                    <Card.Body className="d-flex flex-column">
                      <h3 className="card-title">Proactive IT Operations, DevOps & Security</h3>
                      <p className="card-text">
                        Ensure continuous performance, robust cybersecurity, and streamlined operations with
                        AI-augmented monitoring and secure CI/CD practices. We mitigate risks and maximize system efficiency.
                      </p>
                      <div className="mt-auto text-center"> {/* Push button to bottom and center */}
                        <Button
                          onClick={() => setOpenOpsDevOps(!openOpsDevOps)}
                          aria-controls="ops-devops-collapse-text"
                          aria-expanded={openOpsDevOps}
                          className="btn-sm secondary-theme-bg"
                        >
                          {openOpsDevOps ? 'Show Less' : 'Read More'}
                        </Button>
                      </div>

                      {/* Collapsible Content for Proactive IT Operations, DevOps & Security */}
                      <Collapse in={openOpsDevOps}>
                        <div id="ops-devops-collapse-text" className="pt-3">
                          <p>Our expertise includes:</p>
                          <ul className="mb-0 service-detail-list">
                            <li><strong>Intelligent Monitoring:</strong> Implementing robust frameworks (Azure Monitor, New Relic, Zabbix, ELK) for continuous performance tuning and predictive maintenance.</li>
                            <li><strong>Secure CI/CD Pipelines:</strong> Designing and deploying automated pipelines (Jenkins, Ansible, GitHub Actions, Azure DevOps) for rapid, secure releases.</li>
                            <li><strong>Built-in Security & Compliance:</strong> Covering SSL/TLS, PGP, SSH, Kerberos, MFA, and Azure Key Vault, with a strong focus on data privacy.</li>
                          </ul>
                        </div>
                      </Collapse>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Cloud Infrastructure & Cost Optimization Card */}
                <Col md={6} lg={4}>
                  <Card className="h-100 shadow-sm service-card">
                    <Card.Img variant="top" src={opsCard2Image} alt="Cloud Infrastructure & Cost Optimization" />
                    <Card.Body className="d-flex flex-column">
                      <h3 className="card-title">Cloud Infrastructure & Cost Optimization</h3>
                      <p className="card-text">
                        Leverage scalable and cost-efficient cloud solutions on Azure & IBM Cloud, optimized with
                        Infrastructure as Code (IaC) and AI-driven insights for predictable spending and tangible ROI.
                      </p>
                      <div className="mt-auto text-center"> {/* Push button to bottom and center */}
                        <Button
                          onClick={() => setOpenCloudInfra(!openCloudInfra)}
                          aria-controls="cloud-infra-collapse-text"
                          aria-expanded={openCloudInfra}
                          className="btn-sm secondary-theme-bg"
                        >
                          {openCloudInfra ? 'Show Less' : 'Read More'}
                        </Button>
                      </div>

                      {/* Collapsible Content for Cloud Infrastructure & Cost Optimization */}
                      <Collapse in={openCloudInfra}>
                        <div id="cloud-infra-collapse-text" className="pt-3">
                          <p>Our cloud services encompass:</p>
                          <ul className="mb-0 service-detail-list">
                            <li><strong>Cloud Cost Optimization:</strong> Managing and optimizing your cloud spend (Azure, IBM Cloud, IaC) through smart resource management and automated shutdowns.</li>
                            <li><strong>Cloud Infrastructure as Code (IaC):</strong> Terraform and Azure Bicep for automated and consistent cloud resource provisioning.</li>
                            <li><strong>AI Optimization & Monitoring:</strong> AI-driven insights for resource optimization and predictive monitoring in cloud environments.</li>
                          </ul>
                        </div>
                      </Collapse>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Enterprise App & 24/7 System Administration Card */}
                <Col md={6} lg={4}>
                  <Card className="h-100 shadow-sm service-card">
                    <Card.Img variant="top" src={opsCard3Image} alt="Enterprise Application & System Administration" />
                    <Card.Body className="d-flex flex-column">
                      <h3 className="card-title">Enterprise App & 24/7 System Administration</h3>
                      <p className="card-text">
                        Comprehensive 24/7 support for critical enterprise applications, middleware, databases, and
                        operating systems, augmented by AI for predictive maintenance and minimal disruptions.
                      </p>
                      <div className="mt-auto text-center"> {/* Push button to bottom and center */}
                        <Button
                          onClick={() => setOpenSysAdmin(!openSysAdmin)}
                          aria-controls="sys-admin-collapse-text"
                          aria-expanded={openSysAdmin}
                          className="btn-sm secondary-theme-bg"
                        >
                          {openSysAdmin ? 'Show Less' : 'Read More'}
                        </Button>
                      </div>

                      {/* Collapsible Content for Enterprise App & 24/7 System Administration */}
                      <Collapse in={openSysAdmin}>
                        <div id="sys-admin-collapse-text" className="pt-3">
                          <p>Our administration services cover:</p>
                          <ul className="mb-0 service-detail-list">
                            <li><strong>Middleware Administration:</strong> Expert management of WebSphere ND 9, IBM Sterling, Mule, Tomcat, Apache, Nginx.</li>
                            <li><strong>Operating System Management:</strong> Comprehensive administration for Linux and Windows Server environments.</li>
                            <li><strong>Database Administration:</strong> Robust support for PostgreSQL, MongoDB, MySQL, SQL Server, Redis, Cosmos DB.</li>
                            <li><strong>Advanced Log Management:</strong> Utilizing Graylog and ELK stack with AI analysis for proactive issue identification.</li>
                            <li><strong>Backup & Disaster Recovery:</strong> Implementing robust plans to ensure maximum uptime and business continuity.</li>
                            <li><strong>Team Empowerment:</strong> Customized training sessions and development of clear operational playbooks to foster self-sufficiency.</li>
                          </ul>
                        </div>
                      </Collapse>
                    </Card.Body>
                  </Card>
                </Col>

              </Row>
            </Container>
          </section>

          <hr className="section-separator" />

          {/* Consolidated Call to Action Section */}
          <section className="service-detail-cta-section primary-theme-bg text-white"> {/* 'py-5 text-center' removed, handled by CSS */}
            <Container>
              <h2 className="cta-title">Ready for Resilient & Efficient IT Operations?</h2>
              <p className="cta-description text-white-75">
                Let Cryptofox Technology be your partner in achieving unparalleled operational excellence.
                Contact us today for a consultation tailored to your unique infrastructure needs.
              </p>
              <Button as={Link} to="/contact" className="cta-button secondary-theme-bg">
                Get Your Operations Assessment
              </Button>
            </Container>
          </section>

        </main>
      </div>
    </>
  );
};

export default OperationsServicesPage;