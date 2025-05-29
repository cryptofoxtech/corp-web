// client/src/pages/Contact/Contact.js
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      } else {
        const errorData = await response.json();
        setStatus(`Failed to send message: ${errorData.message || response.statusText}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="contact-page container">
      <h1>Contact Cryptofox Technology</h1>
      <p className="page-intro">We'd love to hear from you! Reach out with any inquiries or to discuss your project.</p>

      <div className="contact-grid">
        <div className="contact-info-section">
          <h2>Get in Touch</h2>
          <p>We are here to answer any questions you may have about our services. Fill out the form or use the contact details below.</p>
          <div className="info-item">
            <i className="fas fa-phone-alt"></i> {/* Phone icon */}
            <span>Phone:</span> <a href="tel:4374947222">437-494-7222</a>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i> {/* Envelope icon */}
            <span>General Inquiries:</span> <a href="mailto:info@cryptofoxtech.com">info@cryptofoxtech.com</a>
          </div>
          <div className="info-item">
            <i className="fas fa-headset"></i> {/* Headset icon */}
            <span>Support:</span> <a href="mailto:support@cryptofoxtech.com">support@cryptofoxtech.com</a>
          </div>
          <div className="info-item">
            <i className="fas fa-chart-line"></i> {/* Chart-line icon for Sales */}
            <span>Sales:</span> <a href="mailto:sales@cryptofoxtech.com">sales@cryptofoxtech.com</a>
          </div>
          <div className="info-item">
            <i className="fas fa-globe"></i> {/* Globe icon */}
            <span>Website:</span> <a href="https://cryptofoxtech.com" target="_blank" rel="noopener noreferrer">cryptofoxtech.com</a>
          </div>
          <div className="social-links-contact">
            {/* Font Awesome social media icons */}
            <a href="https://www.facebook.com/yourcompany" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com/yourcompany" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;