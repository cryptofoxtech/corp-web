// client/src/components/AboutSections/OurStory.js

import React from 'react';
import './OurStory.css'; // Assume a CSS file for this component's styles

const OurStory = () => {
    return (
        <section className="our-story-section">
            <div className="container">
                <h2 className="section-headline">Our Story: Decades of Expertise, Augmented for the Future</h2>
                <p className="section-paragraph">For over <strong>25 years</strong>, Cryptofox Technology Ltd. has been the silent backbone of corporate IT for prominent banks and leading retailers, navigating complex systems and delivering robust solutions. This deep, battle-tested human experience forms the bedrock of <strong>Cryptofox AI Services</strong>. We've strategically evolved to bring that same caliber of enterprise-grade IT precision, now powerfully <strong>augmented by cutting-edge AI</strong>, to small and mid-sized businesses. Our journey is one of continuous adaptation, blending time-honored expertise with the intelligence of tomorrow.</p>
            </div>
        </section>
    );
};

export default OurStory;