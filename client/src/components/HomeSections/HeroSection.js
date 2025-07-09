// client/src/components/HomeSections/HeroSection.js
import React from 'react';
import { Button } from 'react-bootstrap'; // Assuming you use Bootstrap Button
import { Link } from 'react-router-dom';
import './HeroSection.css';
import heroBg from '../../assets/images/home-hero-bg.png'; // IMPORTANT: Your original image import

const HeroSection = () => {
    return (
        <section
            className="hero-section"
            style={{ backgroundImage: `url(${heroBg})` }} // Apply the background image here
        >
            <div className="container"> {/* This is your Bootstrap container */}
                <h1 className="hero-headline">Human Expertise. AI Power. Unrivaled IT Solutions.</h1> {/* Your original headline */}
                <Button as={Link} to="/quote" className="btn-get-quote"> {/* Your original button */}
                    Get a Free Consultation
                </Button>
            </div>
        </section>
    );
};

export default HeroSection;
