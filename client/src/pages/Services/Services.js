import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // Import Helmet for SEO
import './Services.css'; // Import the specific CSS for the Services page

// Import your existing image assets
// Using representative images for the two main categories
import devopsImage from '../../assets/images/services-devops.png'; // Good for Operations
import webdevImage from '../../assets/images/services-ai.png'; // Good for Development (or use services-ai.png, etc.)


const Services = () => {
    // Consolidated service categories to point to the two main service pages
    const serviceCategories = [
        {
            id: 'development',
            title: 'Development Services',
            description: 'Crafting innovative web, AI, and blockchain solutions tailored to your future-proof digital needs.',
            // Using a representative image for development services
            image: webdevImage,
            link: '/services/development'
        },
        {
            id: 'operations',
            title: 'Operations Services',
            description: 'Optimizing your infrastructure with expert DevOps, Cloud, and System Administration for seamless operations.',
            // Using a representative image for operations services
            image: devopsImage,
            link: '/services/operations'
        }
    ];

    return (
        // Apply common page-wrapper class
        <div className="page-wrapper services-page-wrapper">
            <Helmet>
                <title>Our Services - Cryptofox Technology Ltd.</title>
                <meta name="description" content="Explore comprehensive IT solutions from Cryptofox Technology: Development Services (Web, AI, Blockchain) and Operations Services (DevOps, Cloud, System Administration)." />
            </Helmet>

            {/* Apply common main-content class */}
            <main className="main-content services-main-content">
                <section className="services-grid-section">
                    <Container>
                        {/* Removed Bootstrap 'mb-5' as margin is now controlled by Services.css variables */}
                        <h2 className="section-title text-center">Explore Our Expertise</h2>
                        <Row className="justify-content-center">
                            {serviceCategories.map(service => (
                                <Col md={6} lg={4} xl={4} className="mb-4 d-flex" key={service.id}>
                                    {/* Removed Bootstrap 'shadow-sm' as shadow is now controlled by Services.css */}
                                    <Card className="service-card h-100">
                                        <Card.Img variant="top" src={service.image} alt={service.title} className="service-card-image" />
                                        <Card.Body className="d-flex flex-column align-items-center text-center">
                                            <Card.Title className="service-card-title">{service.title}</Card.Title>
                                            <Card.Text className="service-card-description">
                                                {service.description}
                                            </Card.Text>
                                            <Button
                                                as={Link}
                                                to={service.link}
                                                // Removed Bootstrap 'mt-auto' as margin is now controlled by Services.css
                                                className="btn-learn-more"
                                            >
                                                Learn More
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>

                {/* Optional: Call to Action Section */}
                {/* Removed Bootstrap 'py-5' as padding is now controlled by Services.css variables */}
                <section className="services-cta-section text-center">
                    <Container>
                        <h2 className="cta-title">Ready to Transform Your Business?</h2>
                        <p className="cta-description">
                            Contact us today to discuss how Cryptofox Technology can help you achieve your goals.
                        </p>
                        <Button
                            as={Link}
                            to="/quote"
                            // Corrected class name from 'cta-button btn-contact' to 'btn-contact' for consistency with CSS
                            className="btn-contact"
                        >
                            Get a Free Consultation
                        </Button>
                    </Container>
                </section>
            </main>
        </div>
    );
};

export default Services;