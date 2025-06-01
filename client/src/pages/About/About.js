// client/src/pages/About/About.js
import React from 'react';

// Import About-specific sections - ADDED .js AND CORRECTED PATHS
import OurStory from '../../components/AboutSections/OurStory.js'; // Added .js
import OurMissionVision from '../../components/AboutSections/OurMissionVision.js'; // Added .js
import CoreDifferentiator from '../../components/AboutSections/CoreDifferentiator.js'; // Added .js
import MeetTheFounder from '../../components/AboutSections/MeetTheFounder.js'; // Added .js (this is the one causing the error)

// Import the specific CSS file for this page
import './About.css';

const About = () => {
    return (
        <div className="about-page-wrapper">
            <main className="about-main-content">
                <OurStory />
                <OurMissionVision />
                <CoreDifferentiator />
                <MeetTheFounder />
            </main>
        </div>
    );
};

export default About;