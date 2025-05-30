// client/src/pages/Services/WebDevPage/WebDevPage.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './WebDevPage.css'; // Import the specific CSS for this page

// Import a generic image asset for now, as specific ones for webdev, sysadmin, blockchain were not provided
import genericServiceImage from '../../../assets/images/services-other.png'; 

const WebDevPage = () => {
  return (
    <div className="service-detail-page-wrapper">
      <main className="service-detail-main-content">
        {/* Hero Section for Web Development */}
        <section className="service-hero-webdev text-center py-5">
          <Container>
            <h1 className="service-detail-headline">Professional Web Development Services</h1>
            <p className="lead service-detail-intro">
              Crafting responsive, high-performance, and secure web solutions that elevate your online presence and engage your audience.
            </p>
          </Container>
        </section>

        {/* Web Development Content Section */}
        <section className="service-content-section py-5">
          <Container>
            <Row className="align-items-center">
              <Col lg={5} className="text-center order-lg-2"> {/* Image on right for this section */}
                <div className="service-detail-image-container">
                  <img src={genericServiceImage} alt="Web Development Solutions" className="img-fluid rounded shadow" />
                </div>
              </Col>
              <Col lg={7} className="order-lg-1"> {/* Content on left for this section */}
                <div className="service-detail-content">
                  <h2>Bringing Your Vision to Life Online</h2>
                  <p>In today's digital-first world, your website is your most powerful asset. Cryptofox Technology specializes in developing bespoke web solutions that are not only aesthetically pleasing but also highly functional, secure, and optimized for performance across all devices. Whether you need a dynamic e-commerce platform, a robust corporate site, or a custom web application, our team delivers excellence from conception to launch and beyond.</p>
                  <h3>Key Offerings:</h3>
                  <ul>
                    <li><strong>Professional Web Development:</strong> Custom-built websites tailored to your specific brand identity and business needs.</li>
                    <li><strong>E-commerce Solutions:</strong> Robust online stores designed for seamless user experience and secure transactions.</li>
                    <li><strong>CMS Integration & Customization:</strong> Expert integration and customization of popular Content Management Systems like WordPress, Joomla, Drupal, etc.</li>
                    <li><strong>Web Hosting & Cloud-Based Options:</strong> Guidance and setup for reliable hosting solutions, including cloud-native options.</li>
                    <li><strong>Website Maintenance & Support:</strong> Ongoing support, security updates, and performance optimization to keep your site running smoothly.</li>
                    <li><strong>Responsive Design:</strong> Ensuring your site looks and functions perfectly on desktops, tablets, and mobile devices.</li>
                  </ul>
                </div>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col>
                <div className="service-detail-offerings">
                  <h3>Our Web Development Expertise Includes:</h3>
                  <ul>
                    <li>**Front-end Technologies:** React, Angular, Vue.js, HTML5, CSS3, JavaScript.</li>
                    <li>**Back-end Technologies:** Node.js, Python (Django/Flask), PHP (Laravel), Ruby on Rails.</li>
                    <li>**Databases:** MySQL, PostgreSQL, MongoDB, SQL Server.</li>
                    <li>**API Development & Integration:** Building secure and scalable APIs for seamless data exchange.</li>
                    <li>**Performance Optimization:** Techniques for faster loading times and improved user experience.</li>
                    <li>**SEO Best Practices:** Implementing on-page SEO strategies to enhance search engine visibility.</li>
                    <li>**Security Implementation:** Protecting your website from threats with robust security measures.</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Call to Action Section */}
        <section className="service-detail-cta-section py-5 text-center">
          <Container>
            <h2 className="cta-title">Ready for a Stunning Online Presence?</h2>
            <p className="cta-description">
              Let's build a powerful web solution that drives your business forward.
            </p>
            <Button as={Link} to="/contact" className="cta-button">
              Get a Web Dev Quote
            </Button>
          </Container>
        </section>
      </main>
    </div>
  );
};

export default WebDevPage;