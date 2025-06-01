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
            <h1 className="service-detail-headline">Accelerating Innovation with Azure-Focused DevOps</h1>
            <p className="lead service-detail-intro">
              Transform your software delivery with Cryptofox Technology's expert DevOps consulting, automation, and CI/CD solutions, built on a foundation of secure Azure cloud practices.
            </p>
          </Container>
        </section>

        {/* DevOps Content Section */}
        <section className="service-content-section py-5">
          <Container>
            <Row className="align-items-center">
              <Col lg={7}>
                <div className="service-detail-content">
                  <h2>Breaking Down Silos, Building Automated Pipelines</h2>
                  <p>In today's fast-paced digital landscape, efficient software delivery is paramount. Cryptofox Technology helps businesses overcome traditional development and operations bottlenecks by implementing robust DevOps strategies. We foster collaboration, automate repetitive tasks, and establish continuous delivery pipelines, ensuring faster release cycles, superior software quality, and enhanced operational stability. Our approach is rooted in practical, real-world implementation, leveraging our deep expertise in corporate IT environments.</p>

                  <h3>Key Benefits of Our DevOps Solutions:</h3>
                  <ul>
                    <li><strong>Accelerated Time-to-Market:</strong> Streamline your CI/CD pipelines to deliver features and updates at an unprecedented pace.</li>
                    <li><strong>Enhanced Collaboration:</strong> Foster a culture of shared responsibility and communication between development, operations, and QA.</li>
                    <li><strong>Reduced Operational Costs:</strong> Automate repetitive tasks, minimize manual errors, and optimize Azure resource utilization.</li>
                    <li><strong>Improved System Reliability:</strong> Implement robust monitoring, logging, and incident response frameworks for resilient applications.</li>
                    <li><strong>Scalable & Secure Infrastructure:</strong> Design and implement Infrastructure as Code (IaC) solutions for resilient, elastic, and secure cloud environments on Azure.</li>
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
                  <h3>Our Comprehensive DevOps Offerings:</h3>
                  <ul>
                    <li>
                      <strong>Cloud-Native DevOps & Infrastructure as Code (IaC):</strong>
                      <p>Designing and implementing automated infrastructure provisioning and management primarily on **Microsoft Azure** using **Bicep** (our preferred IaC tool), alongside expertise in Terraform for multi-cloud needs. This ensures reproducible, scalable, and secure cloud environments.</p>
                    </li>
                    <li>
                      <strong>Continuous Integration/Continuous Delivery (CI/CD) Pipeline Automation:</strong>
                      <p>Building, optimizing, and managing robust CI/CD pipelines using platforms like **GitHub Actions** (as demonstrated in our project), Azure DevOps Pipelines, and Jenkins. We automate code integration, testing, build, and deployment processes.</p>
                    </li>
                    <li>
                      <strong>Automated Testing & Quality Gates:</strong>
                      <p>Integrating comprehensive automated testing strategies directly into the CI/CD pipeline, including End-to-End (E2E) testing and Visual Regression Testing (VRT) with tools like **Playwright**, to ensure high software quality and prevent regressions.</p>
                    </li>
                    <li>
                      <strong>Containerization & Orchestration:</strong>
                      <p>Expert guidance on containerizing applications with Docker and managing scalable deployments using Kubernetes and Azure Kubernetes Service (AKS).</p>
                    </li>
                    <li>
                      <strong>Monitoring, Logging & Alerting:</strong>
                      <p>Implementing centralized monitoring and logging solutions using Azure Monitor, Application Insights, and Azure Log Analytics Workspace, with proactive alerting to maintain operational stability and performance.</p>
                    </li>
                    <li>
                      <strong>DevSecOps Integration:</strong>
                      <p>Embedding security practices and automated security checks throughout the entire development lifecycle, from code to deployment, to minimize vulnerabilities.</p>
                    </li>
                    <li>
                      <strong>Version Control Management & Collaboration:</strong>
                      <p>Establishing best practices for Git workflows and managing repositories on platforms like GitHub, Azure DevOps Repos, and GitLab.</p>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Call to Action Section */}
        <section className="service-detail-cta-section py-5 text-center">
          <Container>
            <h2 className="cta-title">Ready to Transform Your Software Delivery?</h2>
            <p className="cta-description">
              Contact us today to discuss how Cryptofox Technology can elevate your DevOps strategy and accelerate your innovation.
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