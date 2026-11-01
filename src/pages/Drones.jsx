import React, { useState, useEffect } from 'react';
import './Drones.css';

// 🚀 पुरानी इमेजेस के इम्पोर्ट्स
import reaperImg from '../assets/drones/MQ-9_Reaper_UAV_(cropped).jpg';
import globalhawkImg from '../assets/drones/Global_Hawk_1.jpg';
import bayraktarImg from '../assets/drones/Bayraktar_TB2_Runway.jpg';
import predatorImg from '../assets/drones/MQ-1_Predator,_armed_with_AGM-114_Hellfire_missiles.jpg';
import eitanImg from '../assets/drones/IAF-Eitan--Independence-Day-2017-Tel-Nof-IZE-099.jpg';
import wingloongImg from '../assets/drones/GJ-1&GJ-2_at_Changchun_Airshow_20250921.jpg';

function Drones() {
  // 🚀 पॉपअप (Modal) के लिए State
  const [selectedDrone, setSelectedDrone] = useState(null);

  // पॉपअप खुलने पर बैकग्राउंड स्क्रॉल रोकने के लिए
  useEffect(() => {
    if (selectedDrone) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedDrone]);

  const dronesData = [
    {
      name: 'MQ-9 Reaper',
      agency: 'General Atomics',
      country: 'USA',
      img: reaperImg,
      link: 'https://en.wikipedia.org/wiki/General_Atomics_MQ-9_Reaper',
      introYear: '2001',
      classification: 'MALE (Medium Altitude Long Endurance)',
      design: 'Turboprop, single-engine, long-wing monoplane',
      performance: 'Max speed: ~482 km/h, Service ceiling: ~15,240 m',
      engine: 'Honeywell TPE331-10 turboprop',
      endurance: '14 to 27 hours',
      sensors: 'MTS-B EO/IR, Synthetic Aperture Radar (SAR), Laser Designator',
      applications: 'Surveillance, precision strike, intelligence gathering',
      milestones: 'First UAV designed for long-endurance high-altitude surveillance and strike.',
      features: 'Redundant flight control systems, highly modular payload capacity.',
      facts: 'Can carry up to 1,700 kg of external payload including Hellfire missiles and JDAMs.'
    },
    {
      name: 'RQ-4 Global Hawk',
      agency: 'Northrop Grumman',
      country: 'USA',
      img: globalhawkImg,
      link: 'https://en.wikipedia.org/wiki/Northrop_Grumman_RQ-4_Global_Hawk',
      introYear: '1998',
      classification: 'HALE (High Altitude Long Endurance)',
      design: 'Turbofan, high-aspect-ratio wing',
      performance: 'Max speed: ~575 km/h, Service ceiling: ~18,288 m',
      engine: 'Rolls-Royce AE 3007H turbofan',
      endurance: 'Over 34 hours',
      sensors: 'Integrated Sensor Suite (ISS) including SAR, EO/IR, and SIGINT',
      applications: 'High-altitude reconnaissance, communications relay, weather tracking',
      milestones: 'First autonomous UAV to cross the Pacific Ocean (1999).',
      features: 'Can survey an area the size of Illinois in 24 hours.',
      facts: 'It operates at altitudes where commercial airliners fly, providing a "satellite-like" view.'
    },
    {
      name: 'Bayraktar TB2',
      agency: 'Baykar',
      country: 'Turkey',
      img: bayraktarImg,
      link: 'https://en.wikipedia.org/wiki/Baykar_Bayraktar_TB2',
      introYear: '2014',
      classification: 'Tactical UAV / MALE',
      design: 'Inverted V-tail, pusher-propeller configuration',
      performance: 'Max speed: ~222 km/h, Service ceiling: ~8,200 m',
      engine: 'Rotax 912 (100 hp) piston engine',
      endurance: 'Up to 27 hours',
      sensors: 'Aselsan CATS EO/IR, laser designator',
      applications: 'Tactical surveillance, close air support, reconnaissance',
      milestones: 'Gained global fame for its effectiveness in modern asymmetric conflicts.',
      features: 'Can operate from short, unpaved runways.',
      facts: 'It is one of the most cost-effective combat drones globally.'
    },
    {
      name: 'MQ-1 Predator',
      agency: 'General Atomics',
      country: 'USA',
      img: predatorImg,
      link: 'https://en.wikipedia.org/wiki/General_Atomics_MQ-1_Predator',
      introYear: '1994',
      classification: 'MALE (Medium Altitude Long Endurance)',
      design: 'Turboprop, slender fuselage, inverted V-tail',
      performance: 'Max speed: ~217 km/h, Service ceiling: ~7,600 m',
      engine: 'Rotax 914F turbocharged piston engine',
      endurance: 'Up to 24 hours',
      sensors: 'AN/AAS-52 Multi-Spectral Targeting System (MTS)',
      applications: 'Reconnaissance, target acquisition, armed strike',
      milestones: 'The first UAV to be armed with the Hellfire missile (2001).',
      features: 'Pioneered the concept of remotely piloted armed aircraft.',
      facts: 'Originally designed for surveillance but later modified for precision strikes.'
    },
    {
      name: 'IAI Eitan (Heron TP)',
      agency: 'Israel Aerospace Industries',
      country: 'Israel',
      img: eitanImg,
      link: 'https://en.wikipedia.org/wiki/IAI_Eitan',
      introYear: '2004',
      classification: 'MALE (Strategic)',
      design: 'Turboprop, high aspect ratio wings, blended fuselage',
      performance: 'Max speed: ~407 km/h, Service ceiling: ~13,700 m',
      engine: 'Pratt & Whitney Canada PT6A-67 turboprop',
      endurance: 'Up to 36 hours',
      sensors: 'Multi-payload EO/IR, SAR, ELINT/COMINT systems',
      applications: 'Deep-penetration strategic reconnaissance, aerial refueling testbed',
      milestones: 'One of the largest MALE UAVs in the world.',
      features: 'Advanced autonomous flight capabilities.',
      facts: 'Used as a testbed for aerial refueling of drones.'
    },
    {
      name: 'GJ-1 & GJ-2 (Wing Loong II)',
      agency: 'Chengdu Aircraft Industry Group',
      country: 'China',
      img: wingloongImg,
      link: 'https://en.wikipedia.org/wiki/CAIG_Wing_Loong_II',
      introYear: 'GJ-1: 2009, GJ-2: 2017',
      classification: 'MALE (Medium Altitude Long Endurance)',
      design: 'Turboprop, slender wings, V-tail configuration',
      performance: 'Max speed: ~370 km/h, Service ceiling: ~9,000 m',
      engine: 'Turboprop (specific model undisclosed)',
      endurance: 'GJ-1: ~20 hrs, GJ-2: ~40 hrs',
      sensors: 'Multi-sensor EO/IR turret, synthetic aperture radar',
      applications: 'Export market reconnaissance, precision strike',
      milestones: 'Extensively exported for border patrol and tactical ops.',
      features: 'GJ-2 features a significantly larger payload capacity than GJ-1.',
      facts: 'One of the most widely exported armed drone families globally.'
    }
  ];

  return (
    <div className="drones-page-wrapper">
      
      {/* SECTION 1: PAGE INTRODUCTION */}
      <div className="drones-header">
        <h1>ADVANCED UNMANNED AERIAL VEHICLES</h1>
        <h3>Exploring the Technology, Intelligence and Engineering Behind Modern UAVs.</h3>
        <p>Unmanned Aerial Vehicles represent a major advancement in modern aerospace engineering. Combining advanced flight systems, sensors, communication technologies and autonomous navigation, UAVs are transforming aerial observation, scientific research, industrial inspection and other applications.</p>
      </div>

      {/* SECTION 2: UAV CATEGORY OVERVIEW */}
      <section className="drones-section">
        <h2 className="section-title">UAV CATEGORY OVERVIEW</h2>
        <div className="categories-grid">
          <div className="category-card"><h4>MALE UAVs</h4><p>Medium Altitude Long Endurance. Operate at 10k-30k ft for 24+ hrs.</p></div>
          <div className="category-card"><h4>HALE UAVs</h4><p>High Altitude Long Endurance. Fly above 50,000 ft for days.</p></div>
          <div className="category-card"><h4>Tactical UAVs</h4><p>Shorter range, used for battlefield situational awareness.</p></div>
          <div className="category-card"><h4>Long-Endurance</h4><p>Designed for extreme durations, often solar-powered.</p></div>
          <div className="category-card"><h4>Autonomous Systems</h4><p>Equipped with AI to navigate and complete missions independently.</p></div>
        </div>
      </section>

      {/* SECTION 3: DETAILED DRONE INFORMATION (Grid) */}
      <section className="drones-section">
        <h2 className="section-title">DETAILED DRONE INFORMATION</h2>
        <div className="drones-grid">
          {dronesData.map((drone, index) => (
            <div key={index} className="drone-card">
              <div className="drone-img-box">
                <img src={drone.img} alt={drone.name} />
              </div>
              <div className="drone-info">
                <p className="drone-agency">{drone.agency} • {drone.country}</p>
                <h3>{drone.name}</h3>
                
                {/* Read More Button -> Opens Modal */}
                <button 
                  className="read-more-btn" 
                  onClick={() => setSelectedDrone(drone)}
                >
                  Read Full Details
                </button>
                
                <a href={drone.link} target="_blank" rel="noopener noreferrer" className="wiki-link">
                  Wikipedia Reference
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🚀 POPUP MODAL (Opens when Read More is clicked) */}
      {selectedDrone && (
        <div className="modal-backdrop" onClick={() => setSelectedDrone(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
            {/* Close Button */}
            <button className="modal-close-btn" onClick={() => setSelectedDrone(null)}>
              ✕
            </button>
            
            <div className="modal-header">
              <h2>{selectedDrone.name}</h2>
              <p>{selectedDrone.agency} • {selectedDrone.country}</p>
            </div>
            
            <div className="modal-body">
              <div className="detail-row"><span>First Flight:</span> <p>{selectedDrone.introYear}</p></div>
              <div className="detail-row"><span>Classification:</span> <p>{selectedDrone.classification}</p></div>
              <div className="detail-row"><span>Design:</span> <p>{selectedDrone.design}</p></div>
              <div className="detail-row"><span>Performance:</span> <p>{selectedDrone.performance}</p></div>
              <div className="detail-row"><span>Engine:</span> <p>{selectedDrone.engine}</p></div>
              <div className="detail-row"><span>Endurance:</span> <p>{selectedDrone.endurance}</p></div>
              <div className="detail-row"><span>Major Sensors:</span> <p>{selectedDrone.sensors}</p></div>
              <div className="detail-row"><span>Applications:</span> <p>{selectedDrone.applications}</p></div>
              <div className="detail-row"><span>Milestones:</span> <p>{selectedDrone.milestones}</p></div>
              <div className="detail-row"><span>Features:</span> <p>{selectedDrone.features}</p></div>
              <div className="detail-row fact-row"><span>💡 Fact:</span> <p>{selectedDrone.facts}</p></div>
            </div>

            <div className="modal-footer">
              <a href={selectedDrone.link} target="_blank" rel="noopener noreferrer" className="wiki-link">
                Read full history on Wikipedia →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 4: UNDERSTANDING UAV TECHNOLOGY */}
      <section className="drones-section tech-section">
        <h2 className="section-title">UNDERSTANDING UAV TECHNOLOGY</h2>
        <div className="tech-grid">
          <div className="tech-card"><h4>Aerodynamics</h4><p>Design of wings to generate lift and minimize drag.</p></div>
          <div className="tech-card"><h4>Flight Control</h4><p>Onboard computers that stabilize the aircraft automatically.</p></div>
          <div className="tech-card"><h4>GPS & Navigation</h4><p>Satellite-based positioning for precise waypoint navigation.</p></div>
          <div className="tech-card"><h4>Communication</h4><p>Data links or SATCOM for Beyond-Line-of-Sight control.</p></div>
          <div className="tech-card"><h4>EO/IR Sensors</h4><p>Electro-Optical and Infrared cameras for high-res imaging.</p></div>
          <div className="tech-card"><h4>Radar Tech</h4><p>Synthetic Aperture Radar (SAR) to see through clouds.</p></div>
        </div>
      </section>

      {/* SECTION 5: CIVILIAN AND SCIENTIFIC APPLICATIONS */}
      <section className="drones-section">
        <h2 className="section-title">CIVILIAN & SCIENTIFIC APPLICATIONS</h2>
        <div className="applications-list">
          <span>🌍 Environmental Monitoring</span>
          <span>🚨 Disaster Assessment</span>
          <span>🌾 Agricultural Research</span>
          <span>🏗️ Infrastructure Inspection</span>
          <span>🌊 Ocean Observation</span>
          <span>🗺️ Scientific Mapping</span>
          <span>🔦 Search and Rescue</span>
        </div>
      </section>

      {/* SECTION 6: UAV COMPARISON */}
      <section className="drones-section">
        <h2 className="section-title">UAV COMPARISON TABLE</h2>
        <div className="table-responsive">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Drone Name</th>
                <th>Manufacturer</th>
                <th>Country</th>
                <th>Classification</th>
                <th>First Flight</th>
                <th>Endurance</th>
              </tr>
            </thead>
            <tbody>
              {dronesData.map((drone, i) => (
                <tr key={i}>
                  <td className="highlight-text">{drone.name}</td>
                  <td>{drone.agency}</td>
                  <td>{drone.country}</td>
                  <td>{drone.classification.split('(')[0]}</td>
                  <td>{drone.introYear}</td>
                  <td>{drone.endurance.split('(')[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 7: DID YOU KNOW? */}
      <section className="drones-section">
        <h2 className="section-title">DID YOU KNOW?</h2>
        <ul className="facts-list">
          <li>The RQ-4 Global Hawk can survey an area the size of the state of Illinois in just 24 hours.</li>
          <li>Modern military drones are often flown by pilots sitting in ground control stations thousands of miles away.</li>
          <li>Drones use "Synthetic Aperture Radar" (SAR) which can see through dense clouds and smoke.</li>
          <li>Some experimental solar-powered drones are designed to stay in the air for months, acting as atmospheric satellites.</li>
        </ul>
      </section>

      {/* SECTION 8: VYOM-X FUTURE TECHNOLOGY */}
      <section className="drones-section vision-section">
        <h2 className="section-title">FROM UNMANNED FLIGHT TO INTELLIGENT AUTONOMY.</h2>
        <p className="vision-text">
          VYOM-X aims to explore the next generation of autonomous aerial systems through research into artificial intelligence, advanced robotics, satellite-assisted communication and coordinated multi-drone architectures. 
          <br /><br />
          Our long-term ambition is to develop an integrated autonomous aerial technology product by 2031.
        </p>
      </section>

    </div>
  );
}

export default Drones;