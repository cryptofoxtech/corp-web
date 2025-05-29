// client/src/pages/Services/AIPage/AIPage.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../../App.css'; // <--- CHANGED PATH
import './AIPage.css';

const AIPage = () => {
  // ... (rest of your component code, no changes needed here) ...
  return (
    <div className="ai-page py-5">
      <Container>
        <h1 className="text-center mb-4">AI & Machine Learning Services</h1>
        <p className="lead text-center mb-5">
          Harness the power of Artificial Intelligence to automate processes, gain insights, and drive innovation.
        </p>

        <Row className="mb-5 align-items-center">
          <Col md={6}>
            <img src="https://via.placeholder.com/600x400?text=AI+Solutions" alt="AI Solutions" className="img-fluid rounded shadow-sm" />
          </Col>
          <Col md={6}>
            <h2>Intelligent Solutions for a Smarter Future</h2>
            <p>
              Our AI and Machine Learning services help businesses integrate intelligent capabilities into their operations, from predictive analytics and natural language processing to computer vision and automation. We provide expertise in building, deploying, and managing AI models.
            </p>
            <ul>
              <li>Machine Learning Model Development</li>
              <li>Natural Language Processing (NLP)</li>
              <li>Computer Vision</li>
              <li>Predictive Analytics</li>
              <li>AI-Powered Automation</li>
              <li>Chatbot & Virtual Assistant Development</li>
            </ul>
          </Col>
        </Row>

        <Row className="text-center mt-5">
          <Col>
            <h3>Ready to Innovate with AI?</h3>
            <p>
              Discover how AI can provide a competitive edge and unlock new opportunities for your business.
            </p>
            <a href="/contact" className="btn btn-primary btn-lg">Explore AI Possibilities</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AIPage;