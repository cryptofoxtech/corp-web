// client/src/pages/About/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page container">
      <h1>Cryptofox AI Consulting: Our Story & Expertise</h1>
      <p className="page-intro">Empowering businesses through practical AI implementation and unparalleled IT expertise.</p>

      <section className="about-section">
        <div className="about-content">
          <h2>Our Story</h2>
          <p>Since its inception in <strong>2017</strong>, Cryptofox Technology Ltd. has been a trusted, albeit quiet, force in corporate IT. Operating initially as a specialized consultancy, we immersed ourselves in the complex environments of large corporations—including <strong>prominent banks and leading retailers</strong>—providing critical system administration, cloud, and automation expertise.</p>
          <p>Having successfully navigated the IT challenges of these enterprise giants, <strong>Cryptofox AI Consulting</strong> marks a strategic evolution. Our mission now is to bring that same caliber of production-proven experience and technical know-how to <strong>smaller and mid-sized businesses</strong>, enabling them to confidently leverage and integrate new AI technologies for competitive advantage.</p>
        </div>
        <div className="about-image">
          <img src="https://via.placeholder.com/600x400?text=Cryptofox+Team+Working" alt="Cryptofox Team" />
        </div>
      </section>

      <section className="about-section even-section">
        <div className="about-image">
          <img src="https://via.placeholder.com/600x400?text=Deep+Technical+Expertise" alt="Deep Technical Expertise" />
        </div>
        <div className="about-content">
          <h2>Our Core Differentiator: Experience You Can Trust</h2>
          <p>What truly sets Cryptofox AI Consulting apart is the practical wisdom gained from over <strong>two and a half decades</strong> of tackling the most challenging IT projects within corporate settings. We've led critical initiatives, automated complex processes with advanced scripting (Python, Bash, PowerShell), and provided expert troubleshooting for mission-critical applications across diverse platforms.</p>
          <p>This extensive experience, combined with direct hands-on work in setting up and managing AI services on <strong>Microsoft Azure</strong>, means we understand the full journey of technology adoption. We don't just consult on AI; we prepare your entire IT infrastructure, ensure seamless integration, and build solutions that truly deliver on their promise.</p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content">
          <h2>Our Vision & Mission</h2>
          <h3>Our Mission:</h3>
          <p>To empower businesses by seamlessly integrating AI solutions, optimizing operations, and fostering innovation, enabling them to gain a significant competitive advantage in a rapidly evolving technological landscape.</p>
          <h3>Our Vision:</h3>
          <p>To be the trusted partner for businesses strategically leveraging AI, transforming challenges into growth opportunities, and leading in practical AI implementation.</p>
        </div>
        <div className="about-image">
          <img src="https://via.placeholder.com/600x400?text=Vision+and+Mission" alt="Our Vision and Mission" />
        </div>
      </section>

      <section className="values-section">
        <h2>Our Approach & Values</h2>
        <p>We are driven by a singular purpose: to deliver tangible business value through practical AI implementation. Cryptofox AI Consulting operates with transparency, integrity, and a relentless focus on client success. Our methodology combines strategic insight with hands-on technical expertise, ensuring that every AI solution is not only innovative but also secure, efficient, and perfectly aligned with your business objectives. We prioritize continuous learning and ethical practices to ensure our solutions are always at the forefront of the industry.</p>
      </section>

      {/* Updated Call to Action */}
      <section className="call-to-action-section">
        <h2>Partner with an AI Expert You Can Trust.</h2>
        <p>We invite you to connect with us to discuss your unique business challenges and how practical AI solutions can drive your growth.</p>
        <div className="cta-buttons">
          <a href="/contact" className="btn btn-primary">Contact Us Today</a>
          {/* Changed href to point back to the /about page itself */}
          <a href="/about" className="btn btn-secondary">Learn More About Our Approach</a>
        </div>
      </section>

    </div>
  );
};

export default About;