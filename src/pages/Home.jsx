import { useState, useEffect } from 'react'; // 🚀 स्लाइडर के लिए इम्पोर्ट किया
import './Home.css'; 
import AgencyGrid from '../components/AgencyGrid'; 
import RocketSlider from '../components/RocketSlider';
import TodayLaunches from '../components/TodayLaunches'; 
import scientistsImg from '../assets/scientists.png'; 
import { Link } from 'react-router-dom'; 

// 🚀 6 ड्रोन्स की इमेजेस
import reaperImg from '../assets/drones/MQ-9_Reaper_UAV_(cropped).jpg';
import globalhawkImg from '../assets/drones/Global_Hawk_1.jpg';
import bayraktarImg from '../assets/drones/Bayraktar_TB2_Runway.jpg';
import predatorImg from '../assets/drones/MQ-1_Predator,_armed_with_AGM-114_Hellfire_missiles.jpg';
import eitanImg from '../assets/drones/IAF-Eitan--Independence-Day-2017-Tel-Nof-IZE-099.jpg';
import wingloongImg from '../assets/drones/GJ-1&GJ-2_at_Changchun_Airshow_20250921.jpg';

function Home() {
  // 🚀 स्लाइडर का स्टेट (कौन सी स्लाइड एक्टिव है)
  const [activeSlide, setActiveSlide] = useState(0);

  // 🚀 ड्रोन्स का डेटा
  const droneData = [
    { 
      name: 'MQ-9 Reaper', 
      agency: 'General Atomics', 
      desc: 'A remotely piloted aircraft capable of armed reconnaissance and precision strikes. It is a primary offensive strike drone used by the US Air Force.',
      img: reaperImg 
    },
    { 
      name: 'RQ-4 Global Hawk', 
      agency: 'Northrop Grumman', 
      desc: 'A high-altitude, long-endurance unmanned aerial vehicle used primarily for surveillance and intelligence gathering by the US military.',
      img: globalhawkImg 
    },
    { 
      name: 'Bayraktar TB2', 
      agency: 'Baykar', 
      desc: 'A Turkish medium-altitude long-endurance UAV capable of conducting armed reconnaissance and combat operations.',
      img: bayraktarImg 
    },
    { 
      name: 'MQ-1 Predator', 
      agency: 'General Atomics', 
      desc: 'The predecessor to the Reaper, this RPA was used primarily by the USAF and CIA for aerial reconnaissance and forward observation.',
      img: predatorImg 
    },
    { 
      name: 'IAI Eitan', 
      agency: 'Israel Aerospace', 
      desc: 'One of the largest UAVs in the world, designed by Israel Aerospace Industries for long-endurance strategic missions.',
      img: eitanImg 
    },
    { 
      name: 'GJ-1 & GJ-2', 
      agency: 'Chengdu Aircraft', 
      desc: 'Chinese high-altitude, long-endurance unmanned aerial vehicles designed for surveillance and precision strike missions.',
      img: wingloongImg 
    },
  ];

  // 🚀 हर 15 सेकंड में स्लाइड बदलने का लॉजिक
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % droneData.length);
    }, 15000); // 15000ms = 15 सेकंड
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

      {/* 🚀 3.5 नया सेक्शन: Drones Auto-Slider (Wikipedia Style) */}
      <section className="home-drones-slider-section">
        <h2 className="drones-section-title">Drones & Robotics</h2>
        
        {/* पूरा कार्ड एक लिंक है जो Drones पेज पर ले जाएगा */}
        <Link to="/drones" className="drone-slider-card">
          
          {/* बाईं तरफ टेक्स्ट (Transparent) */}
          <div className="drone-slider-text">
            <span className="drone-slider-badge">AUTONOMOUS UAV</span>
            <h2>{droneData[activeSlide].name}</h2>
            <h4>{droneData[activeSlide].agency}</h4>
            <p>{droneData[activeSlide].desc}</p>
            <span className="click-hint">Click to explore all details →</span>
          </div>

          {/* दाईं तरफ इमेज (Transparent Box) */}
          <div className="drone-slider-image-box">
            {/* key={activeSlide} जोड़ने से इमेज बदलने पर एनीमेशन आएगा */}
            <img 
              key={activeSlide} 
              src={droneData[activeSlide].img} 
              alt={droneData[activeSlide].name} 
              className="slider-img-anim"
            />
          </div>

        </Link>
      </section>

      {/* 4. टॉप 20 रॉकेट लॉन्चिंग स्लाइडर */}
      <div id="rockets">
        <RocketSlider />
      </div>

    </div>
  );
}

export default Home;