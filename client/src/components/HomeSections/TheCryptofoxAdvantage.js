// client/src/components/HomeSections/TheCryptofoxAdvantage.js
import React from 'react';
import { Container } from 'react-bootstrap'; // Import Container for consistent layout
import './TheCryptofoxAdvantage.css'; // Assume a CSS file for this component's styles

const TheCryptofoxAdvantage = () => {
    return (
        <section className="the-cryptofox-advantage-section"> {/* Class name for section-level styling */}
            <Container> {/* Using Bootstrap Container for consistent padding */}
                {/* Main Title and Subtitle - Hardcoded HTML */}
                <h2 className="section-headline">The Cryptofox Advantage: Where Intelligence Meets Experience</h2>
                
                {/* Introductory Paragraph - Hardcoded HTML */}
                <p className="section-paragraph">At Cryptofox AI Services, we don't just provide IT solutions; we augment them. Our unique human-AI hybrid model combines the strategic insight and nuanced problem-solving of seasoned IT professionals with the unparalleled analytical capabilities and efficiency of advanced AI. This means faster diagnostics, smarter automation, and more innovative solutions, all delivered with precision.</p>
                
                {/* Advantage Items - Hardcoded HTML for "Fancy Boxes" */}
                <div className="icon-grid">
                    <div className="icon-item">
                        {/* You can re-add your image here, e.g.: */}
                        {/* <img src="/assets/images/human-brain.png" alt="Human Insight" /> */}
                        <p>Augmented Human Insight</p>
                    </div>
                    <div className="icon-item">
                        {/* Placeholder for AI Chip Icon */}
                        {/* <img src="/assets/images/ai-chip.png" alt="AI Acceleration" /> */}
                        <p>Powerful AI Acceleration</p>
                    </div>
                    <div className="icon-item">
                        {/* Placeholder for Speedometer Icon */}
                        {/* <img src="/assets/images/efficiency.png" alt="Exceptional Efficiency" /> */}
                        <p>Exceptional Efficiency</p>
                    </div>
                    <div className="icon-item">
                        {/* Placeholder for Lightbulb Icon */}
                        {/* <img src="/assets/images/innovative-solutions.png" alt="Innovative Solutions" /> */}
                        <p>Innovative Solutions</p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default TheCryptofoxAdvantage;
