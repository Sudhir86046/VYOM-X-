import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LegalPages.css';

function CookiePolicy() {
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
          <h1>Cookies & Browser Tech</h1>
          <div className="doc-meta-grid">
            <span>DOC ID: VX-CKE-2026</span>
            <span>VERSION: 1.0</span>
            <span>UPDATED: NOV 2026</span>
            <span>READ TIME: 3 MIN</span>
          </div>
        </div>

        <div className="doc-intro">
          <h2>Understanding the Technologies.</h2>
          <p>This policy explains how VYOM-X uses cookies and similar browser technologies to ensure a smooth and efficient user experience.</p>
        </div>

        <nav className="floating-nav">
          <a href="#section-1" className={activeSection === 'section-1' ? 'active' : ''}>01. Intro</a>
          <a href="#section-2" className={activeSection === 'section-2' ? 'active' : ''}>02. Cookies</a>
          <a href="#section-3" className={activeSection === 'section-3' ? 'active' : ''}>03. Local Storage</a>
          <a href="#section-4" className={activeSection === 'section-4' ? 'active' : ''}>04. Our Usage</a>
          <a href="#section-5" className={activeSection === 'section-5' ? 'active' : ''}>05. Data Caching</a>
        </nav>

        <div className="doc-content">
          <div className="doc-section" id="section-1">
            <div className="doc-section-title"><span>01.</span><h3>Introduction to Cookies</h3></div>
            <p>This policy explains how VYOM-X uses cookies and similar browser technologies to ensure a smooth and efficient user experience.</p>
          </div>

          <div className="doc-section" id="section-2">
            <div className="doc-section-title"><span>02.</span><h3>What Are Browser Cookies?</h3></div>
            <p>Cookies are small text files stored on your device by your web browser. They are widely used to make websites function efficiently and remember your preferences.</p>
          </div>

          <div className="doc-section" id="section-3">
            <div className="doc-section-title"><span>03.</span><h3>Understanding Local Storage</h3></div>
            <p>Local Storage is a modern browser feature that allows websites to store data locally on your device without sending it back to the server with every request.</p>
          </div>

          <div className="doc-section" id="section-4">
            <div className="doc-section-title"><span>04.</span><h3>How VYOM-X Uses Local Storage</h3></div>
            <p>We do not use intrusive tracking cookies. However, we utilize your browser's Local Storage to enhance your experience on our platform.</p>
          </div>

          <div className="doc-section" id="section-5">
            <div className="doc-section-title"><span>05.</span><h3>Launch Data Caching</h3></div>
            <p>To prevent exceeding API rate limits and to make the website load faster, we cache upcoming launch data locally.</p>
          </div>
        </div>

        <div className="doc-ending">
          <h3>Document Complete</h3>
          <p>This document was last updated in November 2026.</p>
          <div className="doc-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/disclaimer">Disclaimer</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <button onClick={scrollToTop} className="back-to-top-btn">↑ Back to Top</button>
        </div>

      </div>
    </div>
  );
}
export default CookiePolicy;