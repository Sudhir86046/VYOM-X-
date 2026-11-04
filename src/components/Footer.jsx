import { Link } from 'react-router-dom';
import './Footer.css';
import logoImg from '../assets/logo.png'; 

function Footer() {
  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* कॉलम 1: ब्रांड और डिस्क्रिप्शन */}
        <div className="footer-column brand-col">
          <Link to="/" className="footer-logo-block" onClick={handleHomeClick}>
            <div className="footer-logo-img-wrapper">
              <img src={logoImg} alt="VYOM-X Logo" className="footer-logo-img" />
            </div>
            <h2 className="footer-logo-text">VYOM-X</h2>
          </Link>
          <p className="footer-desc">
            Visionary Youth of Modern Xploration. Your ultimate destination for space exploration, rocket launches, and cosmic discoveries.
          </p>
        </div>

        {/* कॉलम 2: क्विक लिंक्स */}
        <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/" onClick={handleHomeClick}>Home</Link></li>
            <li><Link to="/space-news">Space News</Link></li>
            <li><Link to="/drones">Drones & Robotics</Link></li>
            <li><Link to="/past-launches">Past Launches</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/space-heroes">Space Heroes</Link></li>
            <li><Link to="/our-mission">Our Mission</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* कॉलम 3: लीगल */}
        <div className="footer-column">
          <h3 className="footer-heading">Legal</h3>
          <ul className="footer-links">
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/cookies">Cookie Policy</Link></li>
            <li><Link to="/disclaimer">Disclaimer</Link></li>
          </ul>
        </div>

        {/* कॉलम 4: सोशल मीडिया & Careers */}
        <div className="footer-column">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-links">
            <a 
              href="https://www.linkedin.com/in/sudhir-kumar-tiwari-902453257" 
              target="_blank" 
              rel="noreferrer" 
              title="LinkedIn"
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            {/* 🚀 Careers Email जोड़ा गया */}
            <a href="mailto:careers@vyom-x.online" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Careers
            </a>
          </div>
        </div>

      </div>

      {/* नीचे का कॉपीराइट हिस्सा */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} VYOM-X. All rights reserved.</p>
        
        {/* 🚀 प्रोफेशनल टेक्स्ट और ईमेल लिंक */}
        <div className="footer-bottom-right">
          <a href="mailto:careers@vyom-x.online" className="careers-link">careers@vyom-x.online</a>
          <p className="made-with">Engineering the Future</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;