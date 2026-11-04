import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LegalPages.css';

function TermsOfService() {
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
          <h1>Terms of Service</h1>
          <div className="doc-meta-grid">
            <span>DOC ID: VX-TRM-2026</span>
            <span>VERSION: 1.0</span>
            <span>UPDATED: NOV 2026</span>
            <span>READ TIME: 5 MIN</span>
          </div>
        </div>

        <div className="doc-intro">
          <h2>The Principles Governing Your Use.</h2>
          <p>By accessing and using VYOM-X, you accept and agree to be bound by these terms. If you do not agree, please discontinue use of the platform.</p>
        </div>

        <nav className="floating-nav">
          <a href="#section-1" className={activeSection === 'section-1' ? 'active' : ''}>01. Acceptance</a>
          <a href="#section-2" className={activeSection === 'section-2' ? 'active' : ''}>02. About</a>
          <a href="#section-3" className={activeSection === 'section-3' ? 'active' : ''}>03. Purpose</a>
          <a href="#section-4" className={activeSection === 'section-4' ? 'active' : ''}>04. Use</a>
          <a href="#section-5" className={activeSection === 'section-5' ? 'active' : ''}>05. Responsibilities</a>
          <a href="#section-6" className={activeSection === 'section-6' ? 'active' : ''}>06. IP Rights</a>
          <a href="#section-7" className={activeSection === 'section-7' ? 'active' : ''}>07. Third-Party</a>
          <a href="#section-8" className={activeSection === 'section-8' ? 'active' : ''}>08. Launch Info</a>
        </nav>

        <div className="doc-content">
          <div className="doc-section" id="section-1">
            <div className="doc-section-title"><span>01.</span><h3>Acceptance of Terms</h3></div>
            <p>By accessing and using VYOM-X, you accept and agree to be bound by these terms. If you do not agree, please discontinue use of the platform.</p>
          </div>

          <div className="doc-section" id="section-2">
            <div className="doc-section-title"><span>02.</span><h3>About VYOM-X</h3></div>
            <p>VYOM-X is an independent aerospace research and educational initiative dedicated to exploring autonomous systems, drone technologies, and space data visualization.</p>
          </div>

          <div className="doc-section" id="section-3">
            <div className="doc-section-title"><span>03.</span><h3>Website Purpose</h3></div>
            <p>This platform is created for informational, educational, and research purposes. It aims to provide accessible data regarding space missions and aerospace technology.</p>
          </div>

          <div className="doc-section" id="section-4">
            <div className="doc-section-title"><span>04.</span><h3>Permitted Use</h3></div>
            <p>You may browse, read, and share the content for personal and educational use. You must not use this website for any illegal or unauthorized purposes.</p>
          </div>

          <div className="doc-section" id="section-5">
            <div className="doc-section-title"><span>05.</span><h3>User Responsibilities</h3></div>
            <p>You agree not to attempt to breach the platform's security, scrape data aggressively, or use the platform in a way that impairs its availability for other users.</p>
          </div>

          <div className="doc-section" id="section-6">
            <div className="doc-section-title"><span>06.</span><h3>Intellectual Property Rights</h3></div>
            <p>The VYOM-X brand, custom UI elements, and original written content are the property of VYOM-X. External data and APIs remain the property of their respective owners.</p>
          </div>

          <div className="doc-section" id="section-7">
            <div className="doc-section-title"><span>07.</span><h3>Third-Party Data Providers</h3></div>
            <p>Launch data is fetched via The Space Devs API. VYOM-X does not own this data and cannot guarantee its continuous availability.</p>
          </div>

          <div className="doc-section" id="section-8">
            <div className="doc-section-title"><span>08.</span><h3>Mission and Launch Information</h3></div>
            <p>Rocket launch schedules are highly dynamic and subject to change or cancellation. VYOM-X is not liable for any inaccuracies reported on the platform.</p>
          </div>
        </div>

        <div className="doc-ending">
          <h3>End of Terms</h3>
          <p>This agreement was last updated in November 2026.</p>
          <div className="doc-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/cookies">Cookie Policy</Link>
            <Link to="/disclaimer">Disclaimer</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <button onClick={scrollToTop} className="back-to-top-btn">↑ Back to Top</button>
        </div>

      </div>
    </div>
  );
}
export default TermsOfService;