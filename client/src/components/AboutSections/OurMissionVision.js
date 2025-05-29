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
                        <p>To revolutionize IT service delivery by expertly combining deep human technical experience with cutting-edge AI capabilities, enabling businesses to achieve optimal operational efficiency, innovative solutions, and sustained growth.</p>
                    </div>
                    <div className="vision-box">
                        <h3>Our Vision</h3>
                        <p>To be recognized as the pioneering leader in human-AI augmented IT services, setting the global standard for intelligent, efficient, and strategically impactful technology solutions.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurMissionVision;