// client/src/pages/Quote/Quote.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../App.css'; // Path for Quote is just '../../App.css' as it's directly under pages/
import './Quote.css';

const Quote = () => {
  return (
    <div className="quote-page py-5">
      <Container>
        <h1 className="text-center mb-4">Get a Free Consultation & Quote</h1>
        <p className="lead text-center mb-5">
          Tell us about your project, and our experts will get back to you with a tailored solution and estimate.
        </p>

        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            {/* You'll put your quote form here later */}
            <div className="quote-form-placeholder text-center p-4 border rounded shadow-sm">
              <p>
                **QUOTE FORM COMES HERE**
              </p>
              <p>
                For now, please send us an email directly at <a href="mailto:info@cryptofox.com">info@cryptofox.com</a> or call us at <a href="tel:437-494-7222">437-494-7222</a>.
              </p>
              <p className="mt-3">
                We'll build a fully functional form here for you soon!
              </p>
            </div>
          </Col>
        </Row>

        <Row className="text-center mt-5">
          <Col>
            <h3>How Our Quote Process Works:</h3>
            <ol>
              <li>**Submit Your Request:** Fill out our brief form (coming soon) or contact us directly.</li>
              <li>**Initial Discussion:** We'll schedule a call to understand your needs in detail.</li>
              <li>**Proposal & Estimate:** Receive a comprehensive proposal and transparent quote.</li>
              <li>**Project Kick-off:** Once approved, we begin working on your solution.</li>
            </ol>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Quote;