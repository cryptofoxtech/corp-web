// client/src/components/HomeSections/TheCryptofoxAdvantage.js

import React from 'react';
import './TheCryptofoxAdvantage.css'; // Assume a CSS file for this component's styles

const TheCryptofoxAdvantage = () => {
    return (
        <section className="value-proposition-section">
            <div className="container">
                <h2 className="section-headline">The Cryptofox Advantage: Where Intelligence Meets Experience</h2>
                <p className="section-paragraph">At Cryptofox AI Services, we don't just provide IT solutions; we augment them. Our unique human-AI hybrid model combines the strategic insight and nuanced problem-solving of seasoned IT professionals with the unparalleled analytical capabilities and efficiency of advanced AI. This means faster diagnostics, smarter automation, and more innovative solutions, all delivered with precision.</p>
                
                <div className="icon-grid">
                    {/* These divs are placeholders for icons that Allan will integrate */}
                    <div className="icon-item">
                        {/* Placeholder for Human Brain Icon (e.g., <img src="/path/to/human-brain.png" alt="Human Insight" />) */}
                        <p>Augmented Human Insight</p>
                    </div>
                    <div className="icon-item">
                        {/* Placeholder for AI Chip Icon */}
                        <p>Powerful AI Acceleration</p>
                    </div>
                    <div className="icon-item">
                        {/* Placeholder for Speedometer Icon */}
                        <p>Exceptional Efficiency</p>
                    </div>
                    <div className="icon-item">
                        {/* Placeholder for Lightbulb Icon */}
                        <p>Innovative Solutions</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TheCryptofoxAdvantage;