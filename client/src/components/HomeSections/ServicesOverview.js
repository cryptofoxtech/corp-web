// client/src/components/HomeSections/ServicesOverview.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './ServicesOverview.css'; // Import the specific CSS file for this component

const ServicesOverview = () => {
    return (
        <section className="services-overview-section"> {/* Class name for section-level styling */}
            <Container>
                {/* Section Title - Updated Content */}
                <h2 className="section-headline">Our AI-Augmented Services</h2>
                {/* Introductory Paragraph - Updated Content */}
                <p className="section-paragraph">Discover our AI-augmented IT services, crafted to elevate your operations through intelligent automation and expert insight:</p>

                <div className="service-grid">
                    {/* Web & AI-Accelerated Development - Updated Content */}
                    <div className="service-item">
                        <h3>Web & AI-Accelerated Development</h3>
                        <p>Develop modern web applications rapidly with AI-assisted code generation, UI/UX optimization, and advanced testing. We leverage React, Node.js, Django, and Tailwind to build responsive, high-performance platforms that align with your vision.</p>
                        <Link to="/services/development" className="learn-more-link">Learn More</Link>
                    </div>
                    {/* Blockchain & Custom Software Solutions - Updated Content */}
                    <div className="service-item">
                        <h3>Blockchain & Custom Software Solutions</h3>
                        <p>Engineer secure, transparent blockchain applications and bespoke software tailored to your specific needs. Our expertise spans Ethereum (EVM), Solana, Solidity, Rust, and development tools like Hardhat, Truffle, and Foundry.</p>
                        <Link to="/services/development" className="learn-more-link">Learn More</Link>
                    </div>

                    {/* Cloud Infrastructure & AI-Optimized DevOps - Updated Content */}
                    <div className="service-item">
                        <h3>Cloud Infrastructure & AI-Optimized DevOps</h3>
                        <p>Build secure, scalable, and cost-efficient cloud environments on Azure and IBM Cloud. Benefit from AI-driven insights, automated CI/CD pipelines (Jenkins, Ansible, Kubernetes, Docker, Azure DevOps), predictive monitoring, and robust cost optimization strategies.</p>
                        <Link to="/services/operations" className="learn-more-link">Learn More</Link>
                    </div>
                    {/* Enterprise Systems & AI-Enhanced Administration - Updated Content */}
                    <div className="service-item">
                        <h3>Enterprise Systems & AI-Enhanced Administration</h3>
                        <p>Ensure 24/7 operational excellence for your complex enterprise applications. Our AI-enhanced approach provides proactive monitoring, intelligent system management, AI log analysis, and predictive maintenance for critical middleware like WebSphere ND 9, IBM Sterling, and Mule.</p>
                        <Link to="/services/operations" className="learn-more-link">Learn More</Link>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ServicesOverview;