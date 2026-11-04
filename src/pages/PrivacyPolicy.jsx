import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LegalPages.css';

function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('section-1');

  useEffect(() => {
    window.scrollTo(0, 0);
    // Simple scroll spy logic for active nav highlight
    const handleScroll = () => {
      const sections = document.querySelectorAll('.doc-section');
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
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
        
        {/* SECTION A: HEADER */}
        <div className="doc-header">
          <span className="doc-classification">VYOM-X // LEGAL & GOVERNANCE</span>
          <h1>Privacy & Data Protection</h1>
          <div className="doc-meta-grid">
            <span>DOC ID: VX-PRV-2026</span>
            <span>VERSION: 1.0</span>
            <span>UPDATED: NOV 2026</span>
            <span>READ TIME: 4 MIN</span>
          </div>
        </div>

        {/* SECTION B: INTRO */}
        <div className="doc-intro">
          <h2>Your Privacy. Our Responsibility.</h2>
          <p>VYOM-X is committed to transparency and the responsible handling of visitor information. This document outlines how we manage data when you explore our aerospace technology platform.</p>
        </div>

        {/* SECTION D: FLOATING NAVIGATION */}
        <nav className="floating-nav">
          <a href="#section-1" className={activeSection === 'section-1' ? 'active' : ''}>01. Intro</a>
          <a href="#section-2" className={activeSection === 'section-2' ? 'active' : ''}>02. Data Collection</a>
          <a href="#section-3" className={activeSection === 'section-3' ? 'active' : ''}>03. Provided Info</a>
          <a href="#section-4" className={activeSection === 'section-4' ? 'active' : ''}>04. APIs</a>
          <a href="#section-5" className={activeSection === 'section-5' ? 'active' : ''}>05. Caching</a>
          <a href="#section-6" className={activeSection === 'section-6' ? 'active' : ''}>06. YouTube</a>
          <a href="#section-7" className={activeSection === 'section-7' ? 'active' : ''}>07. Security</a>
          <a href="#section-8" className={activeSection === 'section-8' ? 'active' : ''}>08. External Links</a>
        </nav>

        {/* SECTION C: CONTENT */}
        <div className="doc-content">
          
          <div className="doc-section" id="section-1">
            <div className="doc-section-title"><span>01.</span><h3>Introduction</h3></div>
            <p>VYOM-X is committed to transparency and the responsible handling of visitor information. This policy outlines how we manage data when you explore our aerospace technology platform.</p>
          </div>

          <div className="doc-section" id="section-2">
            <div className="doc-section-title"><span>02.</span><h3>Information We Collect</h3></div>
            <p>We do not actively collect personal identification information (such as your name or phone number) simply by you browsing the website. We only collect data that is necessary to ensure the platform functions smoothly.</p>
          </div>

          <div className="doc-section" id="section-3">
            <div className="doc-section-title"><span>03.</span><h3>Information You Voluntarily Provide</h3></div>
            <p>If you choose to contact us via email (e.g., <a href="mailto:careers@vyom-x.online" style={{color: '#00d4ff'}}>careers@vyom-x.online</a>) or through any contact forms, we will receive the information you provide. This is used solely to respond to your inquiries and is never sold to third parties.</p>
          </div>

          <div className="doc-section" id="section-4">
            <div className="doc-section-title"><span>04.</span><h3>Third-Party Services and APIs</h3></div>
            <p>Our platform utilizes external APIs such as The Space Devs for launch data. When your browser requests this data, third-party providers may process technical information (like your IP address and browser type) according to their own privacy policies.</p>
          </div>

          <div className="doc-section" id="section-5">
            <div className="doc-section-title"><span>05.</span><h3>Local Storage and Data Caching</h3></div>
            <p>To improve performance and reduce repeated API requests, VYOM-X caches launch information in your browser's local storage for up to 24 hours. This data remains on your device and is not transmitted to or stored on our servers.</p>
          </div>

          <div className="doc-section" id="section-6">
            <div className="doc-section-title"><span>06.</span><h3>YouTube Embedded Content</h3></div>
            <p>We embed YouTube videos for live space telecasts. YouTube may set cookies on your device to track video performance and user preferences. This is subject to Google's Privacy Policy.</p>
          </div>

          <div className="doc-section" id="section-7">
            <div className="doc-section-title"><span>07.</span><h3>Data Security</h3></div>
            <p>We implement reasonable security measures to protect platform integrity. However, please be aware that no internet-based system can guarantee absolute security.</p>
          </div>

          <div className="doc-section" id="section-8">
            <div className="doc-section-title"><span>08.</span><h3>External Websites</h3></div>
            <p>Links to external platforms (e.g., Wikipedia, official space agencies) are provided for reference. VYOM-X is not responsible for the privacy practices or content of those external sites.</p>
          </div>

        </div>

        {/* SECTION E: ENDING */}
        <div className="doc-ending">
          <h3>Document Complete</h3>
          <p>This document was last updated in November 2026. For questions, contact us.</p>
          <div className="doc-links">
            <Link to="/terms">Terms of Service</Link>
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
export default PrivacyPolicy;