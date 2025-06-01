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
            <h1 className="service-detail-headline">Azure Cloud Strategy, Architecture & Management</h1>
            <p className="lead service-detail-intro">
              Unlock unparalleled agility, security, and scalability with Cryptofox Technology's expert cloud solutions, primarily focused on Microsoft Azure and driven by Infrastructure as Code.
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
                  <h2>Strategic Cloud Adoption & Optimized Management</h2>
                  <p>Harness the full power of the cloud to drive innovation and efficiency. Cryptofox Technology specializes in designing, migrating, and managing robust cloud environments, with a primary focus on **Microsoft Azure**. Leveraging our deep corporate IT expertise and Infrastructure as Code (IaC) practices, we ensure your cloud journey is seamless, secure, cost-optimized, and aligned with your business objectives.</p>
                  <h3>Why Choose Cryptofox for Your Cloud Journey?</h3>
                  <ul>
                    <li><strong>Strategic Roadmap:</strong> Develop a clear cloud adoption strategy aligned with your business objectives, ensuring a phased and controlled transition.</li>
                    <li><strong>Cost Optimization:</strong> Implement cloud-native services and best practices to maximize efficiency and significantly reduce operational expenditures.</li>
                    <li><strong>Enhanced Security & Compliance:</strong> Deploy enterprise-grade security measures (including Azure RBAC and Managed Identities) and ensure regulatory adherence from the ground up.</li>
                    <li><strong>High Availability & Disaster Recovery:</strong> Design resilient architectures leveraging Azure's robust capabilities to minimize downtime and protect critical data.</li>
                    <li><strong>Scalability & Elasticity:</strong> Build systems that effortlessly scale up or down with your evolving needs, ensuring optimal performance under any load.</li>
                  </ul>
                </div>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col>
                <div className="service-detail-offerings">
                  <h3>Our Comprehensive Cloud Computing Services:</h3>
                  <ul>
                    <li>
                      <strong>Azure Cloud Strategy & Architecture:</strong>
                      <p>Conducting cloud readiness assessments and developing a comprehensive strategy for migrating to or optimizing existing workloads on **Microsoft Azure**. This includes defining the optimal structure using **Management Groups, Subscriptions, and Resource Groups** to align with your organizational hierarchy, cost management, and governance needs. Our expertise also extends to multi-cloud scenarios, including IBM Cloud where applicable.</p>
                    </li>
                    <li>
                      <strong>Infrastructure as Code (IaC) with Bicep:</strong>
                      <p>Automating the provisioning and management of your Azure infrastructure using **Bicep**, ensuring consistent, version-controlled, and reproducible deployments across all environments. We establish robust IaC practices that integrate seamlessly with your CI/CD pipelines.</p>
                    </li>
                    <li>
                      <strong>Cloud Migration & Modernization:</strong>
                      <p>Seamlessly migrating existing applications and data to Azure, and modernizing legacy systems by leveraging Azure's Platform-as-a-Service (PaaS) and serverless offerings (e.g., Azure App Service, Azure Functions, Azure Database for PostgreSQL Flexible Server).</p>
                    </li>
                    <li>
                      <strong>Managed Cloud Operations & Optimization:</strong>
                      <p>Providing ongoing administration, monitoring, and proactive support for your Azure cloud infrastructure at the **tenant, subscription, and resource group levels**. This includes comprehensive cost management (Azure Cost Management), performance tuning, and resource optimization to ensure efficiency and budget adherence.</p>
                    </li>
                    <li>
                      <strong>Cloud Security & Governance:</strong>
                      <p>Implementing robust security frameworks and ensuring governance across your Azure environment. This involves designing and configuring **Azure Active Directory (now Microsoft Entra ID)** for centralized identity management, applying granular permissions with **Azure Role-Based Access Control (RBAC)**, utilizing **Managed Identities** for secure service-to-service authentication, and enforcing organizational standards with **Azure Policy**.</p>
                    </li>
                    <li>
                      <strong>Cloud for AI & Data Platforms:</strong>
                      <p>Architecting and deploying scalable data solutions (Azure Data Lake Gen2, Azure Data Factory/Synapse) and setting up core Azure AI services (Azure ML Workspaces, Cognitive Services, Azure OpenAI) to power intelligent applications.</p>
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
            <h2 className="cta-title">Ready for Your Secure Azure Cloud Transformation?</h2>
            <p className="cta-description">
              Contact us to discuss a tailored cloud strategy that drives your business forward on Microsoft Azure.
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