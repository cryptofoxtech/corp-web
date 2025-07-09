// client/src/components/HomeSections/WhyChooseUs.js
import React from 'react';
import { Container } from 'react-bootstrap';
import './WhyChooseUs.css'; // Import the specific CSS file for this component

const WhyChooseUs = () => {
    return (
        <section className="why-choose-us-section"> {/* Class name for section-level styling */}
            <Container>
                {/* Section Title - Stays the same as last update */}
                <h2 className="section-headline">Why Choose Cryptofox Technologies?</h2>
                {/* Introductory Paragraph - Stays the same as last update */}
                <p className="section-paragraph">By choosing Cryptofox Technologies, you gain a partner committed to your success through:</p>

                {/* Benefits List - Updated Content with three merged items */}
                <ul className="benefits-list">
                    <li>
                        <strong>Human-AI Hybrid Advantage:</strong> We blend the strategic insight of seasoned IT professionals with advanced AI's analytical power, delivering faster diagnostics, smarter automation, and **truly cost-effective solutions that positively impact your bottom line.**
                    </li>
                    <li>
                        <strong>Production-Ready & Practical:</strong> Our solutions are engineered for real-world application, ensuring immediate and tangible business value with every implementation and **consistently enhancing your operational efficiency.**
                    </li>
                    <li>
                        <strong>Deep Azure & Multi-Cloud Expertise:</strong> Leverage our specialized knowledge in Microsoft Azure, IBM Cloud, and cutting-edge AI/ML technologies for secure, scalable, and optimized environments.
                    </li>
                </ul>
            </Container>
        </section>
    );
};

export default WhyChooseUs;