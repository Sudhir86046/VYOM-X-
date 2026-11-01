import './AgencyGrid.css'; // 👈 यहाँ फिक्स कर दिया है

// 🚀 सभी 14 इमेजेस के इम्पोर्ट्स
import img1 from '../assets/mission/Screenshot 2026-11-01 233951.png';
import img2 from '../assets/mission/Screenshot 2026-11-01 234004.png';
import img3 from '../assets/mission/Screenshot 2026-11-01 234020.png';
import img4 from '../assets/mission/Screenshot 2026-11-01 234055.png';
import img5 from '../assets/mission/Screenshot 2026-11-01 234109.png';
import img6 from '../assets/mission/Screenshot 2026-11-01 234122.png';
import img7 from '../assets/mission/Screenshot 2026-11-01 234131.png';
import img8 from '../assets/mission/Screenshot 2026-11-01 234141.png';
import img9 from '../assets/mission/Screenshot 2026-11-01 234157.png';
import img10 from '../assets/mission/Screenshot 2026-11-01 234212.png';
import img11 from '../assets/mission/Screenshot 2026-11-01 234225.png';
import img12 from '../assets/mission/Screenshot 2026-11-01 234236.png';
import img13 from '../assets/mission/Screenshot 2026-11-01 234246.png';
import img14 from '../assets/mission/Screenshot 2026-11-01 234254.png';

const droneCategories = [
  { id: '01', title: 'AUTONOMOUS AERIAL DRONES', desc: 'Intelligent unmanned aerial systems designed to navigate planned routes, process environmental information and perform flight operations with minimal human intervention.', apps: 'Environmental Monitoring, Mapping, Infrastructure Inspection.', image: img1 },
  { id: '02', title: 'LONG-RANGE DRONES', desc: 'Advanced aerial platforms engineered for extended flight endurance, efficient power management and operations across geographically distant locations.', apps: 'Remote Exploration, Ocean Monitoring, Scientific Research.', image: img2 },
  { id: '03', title: 'HYBRID VTOL DRONES', desc: 'Vertical Take-Off and Landing technology combines the flexibility of multirotor flight with the efficiency of fixed-wing aircraft.', apps: 'Search & Rescue, Aerial Surveying, Remote-Area Operations.', image: img3 },
  { id: '04', title: 'UNDERWATER ROBOTICS', desc: 'Autonomous underwater vehicles and remotely operated systems designed to explore underwater environments and collect valuable marine data.', apps: 'Ocean Research, Marine Observation, Underwater Inspection.', image: img4 }
];

const roboticsCategories = [
  { id: '01', title: 'INDUSTRIAL ROBOTICS', desc: 'Precision-engineered robotic systems designed to automate manufacturing, assembly, material handling and repetitive industrial operations.', image: img5 },
  { id: '02', title: 'HUMANOID ROBOTICS', desc: 'Human-inspired machines developed to interact with people, understand environments and perform tasks requiring coordinated movement.', image: img6 },
  { id: '03', title: 'AUTONOMOUS MOBILE ROBOTS', desc: 'Self-navigating robotic platforms capable of moving through dynamic environments, transporting materials and performing assigned operations.', image: img7 },
  { id: '04', title: 'SPACE ROBOTICS', desc: 'Advanced robotic systems such as planetary rovers, robotic arms and exploration platforms designed to support scientific missions beyond Earth.', image: img8 },
  { id: '05', title: 'MARINE ROBOTICS', desc: 'Underwater robotic technologies developed for ocean exploration, marine research and the inspection of submerged infrastructure.', image: img9 }
];

const swarmCapabilities = [
  { title: '01. DISTRIBUTED INTELLIGENCE', desc: 'Individual drones process information and contribute to shared mission objectives.' },
  { title: '02. REAL-TIME COORDINATION', desc: 'Communication systems allow multiple aerial platforms to exchange information and coordinate operations.' },
  { title: '03. COLLISION AVOIDANCE', desc: 'Intelligent navigation and environmental sensing support safe separation between autonomous aircraft.' },
  { title: '04. DYNAMIC TASK ALLOCATION', desc: 'Mission responsibilities can be distributed and adjusted according to operational requirements.' },
  { title: '05. CENTRALIZED SUPERVISION', desc: 'A unified command interface enables operators to monitor fleet activity and mission performance.' }
];

const technologies = [
  { title: 'ARTIFICIAL INTELLIGENCE', desc: 'Enables intelligent data processing, decision support, pattern recognition and autonomous system behaviour.' },
  { title: 'COMPUTER VISION', desc: 'Allows machines to interpret visual information, identify objects and understand their surroundings.' },
  { title: 'GPS & NAVIGATION', desc: 'Supports positioning, route planning, location awareness and navigation during aerial operations.' },
  { title: 'LiDAR & SENSORS', desc: 'Enables distance measurement, environmental mapping, obstacle detection and spatial awareness.' },
  { title: 'SATELLITE COMMUNICATION', desc: 'Explores connectivity solutions for communication across remote geographical regions.' },
  { title: 'EDGE COMPUTING', desc: 'Allows machines to process information locally, reducing dependence on continuous communication.' },
  { title: 'ROBOTICS CONTROL', desc: 'Combines mechanical systems, electronic controllers and software to manage movement and precision.' },
  { title: 'BATTERY MANAGEMENT', desc: 'Focuses on energy monitoring, battery protection, power optimization and operational endurance.' }
];

