// client/src/pages/Services/OperationsServicesPage/OperationsServicesPage.js

import React from 'react';
import { Helmet } from 'react-helmet-async'; // For SEO
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Import common page styles and this page's specific styles
import '../../../styles/pages-common.css';
import './OperationsServicesPage.css'; // This will contain styles specific to this page

// Import images for the sections (using placeholders as actual images were not provided)
import devopsImage from '../../../assets/images/services-devops.png';
import cloudImage from '../../../assets/images/services-cloud.png';
import sysadminImage from '../../../assets/images/services-other.png';

const OperationsServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Operations Services: DevOps, Cloud & SysAdmin - Cryptofox Technology</title>
        <meta name="description" content="Optimize your IT operations with Cryptofox Technology's DevOps, Cloud Infrastructure, and System Administration services. Enhance efficiency, security, and scalability." />
      </Helmet>

      <div className="page-wrapper">
        <main className="main-content">

          {/* DevOps Strategy Section - Added 'bg-lighter-gray-intro' for subtle intro background */}
          <section className="service-content-section py-5 bg-lighter-gray-intro">
            <Container>
              <h1 className="section-title">DevOps, Cloud & System Administration: Operational Excellence</h1>
              <p className="lead section-intro">Streamline, Secure, and Scale Your Infrastructure</p>
              <Row className="align-items-center mb-5">
                <Col lg={5} className="text-center order-lg-2">
                  <div className="service-detail-image-container">
                    <img src={devopsImage} alt="DevOps Strategy" className="img-fluid rounded shadow" />
                  </div>
                </Col>
                <Col lg={7} className="order-lg-1">
                  <div className="service-detail-content">
                    <h3>Our Integrated Operations Approach:</h3>
                    <ul>
                      <li>
                        <strong>DevOps Transformation & CI/CD:</strong>
                        <p>Implementing robust CI/CD pipelines using tools like Jenkins, Ansible, Kubernetes, Docker, and GitHub Actions to automate your software delivery lifecycle, ensuring faster, more reliable deployments.</p>
                      </li>
                      <li>
                        <strong>Cloud Infrastructure Management (Azure/IBM Cloud):</strong>
                        <p>Designing, deploying, and managing scalable and secure cloud environments on Microsoft Azure and IBM Cloud. This includes Infrastructure as Code (IaC) with Azure Bicep and Terraform, ensuring consistency and cost optimization.</p>
                      </li>
                      <li>
                        <strong>Enterprise Applications & Middleware:</strong>
                        <p>Providing expert administration and support for critical enterprise applications and middleware like WebSphere ND 9, IBM Sterling, Mule, Tomcat, and Apache, ensuring 24/7 availability and performance.</p>
                      </li>
                      <li>
                        <strong>Proactive Monitoring & Security:</strong>
                        <p>Setting up comprehensive monitoring solutions (Azure Monitor, New Relic, Zabbix, Graylog, ELK stack) for real-time insights and predictive maintenance. Implementing robust security measures including SSL/TLS, PGP, SSH, Kerberos, and MFA.</p>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="service-detail-offerings">
                    <h3>Our Core Technologies & Expertise:</h3>
                    <ul>
                      <li><strong>Cloud Platforms:</strong> Microsoft Azure, IBM Cloud (IaC with Azure Bicep, Terraform).</li>
                      <li><strong>Containerization & Orchestration:</strong> Docker, Kubernetes.</li>
                      <li><strong>CI/CD Tools:</strong> Jenkins, Ansible, GitHub Actions, Azure DevOps.</li>
                      <li><strong>Middleware:</strong> WebSphere ND 9, IBM Sterling, Mule, Tomcat, Apache, Nginx.</li>
                      <li><strong>Monitoring:</strong> Azure Monitor, New Relic, Zabbix, Graylog, ELK Stack.</li>
                      <li><strong>Security:</strong> SSL/TLS, PGP, SSH, Kerberos, MFA.</li>
                      <li><strong>Scripting:</strong> Bash, PowerShell.</li>
                      <li><strong>Databases:</strong> PostgreSQL, MongoDB, MySQL, SQL Server, Redis, Cosmos DB.</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <hr className="section-separator" /> {/* Visual separator */}

          {/* Cloud Computing Section */}
          <section className="service-content-section py-5 bg-light-gray-custom">
            <Container>
              <h2 className="section-title">Cloud Infrastructure & DevOps: Agility and Resilience</h2>
              <Row className="align-items-center mb-5">
                <Col lg={7}>
                  <div className="service-detail-content">
                    <h3>Maximize Your Cloud Investment</h3>
                    <p>Unlock the full potential of cloud computing with Cryptofox Technology. We offer end-to-end cloud infrastructure services, from strategic planning and migration to ongoing management and optimization. Our expertise in DevOps ensures that your cloud environment is not only robust and secure but also agile and efficient, supporting rapid development and deployment cycles.</p>
                    <h4>Key Benefits:</h4>
                    <ul>
                      <li><strong>Scalability & Flexibility:</strong> Easily scale resources up or down based on demand.</li>
                      <li><strong>Cost Optimization:</strong> Implement strategies for efficient resource utilization and cost savings.</li>
                      <li><strong>Enhanced Security:</strong> Leverage cloud-native security features and best practices.</li>
                      <li><strong>Disaster Recovery & Business Continuity:</strong> Build resilient architectures for uninterrupted operations.</li>
                      <li><strong>Automation & Efficiency:</strong> Automate infrastructure provisioning and management with IaC.</li>
                    </ul>
                  </div>
                </Col>
                <Col lg={5} className="text-center">
                  <div className="service-detail-image-container">
                    <img src={cloudImage} alt="Cloud Infrastructure" className="img-fluid rounded shadow" />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="service-detail-offerings">
                    <h3>Our Cloud & DevOps Service Offerings:</h3>
                    <ul>
                      <li><strong>Cloud Strategy & Consulting:</strong> Develop a tailored cloud adoption roadmap.</li>
                      <li><strong>Cloud Migration:</strong> Seamlessly migrate existing applications and data to the cloud.</li>
                      <li><strong>Infrastructure as Code (IaC):</strong> Implement IaC using Azure Bicep and Terraform for automated provisioning.</li>
                      <li><strong>Containerization (Docker & Kubernetes):</strong> Package and deploy applications efficiently.</li>
                      <li><strong>CI/CD Pipeline Development:</strong> Build automated pipelines for continuous integration and delivery.</li>
                      <li><strong>Cloud Security & Compliance:</strong> Implement robust security measures and ensure regulatory compliance.</li>
                      <li><strong>Cost Management & Optimization:</strong> Monitor and optimize cloud spending.</li>
                      <li><strong>Cloud Monitoring & Alerting:</strong> Set up comprehensive monitoring with Azure Monitor, New Relic, etc.</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <hr className="section-separator" /> {/* Visual separator */}

          {/* System Administration Section */}
          <section className="service-content-section py-5">
            <Container>
              <h2 className="section-title">Enterprise Applications & System Administration: 24/7 Support</h2>
              <Row className="align-items-center mb-5">
                <Col lg={5} className="text-center order-lg-2">
                  <div className="service-detail-image-container">
                    <img src={sysadminImage} alt="System Administration" className="img-fluid rounded shadow" />
                  </div>
                </Col>
                <Col lg={7} className="order-lg-1">
                  <div className="service-detail-content">
                    <h3>Reliable Operations, Uninterrupted Performance</h3>
                    <p>Cryptofox Technology provides comprehensive system administration and support for your critical enterprise applications and infrastructure. Our 24/7 monitoring and proactive maintenance ensure your systems are always running smoothly, securely, and efficiently. From middleware management to network security and log analysis, we keep your operations optimized and resilient.</p>
                    <h4>Key Benefits:</h4>
                    <ul>
                      <li><strong>24/7 Monitoring & Support:</strong> Continuous oversight and rapid response to incidents.</li>
                      <li><strong>Predictive Maintenance:</strong> AI-driven log analysis to anticipate and prevent issues.</li>
                      <li><strong>Enhanced Security Posture:</strong> Implement and manage robust security protocols.</li>
                      <li><strong>Performance Optimization:</strong> Fine-tune systems for maximum efficiency and speed.</li>
                      <li><strong>Reduced Downtime:</strong> Proactive issue resolution minimizes disruptions.</li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="service-detail-offerings">
                    <h3>Our System Administration Offerings:</h3>
                    <ul>
                      <li><strong>Middleware Administration:</strong> Expert management of WebSphere ND 9, IBM Sterling, Mule, Tomcat, Apache, Nginx.</li>
                      <li><strong>Operating System Management:</strong> Linux (Ubuntu, RHEL), Windows Server administration.</li>
                      <li><strong>Network & Security Management:</strong> Firewalls, VPNs, SSL/TLS, PGP, SSH, Kerberos, MFA.</li>
                      <li><strong>Database Administration:</strong> Support for PostgreSQL, MongoDB, MySQL, SQL Server, Redis, Cosmos DB.</li>
                      <li><strong>Log Management & Analysis:</strong> Centralized logging with Graylog, ELK stack, AI-driven log analysis.</li>
                      <li><strong>Performance Tuning & Optimization:</strong> System and application performance enhancements.</li>
                      <li><strong>Backup & Disaster Recovery:</strong> Implementing robust data protection and recovery plans.</li>
                      <li><strong>Patch Management:</strong> Ensuring systems are up-to-date with the latest security patches.</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          {/* Consolidated Call to Action Section */}
          <section className="service-detail-cta-section py-5 text-center">
            <Container>
              <h2 className="cta-title">Ready for Optimized IT Operations?</h2>
              <p className="cta-description">
                Connect with Cryptofox Technology to discuss how we can enhance your operational efficiency and ensure robust IT infrastructure.
              </p>
              <Button as={Link} to="/contact" className="cta-button">
                Get a Free Operations Consultation
              </Button>
            </Container>
          </section>

        </main>
      </div>
    </>
  );
};

export default OperationsServicesPage;
