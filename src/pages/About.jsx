import { useState } from 'react';
import './About.css';

function About() {
  // Modal States
  const [selectedDiscovery, setSelectedDiscovery] = useState(null);
  const [selectedMission, setSelectedMission] = useState(null);
  const [activeFact, setActiveFact] = useState(null);

  // Explorer States
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDest, setFilterDest] = useState('All');

  // --- DATA: Section 3 (How We Explore) ---
  // 🚀 यहाँ हर कार्ड के लिए सही Wikipedia लिंक जोड़ दिया गया है
  const exploreData = [
    { 
      title: "Rockets & Spacecraft", 
      desc: "Understand thrust, orbital velocity, and how launch vehicles escape Earth's gravity to reach space.", 
      img: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=600&auto=format&fit=crop",
      link: "https://en.wikipedia.org/wiki/Launch_vehicle"
    },
    { 
      title: "Satellites & Telescopes", 
      desc: "Learn how satellites power GPS, communications, weather forecasting, and deep-space observation.", 
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
      link: "https://en.wikipedia.org/wiki/Space_telescope"
    },
    { 
      title: "Robotic Missions", 
      desc: "Discover how rovers and probes explore distant planets, asteroids, and moons autonomously.", 
      img: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=600&auto=format&fit=crop",
      link: "https://en.wikipedia.org/wiki/Uncrewed_spacecraft"
    },
    { 
      title: "Human Spaceflight", 
      desc: "Explore how astronauts live in microgravity, life-support systems, and the future of space stations.", 
      img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=600&auto=format&fit=crop",
      link: "https://en.wikipedia.org/wiki/Human_spaceflight"
    }
  ];

  // --- DATA: Section 5 (Discoveries) ---
  const discoveriesData = [
    { title: "Black Holes", category: "Astrophysics", time: "5 min read", desc: "Regions of space where gravity is so strong that nothing, not even light, can escape.", img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=600&auto=format&fit=crop", full: "Black holes form when massive stars collapse at the end of their life cycle. The boundary of no return is called the event horizon. While we cannot see them directly, we observe their effect on nearby matter and light." },
    { title: "Mars Exploration", category: "Planetary Science", time: "4 min read", desc: "Rovers like Perseverance are searching for ancient microbial life and studying the Martian climate.", img: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=600&auto=format&fit=crop", full: "Mars was once warmer and wetter. Today, rovers drill into rocks to find biosignatures—chemical traces of past life. Understanding Mars helps us understand the history of our own planet." },
    { title: "Exoplanets", category: "Astronomy", time: "6 min read", desc: "Planets outside our solar system. Over 5,000 have been confirmed, with some in the habitable zone.", img: "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?q=80&w=600&auto=format&fit=crop", full: "Scientists use the transit method (watching a planet pass in front of its star) and radial velocity to find exoplanets. The James Webb Space Telescope is now analyzing their atmospheres for signs of water and oxygen." },
    { title: "James Webb Telescope", category: "Cosmology", time: "5 min read", desc: "The most powerful space telescope ever built, observing the universe in infrared.", img: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=600&auto=format&fit=crop", full: "JWST orbits the Sun at the L2 Lagrange point. Its gold-coated mirrors capture infrared light, allowing us to see through dust clouds and observe the first galaxies formed after the Big Bang." },
    { title: "Search for Life", category: "Astrobiology", time: "7 min read", desc: "Scientists look for biosignatures and habitable environments on icy moons like Europa and Enceladus.", img: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=600&auto=format&fit=crop", full: "Life needs liquid water, energy, and nutrients. Moons like Europa (Jupiter) and Enceladus (Saturn) have vast oceans beneath their icy crusts. Future missions will drill or fly through plumes to sample these oceans." },
    { title: "Neutron Stars", category: "Astrophysics", time: "4 min read", desc: "Incredibly dense remnants of collapsed stars. A teaspoon weighs a billion tons.", img: "https://images.unsplash.com/photo-1534996858221-380b92700493?q=80&w=600&auto=format&fit=crop", full: "When a star not massive enough to become a black hole collapses, it forms a neutron star. They spin rapidly and emit beams of radiation (pulsars). They are the densest known objects with a solid surface." }
  ];

  // --- DATA: Section 6 (India's Journey) ---
  const indiaMissions = [
    { name: "Chandrayaan-3", year: "2023", status: "Success", desc: "First to soft-land near the lunar south pole. Found evidence of sulfur and water ice." },
    { name: "Aditya-L1", year: "2023", status: "Active", desc: "India's first solar observatory, studying the Sun's corona from the L1 Lagrange point." },
    { name: "Mangalyaan", year: "2013", status: "Completed", desc: "India became the first Asian nation to reach Mars orbit in its maiden attempt." },
    { name: "Gaganyaan", year: "Planned", status: "In Dev", desc: "India's first human spaceflight program, designed to carry a 3-member crew to LEO." }
  ];

  // --- DATA: Section 7 (Mission Explorer) ---
  const explorerMissions = [
    { id: 1, name: 'Apollo 11', agency: 'NASA', dest: 'Moon', type: 'Human', year: '1969', desc: 'First crewed mission to land on the Moon.' },
    { id: 2, name: 'Voyager 1', agency: 'NASA', dest: 'Interstellar', type: 'Robotic', year: '1977', desc: 'The farthest human-made object from Earth.' },
    { id: 3, name: 'Perseverance', agency: 'NASA', dest: 'Mars', type: 'Robotic', year: '2020', desc: 'Searching for ancient microbial life in Jezero Crater.' },
    { id: 4, name: 'James Webb Space Telescope', agency: 'NASA/ESA', dest: 'Orbit', type: 'Observatory', year: '2021', desc: 'Observing the earliest galaxies in infrared.' },
    { id: 5, name: 'Chandrayaan-3', agency: 'ISRO', dest: 'Moon', type: 'Robotic', year: '2023', desc: 'Soft-landed near the lunar south pole.' },
    { id: 6, name: 'Aditya-L1', agency: 'ISRO', dest: 'Sun', type: 'Observatory', year: '2023', desc: 'Studying the solar corona and space weather.' },
    { id: 7, name: 'OSIRIS-REx', agency: 'NASA', dest: 'Asteroid', type: 'Robotic', year: '2016', desc: 'Returned samples from asteroid Bennu to Earth.' }
  ];

  // --- DATA: Section 8 (Facts) ---
  const factsData = [
    { title: 'A Day on Venus', fact: 'A day on Venus is longer than its year. It takes 243 Earth days to rotate once, but only 225 Earth days to orbit the Sun.' },
    { title: 'The Moon is Moving', fact: 'The Moon is gradually moving away from Earth at a rate of about 3.8 centimeters per year.' },
    { title: 'The Sun\'s Mass', fact: 'The Sun contains approximately 99.86% of the total mass of our Solar System.' },
    { title: 'Looking into the Past', fact: 'Light takes time to travel. When we look at distant stars, we are seeing them as they were years, or even millions of years, ago.' },
    { title: 'Space is Not Empty', fact: 'Space is not a perfect vacuum. It contains particles, radiation, magnetic fields, and dust.' }
  ];

  // Filter Logic for Explorer
  const filteredMissions = explorerMissions.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDest = filterDest === 'All' || m.dest === filterDest;
    return matchesSearch && matchesDest;
  });

  return (
    <div className="about-page-container">
      
      {/* HEADER */}
      <div className="about-header">
        <h1>About The Rocket Science</h1>
        <p>Our Mission to Explore the Cosmos</p>
      </div>

      {/* 3. HOW WE EXPLORE */}
      <section className="about-section">
        <h2 className="about-section-title">How We Explore Space</h2>
        <div className="about-grid-4">
          {exploreData.map((card, i) => (
            <div key={i} className="about-card">
              <img src={card.img} alt={card.title} className="about-card-img" />
              <div className="about-card-body">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                {/* 🚀 यहाँ बटन की जगह सीधा लिंक (<a> टैग) लगा दिया है */}
                <a 
                  href={card.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="about-read-more"
                  style={{ display: 'inline-block', marginTop: '1rem', textDecoration: 'none' }}
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY SPACE MATTERS */}
      <section className="about-section about-why-section">
        <div className="about-why-content">
          <h2 className="about-section-title text-left">Why Space Exploration Matters</h2>
          <p>Space exploration is not just about leaving Earth; it's about improving life on it. The technology developed for space programs drives innovation on Earth.</p>
          <ul className="about-why-list">
            <li><strong>Earth Observation:</strong> Satellites monitor climate change, weather, and disasters.</li>
            <li><strong>Technology Spin-offs:</strong> From GPS to memory foam, space tech is in our daily lives.</li>
            <li><strong>Understanding Our Origins:</strong> Studying asteroids helps us understand how life formed.</li>
            <li><strong>International Cooperation:</strong> The ISS is a symbol of global collaboration.</li>
          </ul>
        </div>
        <div className="about-why-image">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" alt="Earth from space" />
        </div>
      </section>

      {/* 5. AMAZING DISCOVERIES */}
      <section className="about-section">
        <h2 className="about-section-title">Amazing Space Discoveries</h2>
        <div className="about-grid-3">
          {discoveriesData.map((item, i) => (
            <div key={i} className="about-discovery-card">
              <img src={item.img} alt={item.title} />
              <div className="about-disc-body">
                <span className="about-tag">{item.category} • {item.time}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button className="about-read-more" onClick={() => setSelectedDiscovery(item)}>Read Full Story →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. INDIA'S JOURNEY */}
      <section className="about-section about-india-section">
        <h2 className="about-section-title">India's Journey into Space</h2>
        <div className="about-india-grid">
          {indiaMissions.map((mission, i) => (
            <div key={i} className="about-india-card">
              <div className="about-india-header">
                <h3>{mission.name}</h3>
                <span className={`about-badge ${mission.status.toLowerCase().replace(' ', '-')}`}>{mission.status}</span>
              </div>
              <p className="about-year">{mission.year}</p>
              <p>{mission.desc}</p>
            </div>
          ))}
        </div>
        <div className="about-center-btn">
          {/* 🚀 यह लिंक ISRO की ऑफिशियल वेबसाइट पर ले जाता है */}
          <a href="https://www.isro.gov.in" target="_blank" rel="noreferrer" className="about-btn-primary">Explore India's Space Missions</a>
        </div>
      </section>

      {/* 7. MISSION EXPLORER */}
      <section className="about-section">
        <h2 className="about-section-title">Space Mission Explorer</h2>
        
        <div className="about-explorer-controls">
          <input 
            type="text" 
            placeholder="Search missions..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select value={filterDest} onChange={(e) => setFilterDest(e.target.value)}>
            <option value="All">All Destinations</option>
            <option value="Moon">Moon</option>
            <option value="Mars">Mars</option>
            <option value="Sun">Sun</option>
            <option value="Asteroid">Asteroid</option>
            <option value="Orbit">Orbit</option>
            <option value="Interstellar">Interstellar</option>
          </select>
        </div>

        <div className="about-explorer-grid">
          {filteredMissions.map(mission => (
            <div key={mission.id} className="about-mission-card" onClick={() => setSelectedMission(mission)}>
              <h4>{mission.name}</h4>
              <p className="about-mission-agency">{mission.agency}</p>
              <div className="about-mission-tags">
                <span>{mission.dest}</span>
                <span>{mission.year}</span>
              </div>
            </div>
          ))}
          {filteredMissions.length === 0 && <p className="about-no-results">No missions found.</p>}
        </div>
      </section>

      {/* 8. FACTS */}
      <section className="about-section">
        <h2 className="about-section-title">Did You Know?</h2>
        <div className="about-facts-grid">
          {factsData.map((item, idx) => (
            <div key={idx} className="about-fact-card" onClick={() => setActiveFact(activeFact === idx ? null : idx)}>
              <h4>{item.title}</h4>
              {activeFact === idx && <p className="about-fact-text">{item.fact}</p>}
              <button className="about-read-more">{activeFact === idx ? 'Show Less' : 'Learn More'}</button>
            </div>
          ))}
        </div>
      </section>

      {/* 9. RESOURCES */}
      <section className="about-section about-resources">
        <h2 className="about-section-title">Trusted Space Resources</h2>
        <div className="about-resource-links">
          <a href="https://www.nasa.gov" target="_blank" rel="noreferrer">NASA Official</a>
          <a href="https://www.isro.gov.in" target="_blank" rel="noreferrer">ISRO Official</a>
          <a href="https://www.esa.int" target="_blank" rel="noreferrer">ESA Official</a>
        </div>
      </section>

      {/* 🚀 MODAL FOR DISCOVERIES */}
      {selectedDiscovery && (
        <div className="about-modal-overlay" onClick={() => setSelectedDiscovery(null)}>
          <div className="about-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="about-close-modal" onClick={() => setSelectedDiscovery(null)}>✖</button>
            <h2>{selectedDiscovery.title}</h2>
            <img src={selectedDiscovery.img} alt={selectedDiscovery.title} className="about-modal-img" />
            <p className="about-modal-text">{selectedDiscovery.full}</p>
          </div>
        </div>
      )}

      {/* 🚀 MODAL FOR MISSIONS */}
      {selectedMission && (
        <div className="about-modal-overlay" onClick={() => setSelectedMission(null)}>
          <div className="about-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="about-close-modal" onClick={() => setSelectedMission(null)}>✖</button>
            <h2>{selectedMission.name}</h2>
            <h4>{selectedMission.agency} • {selectedMission.year}</h4>
            <p><strong>Destination:</strong> {selectedMission.dest}</p>
            <p className="about-modal-text">{selectedMission.desc}</p>
          </div>
        </div>
      )}

    </div>
  );
}

export default About;