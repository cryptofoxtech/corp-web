// client/src/pages/Home/Home.js

import React from 'react';

// Import Home-specific sections - CORRECTED PATHS
import HeroSection from '../../components/HomeSections/HeroSection.js';
import TheCryptofoxAdvantage from '../../components/HomeSections/TheCryptofoxAdvantage.js';
import ServicesOverview from '../../components/HomeSections/ServicesOverview.js';
import WhyChooseUs from '../../components/HomeSections/WhyChooseUs.js';

// Import the specific CSS file for this page
import './Home.css';

const Home = () => {
    return (
        // Changed from .home-page-wrapper to .page-wrapper (defined in pages-common.css)
        <div className="page-wrapper">
            {/* Header would be rendered by Layout component */}

            {/* Changed from .home-main-content to .main-content (defined in pages-common.css) */}
            <main className="main-content">
                <HeroSection />
                <TheCryptofoxAdvantage />
                <ServicesOverview />
                <WhyChooseUs />
            </main>

            {/* Footer would be rendered by Layout component */}
        </div>
    );
};

export default Home;