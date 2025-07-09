// client/src/pages/Legal/LegalPage.js

import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

// Import common page styles first, then this page's specific styles
import '../../../styles/pages-common.css';
import './LegalPage.css'; // IMPORTANT: Import the CSS file for this component

function LegalPage() {
    return (
        <>
            <Helmet>
                <title>Privacy Policy & Terms of Service - Cryptofox Technology Ltd.</title>
                <meta name="description" content="Read Cryptofox Technology Ltd.'s official Privacy Policy detailing data collection, use, security, and your rights, along with our Terms of Service governing website and service usage." />
            </Helmet>

            <div className="page-wrapper">
                <main className="main-content">
                    {/* Added d-flex and justify-content-center to the section to try and force centering */}
                    <section className="legal-page-section py-5 d-flex justify-content-center">
                        <Container className="legal-content-container">

                            {/* Legal Text Box for Privacy Policy */}
                            <div className="legal-content-box mb-4"> {/* Added mb-4 for spacing */}
                                {/* Privacy Policy Section */}
                                <h1 className="legal-page-title mb-4">Privacy Policy</h1>
                                <p>At Cryptofox Technology Ltd., we are committed to protecting your privacy. This policy outlines how we collect, use, and protect your personal information.</p>

                                <h2>Information Collection</h2>
                                <p>We collect information you provide directly to us, such as your name, email address, phone number, and company name when you inquire about our services or register for events. We also collect Usage Data, which includes technical details like IP addresses, browser types, and operating systems, related to how you interact with our services.</p>

                                <h2>Use of Information</h2>
                                <p>The collected data is used to:</p>
                                <ul>
                                    <li>Provide and maintain our services.</li>
                                    <li>Notify you about changes to our services.</li>
                                    <li>Allow you to participate in interactive features when you choose to do so.</li>
                                    <li>Provide customer support.</li>
                                    <li>Monitor the usage of our services.</li>
                                    <li>Detect, prevent, and address technical issues.</li>
                                </ul>

                                <h2>Data Security</h2>
                                <p>The security of your data is paramount to us. We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. Your trust is our priority, and we employ robust security measures to safeguard your data.</p>

                                <h2>Data Retention</h2>
                                <p>We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations.</p>

                                <h2>Your Data Protection Rights</h2>
                                <p>Depending on your location, you may have the following data protection rights:</p>
                                <ul>
                                    <li>The right to access, update, or delete the information we have on you.</li>
                                    <li>The right of rectification.</li>
                                    <li>The right to object.</li>
                                    <li>The right of restriction.</li>
                                    <li>The right to data portability.</li>
                                    <li>The right to withdraw consent.</li>
                                </ul>
                            </div>

                            <hr className="legal-section-separator" />

                            {/* Legal Text Box for Terms of Service */}
                            <div className="legal-content-box mt-4"> {/* Added mt-4 for spacing */}
                                {/* Terms of Service Section */}
                                <h1 className="legal-page-title mb-4">Terms of Service</h1>
                                <p>These Terms of Service ("Terms") govern your access to and use of Cryptofox Technology Ltd.'s website and the services we provide. By accessing or using the Service, you agree to be bound by these Terms.</p>

                                <h2>Acceptance of Terms</h2>
                                <p>By accessing or using our Service, you agree to be bound by these Terms and our Privacy Policy. If you disagree with any part of the terms, then you may not access the Service.</p>

                                <h2>Services Provided</h2>
                                <p>Cryptofox Technology Ltd. specializes in and provides a range of advanced IT consulting, web development, cloud infrastructure, DevOps, enterprise application, and AI strategy services, including cutting-edge blockchain solutions:</p>
                                <ul>
                                    <li>Web Development & Modernization</li>
                                    <li>Cloud Infrastructure & DevOps</li>
                                    <li>Enterprise Applications & Sys Admin</li>
                                    <li>AI Strategy & Implementation</li>
                                    <li>IT Consulting & Dev Env Setup</li>
                                </ul>

                                <h2>User Conduct</h2>
                                <p>You agree to use the Service only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the Service. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within the Service.</p>

                                <h2>Intellectual Property</h2>
                                <p>The Service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of Cryptofox Technology Ltd. and its licensors.</p>

                                <h2>Limitation of Liability</h2>
                                <p>In no event shall Cryptofox Technology Ltd. be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</p>

                                <h2>Governing Law</h2>
                                <p>These Terms shall be governed and construed in accordance with the laws of Ontario, Canada, without regard to its conflict of law provisions.</p>
                            </div>

                        </Container>
                    </section>
                </main>
            </div>
        </>
    );
}

export default LegalPage;