// client/src/components/AboutSections/OurMissionVision.js

import React from 'react';
import './OurMissionVision.css'; // Assume a CSS file for this component's styles

const OurMissionVision = () => {
    return (
        <section className="mission-vision-section">
            <div className="container">
                <h2 className="section-headline">Our Purpose: Revolutionizing IT Through Human-AI Synergy</h2>
                
                <div className="mission-vision-grid">
                    <div className="mission-box">
                        <h3>Our Mission</h3>
                        {/* Revised Mission Statement */}
                        <p>To empower businesses globally by seamlessly integrating profound human expertise with advanced AI, transforming IT service delivery into a catalyst for unparalleled efficiency, groundbreaking innovation, and sustainable competitive advantage.</p>
                    </div>
                    <div className="vision-box">
                        <h3>Our Vision</h3>
                        {/* Revised Vision Statement */}
                        <p>Our vision is a future where intelligent, human-AI augmented technology solutions set the global benchmark for excellence, driving continuous innovation and strategic growth for every enterprise we serve.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurMissionVision;