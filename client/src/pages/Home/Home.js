// client/src/pages/Home/Home.js

import React from 'react';

// Import Home-specific sections - CORRECTED PATHS
import HeroSection from '../../components/HomeSections/HeroSection.js'; // Corrected path
import TheCryptofoxAdvantage from '../../components/HomeSections/TheCryptofoxAdvantage.js'; // Corrected path
import ServicesOverview from '../../components/HomeSections/ServicesOverview.js'; // Corrected path
import WhyChooseUs from '../../components/HomeSections/WhyChooseUs.js'; // Corrected path

// Import the specific CSS file for this page
import './Home.css';

const Home = () => {
    return (
        <div className="home-page-wrapper">
            {/* Header would be rendered by App.js or a Layout component */}

            <main className="home-main-content">
                <HeroSection />
                <TheCryptofoxAdvantage />
                <ServicesOverview />
                <WhyChooseUs />
            </main>

            {/* Footer would be rendered by App.js or a Layout component */}
        </div>
    );
};

export default Home;