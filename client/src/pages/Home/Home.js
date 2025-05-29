// client/src/pages/Home/Home.js

import React from 'react';

// Import Home-specific sections
import HeroSection from '../../components/HomeSections/HeroSection';
import TheCryptofoxAdvantage from '../../components/HomeSections/TheCryptofoxAdvantage';
import ServicesOverview from '../../components/HomeSections/ServicesOverview';
import WhyChooseUs from '../../components/HomeSections/WhyChooseUs';

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