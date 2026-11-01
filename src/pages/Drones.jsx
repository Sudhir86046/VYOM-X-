import './Drones.css';
import { Link } from 'react-router-dom';

// 🚀 यहाँ भी वही लोकल इमेजेस इम्पोर्ट कर ली हैं
import reaperImg from '../assets/drones/MQ-9_Reaper_UAV_(cropped).jpg';
import globalhawkImg from '../assets/drones/Global_Hawk_1.jpg';
import bayraktarImg from '../assets/drones/Bayraktar_TB2_Runway.jpg';
import predatorImg from '../assets/drones/MQ-1_Predator,_armed_with_AGM-114_Hellfire_missiles.jpg';
import eitanImg from '../assets/drones/IAF-Eitan--Independence-Day-2017-Tel-Nof-IZE-099.jpg';
import wingloongImg from '../assets/drones/GJ-1&GJ-2_at_Changchun_Airshow_20250921.jpg';

function Drones() {
  // 🚀 टॉप 6 सर्विलांस और मिलिट्री ड्रोन्स का डेटा
  const dronesData = [
    {
      name: 'MQ-9 Reaper',
      agency: 'General Atomics',
      country: 'USA',
      img: reaperImg,
      link: 'https://en.wikipedia.org/wiki/General_Atomics_MQ-9_Reaper'
    },
    {
      name: 'RQ-4 Global Hawk',
      agency: 'Northrop Grumman',
      country: 'USA',
      img: globalhawkImg,
      link: 'https://en.wikipedia.org/wiki/Northrop_Grumman_RQ-4_Global_Hawk'
    },
    {
      name: 'Bayraktar TB2',
      agency: 'Baykar',
      country: 'Turkey',
      img: bayraktarImg,
      link: 'https://en.wikipedia.org/wiki/Baykar_Bayraktar_TB2'
    },
    {
      name: 'MQ-1 Predator',
      agency: 'General Atomics',
      country: 'USA',
      img: predatorImg,
      link: 'https://en.wikipedia.org/wiki/General_Atomics_MQ-1_Predator'
    },
    {
      name: 'IAI Eitan (Heron TP)',
      agency: 'Israel Aerospace Industries',
      country: 'Israel',
      img: eitanImg,
      link: 'https://en.wikipedia.org/wiki/IAI_Eitan'
    },
    {
      name: 'GJ-1 & GJ-2 (Wing Loong II)',
      agency: 'Chengdu Aircraft Industry Group',
      country: 'China',
      img: wingloongImg,
      link: 'https://en.wikipedia.org/wiki/CAIG_Wing_Loong_II'
    }
  ];

  return (
    <div className="drones-page-wrapper">
      <div className="drones-header">
        <h1>DRONES & ROBOTICS</h1>
        <p>Discover the most advanced unmanned aerial vehicles (UAVs) shaping modern surveillance and defense.</p>
      </div>

      <div className="drones-grid">
        {dronesData.map((drone, index) => (
          <div key={index} className="drone-card">
            <div className="drone-img-box">
              <img src={drone.img} alt={drone.name} />
            </div>
            <div className="drone-info">
              <p className="drone-agency">{drone.agency} • {drone.country}</p>
              <h3>{drone.name}</h3>
              <a href={drone.link} target="_blank" rel="noopener noreferrer" className="read-more-btn">
                Read More on Wikipedia →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Drones;