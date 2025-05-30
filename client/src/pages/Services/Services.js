// client/src/pages/Services/Services.js

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css'; // Import the specific CSS for the Services page

// Import your existing image assets
import devopsImage from '../../assets/images/services-devops.png';
import cloudImage from '../../assets/images/services-cloud.png';
import aiImage from '../../assets/images/services-ai.png'; // <-- CORRECTED THIS LINE
import otherServicesImage from '../../assets/images/services-other.png'; // Using this for webdev, sysadmin, blockchain for now

const Services = () => {
    const serviceCategories = [
        {
            id: 'devops',
            title: 'DevOps Strategy',
            description: 'Streamline your development and operations with expert consulting, automation, and CI/CD solutions.',
            icon: 'fas fa-cogs', // Font Awesome icon class
            image: devopsImage,
            link: '/services/devops'
        },
        {
            id: 'cloud',
            title: 'Cloud Computing',
            description: 'Leverage cloud power with migration, infrastructure management, and optimization services (IBM Cloud, Azure).',
            icon: 'fas fa-cloud', // Font Awesome icon class
            image: cloudImage,
            link: '/services/cloud'
        },
        {
            id: 'ai',
            title: 'AI Services',
            description: 'Unlock possibilities with AI/ML integration, custom model development, and data-driven insights.',
            icon: 'fas fa-robot', // Font Awesome icon class
            image: aiImage,
            link: '/services/ai'
        },
        {
            id: 'webdev',
            title: 'Web Development',
            description: 'Crafting responsive, high-performance websites and e-commerce solutions tailored to your brand.',
            icon: 'fas fa-code', // Font Awesome icon class
            image: otherServicesImage, // Using generic 'other' image
            link: '/services/webdev'
        },
        {
            id: 'sysadmin',
            title: 'System Administration',
            description: 'Expert infrastructure management, network security, and robust system monitoring for optimal performance.',
            icon: 'fas fa-server', // Font Awesome icon class
            image: otherServicesImage, // Using generic 'other' image
            link: '/services/sysadmin'
        },
        {
            id: 'blockchain',
            title: 'Blockchain Development',
            description: 'Building decentralized applications (DApps), smart contracts, and cryptocurrency strategies for innovation.',
            icon: 'fas fa-link', // Font Awesome icon class for blockchain
            image: otherServicesImage, // Using generic 'other' image
            link: '/services/blockchain'
        }
    ];

    return (
        <div className="services-page-wrapper">
            <main className="services-main-content">
                {/* Hero Section */}
                <section className="services-hero text-center py-5">
                    <Container>
                        <h1 className="services-headline">Our Comprehensive IT Solutions</h1>
                        <p className="lead services-intro">
                            At Cryptofox Technology, we empower your business with cutting-edge expertise across the digital landscape, from infrastructure to intelligence.
                        </p>
                    </Container>
                </section>

                {/* Services Grid Section */}
                <section className="services-grid-section py-5">
                    <Container>
                        <h2 className="section-title text-center mb-5">Explore Our Expertise</h2>
                        <Row className="justify-content-center">
                            {serviceCategories.map(service => (
                                <Col md={6} lg={4} xl={4} className="mb-4 d-flex" key={service.id}>
                                    <Card className="service-card h-100 shadow-sm">
                                        {/* You can choose to use image OR icon here, not necessarily both */}
                                        {/* Using image for visual diversity based on provided assets */}
                                        <Card.Img variant="top" src={service.image} alt={service.title} className="service-card-image" />
                                        <Card.Body className="d-flex flex-column align-items-center text-center">
                                            {/* <i className={`${service.icon} service-icon mb-3`}></i> Uncomment if you prefer icons */}
                                            <Card.Title className="service-card-title">{service.title}</Card.Title>
                                            <Card.Text className="service-card-description">
                                                {service.description}
                                            </Card.Text>
                                            <Button
                                                as={Link}
                                                to={service.link}
                                                className="mt-auto btn-learn-more" // Use our custom class
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
                <section className="services-cta-section py-5 text-center">
                    <Container>
                        <h2 className="cta-title">Ready to Transform Your Business?</h2>
                        <p className="cta-description">
                            Contact us today to discuss how Cryptofox Technology can help you achieve your goals.
                        </p>
                        <Button
                            as={Link}
                            to="/contact"
                            className="cta-button btn-contact" // Use our custom class
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