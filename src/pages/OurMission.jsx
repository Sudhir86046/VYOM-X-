import { useEffect, useRef, useState } from 'react';
import './OurMission.css';

// 🚀 अपनी इमेजेस इम्पोर्ट करें
import satelliteImg from '../assets/satellite.png';
import jetImg from '../assets/jet.png';
import droneCloudsImg from '../assets/drone-clouds.png';

function OurMission() {
  const sectionsRef = useRef([]);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  // 🚀 Scroll Animation Logic (Intersection Observer)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    { q: "What exactly is VYOM-X?", a: "VYOM-X (Visionary Youth of Modern Xploration) is an aerospace initiative focused on developing autonomous flight systems, satellite-connected drones, and technology designed to survive extreme environments." },
    { q: "What is the FROST-60 project?", a: "FROST-60 is our ultimate 2031 goal. It is an advanced experimental drone platform specifically engineered to operate flawlessly in extreme cold environments down to -60°C." },
    { q: "How will the drones connect to satellites?", a: "We are integrating long-range telemetry and satellite communication modules into our prototypes by 2030. This ensures Beyond-Line-Of-Sight (BLOS) control and real-time data transmission from anywhere on Earth." },
    { q: "Is VYOM-X an Indian company?", a: "Yes! Our core philosophy is 'Built in India. Designed for the Future.' We aim to build world-class aerospace technology from our homeland to push the boundaries of global space exploration." },
    { q: "Are the milestones mentioned on this page achieved?", a: "No, the 2027-2031 roadmap represents our proposed goals and future milestones. We are currently in the foundational research phase, working towards these targets." },
    { q: "How can I collaborate with VYOM-X?", a: "We are always looking for passionate engineers, space enthusiasts, and partners. You can reach out to us directly through the Contact Us page." }
  ];

  return (
    <div className="mission-cinematic-wrapper">
      
      {/* 1. CINEMATIC SPACE OPENING (Split Layout) */}
      <section className="hero-section">
        <div className="stars-bg"></div>
        <div className="earth-container">
          <div className="earth-glow"></div>
          <div className="earth-sphere"></div>
        </div>
        
        <div className="hero-content">
          {/* 🚀 इमेज बाईं तरफ */}
          <div className="hero-image-container">
            <img src={jetImg} alt="VYOM-X Jet" className="hero-jet" />
          </div>
          
          {/* 🚀 टेक्स्ट दाईं तरफ */}
          <div className="hero-text-container">
            <h1 className="hero-title">
              OUR MISSION <br/>
              <span className="glow-text">BEYOND THE SKY. BEYOND LIMITS.</span>
            </h1>
            <p className="hero-subtitle">Autonomous Flight. Satellite Connectivity. Extreme Survival.</p>
          </div>
        </div>
      </section>

      {/* 2. SPLIT LAYOUTS */}
      
      {/* Slide 1: Image Right, Text Left */}
      <section className="feature-section fade-up" ref={addToRefs}>
        <div className="text-content">
          <h2>Autonomous Drone Flight</h2>
          <p>Experience next-generation 3D movement, depth, and perspective. Our drones travel above Earth's atmosphere with electric-blue engine glows and minimal motion trails, redefining what's possible in intelligent flight.</p>
        </div>
        <div className="image-content">
          <img src={jetImg} alt="Autonomous Jet" className="feature-img" />
        </div>
      </section>

      {/* Slide 2: Image Left, Text Right (Reverse) */}
      <section className="feature-section reverse fade-up" ref={addToRefs}>
        <div className="text-content">
          <div className="hud-badge">SATELLITE LINK: CONNECTED</div>
          <h2>Satellite Communication</h2>
          <p>Realistic circular trajectories with animated blue communication beams. Digital data particles travel through the connection, ensuring ultra-low latency telemetry and global connectivity for our autonomous systems.</p>
        </div>
        <div className="image-content">
          <img src={satelliteImg} alt="Satellite Connection" className="feature-img" />
        </div>
      </section>

      {/* Slide 3: Image Right, Text Left */}
      <section className="feature-section fade-up" ref={addToRefs}>
        <div className="text-content">
          <h2>FROST-60 Extreme Environment</h2>
          <p>Engineering for the extreme. Our technology operates flawlessly in Arctic conditions with advanced thermal visualization, ice-resistant materials, and adaptive battery management systems designed for -60°C.</p>
        </div>
        <div className="image-content">
          <img src={droneCloudsImg} alt="Frost Drone" className="feature-img" />
        </div>
      </section>

      {/* 3. NEXT 5 YEARS ROADMAP (Half-Half Box) */}
      <section className="roadmap-box-section fade-up" ref={addToRefs}>
        <div className="roadmap-box">
          <div className="roadmap-left">
            <h2>Next 5 Years Plan</h2>
            <p className="years-text">2027 – 2031</p>
            <p className="roadmap-desc">Our strategic roadmap to push autonomous aerospace engineering to its absolute limits.</p>
          </div>
          
          <div className="roadmap-right">
            <div className="milestone">
              <span className="year">2027</span>
              <div className="milestone-info">
                <h4>Foundation & Research</h4>
                <p>Establishment of VYOM-X, aerospace research, and AI flight systems.</p>
              </div>
            </div>
            <div className="milestone">
              <span className="year">2028</span>
              <div className="milestone-info">
                <h4>First Prototype</h4>
                <p>Experimental drone prototype, autonomous navigation, and flight stability.</p>
              </div>
            </div>
            <div className="milestone">
              <span className="year">2029</span>
              <div className="milestone-info">
                <h4>Extreme Testing</h4>
                <p>Low-temperature testing, thermal management, and -60°C research.</p>
              </div>
            </div>
            <div className="milestone">
              <span className="year">2030</span>
              <div className="milestone-info">
                <h4>Satellite Connectivity</h4>
                <p>Communication integration, long-range telemetry, and advanced AI.</p>
              </div>
            </div>
            <div className="milestone ultimate">
              <span className="year">2031</span>
              <div className="milestone-info">
                <h4>VYOM-X FROST-60</h4>
                <p>The ultimate goal: Advanced drone platform tested for extreme cold operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="faq-section fade-up" ref={addToRefs}>
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${openFaq === index ? 'active' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                <h3>{item.q}</h3>
                <span className="faq-icon">{openFaq === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default OurMission;