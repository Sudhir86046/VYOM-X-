import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImg from '../assets/logo.png'; 

function Navbar() {
  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      {/* 🚀 एनिमेशन लेयर्स */}
      <div className="theme-wipe"></div>
      <div className="flying-rocket">
        <div className="rocket-trail"></div>
        <span className="rocket-icon">🚀</span>
      </div>

      {/* 🚀 लोगो */}
      <Link to="/" className="logo-block" onClick={handleHomeClick}>
        <div className="logo-img-wrapper">
          <img src={logoImg} alt="VYOM-X Logo" className="logo-image" />
        </div>
        <div className="logo-text-wrapper">
          <h1 className="logo-main">VYOM-X</h1>
          <p className="logo-tagline">Visionary Youth of Modern Xploration</p>
        </div>
      </Link>
      
      {/* 🚀 नेविगेशन लिंक्स */}
      <ul className="nav-links">
        <li><Link to="/" onClick={handleHomeClick}>Home</Link></li>
        <li><Link to="/space-news">Space News</Link></li>
        <li><Link to="/drones">Drones & Robotics</Link></li>
        <li><Link to="/space-heroes">Space Heroes</Link></li>
        <li><Link to="/our-mission">Our Mission</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;