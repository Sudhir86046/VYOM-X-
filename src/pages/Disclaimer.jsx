import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LegalPages.css';

function Disclaimer() {
  const [activeSection, setActiveSection] = useState('section-1');

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      const sections = document.querySelectorAll('.doc-section');
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) current = section.getAttribute('id');
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="legal-page-wrapper">
      <div className="legal-doc-container">
        
        <div className="doc-header">
          <span className="doc-classification">VYOM-X // LEGAL & GOVERNANCE</span>
          <h1>Disclaimer</h1>
          <div className="doc-meta-grid">
            <span>DOC ID: VX-DSC-2026</span>
            <span>VERSION: 1.0</span>
            <span>UPDATED: NOV 2026</span>
            <span>READ TIME: 3 MIN</span>
          </div>
        </div>

        <div className="doc-intro">
          <h2>Accuracy. Transparency. Responsibility.</h2>
          <p>VYOM-X is an independent space information and technology initiative. It is not affiliated with, endorsed by, or officially connected to NASA, ISRO, SpaceX, ESA, or any other government space agency.</p>
        </div>

        <nav className="floating-nav">
          <a href="#section-1" className={activeSection === 'section-1' ? 'active' : ''}>01. Independence</a>
          <a href="#section-2" className={activeSection === 'section-2' ? 'active' : ''}>02. Education</a>
          <a href="#section-3" className={activeSection === 'section-3' ? 'active' : ''}>03. Accuracy</a>
          <a href="#section-4" className={activeSection === 'section-4' ? 'active' : ''}>04. Launch Delays</a>
          <a href="#section-5" className={activeSection === 'section-5' ? 'active' : ''}>05. APIs</a>
        </nav>

        <div className="doc-content">
          <div className="doc-section" id="section-1">
            <div className="doc-section-title"><span>01.</span><h3>Independent Platform</h3></div>
            <p>VYOM-X is an independent space information and technology initiative. It is not affiliated with, endorsed by, or officially connected to any government space agency or private aerospace organization.</p>
          </div>

          <div className="doc-section" id="section-2">
            <div className="doc-section-title"><span>02.</span><h3>Informational and Educational Purpose</h3></div>
            <p>All information provided on this platform—including live tracking data, drone specifications, and biographies—is for general informational and educational purposes only.</p>
          </div>

          <div className="doc-section" id="section-3">
            <div className="doc-section-title"><span>03.</span><h3>Accuracy of Space Information</h3></div>
            <p>While we strive to provide accurate data, we make no warranties regarding the completeness, reliability, or accuracy of the information displayed.</p>
          </div>

          <div className="doc-section" id="section-4">
            <div className="doc-section-title"><span>04.</span><h3>Rocket Launch Schedules and Delays</h3></div>
            <p>Rocket launch dates and schedules are subject to change due to technical or weather conditions. Information from third-party APIs may be delayed.</p>
          </div>

          <div className="doc-section" id="section-5">
            <div className="doc-section-title"><span>05.</span><h3>Third-Party APIs and Data Sources</h3></div>
            <p>Our platform relies on external data sources like The Space Devs API. We do not control these sources and are not responsible for any data outages.</p>
          </div>
        </div>

        <div className="doc-ending">
          <h3>Document Complete</h3>
          <p>This document was last updated in November 2026.</p>
          <div className="doc-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookie Policy</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <button onClick={scrollToTop} className="back-to-top-btn">↑ Back to Top</button>
        </div>

      </div>
    </div>
  );
}
export default Disclaimer;