function AgencyGrid() {
  return (
    <div className="dr-wrapper">
      
      {/* 1. EXPLORE THE WORLD OF DRONES */}
      <section className="dr-section">
        <div className="dr-header">
          <h1>EXPLORE THE WORLD OF DRONES</h1>
          <h3>From Surveillance to Exploration — Drones Are Redefining Possibilities.</h3>
          <p>Discover the evolution of unmanned aerial and underwater systems. From intelligent autonomous flight to long-range exploration, modern drones are transforming how humanity observes, explores and interacts with the world.</p>
        </div>
        
        <div className="dr-grid-4">
          {droneCategories.map((item) => (
            <div key={item.id} className="dr-card">
              <div className="dr-card-image">
                <img src={item.image} alt={item.title} />
                <div className="dr-card-number">{item.id}</div>
              </div>
              <div className="dr-card-content">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <div className="dr-apps">
                  <strong>Apps:</strong> {item.apps}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. THE INTELLIGENCE BEHIND ROBOTICS */}
      <section className="dr-section">
        <div className="dr-header">
          <h1>THE INTELLIGENCE BEHIND ROBOTICS</h1>
          <h3>Building Smart Machines for a Smarter Tomorrow.</h3>
          <p>Robotics brings together mechanical engineering, electronics, sensors and artificial intelligence to create machines capable of sensing, moving, interacting and performing complex tasks.</p>
        </div>

        <div className="dr-grid-5">
          {roboticsCategories.map((item) => (
            <div key={item.id} className="dr-robotics-card">
              <div className="dr-robotics-img">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="dr-robotics-text">
                <span className="dr-number">{item.id}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. DRONE SWARM INTELLIGENCE */}
      <section className="dr-section dr-swarm-section">
        <div className="dr-swarm-layout">
          <div className="dr-swarm-text">
            <h1>DRONE SWARM INTELLIGENCE</h1>
            <h3>ONE DRONE IS A MACHINE. A SWARM IS A SYSTEM.</h3>
            <p>Drone swarm intelligence explores how multiple autonomous aerial systems can communicate, coordinate and perform distributed tasks as part of a unified network. Inspired by coordinated behaviour in nature, swarm technology combines artificial intelligence, distributed computing and communication systems.</p>
            
            <div className="dr-swarm-list">
              {swarmCapabilities.map((cap, index) => (
                <div key={index} className="dr-swarm-item">
                  <h4>{cap.title}</h4>
                  <p>{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="dr-swarm-image">
            <img src={img10} alt="Drone Swarm" />
            <div className="dr-ambition-box">
              <h4>VYOM-X LONG-TERM RESEARCH AMBITION</h4>
              <p>A scalable autonomous coordination architecture designed with the long-term ambition of supporting up to 10,000 connected drones.</p>
              <span>* Proposed future development target, not an existing operational capability.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TECHNOLOGY BEHIND THE MACHINES */}
      <section className="dr-section">
        <div className="dr-header">
          <h1>TECHNOLOGY BEHIND THE MACHINES</h1>
          <h3>Cutting-Edge Innovations Powering the Next Generation.</h3>
        </div>
        
        <div className="dr-tech-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="dr-tech-card">
              <h4>{tech.title}</h4>
              <p>{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. VYOM-X TECHNOLOGY VISION */}
      <section className="dr-section dr-vision-section">
        <div className="dr-vision-images">
          <img src={img11} alt="Vision 1" className="v-img1" />
          <img src={img12} alt="Vision 2" className="v-img2" />
          <img src={img13} alt="Vision 3" className="v-img3" />
          <img src={img14} alt="Vision 4" className="v-img4" />
        </div>

        <div className="dr-vision-content">
          <span className="dr-label">OUR LONG-TERM VISION</span>
          <h1>VYOM-X TECHNOLOGY VISION</h1>
          <h3>Integrating Drones, Robotics and Space Technology for a Smarter World.</h3>
          <p>VYOM-X envisions a future where autonomous aerial platforms, intelligent robotics, artificial intelligence and satellite-assisted communication operate as parts of one connected technological ecosystem. Our long-term development direction focuses on creating scalable, energy-efficient and intelligent systems.</p>
          
          <div className="dr-directions">
            <h4>OUR FIVE TECHNOLOGY DIRECTIONS</h4>
            <ul>
              <li>01. Autonomous Aerial Platforms</li>
              <li>02. Intelligent Robotics & Automation</li>
              <li>03. Satellite-Assisted Connectivity</li>
              <li>04. Multi-Drone Coordination</li>
              <li>05. Unified Command & Control Infrastructure</li>
            </ul>
          </div>

          <div className="dr-2031-box">
            <h4>2031 – FIRST PRODUCT LAUNCH TARGET</h4>
            <p>By 2031, VYOM-X aims to launch its first integrated autonomous aerial technology product, subject to research, engineering development, testing and regulatory approvals.</p>
          </div>

          <div className="dr-closing">
            <h2>FROM INDIVIDUAL MACHINES TO INTELLIGENT NETWORKS.</h2>
            <h2>ENGINEERING THE NEXT GENERATION OF AUTONOMOUS TECHNOLOGY.</h2>
            <h3>VYOM-X</h3>
            <p>VISIONARY YOUTH OF MODERN EXPLORATION.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AgencyGrid;