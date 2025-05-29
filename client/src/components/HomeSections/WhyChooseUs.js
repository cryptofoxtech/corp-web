// client/src/components/HomeSections/WhyChooseUs.js

import React from 'react';
import './WhyChooseUs.css'; // Assume a CSS file for this component's styles

const WhyChooseUs = () => {
    return (
        <section className="why-choose-us-section">
            <div className="container">
                <h2 className="section-headline">Why Choose Cryptofox AI Services?</h2>
                <p className="section-paragraph">With over 25 years of corporate IT experience at prominent banks and leading retailers, we bring battle-tested expertise to every project. Our commitment to practical, production-ready solutions, combined with the efficiency of AI, ensures tangible results and a clear ROI.</p>
                
                <ul className="benefits-list">
                    <li>25+ Years Enterprise IT Experience</li>
                    <li>Unique Human-AI Hybrid Model</li>
                    <li>Practical, Production-Ready Solutions</li>
                    <li>Unwavering Focus on Measurable ROI</li>
                    <li>Deep Azure AI & Multi-Cloud Expertise</li>
                </ul>
            </div>
        </section>
    );
};

export default WhyChooseUs;