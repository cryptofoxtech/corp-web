import React from 'react';
import { Helmet } from 'react-helmet-async'; // For SEO
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Import common page styles and this page's specific styles
import '../../../styles/pages-common.css';
import './DevelopmentServicesPage.css'; // This will contain styles specific to this page

// Import images for the sections
import webDevImage from '../../../assets/images/services-devops.png'; // Re-using existing image for now
import aiImage from '../../../assets/images/services-ai.png';
import blockchainImage from '../../../assets/images/services-other.png'; // Re-using existing image for now

const DevelopmentServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Development Services: Web, AI & Blockchain - Cryptofox Technology</title>
        <meta name="description" content="Leverage Cryptofox Technology's expertise in secure, scalable, AI-ready web development, intelligent AI solutions, and secure blockchain development. Build your digital future with us." />
      </Helmet>

      <div className="page-wrapper development-services-page-wrapper">
        <main className="main-content development-services-main-content">

          {/* Web Development Section */}
          <section className="service-content-section bg-lighter-gray-intro">
            <Container>
              <h2 className="section-title">Web Development: Your Foundation for Digital Excellence</h2>
              <Row className="align-items-center">
                <Col lg={5} className="text-center order-lg-2">
                  <div className="service-detail-image-container">
                    <img src={webDevImage} alt="AI-Ready Web Development Solutions" className="img-fluid rounded" />
                  </div>
                </Col>
                <Col lg={7} className="order-lg-1">
                  <div className="service-detail-content">
                    <p className="lead">Our web development services focus on creating high-performance, secure, and user-centric applications designed for the modern cloud landscape. We build solutions that are not just functional but are also future-proof, easily integrating with emerging technologies like AI.</p>
                    <h4>Key Aspects of Our Web Development:</h4>
                    <ul>
                      <li>
                        <strong>Cloud-Native Infrastructure on Azure (IaC with Bicep):</strong>
                        <p>We architect secure, scalable, and cost-effective cloud foundations on Microsoft Azure, leveraging Infrastructure as Code (Bicep) for consistent, resilient deployments. This ensures your application runs on a robust, enterprise-grade cloud environment.</p>
                      </li>
                      <li>
                        <strong>Modern Full-Stack Application Development:</strong>
                        <p>We craft dynamic and intuitive user experiences with React.js for the frontend, powered by resilient Node.js backends. Your data is securely managed with optimized databases like Azure PostgreSQL Flexible Server.</p>
                      </li>
                      <li>
                        <strong>Automated Quality Assurance & DevOps Integration:</strong>
                        <p>Our development workflow integrates comprehensive CI/CD pipelines (GitHub Actions) for automated builds, End-to-End (E2E) testing with Playwright, and Visual Regression Testing (VRT). This guarantees functional accuracy and UI consistency across all browsers and devices.</p>
                      </li>
                      <li>
                        <strong>AI-Ready Architecture & Pathway:</strong>
                        <p>We design your web platform with inherent capabilities for seamless integration with advanced Azure AI services. This ensures your solution is future-proof, ready to incorporate intelligent features such as predictive analytics, personalized user experiences, and smart automation as your needs evolve.</p>
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
                      <li><strong>Frontend:</strong> React.js, HTML5, CSS3, JavaScript.</li>
                      <li><strong>Backend:</strong> Node.js (with Express), Python (Django/Flask).</li>
                      <li><strong>Cloud Platform:</strong> Microsoft Azure (App Services, PostgreSQL, Key Vault, Log Analytics, VNets, NSGs).</li>
                      <li><strong>Infrastructure as Code (IaC):</strong> Azure Bicep.</li>
                      <li><strong>Databases:</strong> Azure Database for PostgreSQL Flexible Server, MySQL, MongoDB.</li>
                      <li><strong>DevOps & CI/CD:</strong> GitHub Actions, automated testing (E2E, Visual Regression), Playwright, Docker.</li>
                      <li><strong>API Development & Integration:</strong> Building secure and scalable APIs for seamless data exchange.</li>
                      <li><strong>Security & Performance:</strong> Implementing robust security measures and optimizing for fast loading times and superior user experience.</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          {/* AI Services Section */}
          <section className="service-content-section">
            <Container>
              <h2 className="section-title">AI Services: Intelligent Solutions for Business Challenges</h2>
              <Row className="align-items-center">
                <Col lg={7}>
                  <div className="service-detail-content">
                    <h3>Unlock New Possibilities with Artificial Intelligence</h3>
                    <p className="lead">Embrace the transformative power of AI to drive efficiency, enhance decision-making, and create unparalleled customer experiences. Cryptofox Technology specializes in integrating bespoke AI solutions into your operations, tackling complex challenges with everything from intelligent chatbots and autonomous AI agents to advanced machine learning models and predictive analytics.</p>
                    <h4>Key Benefits:</h4>
                    <ul>
                      <li><strong>Process Automation:</strong> Automate repetitive and rule-based tasks, freeing up human resources for strategic initiatives.</li>
                      <li><strong>Enhanced Customer Engagement:</strong> Implement intelligent chatbots and virtual assistants for 24/7 support and personalized interactions.</li>
                      <li><strong>Data-Driven Decisions:</strong> Leverage machine learning for predictive analytics, anomaly detection, and business forecasting.</li>
                      <li><strong>Operational Efficiency:</strong> Optimize supply chains, resource allocation, and quality control with AI insights.</li>
                      <li><strong>Innovation & Competitive Advantage:</strong> Develop new AI-powered products and services to lead your market.</li>
                    </ul>
                  </div>
                </Col>
                <Col lg={5} className="text-center">
                  <div className="service-detail-image-container">
                    <img src={aiImage} alt="Intelligent AI Solutions" className="img-fluid rounded" />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="service-detail-offerings">
                    <h3>Our AI Service Offerings:</h3>
                    <ul>
                      <li><strong>AI Strategy & Consulting:</strong> Identify AI opportunities and build a roadmap for implementation.</li>
                      <li><strong>Chatbot Development:</strong> Design and deploy intelligent conversational AI for customer service, sales, and internal support.</li>
                      <li><strong>Artificial Intelligence (AI) Agent Development:</strong> Create autonomous AI agents for specific tasks, from data processing to content generation.</li>
                      <li><strong>Machine Learning Model Development:</strong> Build custom ML models for predictive analytics, image recognition, natural language processing (NLP), etc.</li>
                      <li><strong>Natural Language Processing (NLP) Solutions:</strong> Implement sentiment analysis, text summarization, and language understanding.</li>
                      <li><strong>Computer Vision:</strong> Develop solutions for image recognition, object detection, and video analysis.</li>
                      <li><strong>AI Integration:</strong> Seamlessly integrate AI solutions with your existing systems and workflows.</li>
                      <li><strong>Data Science & Analytics:</strong> Prepare, analyze, and interpret large datasets to train and improve AI models.</li>
                    </ul>
                    <p className="note">We set up the structure for calling external AI services like Deepseek, ChatGPT, and other specialized APIs securely, ensuring your applications can leverage the latest advancements in AI.</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          {/* Blockchain Services Section */}
          <section className="service-content-section">
            <Container>
              <h2 className="section-title">Blockchain Development & Cryptocurrency Strategy</h2>
              <Row className="align-items-center">
                <Col lg={5} className="text-center order-lg-2">
                  <div className="service-detail-image-container">
                    <img src={blockchainImage} alt="Blockchain Development" className="img-fluid rounded" />
                  </div>
                </Col>
                <Col lg={7} className="order-lg-1">
                  <div className="service-detail-content">
                    <h3>Secure, Transparent, and Decentralized Solutions</h3>
                    <p className="lead">Blockchain technology is reshaping industries by offering unprecedented security, transparency, and decentralization. Cryptofox Technology provides end-to-end blockchain development and strategic consulting, empowering you to harness the full potential of distributed ledger technology. From building robust Decentralized Applications (DApps) and secure smart contracts to developing intricate tokenomics models, we guide you through this complex yet revolutionary landscape.</p>
                    <h4>Our Blockchain Advantage:</h4>
                    <ul>
                      <li><strong>Enhanced Security:</strong> Immutable ledgers and cryptographic security protect your data and transactions.</li>
                      <li><strong>Transparency & Trust:</strong> Build trust with verifiable and auditable records.</li>
                      <li><strong>Efficiency:</strong> Automate processes with self-executing smart contracts.</li>
                      <li><strong>Decentralization:</strong> Reduce reliance on central authorities, fostering a more robust and fair ecosystem.</li>
                      <li><strong>Innovation:</strong> Explore new business models and revenue streams enabled by blockchain.</li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="service-detail-offerings">
                    <h3>Our Blockchain & Cryptocurrency Services:</h3>
                    <ul>
                      <li><strong>Blockchain Strategy & Consulting:</strong> Assess the viability and impact of blockchain for your business.</li>
                      <li><strong>Decentralized Application (DApp) Development:</strong> Build custom DApps on platforms like Ethereum, Solana, Polygon, etc.</li>
                      <li><strong>Smart Contract Development & Auditing:</strong> Design, deploy, and audit secure and efficient smart contracts.</li>
                      <li><strong>Tokenomics & Token Development:</strong> Create utility tokens, security tokens, or NFTs tailored to your ecosystem.</li>
                      <li><strong>Private & Consortium Blockchains:</strong> Develop permissioned blockchain networks for enterprise solutions.</li>
                      <li><strong>Cryptocurrency Integration:</strong> Integrate cryptocurrency payment gateways or wallet functionalities.</li>
                      <li><strong>Blockchain Security Audits:</strong> Comprehensive security assessments for blockchain applications and protocols.</li>
                      <li><strong>Web3 Solutions:</strong> Building the next generation of internet applications with blockchain at their core.</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          {/* Consolidated Call to Action Section */}
          <section className="service-detail-cta-section text-center">
            <Container>
              <h2 className="cta-title">Ready to Build Your Next-Gen Digital Solution?</h2>
              <p className="cta-description">
                Connect with Cryptofox Technology to discuss how we can engineer a powerful, future-proof development solution tailored to your business needs.
              </p>
              <Button as={Link} to="/quote" className="btn-contact">
                Get a Free Development Consultation
              </Button>
            </Container>
          </section>

        </main>
      </div>
    </>
  );
};

export default DevelopmentServicesPage;