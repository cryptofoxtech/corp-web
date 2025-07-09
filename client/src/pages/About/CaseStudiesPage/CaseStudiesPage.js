// client/src/pages/About/CaseStudiesPage/CaseStudiesPage.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // Import Helmet for SEO

// Import common page styles first, then this page's specific styles
import '../../../styles/pages-common.css';
import './CaseStudiesPage.css'; // IMPORTANT: Import the CSS file for this component

// Assuming you have images for these sections or placeholders
import caseStudy1Image from '../../../assets/images/services-cloud.png'; // Example image
import caseStudy2Image from '../../../assets/images/services-ai.png';   // Example image
import caseStudy3Image from '../../../assets/images/services-other.png'; // Example image

function CaseStudiesPage() {
    return (
        <>
            <Helmet>
                <title>Case Studies & Portfolio - Cryptofox Technology Ltd.</title>
                <meta name="description" content="Explore real-world case studies showcasing Cryptofox Technology Ltd.'s innovative solutions in Cloud, AI, DevOps, and Blockchain, and the tangible results we deliver." />
            </Helmet>

            {/* Use common page-wrapper and main-content classes */}
            <div className="page-wrapper">
                <main className="main-content">
                    {/* Case Study 1 */}
                    <section className="service-content-section py-5"> {/* No background class for first case study section */}
                        <Container>
                            <Row className="align-items-center mb-5">
                                <Col lg={5} className="text-center order-lg-2">
                                    <div className="service-detail-image-container">
                                        <img src={caseStudy1Image} alt="Cloud Migration Case Study" className="img-fluid rounded shadow" />
                                    </div>
                                </Col>
                                <Col lg={7} className="order-lg-1">
                                    <div className="service-detail-content">
                                        <h2>Case Study 1: Cloud Migration & AI-Optimized DevOps for a Financial Services Firm</h2>
                                        <h3>Challenge</h3>
                                        <p>A mid-sized financial services firm faced escalating infrastructure costs, slow deployment cycles, and manual operational processes that hindered their ability to innovate and scale. Their on-premise data centers were reaching capacity, and compliance requirements demanded a more robust and auditable environment.</p>
                                        <h3>Solution</h3>
                                        <p>Cryptofox designed and executed a comprehensive cloud migration strategy to Microsoft Azure, leveraging Infrastructure as Code (Azure Bicep) for consistent provisioning. We implemented a full DevOps transformation, establishing CI/CD pipelines with Azure DevOps, containerizing applications with Docker and Kubernetes, and integrating automated testing. We also set up proactive monitoring with Azure Monitor and New Relic.</p>
                                        <h3>Results</h3>
                                        <ul>
                                            <li><strong>Cost Reduction:</strong> Achieved a 30% reduction in infrastructure costs within the first year.</li>
                                            <li><strong>Faster Deployments:</strong> Reduced deployment times from weeks to hours, enabling rapid feature delivery.</li>
                                            <li><strong>Improved Reliability:</strong> Enhanced system uptime and reduced manual errors through automation.</li>
                                            <li><strong>Scalability:</strong> The firm can now effortlessly scale resources to meet fluctuating demand.</li>
                                            <li><strong>Enhanced Security:</strong> Implemented Azure Policy and NSGs for robust security and compliance.</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <hr className="section-separator" /> {/* Visual separator */}

                    {/* Case Study 2 - Alternating background for visual break */}
                    <section className="service-content-section py-5 bg-light-gray-custom">
                        <Container>
                            <Row className="align-items-center mb-5">
                                <Col lg={7}>
                                    <div className="service-detail-content">
                                        <h2>Case Study 2: AI-Powered Predictive Maintenance for a Manufacturing Company</h2>
                                        <h3>Challenge</h3>
                                        <p>A large manufacturing company experienced frequent unplanned downtime due to equipment failures, leading to significant production losses and high maintenance costs. They lacked real-time insights into machine health.</p>
                                        <h3>Solution</h3>
                                        <p>We developed and deployed an AI-powered predictive maintenance solution. This involved integrating IoT sensors with existing machinery, collecting real-time operational data, and building a custom machine learning model (using TensorFlow on Azure Databricks) to predict equipment failures before they occurred. The solution provided a dashboard for maintenance teams and automated alerts.</p>
                                        <h3>Results</h3>
                                        <ul>
                                            <li><strong>Reduced Downtime:</strong> Decreased unplanned equipment downtime by 25%.</li>
                                            <li><strong>Optimized Maintenance:</strong> Shifted from reactive to proactive maintenance, saving costs.</li>
                                            <li><strong>Increased Efficiency:</strong> Improved operational efficiency and production throughput.</li>
                                            <li><strong>Data-Driven Decisions:</strong> Provided actionable insights into machine performance and health.</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg={5} className="text-center">
                                    <div className="service-detail-image-container">
                                        <img src={caseStudy2Image} alt="AI Predictive Maintenance Case Study" className="img-fluid rounded shadow" />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <hr className="section-separator" /> {/* Visual separator */}

                    {/* Case Study 3 - No background class */}
                    <section className="service-content-section py-5">
                        <Container>
                            <Row className="align-items-center mb-5">
                                <Col lg={5} className="text-center order-lg-2">
                                    <div className="service-detail-image-container">
                                        <img src={caseStudy3Image} alt="Blockchain Supply Chain Case Study" className="img-fluid rounded shadow" />
                                    </div>
                                </Col>
                                <Col lg={7} className="order-lg-1">
                                    <div className="service-detail-content">
                                        <h2>Case Study 3: Blockchain-Based Supply Chain Transparency for a Food Distributor</h2>
                                        <h3>Challenge</h3>
                                        <p>A food distribution company struggled with lack of transparency and traceability in its complex supply chain, leading to issues with product recalls, quality control, and consumer trust. Manual record-keeping was prone to errors and delays.</p>
                                        <h3>Solution</h3>
                                        <p>Cryptofox implemented a blockchain-based solution (using Ethereum EVM) to create an immutable and transparent record of every step in the supply chain, from farm to fork. This included tracking product origin, processing, transportation, and delivery. Smart contracts automated quality checks and payment releases.</p>
                                        <h3>Results</h3>
                                        <ul>
                                            <li><strong>Full Traceability:</strong> Achieved end-to-end visibility of products, improving recall efficiency.</li>
                                            <li><strong>Enhanced Trust:</strong> Increased consumer confidence through verifiable product origins and quality.</li>
                                            <li><strong>Reduced Fraud:</strong> Minimizes counterfeit products and unauthorized diversions in the supply chain.</li>
                                            <li><strong>Streamlined Operations:</strong> Automated record-keeping and payment processes, reducing administrative overhead.</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    {/* Consolidated Call to Action Section - Use common service-detail-cta-section */}
                    <section className="service-detail-cta-section py-5 text-center">
                        <Container>
                            <h2 className="cta-title">Ready to See Your Success Story?</h2>
                            <p className="cta-description">
                                Contact Cryptofox Technology today to discuss how our innovative solutions can drive your business forward.
                            </p>
                            <Button as={Link} to="/contact" className="cta-button">
                                Get a Free Consultation
                            </Button>
                        </Container>
                    </section>

                </main>
            </div>
        </>
    );
}

export default CaseStudiesPage;