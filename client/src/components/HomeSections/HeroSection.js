// client/src/components/HomeSections/HeroSection.js

import React from 'react';
import './HeroSection.css'; // Assume a CSS file for this component's styles

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="container">
                <h1 className="hero-headline">Human Expertise. AI Power. Unrivaled IT Solutions.</h1>
                {/* No sub-headline/tagline as per your preference */}
                <a href="/contact" className="cta-button">Get a Free Consultation</a>
            </div>
        </section>
    );
};

export default HeroSection;