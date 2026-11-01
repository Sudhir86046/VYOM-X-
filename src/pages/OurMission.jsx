import './OurMission.css';

// 🚀 सभी इमेजेस इम्पोर्ट 
import img1 from '../assets/mission/Screenshot 2026-11-01 233951.png';
import img2 from '../assets/mission/Screenshot 2026-11-01 234004.png';
import img3 from '../assets/mission/Screenshot 2026-11-01 234020.png';
import img4 from '../assets/mission/Screenshot 2026-11-01 234055.png';
import img5 from '../assets/mission/Screenshot 2026-11-01 234109.png';

function OurMission() {
  return (
    <div className="mission-wrapper">
      
      {/* 1. OUR MISSION (Text Left, Image Right) */}
      <section className="mission-section">
        <div className="text-content">
          <h1>OUR MISSION</h1>
          <h3>Engineering Intelligence. Connecting Possibilities. Expanding Horizons.</h3>
          <p>
            VYOM-X aims to explore and develop intelligent autonomous aerial systems by integrating drone technology, satellite-assisted communication, artificial intelligence, and centralized command infrastructure.
          </p>
          <p>
            Our mission is to research scalable, energy-efficient, and intelligent aerial platforms capable of operating across challenging geographical environments and supporting multiple civilian applications.
          </p>
        </div>
        <div className="small-image-box">
          <img src={img1} alt="Mission" />
        </div>
      </section>

      {/* 5 OBJECTIVES */}
      <section className="mission-section full-width-section">
        <div className="objectives-grid">
          <div className="objective-card"><h4>Autonomous Intelligence</h4></div>
          <div className="objective-card"><h4>Satellite-Enabled Connectivity</h4></div>
          <div className="objective-card"><h4>Extreme Environment Operations</h4></div>
          <div className="objective-card"><h4>Multi-Mission Capabilities</h4></div>
          <div className="objective-card"><h4>Accessible Innovation</h4></div>
        </div>
      </section>

      {/* 2. OUR VISION 2031 (Image Left, Text Right) */}
      <section className="mission-section vision-section">
        <div className="small-image-box">
          <img src={img2} alt="Vision 2031" />
        </div>
        <div className="text-content">
          <h1>OUR VISION 2031</h1>
          <h3>One Connected Network. Thousands of Intelligent Aerial Systems.</h3>
          <p>
            By 2031, VYOM-X aims to develop and launch its first integrated autonomous aerial technology product.
          </p>
          <p>
            The long-term vision is to research a satellite-assisted, AI-enabled drone coordination ecosystem designed with the ambition of supporting up to 10,000 interconnected drones through a unified communication and command architecture.
          </p>
          <blockquote>
            "Our ambition is not simply to build another drone. It is to explore a new way of connecting thousands of autonomous aerial systems."
          </blockquote>
        </div>
      </section>

      {/* 3. DRONE SYSTEMS (Center Heading, 3-2 Box Layout) */}
      <section className="mission-section full-width-section">
        <div className="section-header">
          <h2>VYOM-X AUTONOMOUS DRONE SYSTEMS</h2>
          <p>Beyond Individual Flight. Towards Intelligent Coordination.</p>
        </div>
        <div className="pillars-grid">
          <div className="pillar-item">
            <h4>Satellite Communication</h4>
            <p>Satellite-assisted connectivity for geographically distributed operations.</p>
          </div>
          <div className="pillar-item">
            <h4>Autonomous Drone Coordination</h4>
            <p>Intelligent multi-drone coordination architecture with a long-term 10,000-drone development ambition.</p>
          </div>
          <div className="pillar-item">
            <h4>AI-Powered Navigation</h4>
            <p>Intelligent route planning, obstacle awareness, and autonomous decision-making.</p>
          </div>
          <div className="pillar-item">
            <h4>Extreme Environment Engineering</h4>
            <p>Research into remote oceanic, high-altitude, and sub-zero environments (-60°C).</p>
          </div>
          <div className="pillar-item">
            <h4>Unified Command Infrastructure</h4>
            <p>Centralized monitoring, mission planning, and operational oversight.</p>
          </div>
        </div>
      </section>

      {/* 4. COMMAND & CONTROL (Text Left, Image Right) */}
      <section className="mission-section">
        <div className="text-content">
          <h1>ONE COMMAND. ONE CONNECTED ECOSYSTEM.</h1>
          <h3>A Unified Intelligence Platform for Distributed Aerial Operations.</h3>
          <ul className="command-list">
            <li>Fleet monitoring</li>
            <li>Satellite-assisted communication</li>
            <li>AI-based mission planning</li>
            <li>Drone health & battery monitoring</li>
            <li>Operational coordination</li>
            <li>Emergency and fail-safe management</li>
          </ul>
          <p className="disclaimer">* Proposed future development concept.</p>
        </div>
        <div className="small-image-box">
          <img src={img3} alt="Command Center" />
        </div>
      </section>

      {/* 5. TECHNOLOGY APPLICATIONS (Center Heading, 4 in a Row) */}
      <section className="mission-section full-width-section">
        <div className="section-header">
          <h2>TECHNOLOGY FOR A CONNECTED WORLD</h2>
        </div>
        {/* 👇 यहाँ 4 इमेजेस एक रो में आएंगी */}
        <div className="applications-grid">
          <div className="app-card">
            <div className="app-image"><img src={img4} alt="Environmental Monitoring" /></div>
            <h4>Environmental Monitoring</h4>
            <p>Forests, climate and environmental observation.</p>
          </div>
          <div className="app-card">
            <div className="app-image"><img src={img5} alt="Ocean Intelligence" /></div>
            <h4>Ocean Intelligence</h4>
            <p>Ocean observation and remote marine monitoring.</p>
          </div>
          <div className="app-card">
            <div className="app-image"><img src={img1} alt="Disaster Response" /></div>
            <h4>Disaster Response</h4>
            <p>Emergency supply drops and aerial surveillance in disaster zones.</p>
          </div>
          <div className="app-card">
            <div className="app-image"><img src={img2} alt="Infrastructure Inspection" /></div>
            <h4>Infrastructure Inspection</h4>
            <p>Monitoring of power grids, pipelines and difficult-to-reach structures.</p>
          </div>
        </div>
      </section>

      {/* 6. ROADMAP (Center Heading, Full Width Timeline) */}
      <section className="mission-section full-width-section roadmap-section-wrapper">
        <div className="section-header">
          <h2>THE ROAD TO 2031</h2>
        </div>
        
        <div className="roadmap-timeline">
          <div className="roadmap-item" style={{ animationDelay: '0.1s' }}>
            <span className="year">2026</span>
            <p>Foundation & Research</p>
          </div>
          <div className="roadmap-item" style={{ animationDelay: '0.3s' }}>
            <span className="year">2027</span>
            <p>Concept & Design</p>
          </div>
          <div className="roadmap-item" style={{ animationDelay: '0.5s' }}>
            <span className="year">2028</span>
            <p>Prototype Development</p>
          </div>
          <div className="roadmap-item" style={{ animationDelay: '0.7s' }}>
            <span className="year">2029</span>
            <p>Integration & Testing</p>
          </div>
          <div className="roadmap-item" style={{ animationDelay: '0.9s' }}>
            <span className="year">2030</span>
            <p>System Validation</p>
          </div>
          <div className="roadmap-item active" style={{ animationDelay: '1.1s' }}>
            <span className="year">2031</span>
            <p>First Product Launch Target</p>
          </div>
        </div>
        
        <p className="roadmap-note">* These are proposed milestones subject to technical feasibility, funding, testing, and regulatory approvals.</p>
      </section>

    </div>
  );
}

export default OurMission;