// client/src/pages/About/About.js

import React from 'react';
// No need to import Header/Footer here as they are handled globally by App.js or a Layout component

// Import About-specific sections
import OurStory from '../../components/AboutSections/OurStory';
import OurMissionVision from '../../components/AboutSections/OurMissionVision';
import CoreDifferentiator from '../../components/AboutSections/CoreDifferentiator';
import MeetTheFounder from '../../components/AboutSections/MeetTheFounder';

// Import the specific CSS file for this page
import './About.css'; 

const About = () => {
    return (
        <div className="about-page-wrapper">
            {/* Header would be rendered by App.js or a Layout component */}
            
            <main className="about-main-content">
                <OurStory />
                <OurMissionVision />
                <CoreDifferentiator />
                <MeetTheFounder />
            </main>

            {/* Footer would be rendered by App.js or a Layout component */}
        </div>
    );
};

export default About;