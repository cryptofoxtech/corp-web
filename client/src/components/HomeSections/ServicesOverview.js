// client/src/components/HomeSections/ServicesOverview.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './ServicesOverview.css'; // Assume a CSS file for this component's styles

const ServicesOverview = () => {
    return (
        <section className="services-overview-section">
            <div className="container">
                <h2 className="section-headline">Our AI-Augmented Services</h2>
                <p className="section-paragraph">Our comprehensive suite of IT services is designed to elevate your operations, each powered by intelligent AI augmentation:</p>

                <div className="service-grid">
                    <div className="service-item">
                        <h3>Web Development & Modernization</h3>
                        <p>Build modern web applications faster and smarter with AI-assisted code generation and optimization.</p>
                        {/* Corrected to use Link and matching App.js path */}
                        <Link to="/services/webdev" className="learn-more-link">Learn More</Link>
                    </div>
                    <div className="service-item">
                        <h3>Cloud Infrastructure & DevOps</h3>
                        <p>Achieve secure, scalable, and cost-efficient cloud environments with AI-driven insights and automated DevOps pipelines.</p>
                        {/* Pointing to CloudPage. If you want separate DevOps link, we'd need another card/route */}
                        <Link to="/services/cloud" className="learn-more-link">Learn More</Link>
                    </div>
                    <div className="service-item">
                        <h3>Enterprise Application & System Administration</h3>
                        <p>Ensure 24/7 operational excellence with AI-augmented diagnostics, proactive monitoring, and intelligent system management.</p>
                        {/* Corrected to use Link and matching App.js path */}
                        <Link to="/services/sysadmin" className="learn-more-link">Learn More</Link>
                    </div>
                    <div className="service-item">
                        <h3>AI Opportunity Assessment & Strategy</h3>
                        <p>Uncover high-impact AI opportunities and develop a clear, data-driven roadmap with AI-accelerated analysis.</p>
                        {/* Corrected to use Link and matching App.js path */}
                        <Link to="/services/ai" className="learn-more-link">Learn More</Link>
                    </div>
                    <div className="service-item">
                        <h3>AI Solution Design & Architecture</h3>
                        <p>Design robust, scalable AI solutions with AI-assisted prototyping and architectural optimization, ensuring seamless integration.</p>
                        {/* Pointing to the same AI page, as you only have one AI route. */}
                        <Link to="/services/ai" className="learn-more-link">Learn More</Link>
                    </div>
                    {/* Add a Blockchain service item if desired, pointing to /services/blockchain */}
                    <div className="service-item">
                        <h3>Blockchain Solutions</h3>
                        <p>Harness the power of decentralized technologies for secure, transparent, and immutable digital transactions.</p>
                        <Link to="/services/blockchain" className="learn-more-link">Learn More</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;