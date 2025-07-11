// client/src/pages/Services/Services.js

import React from 'react';
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Services.css'; // Import the specific CSS for the Services page

// Import your existing image assets
import heroServiceOverviewImage from '../../assets/images/services-devops.png'; // General image for hero


const Services = () => {
    // Granular services data for the accordion
    // Organized according to the document you provided
    const granularServicesData = [
        {
            eventKey: '0',
            title: 'IT Strategy & Planning',
            points: [
                'Business Process & Pain Point Analysis: Identify inefficiencies and areas for technological improvement.',
                'Data Infrastructure & Quality Assessment: Evaluate existing data systems for modern IT initiatives.',
                'Strategic IT Opportunity Identification: Pinpoint technology use cases aligned with business goals.',
                'Technical & Business Feasibility Studies: Analyze initiatives, including cost-benefit and ROI.',
                'Phased IT Modernization Roadmapping: Develop clear roadmaps with strategic AI components.'
            ]
        },
        {
            eventKey: '1',
            title: 'Custom IT Solution Development & Integration',
            points: [
                'IT Technology Stack & Tool Selection: Recommend appropriate models and frameworks (React/Node.js/Django).',
                'Scalable Cloud IT Architecture Design: Design robust architectures on Microsoft Azure (PaaS/SaaS focus).',
                'IT System Integration Planning: Develop plans for seamless integration with existing infrastructure.',
                'Secure Data Pipeline Design & Architecture: Architect efficient and secure data ingestion and storage.',
                'Specialized System & Application Deployment: Configure and deploy custom apps on Azure.',
                'Custom Application Development & Scripting: Develop applications using Python, Bash, PowerShell.',
                'Robust IT System Integration: Implement integrations for smooth data flow and operational continuity.',
                'Application Containerization & Orchestration: Utilize Docker and Kubernetes for portability and scalability.',
                'Cloud Infrastructure Provisioning & Configuration: Provision IaaS/PaaS on Azure/IBM Cloud.',
                '24/7 Production Environment Deployment: Ensure stable and reliable deployment for continuous operation.'
            ]
        },
        {
            eventKey: '2',
            title: 'IT Operations, Optimization & Security',
            points: [
                'System Performance Tuning: Optimize IT systems, including AI components, for efficiency.',
                'Machine Learning Model Training & Optimization: Execute training and fine-tuning using client data.',
                'Proactive IT System Monitoring & Alerting: Implement robust monitoring (Azure Monitor, New Relic, Zabbix, ELK).',
                'Iterative System & Model Optimization: Conduct regular adjustments and updates based on feedback.',
                'CI/CD & DevOps Pipeline Setup: Design and implement pipelines (Jenkins, Ansible, GitHub, Azure DevOps).',
                'Version Control & Collaborative Development Setup: Establish robust version control for code.',
                'IT System Security & Compliance Implementation: Implement security best practices (SSL/TLS, PGP, SSH, Kerberos, Azure Key Vault).',
                'Middleware & Web Server Management: Expertise in WebSphere ND 9, IBM Sterling, Mule, Tomcat, Apache, Nginx.',
                'Database Management & Optimization: Strong knowledge of PostgreSQL, MongoDB, MySQL, SQL Server, Redis, Cosmos DB.',
                'Linux & Windows Server Administration: Expertise in Linux (Ubuntu, Red Hat, Alpine) and Windows Server management.'
            ]
        },
        {
            eventKey: '3',
            title: 'IT Training & Knowledge Transfer',
            points: [
                'Customized IT Training Workshops: Tailored sessions for client staff and business users.',
                'Operational Playbook Development: Develop clear playbooks for production environment management.',
                'Continuous Learning & IT Skill Development Guidance: Advise on strategies for staying updated with IT advancements.'
            ]
        },
        {
            eventKey: '4',
            title: 'Specialized IT Consulting & Development Environment Setup',
            points: [
                'IT Consulting & Advisory Services: Expert guidance on IT challenges and strategic decisions.',
                'Development Environment Setup & Optimization: Assist with setting up local dev environments (VS Code, WSL 2, Azure CLI).',
                'Cloud Cost Optimization: Implement strategies for cost management (tagging, automated shutdowns).',
                'Cloud Security Implementation: Set up robust security (RBAC, Azure Policy, NSGs, Security Center).',
                'Free-Tier Cloud Guidance & Setup: Guidance on utilizing free-tier services (Azure Static Web Apps, Cosmos DB Free).'
            ]
        }
    ];

    const technicalStackData = {
        title: 'Comprehensive Technical Stack & Supported Technologies',
        points: [
            { category: 'Languages', items: ['JavaScript (JS) / TypeScript (TS)', 'Python (Advanced)', 'Bash', 'PowerShell', 'SQL (various dialects)', 'Go', 'Rust', 'C#', 'Java', 'Solidity (for Blockchain)'] },
            { category: 'Web Development Frameworks & Libraries', items: ['React.js', 'Node.js (Express)', 'Django', 'HTML5', 'Bootstrap 5', 'Tailwind CSS'] },
            { category: 'Cloud Platforms', items: ['Microsoft Azure (IaaS, PaaS, specific services)', 'IBM Cloud (Cloud Foundry, Kubernetes)', 'Terraform'] },
            { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Microsoft SQL Server', 'Redis', 'Cosmos DB'] },
            { category: 'CI/CD & DevOps Tools', items: ['Jenkins CI/CD', 'Ansible', 'Kubernetes', 'Docker', 'GitHub', 'Azure DevOps Git', 'Rundeck', 'Bitbucket'] },
            { category: 'Middleware & Web Servers', items: ['IBM WebSphere ND 9', 'IBM Sterling', 'Mule Application Server / AnyPoint API', 'Tomcat', 'Apache', 'Nginx'] },
            { category: 'Monitoring & Logging', items: ['Azure Monitor', 'New Relic', 'Zabbix', 'Graylog', 'ELK Stack', 'Sumo Logic'] },
            { category: 'Security Protocols & Tools', items: ['SSL/TLS', 'PGP encryption', 'SSH keys management', 'Kerberos', 'Azure Key Vault'] },
            { category: 'AI/Machine Learning', items: ['TensorFlow', 'PyTorch', 'scikit-learn', 'Hugging Face', 'Azure ML / Cognitive Services / Databricks / Synapse', 'IBM Watson'] },
            { category: 'Blockchain', items: ['Platforms: Ethereum (EVM), Solana', 'Languages: Solidity, Rust', 'Tools: Hardhat, Truffle, Foundry'] },
            { category: 'Operating Systems', items: ['Linux (Ubuntu, Red Hat, Alpine)', 'Windows Server (2016, 2019, 2022)', 'Windows 11 (Client)'] },
            { category: 'Development Tools & Methodologies', items: ['VS Code (IDE)', 'WSL 2', 'Agile Methodologies (Jira, Confluence)', 'MS Teams'] }
        ]
    };

    return (
        <div className="page-wrapper services-page-wrapper">
            <Helmet>
                <title>Unlock Your Potential: Cutting-Edge IT Solutions & Consulting - Cryptofox Technology</title>
                <meta name="description" content="Cryptofox delivers innovative, AI-augmented IT solutions for businesses. Solve challenges in development, operations, strategy, and more. Get a free consultation." />
            </Helmet>

            <main className="main-content services-main-content">

                {/* Hero Section - Problem-Solution Focused & Cutting-Edge */}
                <section className="service-hero-intro py-5 bg-lighter-gray-intro">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg={7}>
                                <h1 className="section-title">Unlock Your Business Potential with Cutting-Edge IT Solutions</h1>
                                <p className="lead section-intro">
                                    At Cryptofox Technology, we provide <strong>innovative, AI-augmented IT solutions</strong> that directly address your business's most pressing challenges.
                                    From modernizing legacy systems and leveraging advanced AI to optimizing cloud operations and ensuring robust security,
                                    we simplify complexity and deliver measurable outcomes. Let's transform your IT into a strategic advantage.
                                </p>
                                {/* Button Centering Fix for Hero */}
                                <div className="text-center">
                                    <Button as={Link} to="/contact" className="cta-button primary-theme-bg mt-3">
                                        Get Your Free Consultation
                                    </Button>
                                </div>
                                {/* Links Layout Fix for Hero */}
                                <Row className="service-hero-links mt-4 gy-2 gx-3 justify-content-center justify-content-lg-start"> {/* gy-2 for vertical gutter, gx-3 for horizontal gutter */}
                                    <Col xs="auto" className="d-flex justify-content-center">
                                        <Link to="/services/development" className="text-link">Explore Development Solutions</Link>
                                    </Col>
                                    <Col xs="auto" className="d-flex justify-content-center">
                                        <Link to="/services/operations" className="text-link">Optimize Your Operations</Link>
                                    </Col>
                                    <Col xs="auto" className="d-flex justify-content-center">
                                        <Link to="/case-studies" className="text-link">View Our Case Studies</Link>
                                    </Col>
                                    <Col xs="auto" className="d-flex justify-content-center">
                                        <Link to="/about" className="text-link">Learn About Us</Link>
                                    </Col>
                                    <Col xs="auto" className="d-flex justify-content-center">
                                        <Link to="/partners" className="text-link">Our Technology Partners</Link>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={5} className="text-center mt-4 mt-lg-0">
                                <img
                                    src={heroServiceOverviewImage}
                                    alt="Cutting-edge IT solutions for business"
                                    className="img-fluid rounded shadow-lg service-hero-image"
                                />
                            </Col>
                        </Row>
                    </Container>
                </section>

                <hr className="section-separator" />

                {/* New Section: Our Comprehensive Approach (Brief Intro before Accordion) */}
                <section className="service-content-section bg-white">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={8} className="text-center">
                                <h2 className="section-title mb-4">Our Comprehensive Approach</h2>
                                <p className="lead">
                                    Cryptofox Technology combines strategic insight, innovative development, and robust operations
                                    to deliver end-to-end IT solutions. Explore our detailed capabilities below to see how we empower
                                    your business with the latest in technology and AI.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <hr className="section-separator" />

                {/* Section: Deep Dive: Granular Capabilities (Accordion for Minimalism) - Re-added */}
                <section className="service-content-section bg-light-gray-custom">
                    <Container>
                        <h2 className="section-title text-center mb-5">Deep Dive: Our Comprehensive IT Capabilities</h2>
                        <p className="text-center lead-text mb-5">
                            Cryptofox Technologies offers a granular suite of IT services, leveraging deep expertise
                            and AI augmentation to address every facet of your technological needs.
                        </p>
                        <Accordion defaultActiveKey="0" className="custom-accordion">
                            {granularServicesData.map((category, index) => (
                                <Accordion.Item eventKey={category.eventKey} key={index} className="mb-3">
                                    <Accordion.Header>{category.title}</Accordion.Header>
                                    <Accordion.Body>
                                        <ul className="list-unstyled">
                                            {category.points.map((point, pIndex) => (
                                                <li key={pIndex} className="mb-2">{point}</li>
                                            ))}
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                            {/* Technical Stack is displayed separately for clarity */}
                            <Accordion.Item eventKey="tech-stack" className="mb-3">
                                <Accordion.Header>{technicalStackData.title}</Accordion.Header>
                                <Accordion.Body>
                                    {technicalStackData.points.map((cat, catIndex) => (
                                        <div key={catIndex} className="mb-3">
                                            <strong>{cat.category}:</strong>
                                            <ul className="list-unstyled mb-0 ms-3">
                                                {cat.items.map((item, itemIndex) => (
                                                    <li key={itemIndex}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <div className="text-center mt-5">
                            <Button as={Link} to="/contact" className="cta-button secondary-theme-bg">
                                Discuss Your Specific IT Requirements
                            </Button>
                        </div>
                    </Container>
                </section>


                {/* Final Call to Action Section */}
                <section className="service-detail-cta-section py-5 text-center primary-theme-bg text-white">
                    <Container>
                        <h2 className="cta-title">Ready to Elevate Your Business with Smart IT?</h2>
                        <p className="cta-description text-white-75">
                            Don't let IT challenges hold you back. Contact Cryptofox Technology today for a
                            no-obligation consultation and discover your path to digital excellence.
                        </p>
                        {/* Button Centering Fix for Final CTA */}
                        <div className="text-center">
                            <Button
                                as={Link}
                                to="/contact"
                                className="btn-contact secondary-theme-bg"
                            >
                                Schedule Your Free Consultation
                            </Button>
                        </div>
                    </Container>
                </section>

            </main>
        </div>
    );
};

export default Services;