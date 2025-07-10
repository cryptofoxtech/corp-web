// client/src/components/HomeSections/HeroSection.js
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeroSection.css';

// Import both the highly compressed PNG fallback and the WebP version
// Ensure these files are in client/src/assets/images/
import heroBgPng from '../../assets/images/home-hero-bg.png';
import heroBgWebp from '../../assets/images/home-hero-bg.webp';

const HeroSection = () => {
    // Function to determine which image format to use based on browser WebP support.
    // This is a simple, quick client-side check.
    const getHeroImage = () => {
        // Create a canvas element and check if it can export to 'image/webp'
        // This is a reliable way to detect WebP support in the browser.
        const supportsWebP = document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0;
        return supportsWebP ? heroBgWebp : heroBgPng;
    };

    // Get the appropriate image URL for the current browser
    const currentHeroImage = getHeroImage();

    return (
        <section
            className="hero-section"
            // Apply the selected background image here using inline style
            style={{ backgroundImage: `url(${currentHeroImage})` }}
        >
            <div className="container">
                <h1 className="hero-headline">Human Expertise. AI Power. Unrivaled IT Solutions.</h1>
                <Button as={Link} to="/quote" className="btn-get-quote">
                    Get a Free Consultation
                </Button>
            </div>
        </section>
    );
};

export default HeroSection;