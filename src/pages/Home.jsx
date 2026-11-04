import { useState, useEffect } from 'react'; 
import './Home.css'; 
import AgencyGrid from '../components/AgencyGrid'; 
import RocketSlider from '../components/RocketSlider';
import TodayLaunches from '../components/TodayLaunches'; 
import { Link } from 'react-router-dom'; 

// 🚀 Scientists Image (Right Side)
import scientistsImg from '../assets/scientists.png'; 

// 🚀 6 ड्रोन्स की इमेजेस
import reaperImg from '../assets/drones/MQ-9_Reaper_UAV_(cropped).jpg';
import globalhawkImg from '../assets/drones/Global_Hawk_1.jpg';
import bayraktarImg from '../assets/drones/Bayraktar_TB2_Runway.jpg';
import predatorImg from '../assets/drones/MQ-1_Predator,_armed_with_AGM-114_Hellfire_missiles.jpg';
import eitanImg from '../assets/drones/IAF-Eitan--Independence-Day-2017-Tel-Nof-IZE-099.jpg';
import wingloongImg from '../assets/drones/GJ-1&GJ-2_at_Changchun_Airshow_20250921.jpg';

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeQuote, setActiveQuote] = useState(0);

  // 🚀 केवल 3 कोट्स (जैसा आपने कहा)
  const quotesData = [
    {
      title: "INDIA",
      text: '"Dream, dream, dream. Dreams transform into thoughts and thoughts result in action."',
      author: "Dr. A.P.J. Abdul Kalam"
    },
    {
      title: "USA",
      text: '"That\'s one small step for a man, one giant leap for mankind."',
      author: "Neil Armstrong"
    },
    {
      title: "RUSSIA",
      text: '"The Earth is blue... How wonderful. It is amazing."',
      author: "Yuri Gagarin"
    }
  ];

  // 🚀 हर 5 सेकंड में कोट बदलने का लॉजिक
  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % quotesData.length);
    }, 5000); 
    return () => clearInterval(quoteTimer);
  }, [quotesData.length]);

  const droneData = [
    { name: 'MQ-9 Reaper', agency: 'General Atomics', desc: 'A remotely piloted aircraft capable of armed reconnaissance and precision strikes.', img: reaperImg },
    { name: 'RQ-4 Global Hawk', agency: 'Northrop Grumman', desc: 'A high-altitude, long-endurance unmanned aerial vehicle used primarily for surveillance.', img: globalhawkImg },
    { name: 'Bayraktar TB2', agency: 'Baykar', desc: 'A Turkish medium-altitude long-endurance UAV capable of conducting armed reconnaissance.', img: bayraktarImg },
    { name: 'MQ-1 Predator', agency: 'General Atomics', desc: 'The predecessor to the Reaper, used primarily by the USAF and CIA for aerial reconnaissance.', img: predatorImg },
    { name: 'IAI Eitan', agency: 'Israel Aerospace', desc: 'One of the largest UAVs in the world, designed for long-endurance strategic missions.', img: eitanImg },
    { name: 'GJ-1 & GJ-2', agency: 'Chengdu Aircraft', desc: 'Chinese high-altitude, long-endurance unmanned aerial vehicles.', img: wingloongImg },
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
          
          {/* 🚀 LEFT SIDE: FILLED CONTENT (VYOM-X Info + Quotes) */}
          <div className="hero-side box-content-left">
            
            {/* Top Half: Stable VYOM-X Info */}
            <div className="vx-stable-intro">
              <div className="vx-badge">
                <span className="vx-dot"></span> VYOM-X | BEYOND THE KNOWN
              </div>
              <h2>THE FUTURE IS NOT A DESTINATION.IT'S A FRONTIER TO EXPLORE.</h2>
              <p>VYOM-X focuses on exploring emerging technologies across aerospace engineering, autonomous aerial systems, intelligent robotics, and advanced computational systems.</p>
            </div>

            <div className="vx-divider"></div>

            {/* Bottom Half: Rotating Quotes */}
            <div className="vx-quotes-box">
              <div key={activeQuote} className="quote-anim-container">
                <h3 className="quote-title">{quotesData[activeQuote].title}</h3>
                <p className="quote-text">{quotesData[activeQuote].text}</p>
                <p className="quote-author">— {quotesData[activeQuote].author}</p>
              </div>
            </div>
            
          </div>

          {/* 🚀 RIGHT SIDE: SCIENTISTS IMAGE */}
          <div className="hero-side box-scientists">
            <img 
              src={scientistsImg} 
              alt="World Best Scientists" 
              className="scientists-full-img" 
            />
          </div>
          
        </div>
      </div>
      
      {/* 2. लाइव लॉन्च और एजेंसियां */}
      <TodayLaunches />
      <div id="agencies">
        <AgencyGrid /> 
      </div>

      {/* 🚀 3. COMBINED SLIDER SECTION */}
      <section className="home-combined-section">
        <div className="split-slider-container">
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
          <div className="split-slider-panel">
            <RocketSlider />
          </div>
        </div>
      </section>

      {/* 🚀 4. VISION TEXT SECTION */}
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