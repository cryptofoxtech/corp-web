// client/src/pages/Home/Home.js

import React, { useEffect } from 'react'; // Import useEffect
import { Helmet } from 'react-helmet-async'; // Import Helmet
import { useLocation } from 'react-router-dom'; // Import useLocation

// Import Home-specific sections
import HeroSection from '../../components/HomeSections/HeroSection.js';
import TheCryptofoxAdvantage from '../../components/HomeSections/TheCryptofoxAdvantage.js';
import ServicesOverview from '../../components/HomeSections/ServicesOverview.js';
import WhyChooseUs from '../../components/HomeSections/WhyChooseUs.js';

// Import the specific CSS file for this page
import './Home.css';

// Important: Import the WebP version of the hero background image here for the preload tag
// This import ensures Webpack processes the path correctly for the preload 'href'
import homeHeroBgWebp from '../../assets/images/home-hero-bg.webp';


const Home = () => {
    const location = useLocation();
    // Construct the canonical URL for the homepage.
    // It should include the full domain, and for the root, path.pathname will be '/'.
    const canonicalUrl = `https://www.cryptofoxtech.com${location.pathname}`;

    useEffect(() => {
        // Scroll to the top of the page when the component mounts.
        // This provides a consistent experience when navigating between routes.
        window.scrollTo(0, 0);
    }, []); // Empty dependency array ensures this runs only once after initial render

    return (
        // Changed from .home-page-wrapper to .page-wrapper (defined in pages-common.css)
        <div className="page-wrapper">
            <Helmet>
                {/* Page Title: Crucial for SEO, appears in browser tab and search results */}
                <title>Cryptofox Technology Ltd. - Expert DevOps, Cloud, AI & Web Development</title>
                {/* Meta Description: A brief, compelling summary for search results - Optimized for length */}
                <meta name="description" content="Accelerate your digital future with Cryptofox Technology. Expert DevOps, Cloud, AI, and Web Development solutions." />
                {/* Canonical Tag: Tells search engines the preferred version of this page for SEO */}
                <link rel="canonical" href={canonicalUrl} />

                {/* IMPORTANT: Preload your LCP background image (the WebP version) */}
                {/* This hint tells the browser to fetch this critical image as early as possible in the rendering process,
                    significantly improving Largest Contentful Paint (LCP) performance. */}
                <link
                    rel="preload"
                    as="image"
                    href={homeHeroBgWebp} // Webpack will resolve this import to the correct hashed URL for the WebP image
                    type="image/webp"    // Specify the MIME type for browser efficiency
                />
            </Helmet>

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