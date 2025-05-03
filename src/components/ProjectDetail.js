import React from 'react';
import './ProjectDetail.css';

const ProjectDetail = ({ projectId, onBack }) => {
  // Project data - in a real app, this would come from an API or database
  const projects = {
    'pareme': {
      title: 'Pareme Blockchain',
      description: 'A Go-based proof-of-work blockchain supporting merge mining and peer networking',
      longDescription: 'Pareme is a custom proof-of-work blockchain written in Go, designed with a focus on simplicity, security, and performance. The project implements a complete blockchain protocol with peer networking, file management, and merge mining capabilities. It serves as a foundation for decentralized applications and demonstrates the principles of blockchain technology.',
      image: '/portfolio/blockchain.png',
      technologies: ['Go', 'Blockchain', 'Proof-of-Work', 'Peer Networking', 'Cryptography'],
      github: 'https://github.com/radikalreems/pareme',
      features: [
        'Custom proof-of-work consensus mechanism',
        'Decentralized Peer-to-peer networking',
        'Node communication tools include block propagation and peer discovery',
        'Efficient blockchain data structures',
        'Graphical-User-Interface for node operation'
      ]
    },
    'pareme-site': {
      title: 'Pareme Website',
      description: 'A React-Vite front-end website for Pareme',
      longDescription: 'The homepage for Pareme. Supports a Pareme node as the backend for users to query the chain via HTTPS for hash frequencies.',
      image: '/portfolio/blockchain.png',
      technologies: ['React-Vite', 'HTTPS API', 'SSL Certification'],
      github: 'https://github.com/radikalreems/pareme.org',
      demo: 'https://pareme.org',
      features: [
        'A front-end website designed with React-Vite for the Pareme blockchain',
        'A configured community forum for Pareme',
        'A chain explorer utilizing a HTTPS API for on-chain hash frequency queries'
      ]
    },
    'metal-seeds': {
      title: 'Metal Seeds LLC',
      description: 'Metal-engraved seed plate startup built with CAD + laser etching for crypto self-custody',
      longDescription: 'Metal Seeds LLC is a hardware security company focused on providing physical backup solutions for cryptocurrency seed phrases. The project combines CAD design and laser etching technology to create durable, tamper-resistant metal plates that can withstand extreme conditions. This solution addresses the critical need for secure, long-term storage of cryptocurrency private keys.',
      image: '/portfolio/metalseeds.png',
      technologies: ['CAD Design', 'Laser Etching', 'Hardware Manufacturing', 'Cryptocurrency Security', 'Self-Custody'],
      github: null,
      demo: 'https://metalseeds.io',
      features: [
        'Custom CAD designs for optimal seed phrase storage',
        'High-precision laser etching for durability',
        'High quality metal (316 stainless steel)',
        'Comprehensive documentation and setup guides'
      ]
    },
    'notary-site': {
      title: 'Notary Scheduling System',
      description: 'PHP + MySQL-powered notary scheduling system with Google Maps integration',
      longDescription: 'This web application streamlines the process of scheduling notary services by connecting notaries with clients in need of document notarization. The system features an intuitive interface for booking appointments, managing schedules, and handling payments. Google Maps integration allows users to find nearby notaries and view their availability in real-time.',
      image: '/portfolio/notary.png',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Google Maps API', 'HTML/CSS', 'Bootstrap'],
      github: null,
      demo: 'https://ochoaservices.com/MobileNotary/',
      features: [
        'User-friendly appointment scheduling interface',
        'Real-time availability calendar',
        'Google Maps integration for location services',
        'Secure payment processing',
        'Email notifications'
      ]
    }
  };

  const project = projects[projectId];

  if (!project) {
    return (
      <div className="project-detail">
        <p className="error-message">Project not found. Please go back and try again.</p>
        <button className="back-button" onClick={onBack}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="project-detail">
        <button className="back-button" onClick={onBack}>&lt;- Go Back to All Projects</button>
      <div className="project-header">
        <div className="project-title-section">
          <div className="project-title-with-icon">
            <img src={project.image} alt={project.title} className="project-icon" />
            <h2>{project.title}</h2>
          </div>
          <p>{project.description}</p>
          <div className="project-links">
            {project.github && (
              <a href={project.github} className="github-link" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
            {project.demo && (
              <a href={project.demo} className="demo-link" target="_blank" rel="noopener noreferrer">
                Live Website
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="section-title">About</h3>
        <p>{project.longDescription}</p>
        
        <h3 className="section-title">Technologies Used</h3>
        <div className="tech-stack">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        
        <h3 className="section-title">Key Features</h3>
        <ul className="features-list">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetail; 