import './Home.css'; 
import AgencyGrid from '../components/AgencyGrid'; 
import RocketSlider from '../components/RocketSlider';
import TodayLaunches from '../components/TodayLaunches'; 
import scientistsImg from '../assets/scientists.png'; 
import { Link } from 'react-router-dom'; 

// 🚀 तुम्हारे स्क्रीनशॉट के बिल्कुल सटीक नामों से इम्पोर्ट किया गया है
import reaperImg from '../assets/drones/MQ-9_Reaper_UAV_(cropped).jpg';
import globalhawkImg from '../assets/drones/Global_Hawk_1.jpg';
import bayraktarImg from '../assets/drones/Bayraktar_TB2_Runway.jpg';
import predatorImg from '../assets/drones/MQ-1_Predator,_armed_with_AGM-114_Hellfire_missiles.jpg';
import eitanImg from '../assets/drones/IAF-Eitan--Independence-Day-2017-Tel-Nof-IZE-099.jpg';
import wingloongImg from '../assets/drones/GJ-1&GJ-2_at_Changchun_Airshow_20250921.jpg';

function Home() {
  // 🚀 6 ड्रोन्स का डेटा
  const dronePreviews = [
    { name: 'MQ-9 Reaper', agency: 'General Atomics', img: reaperImg },
    { name: 'RQ-4 Global Hawk', agency: 'Northrop Grumman', img: globalhawkImg },
    { name: 'Bayraktar TB2', agency: 'Baykar', img: bayraktarImg },
    { name: 'MQ-1 Predator', agency: 'General Atomics', img: predatorImg },
    { name: 'IAI Eitan', agency: 'Israel Aerospace', img: eitanImg },
    { name: 'GJ-1 & GJ-2', agency: 'Chengdu Aircraft', img: wingloongImg },
  ];

  return (
    <div className="master-page-wrapper">
      
      {/* 1. हीरो सेक्शन */}
      <div className="hero-section">
        <div className="hero-text-section">
          <h1>EARTH IS OUR BEGINNING, NOT OUR BOUNDARY.</h1>
          <p>Exploring the Universe. Advancing Humanity. Redefining What's Possible</p>
        </div>
        <div className="hero-boxes-section">
          <div className="hero-left-box">
            <iframe 
              className="hero-video"
              src="https://www.youtube.com/embed/ROboUHfPUrU?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&loop=1&playlist=ROboUHfPUrU" 
              title="NASA Live Stream"
              frameBorder="0" 
              allow="autoplay; encrypted-media" 
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
            <div className="video-overlay"></div>
            <div className="live-badge">
              <span className="live-dot"></span> LIVE
            </div>
          </div>
          <div className="hero-image-container">
            <img src={scientistsImg} alt="Scientists and Space" className="hero-img" />
          </div>
        </div>
      </div>
      
      {/* 2. आज के 4 लाइव लॉन्च */}
      <TodayLaunches />

      {/* 3. 9 स्पेस एजेंसियों का ग्रिड */}
      <div id="agencies">
        <AgencyGrid /> 
      </div>

      {/* 🚀 3.5 Drones Section (Simple Layout) */}
      <section className="home-drones-section">
        <h2 className="drones-section-title">Drones & Robotics</h2>
        <div className="drone-preview-grid">
          {dronePreviews.map((drone, index) => (
            <div key={index} className="drone-preview-item">
              <div className="drone-preview-img-box">
                <img src={drone.img} alt={drone.name} />
              </div>
              <div className="drone-preview-text">
                <h3>{drone.name}</h3>
                <p>{drone.agency}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-drones-container">
           <Link to="/drones" className="view-all-drones-btn">View All Details →</Link>
        </div>
      </section>

      {/* 4. टॉप 20 रॉकेट लॉन्चिंग स्लाइडर */}
      <div id="rockets">
        <RocketSlider />
      </div>

    </div>
  );
}

export default Home;