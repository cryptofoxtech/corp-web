// client/src/components/HomeSections/HeroSection.js

import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import heroBg from '../../assets/images/home-hero-bg.png'; // Import the background image

const HeroSection = () => {
    return (
        <section
            className="hero-section"
            style={{ backgroundImage: `url(${heroBg})` }} // Apply the background image here
        >
            <div className="container">
                <h1 className="hero-headline">Human Expertise. AI Power. Unrivaled IT Solutions.</h1>
                <Button as={Link} to="/contact" className="btn-get-quote">
                    Get a Free Consultation
                </Button>
            </div>
        </section>
    );
};

export default HeroSection;