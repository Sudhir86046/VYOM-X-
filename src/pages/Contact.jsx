import './Contact.css';
import ctoImage from '../assets/cto.png'; // Sudhir की इमेज
import amritaImage from '../assets/amrita.png'; // Amrita की इमेज (इसे assets में रखना ना भूलें)

function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-header">
        <h1>Contact Mission Control</h1>
        <p>Have questions, suggestions, or want to collaborate? Send a transmission.</p>
      </div>

      <div className="contact-container">
        
        {/* 🚀 बाईं तरफ: Sudhir की प्रोफाइल */}
        <div className="cto-profile-card">
          <div className="profile-img-container">
            <img src={ctoImage} alt="Sudhir Kumar Tiwari" className="cto-img" />
          </div>
          
          <h2 className="cto-name">Sudhir Kumar Tiwari</h2>
          <h4 className="cto-role">Space Enthusiast | Software Engineer</h4>
          
          <p className="cto-bio">
            Somewhere, something incredible is waiting to be known.
          </p>
          <p className="cto-author">- S.M.T</p>
          
          <p className="cto-location">📍 India</p>
          
          <a 
            href="https://www.linkedin.com/in/sudhir-kumar-tiwari-902453257" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="linkedin-btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Connect on LinkedIn
          </a>
        </div>

        {/* 🚀 दाईं तरफ: Amrita की प्रोफाइल */}
        <div className="cto-profile-card">
          <div className="profile-img-container">
            <img src={amritaImage} alt="Amrita Kushawaha" className="cto-img" />
          </div>
          
          <h2 className="cto-name">Amrita Kushawaha</h2>
          <h4 className="cto-role">Space Enthusiast | Marketing & Product Management</h4>
          
          <p className="cto-bio">
            Exploring New Frontiers. Creating New Possibilities.
          </p>
          <p className="cto-author">- A.K</p>
          
          <p className="cto-location">📍 India</p>
          
          <a 
            href="https://www.linkedin.com/in/amrita-kushawaha-21187a3a7" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="linkedin-btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Connect on LinkedIn
          </a>
        </div>

      </div>
    </div>
  );
}

export default Contact;