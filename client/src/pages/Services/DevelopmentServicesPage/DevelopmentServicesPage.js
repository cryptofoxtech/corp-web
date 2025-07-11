// client/src/pages/Services/DevelopmentServicesPage/DevelopmentServicesPage.js

import React, { useState } from 'react'; // Import useState
import { Helmet } from 'react-helmet-async'; // For SEO
import { Container, Row, Col, Button, Card, Collapse } from 'react-bootstrap'; // Added Collapse component
import { Link } from 'react-router-dom';

// Import common page styles and this page's specific styles
import '../../../styles/pages-common.css';
import './DevelopmentServicesPage.css'; // This will contain styles specific to this page

// Import images for the sections
import heroDevImage from '../../../assets/images/services-devops.png'; // Used for the hero section
import webDevImageCard from '../../../assets/images/services-devops.png'; // Specific image for Web Dev card
import aiImageCard from '../../../assets/images/services-ai.png';       // Specific image for AI card
import blockchainImageCard from '../../../assets/images/services-other.png'; // Specific image for Blockchain card

const DevelopmentServicesPage = () => {
  // State for managing collapse open/close for each service
  const [openWeb, setOpenWeb] = useState(false);
  const [openAI, setOpenAI] = useState(false);
  const [openBlockchain, setOpenBlockchain] = useState(false);

  return (
    <>
      <Helmet>
        <title>Custom IT Solutions: Web, AI & Blockchain Development - Cryptofox Technology</title>
        <meta name="description" content="Cryptofox builds cutting-edge web applications, intelligent AI solutions, and secure blockchain platforms tailored for your business success." />
        {/* Consider adding a canonical tag if this page has a stable, preferred URL, e.g.: */}
        {/* <link rel="canonical" href="https://www.cryptofoxtech.com/services/development-solutions" /> */}
      </Helmet>

      <div className="page-wrapper development-services-page-wrapper">
        <main className="main-content development-services-main-content">

          {/* Hero/Introduction Section - Emphasizing overall value and custom solutions */}
          <section className="service-hero-intro py-5 bg-lighter-gray-intro">
            <Container>
              <Row className="align-items-center">
                <Col lg={7}>
                  <h1 className="section-title">Custom IT Solutions: Web, AI & Blockchain Development</h1>
                  <p></p>
                  <p className="lead section-intro">
                    Cryptofox Technology builds cutting-edge, secure, and scalable custom IT solutions designed to drive
                    your business forward. We deliver high-quality, practical outcomes tailored to your unique needs,
                    from modern web applications to intelligent AI platforms and robust blockchain implementations.
                  </p>
                  <div className="text-center"> {/* Centering the button */}
                    <Button as={Link} to="/contact" className="cta-button primary-theme-bg mt-3">
                      Start Your Custom Project
                    </Button>
                  </div>
                </Col>
                <Col lg={5} className="text-center mt-4 mt-lg-0">
                  <img
                    src={heroDevImage}
                    alt="Custom IT Solutions Development"
                    className="img-fluid rounded shadow-lg service-hero-image"
                  />
                </Col>
              </Row>
            </Container>
          </section>

          {/* New Section: Service Overview Grid with Cards and Collapsible Details */}
          <section className="service-cards-grid py-5">
            <Container>
              <h2 className="section-title text-center mb-5">Our Core Development Offerings</h2>
              <Row className="justify-content-center g-4"> {/* g-4 adds gutter space */}

                {/* Web Development Card */}
                <Col md={6} lg={4}>
                  <Card className="h-100 shadow-sm service-card">
                    <Card.Img variant="top" src={webDevImageCard} alt="Modern Web Development" />
                    <Card.Body className="d-flex flex-column">
                      <h3 className="card-title">Modern Web Development & Modernization</h3>
                      <p className="card-text">
                        Build high-performance, secure, and user-centric web applications with React/Node.js & Python/Django.
                        We modernize existing systems and leverage AI-assisted processes for seamless integration and growth.
                      </p>
                      <div className="mt-auto text-center"> {/* Push button to bottom and center */}
                        <Button
                          onClick={() => setOpenWeb(!openWeb)}
                          aria-controls="web-collapse-text"
                          aria-expanded={openWeb}
                          className="btn-sm secondary-theme-bg"
                        >
                          {openWeb ? 'Show Less' : 'Read More'}
                        </Button>
                      </div>

                      {/* Collapsible Content for Web Development */}
                      <Collapse in={openWeb}>
                        <div id="web-collapse-text" className="pt-3">
                          <p>Our expertise includes:</p>
                          <ul className="mb-0"> {/* mb-0 to remove extra space if another element follows */}
                            <li className="mb-2"><strong>Full-Stack Development:</strong> Specializing in React/Node.js and Python/Django for dynamic web applications.</li>
                            <li className="mb-2"><strong>Cloud-Native Deployment:</strong> Utilizing scalable Azure cloud infrastructure with Infrastructure as Code (Bicep).</li>
                            <li className="mb-2"><strong>Automated CI/CD:</strong> Implementing robust pipelines with GitHub Actions for rapid, reliable deployments.</li>
                            <li className="mb-2"><strong>Comprehensive Testing:</strong> Ensuring quality with E2E/VRT testing using Playwright.</li>
                            <li className="mb-2"><strong>AI-Driven Enhancements:</strong> Leveraging AI for code optimization, UI/UX improvements, and testing.</li>
                          </ul>
                        </div>
                      </Collapse>
                    </Card.Body>
                  </Card>
                </Col>

                {/* AI Solutions Card */}
                <Col md={6} lg={4}>
                  <Card className="h-100 shadow-sm service-card">
                    <Card.Img variant="top" src={aiImageCard} alt="Intelligent AI Solutions" />
                    <Card.Body className="d-flex flex-column">
                      <h3 className="card-title">Intelligent AI & Machine Learning Solutions</h3>
                      <p className="card-text">
                        Integrate AI to unlock new possibilities. From strategic assessment to custom LLM integrations and autonomous agents,
                        we transform your data into actionable insights and automate complex processes.
                      </p>
                      <div className="mt-auto text-center"> {/* Push button to bottom and center */}
                        <Button
                          onClick={() => setOpenAI(!openAI)}
                          aria-controls="ai-collapse-text"
                          aria-expanded={openAI}
                          className="btn-sm secondary-theme-bg"
                        >
                          {openAI ? 'Show Less' : 'Read More'}
                        </Button>
                      </div>

                      {/* Collapsible Content for AI Solutions */}
                      <Collapse in={openAI}>
                        <div id="ai-collapse-text" className="pt-3">
                          <p>Our AI capabilities include:</p>
                          <ul className="mb-0">
                            <li className="mb-2"><strong>AI Strategy & Implementation:</strong> Guiding your AI journey from concept to deployment.</li>
                            <li className="mb-2"><strong>Custom LLM Integrations:</strong> Building solutions with leading models like Deepseek and ChatGPT.</li>
                            <li className="mb-2"><strong>Specialized AI Solutions:</strong> Developing Natural Language Processing (NLP) and Computer Vision applications.</li>
                            <li className="mb-2"><strong>Autonomous AI Agents:</strong> Crafting intelligent agents for complex tasks.</li>
                            <li className="mb-2"><strong>Scalable AI Deployments:</strong> Utilizing frameworks like TensorFlow, PyTorch, and Azure ML/Cognitive Services/Databricks.</li>
                          </ul>
                        </div>
                      </Collapse>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Blockchain Solutions Card */}
                <Col md={6} lg={4}>
                  <Card className="h-100 shadow-sm service-card">
                    <Card.Img variant="top" src={blockchainImageCard} alt="Secure Blockchain Development" />
                    <Card.Body className="d-flex flex-column">
                      <h3 className="card-title">Secure Blockchain & Web3 Implementations</h3>
                      <p className="card-text">
                        Embrace decentralized technology with secure, transparent, and efficient blockchain solutions.
                        We build robust DApps, smart contracts, and provide comprehensive security audits.
                      </p>
                      <div className="mt-auto text-center"> {/* Push button to bottom and center */}
                        <Button
                          onClick={() => setOpenBlockchain(!openBlockchain)}
                          aria-controls="blockchain-collapse-text"
                          aria-expanded={openBlockchain}
                          className="btn-sm secondary-theme-bg"
                        >
                          {openBlockchain ? 'Show Less' : 'Read More'}
                        </Button>
                      </div>

                      {/* Collapsible Content for Blockchain Solutions */}
                      <Collapse in={openBlockchain}>
                        <div id="blockchain-collapse-text" className="pt-3">
                          <p>Our blockchain services encompass:</p>
                          <ul className="mb-0">
                            <li className="mb-2"><strong>Decentralized Application (DApp) Development:</strong> On platforms like Ethereum (EVM) and Solana.</li>
                            <li className="mb-2"><strong>Smart Contract Development & Auditing:</strong> Using tools like Hardhat, Truffle, and Foundry for secure contracts.</li>
                            <li className="mb-2"><strong>Tokenomics Design & NFT Creation:</strong> Crafting digital economies and unique digital assets.</li>
                            <li className="mb-2"><strong>Blockchain Security Audits:</strong> Ensuring your Web3 initiatives are resilient and compliant.</li>
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

          {/* Consolidated Call to Action Section (kept for consistency) */}
          <section className="service-detail-cta-section py-5 text-center primary-theme-bg text-white">
            <Container>
              <h2 className="cta-title">Ready to Transform Your Digital Capabilities?</h2>
              <p className="cta-description text-white-75">
                Let Cryptofox Technology engineer a powerful, future-proof development solution tailored to your business needs.
                Contact us today for a free consultation.
              </p>
              <div className="text-center"> {/* Centering the button */}
                <Button as={Link} to="/contact" className="cta-button secondary-theme-bg">
                  Get a Free Consultation
                </Button>
              </div>
            </Container>
          </section>

        </main>
      </div>
    </>
  );
};

export default DevelopmentServicesPage;