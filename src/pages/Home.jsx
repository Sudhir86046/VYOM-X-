import './Home.css'; 
import AgencyGrid from '../components/AgencyGrid'; 
import RocketSlider from '../components/RocketSlider';
import TodayLaunches from '../components/TodayLaunches'; 
import scientistsImg from '../assets/scientists.png'; 

function Home() {
  return (
    <div className="master-page-wrapper">
      
      {/* =========================================
          1. हीरो सेक्शन
          ========================================= */}
      <div className="hero-section">
        
        {/* 🚀 टेक्स्ट वाला हिस्सा (ऊपर) */}
        <div className="hero-text-section">
          <h1>EARTH IS OUR BEGINNING, NOT OUR BOUNDARY.</h1>
          <p>Exploring the Universe. Advancing Humanity. Redefining What's Possible</p>
        </div>

        {/* 🚀 बॉक्स वाला हिस्सा (नीचे) */}
        <div className="hero-boxes-section">
          
          {/* 🎥 बाईं तरफ का लाइव वीडियो बॉक्स (तुम्हारा नया लिंक लगा दिया है) */}
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

          {/* 🖼️ दाईं तरफ की इमेज */}
          <div className="hero-image-container">
            <img 
              src={scientistsImg} 
              alt="Scientists and Space" 
              className="hero-img" 
            />
          </div>

        </div>
      </div>
      
      {/* 2. आज के 4 लाइव लॉन्च */}
      <TodayLaunches />

      {/* 3. 9 स्पेस एजेंसियों का ग्रिड */}
      <div id="agencies">
        <AgencyGrid /> 
      </div>

      {/* 4. टॉप 20 रॉकेट लॉन्चिंग स्लाइडर */}
      <div id="rockets">
        <RocketSlider />
      </div>

    </div>
  );
}

export default Home;