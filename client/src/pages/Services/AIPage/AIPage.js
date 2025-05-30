// client/src/pages/Services/AIPage/AIPage.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AIPage.css'; // Import the specific CSS for this page

// Import the specific image asset
import aiImage from '../../../assets/images/services-ai.png';

const AIPage = () => {
  return (
    <div className="service-detail-page-wrapper">
      <main className="service-detail-main-content">
        {/* Hero Section for AI Services */}
        <section className="service-hero-ai text-center py-5">
          <Container>
            <h1 className="service-detail-headline">AI Services: Intelligent Solutions for Business Challenges</h1>
            <p className="lead service-detail-intro">
              Unlock the power of Artificial Intelligence to automate processes, gain deeper insights, and create innovative customer experiences.
            </p>
          </Container>
        </section>

        {/* AI Content Section */}
        <section className="service-content-section py-5">
          <Container>
            <Row className="align-items-center">
              <Col lg={7}>
                <div className="service-detail-content">
                  <h2>Transform Your Business With AI</h2>
                  <p>Unlock the power of Artificial Intelligence to automate processes, gain deeper insights, and create truly innovative customer experiences. Cryptofox Technology helps businesses integrate AI into their operations, solving complex challenges with bespoke solutions including automated services, intelligent chatbots, AI agents, machine learning models, and advanced analytics. From enhancing customer support to optimizing internal workflows, our AI services are designed to deliver measurable business impact.</p>
                  <h3>Key Benefits:</h3>
                  <ul>
                    <li><strong>Process Automation:</strong> Automate repetitive and rule-based tasks, freeing up human resources for strategic initiatives.</li>
                    <li><strong>Enhanced Customer Engagement:</strong> Implement intelligent chatbots and virtual assistants for 24/7 support and personalized interactions.</li>
                    <li><strong>Data-Driven Decisions:</strong> Leverage machine learning for predictive analytics, anomaly detection, and business forecasting.</li>
                    <li><strong>Operational Efficiency:</strong> Optimize supply chains, resource allocation, and quality control with AI insights.</li>
                    <li><strong>Innovation & Competitive Advantage:</strong> Develop new AI-powered products and services to lead your market.</li>
                  </ul>
                </div>
              </Col>
              <Col lg={5} className="text-center">
                <div className="service-detail-image-container">
                  <img src={aiImage} alt="Intelligent AI Solutions" className="img-fluid rounded shadow" />
                </div>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col>
                <div className="service-detail-offerings">
                  <h3>Our AI Service Offerings:</h3>
                  <ul>
                    <li><strong>AI Strategy & Consulting:</strong> Identify AI opportunities and build a roadmap for implementation.</li>
                    <li><strong>Chatbot Development:</strong> Design and deploy intelligent conversational AI for customer service, sales, and internal support.</li>
                    <li><strong>AI Agent Development:</strong> Create autonomous AI agents for specific tasks, from data processing to content generation.</li>
                    <li><strong>Machine Learning Model Development:</strong> Build custom ML models for predictive analytics, image recognition, natural language processing (NLP), etc.</li>
                    <li><strong>Natural Language Processing (NLP) Solutions:</strong> Implement sentiment analysis, text summarization, and language understanding.</li>
                    <li><strong>Computer Vision:</strong> Develop solutions for image recognition, object detection, and video analysis.</li>
                    <li><strong>AI Integration:</strong> Seamlessly integrate AI solutions with your existing systems and workflows.</li>
                    <li><strong>Data Science & Analytics:</strong> Prepare, analyze, and interpret large datasets to train and improve AI models.</li>
                  </ul>
                  <p className="note">We set up the structure for calling external AI services like Deepseek, ChatGPT, and other specialized APIs securely, ensuring your applications can leverage the latest advancements in AI.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Call to Action Section */}
        <section className="service-detail-cta-section py-5 text-center">
          <Container>
            <h2 className="cta-title">Ready to Integrate AI into Your Business?</h2>
            <p className="cta-description">
              Contact us to explore how intelligent solutions can revolutionize your operations.
            </p>
            <Button as={Link} to="/contact" className="cta-button">
              Get an AI Consultation
            </Button>
          </Container>
        </section>
      </main>
    </div>
  );
};

export default AIPage;