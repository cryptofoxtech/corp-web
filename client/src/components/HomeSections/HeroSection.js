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
    return (
        <section className="hero-section">
            {/* The background image is now an <img> element for LCP optimization */}
            <picture>
                {/* Source for WebP browsers */}
                <source srcSet={heroBgWebp} type="image/webp" />
                {/* Fallback for browsers that don't support WebP or if WebP fails */}
                <img
                    src={heroBgPng} // Fallback PNG
                    alt="Abstract background representing AI and technology, for Cryptofox IT Solutions" // Meaningful alt text for accessibility
                    className="hero-background-image" // Class for CSS styling
                    loading="eager" // Important: tells browser to load immediately
                    fetchPriority="high" // Crucial: tells browser this image is very important
                />
            </picture>

            <div className="container hero-content"> {/* Added hero-content class for styling */}
                <h1 className="hero-headline">Human Expertise. AI Power. Unrivaled IT Solutions.</h1>
                <Button as={Link} to="/quote" className="btn-get-quote">
                    Get a Free Consultation
                </Button>
            </div>
        </section>
    );
};

export default HeroSection;