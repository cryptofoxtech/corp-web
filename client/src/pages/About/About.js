// client/src/pages/About/AboutUs.js
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

function About() {
  // Content directly embedded in state for each section, pulled from the Marketing Plan
  const [ourStoryContent] = useState(
    <>
      <h2>Our Story: Building Digital Futures</h2>
      <p>Cryptofox Technology Ltd. was founded on the principle that cutting-edge technology should be accessible and transformative for every business, regardless of size. Our journey began with a vision for streamlined IT solutions, and we quickly grew into a team of dedicated experts passionate about empowering organizations through innovation.</p>
      <p>From our early days focusing on robust cloud infrastructures to our current specialization in AI-augmented development and strategic consulting, our journey has been defined by a relentless pursuit of excellence and a commitment to our clients' success. We continuously evolve, embracing new technologies and methodologies to stay at the forefront of the digital landscape.</p>
    </>
  );

  const [missionVisionContent] = useState(
    <>
      <h2>Our Mission & Vision: Empowering Innovation</h2>
      <h3>Our Mission</h3>
      <p>To empower businesses with transformative IT solutions and strategic guidance, integrating advanced technologies like AI and secure cloud infrastructure to drive efficiency, innovation, and sustainable growth.</p>
      <h3>Our Vision</h3>
      <p>To be the trusted partner for digital transformation, recognized globally for our human-AI hybrid approach, delivering unparalleled value and fostering a future where technology seamlessly augments human potential.</p>
    </>
  );

  const [coreDifferentiatorContent] = useState(
    <>
      <h2>Our Core Differentiator: Human-AI Hybrid Advantage</h2>
      <p>What sets Cryptofox Technology Ltd. apart is our unique **Human-AI Hybrid Model**. We don't just provide IT solutions; we augment them.</p>
      <ul>
        <li>**Strategic Insight:** Our seasoned IT professionals bring deep industry knowledge and strategic thinking.</li>
        <li>**AI-Powered Efficiency:** Advanced AI analytics and automation accelerate problem-solving, optimize performance, and enhance security.</li>
        <li>**Cost-Effectiveness:** This blend ensures solutions that are not only innovative but also practical, scalable, and truly cost-effective.</li>
      </ul>
      <p>This means faster diagnostics, smarter automation, and more innovative solutions, all delivered with precision and a human touch.</p>
    </>
  );

  const [meetTheFounderContent] = useState(
    <>
      <h2>Meet the Founder: Carlos DaSilva</h2>
      <p>Carlos DaSilva, the visionary behind Cryptofox Technology Ltd., established the company with a profound understanding of the evolving technological landscape and a commitment to delivering impactful solutions.</p>
      <p>With extensive experience in DevOps, cloud infrastructure (Azure/IBM Cloud), enterprise applications, and a keen eye on emerging technologies like AI and Blockchain, Carlos envisioned a firm that not only adapts to change but also drives it. His leadership fosters a culture of innovation, continuous learning, and client-centricity.</p>
      <p>Under his guidance, Cryptofox Technology Ltd. is dedicated to building robust, secure, and future-proof digital foundations for businesses, ensuring they thrive in an increasingly connected world.</p>
    </>
  );

  return (
    <section className="about-page-section">
      <Container className="my-5">
        {/* Main Page Title and Intro Paragraph - pulled from the "Cryptofox Promise" */}
        <h1 className="page-main-title">About Cryptofox Technology Ltd.</h1>
        <p className="page-intro">
          As a non-IT business owner, you've got enough on your plate without complex tech worries. At Cryptofox Technologies, we simplify your entire IT experience. Imagine having a seasoned IT expert who acts as your dedicated tech partner. This expert is supercharged with powerful AI tools, allowing us to quickly fix any issue, streamline your operations, and effortlessly modernize your business for today's world. This unique approach means less stress, fewer IT headaches, and more money in your pocket. In today's fast-moving world, choosing Cryptofox is choosing a clear, affordable path to a more efficient and successful business.
        </p>

        {/* Our Story Section - Text then Image */}
        <Row className="align-items-center my-5 py-3 about-content-row odd-section">
          <Col lg={7} md={12} className="text-col">
            {ourStoryContent}
          </Col>
          <Col lg={5} md={12} className="image-col mt-md-4 mt-lg-0">
            <img src="/assets/images/about-story.png" alt="Our Story" className="img-fluid rounded shadow" />
          </Col>
        </Row>

        {/* Our Mission & Vision Section - Image then Text (flex-row-reverse) */}
        <Row className="align-items-center my-5 py-3 about-content-row even-section flex-lg-row-reverse">
          <Col lg={7} md={12} className="text-col">
            {missionVisionContent}
          </Col>
          <Col lg={5} md={12} className="image-col mt-md-4 mt-lg-0">
            <img src="/assets/images/about-vision.png" alt="Our Mission and Vision" className="img-fluid rounded shadow" />
          </Col>
        </Row>

        {/* Our Core Differentiator Section - Text then Image */}
        <Row className="align-items-center my-5 py-3 about-content-row odd-section">
          <Col lg={7} md={12} className="text-col">
            {coreDifferentiatorContent}
          </Col>
          <Col lg={5} md={12} className="image-col mt-md-4 mt-lg-0">
            <img src="/assets/images/about-differentiator.png" alt="Core Differentiator" className="img-fluid rounded shadow" />
          </Col>
        </Row>

        {/* Meet the Founder Section - Image then Text (flex-row-reverse) */}
        <Row className="align-items-center my-5 py-3 about-content-row even-section flex-lg-row-reverse">
          <Col lg={7} md={12} className="text-col">
            {meetTheFounderContent}
          </Col>
          <Col lg={5} md={12} className="image-col mt-md-4 mt-lg-0">
            <img src="/assets/images/about-team.png" alt="Meet the Founder" className="img-fluid rounded shadow" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;