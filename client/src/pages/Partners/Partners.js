// client/src/pages/Partners/Partners.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../App.css';
import './Partners.css';

// Import your actual partner logos here
// Ensure these paths and filenames match your actual files!
import ibmCloudLogo from '../../assets/images/partners/ibm-cloud-logo.png'; // Assuming you named it this way
import azureLogo from '../../assets/images/partners/azure-logo.png';      // Using 'azure-logo.png' as you specified
import terraformLogo from '../../assets/images/partners/terraform-logo.png'; // Using 'terraform-logo.png' as you specified
import dockerLogo from '../../assets/images/partners/docker-logo.png';
import kubernetesLogo from '../../assets/images/partners/kubernetes-logo.png';
import deepMindLogo from '../../assets/images/partners/deepmind-logo.png';
import openAILogo from '../../assets/images/partners/openai-logo.png';
import stellarLogo from '../../assets/images/partners/stellar-logo.png';

const Partners = () => {
  const partners = [
    {
      name: 'IBM Cloud',
      logo: ibmCloudLogo,
      description: 'Strategic partner for enterprise-grade cloud solutions and AI.',
      link: 'https://www.ibm.com/cloud'
    },
    {
      name: 'Microsoft Azure',
      logo: azureLogo, // Using the imported 'azureLogo'
      description: 'Delivering scalable and secure cloud infrastructure and services.',
      link: 'https://azure.microsoft.com/'
    },
    {
      name: 'HashiCorp (Terraform)',
      logo: terraformLogo, // Using the imported 'terraformLogo'
      description: 'Enabling infrastructure as code and cloud automation.',
      link: 'https://www.hashicorp.com/products/terraform'
    },
    {
      name: 'Docker',
      logo: dockerLogo,
      description: 'Pioneering containerization for efficient application deployment.',
      link: 'https://www.docker.com/'
    },
    {
      name: 'Kubernetes',
      logo: kubernetesLogo,
      description: 'Orchestrating containerized workloads for scalability and resilience.',
      link: 'https://kubernetes.io/'
    },
    {
      name: 'DeepMind (Google AI)',
      logo: deepMindLogo,
      description: 'Advancing AI research and real-world applications.',
      link: 'https://deepmind.google/ '
    },
    {
      name: 'OpenAI (ChatGPT)',
      logo: openAILogo,
      description: 'Leaders in artificial general intelligence research and development.',
      link: 'https://openai.com/'
    },
    {
        name: 'Stellar Development Foundation',
        logo: stellarLogo,
        description: 'Supporting the Stellar blockchain for fast, low-cost transactions.',
        link: 'https://www.stellar.org/'
    }
  ];

  return (
    <Container className="partners-page py-5">
      <h1 className="text-center mb-4">Our Valued Partners & Affiliates</h1>
      <p className="lead text-center mb-5">We collaborate with industry leaders and innovative organizations to deliver the best solutions and technologies to our clients.</p>

      <Row className="partners-grid justify-content-center">
        {partners.map((partner, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <div className="partner-card h-100">
              <img src={partner.logo} alt={`${partner.name} Logo`} className="partner-logo img-fluid" />
              <h3>{partner.name}</h3>
              <p>{partner.description}</p>
              <a href={partner.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-info btn-sm mt-auto">Visit Website</a>
            </div>
          </Col>
        ))}
      </Row>

      <Row className="mt-5">
        <Col className="text-center">
          <h3>Interested in Partnering with Cryptofox?</h3>
          <p>
            If you're an innovative technology provider looking to expand your reach, we'd love to hear from you.
          </p>
          <a href="/contact" className="btn btn-primary">Contact Our Partnership Team</a>
        </Col>
      </Row>
    </Container>
  );
};

export default Partners;