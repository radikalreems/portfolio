import React, { useState } from 'react';
import './TerminalPortfolio.css';
import ProjectDetail from './ProjectDetail';
import TerminalPrompt from './TerminalPrompt';

const TerminalPortfolio = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
  };

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-controls">
          <span className="red" />
          <span className="yellow" />
          <span className="green" />
        </div>
        <p className="text-sm path-link" onClick={() => setActiveTab('home')}>~/alejandro-ochoa/portfolio</p>
        <div className="terminal-tabs">
          <button 
            className={`tab-button ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            Home
          </button>
          <button 
            className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('projects');
              setSelectedProject(null);
            }}
          >
            Projects
          </button>
          <button 
            className={`tab-button ${activeTab === 'resume' ? 'active' : ''}`}
            onClick={() => setActiveTab('resume')}
          >
            Resume
          </button>
        </div>
        <div className="menu-button" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            <button 
              className={`menu-item ${activeTab === 'home' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('home');
                setMenuOpen(false);
              }}
            >
              Home
            </button>
            <button 
              className={`menu-item ${activeTab === 'projects' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('projects');
                setSelectedProject(null);
                setMenuOpen(false);
              }}
            >
              Projects
            </button>
            <button 
              className={`menu-item ${activeTab === 'resume' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('resume');
                setMenuOpen(false);
              }}
            >
              Resume
            </button>
          </div>
        )}
      </div>

      <div className="terminal-content">
        {activeTab === 'home' && (
          <>
            <pre className="ascii-art">
              {`  ,---.  ,--.         ,--.                   ,--.               
 /  O  \\ |  | ,---.   \`--' ,--,--.,--,--,  ,-|  |,--.--. ,---.  
|  .-.  ||  || .-. :  ,--.' ,-.  ||      \\' .-. ||  .--'| .-. | 
|  | |  ||  |\\   --.  |  |\\ '-'  ||  ||  |\\ \`-' ||  |   ' '-' ' 
\`--' \`--'\`--' \`----'.-'  / \`--\`--'\`--''--' \`---' \`--'    \`---'  
                    '---'                                       `}
            </pre>
            <h1 className="terminal-line">
              <TerminalPrompt command="whoami" />
            </h1>
            <p>
              Hi, I'm <span className="text-blue">Alejandro Ochoa</span>, a builder of blockchain protocols and founder of Metal Seeds LLC. I'm passionate about decentralization, self-custody, and low-level systems. Currently leading <span className="text-pink">Pareme</span>, a custom proof-of-work blockchain written in Go.
            </p>

            <h2 className="terminal-line" style={{ marginTop: '2rem' }}>
              <TerminalPrompt command="list skills" />
            </h2>
            <p>
              Go, Python, PHP, JavaScript, HTML, Blockchain, VPS Management, CAD Design, Compliance (BSA/AML/OFAC)
            </p>

            <h2 className="terminal-line" style={{ marginTop: '2rem' }}>
              <TerminalPrompt command="list projects" />
            </h2>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
              <li>
                <span className="text-yellow">pareme/</span> – A Go-based proof-of-work blockchain supporting merge mining and peer networking [
                <a href="#" className="text-cyan" onClick={(e) => { e.preventDefault(); setActiveTab('projects'); handleProjectClick('pareme'); }}>View</a>]
              </li>
              <li>
                <span className="text-yellow">metal-seeds/</span> – Metal-engraved seed plate startup built with CAD + laser etching for crypto self-custody [
                <a href="#" className="text-cyan" onClick={(e) => { e.preventDefault(); setActiveTab('projects'); handleProjectClick('metal-seeds'); }}>View</a>]
              </li>
              <li>
                <span className="text-yellow">notary-site/</span> – PHP + MySQL-powered notary scheduling system with Google Maps integration [
                <a href="#" className="text-cyan" onClick={(e) => { e.preventDefault(); setActiveTab('projects'); handleProjectClick('notary-site'); }}>View</a>]
              </li>
            </ul>

            <h2 className="terminal-line" style={{ marginTop: '2rem' }}>
              <TerminalPrompt command="blog --recent" />
            </h2>
            <p>▶ <a href="#" className="text-cyan">Building Pareme: Designing a Minimal Proof-of-Work Chain in Go</a></p>
            <p>▶ <a href="#" className="text-cyan">From Notary to Founder: My Journey Into Crypto Infrastructure</a></p>

            <h2 className="terminal-line" style={{ marginTop: '2rem' }}>
              <TerminalPrompt command="show contact info" />
            </h2>
            <p>
              Email me at <a href="mailto:alejandroochoa1107@gmail.com" className="text-cyan">alejandroochoa1107@gmail.com</a> or reach out on <a href="https://linkedin.com/in/alejandroochoa1107" className="text-cyan">LinkedIn</a>.
            </p>
          </>
        )}

        {activeTab === 'projects' && !selectedProject && (
          <div className="projects-container">
            <h1 className="terminal-line">
              <TerminalPrompt command="list projects" />
            </h1>
            <div className="projects-grid">
              <div className="project-card" onClick={() => handleProjectClick('pareme')}>
                <div className="project-image">
                  <img src="/portfolio/blockchain.png" alt="Pareme Blockchain" />
                </div>
                <div className="project-info">
                  <h3>Pareme Blockchain</h3>
                  <p>A Go-based proof-of-work blockchain supporting merge mining and peer networking</p>
                  <div className="project-tech">
                    <span>Go</span>
                    <span>Blockchain</span>
                    <span>Proof-of-Work</span>
                  </div>
                  <a href="#" className="project-link">View Details</a>
                </div>
              </div>
              
              <div className="project-card" onClick={() => handleProjectClick('metal-seeds')}>
                <div className="project-image">
                  <img src="/portfolio/metalseeds.png" alt="Metal Seeds" />
                </div>
                <div className="project-info">
                  <h3>Metal Seeds LLC</h3>
                  <p>Metal-engraved seed plate startup built with CAD + laser etching for crypto self-custody</p>
                  <div className="project-tech">
                    <span>CAD</span>
                    <span>Laser Etching</span>
                    <span>Hardware</span>
                  </div>
                  <a href="#" className="project-link">View Details</a>
                </div>
              </div>
              
              <div className="project-card" onClick={() => handleProjectClick('notary-site')}>
                <div className="project-image">
                  <img src="/portfolio/notary.png" alt="Notary Site" />
                </div>
                <div className="project-info">
                  <h3>Notary Scheduling System</h3>
                  <p>PHP + MySQL-powered notary scheduling system with Google Maps integration</p>
                  <div className="project-tech">
                    <span>PHP</span>
                    <span>MySQL</span>
                    <span>Google Maps API</span>
                  </div>
                  <a href="#" className="project-link">View Details</a>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'projects' && selectedProject && (
          <ProjectDetail projectId={selectedProject} onBack={handleBackToProjects} />
        )}

        {activeTab === 'resume' && (
          <div className="resume-container">
            <h1 className="terminal-line">
              <TerminalPrompt command="read resume" />
            </h1>
            <div className="resume-preview">
              <div className="resume-pdf-container">
                <iframe 
                  src="/portfolio/resume.pdf" 
                  title="Alejandro Ochoa Resume" 
                  className="resume-pdf"
                  width="100%"
                  height="1100px"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TerminalPortfolio;
