// client/src/pages/Services/Services.js
import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <div className="container">
        <h1>Our Expert Services</h1>
        <p className="page-intro">Cryptofox Technology provides cutting-edge IT consulting to drive innovation and efficiency for your business.</p>

        {/* DevOps Section */}
        <section className="service-section">
          <div className="service-content">
            <h2>DevOps Strategy, Consulting, and Tooling Support</h2>
            <p>In the rapidly evolving landscape of software development, traditional silos between development and operations teams lead to inefficiencies and slow delivery. Cryptofox Technology helps you break down these barriers, fostering a culture of collaboration, automation, and continuous improvement through comprehensive DevOps strategies. Our expertise ensures faster release cycles, improved software quality, and enhanced operational stability.</p>
            <h3>Key Benefits:</h3>
            <ul>
              <li><strong>Accelerated Time-to-Market:</strong> Streamline your CI/CD pipelines to deliver features and updates at an unprecedented pace.</li>
              <li><strong>Enhanced Collaboration:</strong> Foster a culture of shared responsibility and communication between development, operations, and QA.</li>
              <li><strong>Reduced Operational Costs:</strong> Automate repetitive tasks, minimize manual errors, and optimize resource utilization.</li>
              <li><strong>Improved System Reliability:</strong> Implement robust monitoring, logging, and incident response frameworks.</li>
              <li><strong>Scalable Infrastructure:</strong> Design and implement infrastructure as code (IaC) solutions for resilient and elastic environments.</li>
            </ul>
            <h3>Our DevOps Offerings:</h3>
            <ul>
                <li><strong>DevOps Maturity Assessment:</strong> Evaluate your current practices and identify areas for improvement.</li>
                <li><strong>CI/CD Pipeline Implementation:</strong> Design, build, and optimize automated integration and deployment workflows using Jenkins, GitLab CI, Azure DevOps, etc.</li>
                <li><strong>Infrastructure as Code (IaC):</strong> Automate infrastructure provisioning and management with Terraform, Ansible, CloudFormation.</li>
                <li><strong>Containerization & Orchestration:</strong> Expert guidance on Docker, Kubernetes, and OpenShift for scalable application deployment.</li>
                <li><strong>Monitoring & Logging:</strong> Implement comprehensive solutions with Prometheus, Grafana, ELK Stack, Splunk.</li>
                <li><strong>DevSecOps Integration:</strong> Embed security practices throughout your development lifecycle.</li>
                <li><strong>Version Control Management:</strong> Best practices for Git, GitHub, GitLab, Bitbucket.</li>
            </ul>
          </div>
          <div className="service-image">
            <img src="https://via.placeholder.com/600x400?text=Advanced+DevOps" alt="DevOps Consulting" />
          </div>
        </section>

        {/* Cloud Computing Section */}
        <section className="service-section even-section">
          <div className="service-image">
            <img src="https://via.placeholder.com/600x400?text=Scalable+Cloud+Solutions" alt="Cloud Computing" />
          </div>
          <div className="service-content">
            <h2>Cloud Computing Strategy, Planning, Architecture, and Administration</h2>
            <p>Embrace the agility, scalability, and cost-efficiency of the cloud with Cryptofox Technology. We specialize in architecting, migrating, and managing robust cloud environments primarily on **IBM Cloud** and **Microsoft Azure**. Our cloud experts ensure your transition is seamless, secure, and optimized for peak performance and business continuity, enabling you to innovate faster and scale on demand.</p>
            <h3>Why Cloud with Cryptofox?</h3>
            <ul>
              <li><strong>Strategic Roadmap:</strong> Develop a clear cloud adoption strategy aligned with your business objectives.</li>
              <li><strong>Cost Optimization:</strong> Leverage cloud-native services and best practices to reduce operational expenditures.</li>
              <li><strong>Enhanced Security & Compliance:</strong> Implement enterprise-grade security measures and ensure regulatory adherence.</li>
              <li><strong>High Availability & Disaster Recovery:</strong> Design resilient architectures to minimize downtime and protect data.</li>
              <li><strong>Scalability & Elasticity:</strong> Build systems that effortlessly scale up or down with your evolving needs.</li>
            </ul>
            <h3>Our Cloud Computing Services:</h3>
            <ul>
                <li><strong>Cloud Readiness Assessment & Strategy:</strong> Determine the best cloud approach for your organization.</li>
                <li><strong>Cloud Migration Services:</strong> Seamlessly move your applications and data to IBM Cloud or Azure.</li>
                <li><strong>Cloud Native Application Development:</strong> Architect and build modern applications leveraging serverless, containers, and microservices.</li>
                <li><strong>Infrastructure as a Service (IaaS) Management:</strong> Provision and manage virtual machines, networking, and storage.</li>
                <li><strong>Platform as a Service (PaaS) Optimization:</strong> Utilize managed databases, app services, and more for accelerated development.</li>
                <li><strong>Cloud Security & Governance:</strong> Implement robust security frameworks, identity management, and compliance controls.</li>
                <li><strong>Cloud Cost Management:</strong> Monitor, analyze, and optimize your cloud spending.</li>
                <li><strong>Managed Cloud Services:</strong> Ongoing administration, monitoring, and support for your cloud infrastructure.</li>
            </ul>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="service-section">
          <div className="service-content">
            <h2>AI Services: Intelligent Solutions for Business Challenges</h2>
            <p>Unlock the power of Artificial Intelligence to automate processes, gain deeper insights, and create truly innovative customer experiences. Cryptofox Technology helps businesses integrate AI into their operations, solving complex challenges with bespoke solutions including automated services, intelligent chatbots, AI agents, machine learning models, and advanced analytics. From enhancing customer support to optimizing internal workflows, our AI services are designed to deliver measurable business impact.</p>
            <h3>Transform Your Business With AI:</h3>
            <ul>
              <li><strong>Process Automation:</strong> Automate repetitive and rule-based tasks, freeing up human resources for strategic initiatives.</li>
              <li><strong>Enhanced Customer Engagement:</strong> Implement intelligent chatbots and virtual assistants for 24/7 support and personalized interactions.</li>
              <li><strong>Data-Driven Decisions:</strong> Leverage machine learning for predictive analytics, anomaly detection, and business forecasting.</li>
              <li><strong>Operational Efficiency:</strong> Optimize supply chains, resource allocation, and quality control with AI insights.</li>
              <li><strong>Innovation & Competitive Advantage:</strong> Develop new AI-powered products and services to lead your market.</li>
            </ul>
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
          <div className="service-image">
            <img src="https://via.placeholder.com/600x400?text=Intelligent+AI+Solutions" alt="AI Services" />
          </div>
        </section>

        {/* Other Services Section */}
        <section className="service-section even-section">
          <div className="service-image">
            <img src="https://via.placeholder.com/600x400?text=Web+Blockchain+SysAdmin" alt="Other Services" />
          </div>
          <div className="service-content">
            <h2>Additional Core IT Services</h2>
            <p>Beyond our primary focus areas, Cryptofox Technology offers a comprehensive suite of IT services to ensure your business operates smoothly and securely.</p>
            <h3>Web Development Services:</h3>
            <ul>
              <li><strong>Professional Web Development:</strong> Crafting responsive, high-performance websites tailored to your brand.</li>
              <li><strong>E-commerce Solutions:</strong> Building robust online stores to maximize your sales.</li>
              <li><strong>CMS Integration:</strong> Expertise in platforms like WordPress, Joomla, and custom content management systems.</li>
              <li><strong>Web Hosting & Cloud-Based Options:</strong> Secure and scalable hosting solutions.</li>
              <li><strong>Website Maintenance & Support:</strong> Ongoing support to keep your site updated and secure.</li>
            </ul>

            <h3>General SysAdmin and Architectural Support:</h3>
            <ul>
              <li><strong>Infrastructure as Code (IaC):</strong> Automating infrastructure provisioning and management for consistency and speed.</li>
              <li><strong>Containerization Expertise:</strong> Implementing Docker and Kubernetes for efficient application deployment and scaling.</li>
              <li><strong>System Monitoring & Maintenance:</strong> Ensuring optimal performance and proactive issue resolution.</li>
              <li><strong>Network & Security Management:</strong> Securing your infrastructure from threats and ensuring compliance.</li>
              <li><strong>System Auditing & Optimization:</strong> Identifying bottlenecks and recommending improvements for existing systems.</li>
            </ul>

            <h3>Blockchain Development & Cryptocurrency Strategy:</h3>
            <ul>
              <li><strong>Blockchain Development:</strong> Building decentralized applications (DApps) and private blockchain solutions.</li>
              <li><strong>Smart Contract Development:</strong> Designing and deploying secure and efficient smart contracts for various use cases.</li>
              <li><strong>Cryptocurrency Strategy & Consulting:</strong> Guidance on integrating blockchain technologies and understanding cryptocurrency landscapes.</li>
              <li><strong>NFT Development:</strong> Creating and managing Non-Fungible Tokens for digital assets.</li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Services;