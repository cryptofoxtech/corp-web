// client/src/components/HomeSections/ServicesOverview.js

import React from 'react';
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
                        <a href="/services/web-dev" className="learn-more-link">Learn More</a>
                    </div>
                    <div className="service-item">
                        <h3>Cloud Infrastructure & DevOps</h3>
                        <p>Achieve secure, scalable, and cost-efficient cloud environments with AI-driven insights and automated DevOps pipelines.</p>
                        <a href="/services/cloud-devops" className="learn-more-link">Learn More</a>
                    </div>
                    <div className="service-item">
                        <h3>Enterprise Application & System Administration</h3>
                        <p>Ensure 24/7 operational excellence with AI-augmented diagnostics, proactive monitoring, and intelligent system management.</p>
                        <a href="/services/sys-admin" className="learn-more-link">Learn More</a>
                    </div>
                    <div className="service-item">
                        <h3>AI Opportunity Assessment & Strategy</h3>
                        <p>Uncover high-impact AI opportunities and develop a clear, data-driven roadmap with AI-accelerated analysis.</p>
                        <a href="/services/ai-strategy" className="learn-more-link">Learn More</a>
                    </div>
                    <div className="service-item">
                        <h3>AI Solution Design & Architecture</h3>
                        <p>Design robust, scalable AI solutions with AI-assisted prototyping and architectural optimization, ensuring seamless integration.</p>
                        <a href="/services/ai-design" className="learn-more-link">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;