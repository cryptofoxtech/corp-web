// client/src/components/AboutSections/MeetTheFounder.js

import React from 'react';
import './MeetTheFounder.css'; // Assume a CSS file for this component's styles
import founderImage from '../../assets/images/about-team.png'; // Example path to a founder image

const MeetTheFounder = () => {
    return (
        <section className="meet-the-founder-section">
            <div className="container">
                <h2 className="section-headline">Meet Our Founder: Carlos DaSilva</h2>
                <div className="founder-card">
                    <div className="founder-image-wrapper">
                        <img src={founderImage} alt="Carlos DaSilva, Founder of Cryptofox Technology Ltd." className="founder-image" />
                    </div>
                    <div className="founder-bio">
                        <h3>Carlos DaSilva</h3>
                        <p className="founder-title">Founder & CEO, Cryptofox Technology Ltd.</p>
                        <p>With over **25 years of extensive experience** in corporate IT, Carlos has a proven track record of designing, implementing, and managing complex enterprise solutions for leading financial institutions and major retailers. His expertise spans cloud infrastructure, DevOps, cybersecurity, and large-scale system administration.</p>
                        <p>Driven by a passion for innovation and efficiency, Carlos founded Cryptofox Technology Ltd. to merge deep human technical acumen with the transformative power of Artificial Intelligence. He is committed to delivering practical, ROI-driven AI solutions that empower businesses to thrive in the digital age.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MeetTheFounder;