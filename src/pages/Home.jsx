import { useState, useEffect } from 'react'; 
import './Home.css'; 
import AgencyGrid from '../components/AgencyGrid'; 
import RocketSlider from '../components/RocketSlider';
import TodayLaunches from '../components/TodayLaunches'; 
import scientistsImg from '../assets/scientists.png'; 
import { Link } from 'react-router-dom'; 

// 🚀 YouTube Lite Embed के लिए इम्पोर्ट (साइट फास्ट करने के लिए)
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

// 🚀 6 ड्रोन्स की इमेजेस
import reaperImg from '../assets/drones/MQ-9_Reaper_UAV_(cropped).jpg';
import globalhawkImg from '../assets/drones/Global_Hawk_1.jpg';
import bayraktarImg from '../assets/drones/Bayraktar_TB2_Runway.jpg';
import predatorImg from '../assets/drones/MQ-1_Predator,_armed_with_AGM-114_Hellfire_missiles.jpg';
import eitanImg from '../assets/drones/IAF-Eitan--Independence-Day-2017-Tel-Nof-IZE-099.jpg';
import wingloongImg from '../assets/drones/GJ-1&GJ-2_at_Changchun_Airshow_20250921.jpg';

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const droneData = [
    { name: 'MQ-9 Reaper', agency: 'General Atomics', desc: 'A remotely piloted aircraft capable of armed reconnaissance and precision strikes. It is a primary offensive strike drone used by the US Air Force.', img: reaperImg },
    { name: 'RQ-4 Global Hawk', agency: 'Northrop Grumman', desc: 'A high-altitude, long-endurance unmanned aerial vehicle used primarily for surveillance and intelligence gathering by the US military.', img: globalhawkImg },
    { name: 'Bayraktar TB2', agency: 'Baykar', desc: 'A Turkish medium-altitude long-endurance UAV capable of conducting armed reconnaissance and combat operations.', img: bayraktarImg },
    { name: 'MQ-1 Predator', agency: 'General Atomics', desc: 'The predecessor to the Reaper, this RPA was used primarily by the USAF and CIA for aerial reconnaissance and forward observation.', img: predatorImg },
    { name: 'IAI Eitan', agency: 'Israel Aerospace', desc: 'One of the largest UAVs in the world, designed by Israel Aerospace Industries for long-endurance strategic missions.', img: eitanImg },
    { name: 'GJ-1 & GJ-2', agency: 'Chengdu Aircraft', desc: 'Chinese high-altitude, long-endurance unmanned aerial vehicles designed for surveillance and precision strike missions.', img: wingloongImg },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % droneData.length);
    }, 15000); 
    return () => clearInterval(timer);
  }, [droneData.length]);

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
            {/* 🚀 यहाँ LiteYouTubeEmbed लगा दिया है जो साइट को सुपरफास्ट करेगा */}
            <LiteYouTubeEmbed
              id="ROboUHfPUrU"
              title="NASA Live Stream"
              poster="hqdefault"
            />
            <div className="video-overlay"></div>
            <div className="live-badge">
              <span className="live-dot"></span> LIVE
            </div>
          </div>

          <div className="hero-image-container">
            <img src={scientistsImg} alt="Scientists and Space" className="hero-img" loading="lazy" />
          </div>
          
        </div>
      </div>
      
      {/* 2. लाइव लॉन्च और एजेंसियां */}
      <TodayLaunches />
      <div id="agencies">
        <AgencyGrid /> 
      </div>

      {/* 🚀 3. COMBINED SLIDER SECTION (Drones Left, Rockets Right) */}
      <section className="home-combined-section">
        <div className="split-slider-container">
          
          {/* Left Side: Drones */}
          <div className="split-slider-panel">
            <h2 className="panel-title">Drones & Robotics</h2>
            <Link to="/drones" className="drone-slider-card">
              <div className="drone-slider-image-box">
                <img key={activeSlide} src={droneData[activeSlide].img} alt={droneData[activeSlide].name} className="slider-img-anim" loading="lazy" />
              </div>
              <div className="drone-slider-text">
                <span className="drone-slider-badge">AUTONOMOUS UAV</span>
                <h3>{droneData[activeSlide].name}</h3>
                <h4>{droneData[activeSlide].agency}</h4>
                <p>{droneData[activeSlide].desc}</p>
                <span className="click-hint">Click to explore all details →</span>
              </div>
            </Link>
          </div>

          {/* Right Side: Rockets */}
          <div className="split-slider-panel">
            <RocketSlider />
          </div>

        </div>
      </section>

      {/* 🚀 4. VISION TEXT SECTION (सिर्फ टेक्स्ट, सबसे नीचे) */}
      <section className="home-vision-text-section">
        <span className="vision-label">OUR LONG-TERM VISION</span>
        <h2 className="vision-title">VYOM-X TECHNOLOGY VISION</h2>
        <p className="vision-subtitle">Integrating Drones, Robotics and Space Technology for a Smarter World.</p>
        <p className="vision-description">
          VYOM-X envisions a future where autonomous aerial platforms, intelligent robotics, artificial intelligence and satellite-assisted communication operate as parts of one connected technological ecosystem. Our long-term development direction focuses on creating scalable, energy-efficient and intelligent systems.
        </p>
      </section>

    </div>
  );
}

export default Home;