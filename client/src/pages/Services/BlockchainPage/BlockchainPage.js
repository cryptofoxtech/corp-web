// client/src/pages/Services/BlockchainPage/BlockchainPage.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './BlockchainPage.css'; // Import the specific CSS for this page

// Import a generic image asset for now
import genericServiceImage from '../../../assets/images/services-other.png'; 

const BlockchainPage = () => {
  return (
    <div className="service-detail-page-wrapper">
      <main className="service-detail-main-content">
        {/* Hero Section for Blockchain Development */}
        <section className="service-hero-blockchain text-center py-5">
          <Container>
            <h1 className="service-detail-headline">Blockchain Development & Cryptocurrency Strategy</h1>
            <p className="lead service-detail-intro">
              Leverage distributed ledger technology for secure, transparent, and innovative solutions, from DApps to tokenomics.
            </p>
          </Container>
        </section>

        {/* Blockchain Content Section */}
        <section className="service-content-section py-5">
          <Container>
            <Row className="align-items-center">
              <Col lg={5} className="text-center order-lg-2"> {/* Image on right for this section */}
                <div className="service-detail-image-container">
                  <img src={genericServiceImage} alt="Blockchain Development" className="img-fluid rounded shadow" />
                </div>
              </Col>
              <Col lg={7} className="order-lg-1"> {/* Content on left for this section */}
                <div className="service-detail-content">
                  <h2>Innovating with Distributed Ledger Technology</h2>
                  <p>Blockchain technology is revolutionizing industries by providing unparalleled security, transparency, and decentralization. Cryptofox Technology offers end-to-end blockchain development and strategic consulting, helping you harness the power of distributed ledgers. Whether you're looking to build decentralized applications (DApps), implement smart contracts, explore tokenomics, or integrate blockchain into your existing systems, we provide the expertise to navigate this complex and exciting landscape.</p>
                  <h3>Our Blockchain Advantage:</h3>
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

            <Row className="mt-5">
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

        {/* Call to Action Section */}
        <section className="service-detail-cta-section py-5 text-center">
          <Container>
            <h2 className="cta-title">Ready to Explore the Future with Blockchain?</h2>
            <p className="cta-description">
              Connect with us to innovate with distributed ledger technology and cryptocurrency strategies.
            </p>
            <Button as={Link} to="/contact" className="cta-button">
              Get a Blockchain Consultation
            </Button>
          </Container>
        </section>
      </main>
    </div>
  );
};

export default BlockchainPage;