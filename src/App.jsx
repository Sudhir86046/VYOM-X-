import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; 

import Home from './pages/Home';
import SpaceNews from './pages/SpaceNews';
import PastLaunches from './pages/PastLaunches';
import About from './pages/About';
import Contact from './pages/Contact';
import RocketDetail from './pages/RocketDetail'; 
import SpaceHeroes from './pages/SpaceHeroes'; 
import OurMission from './pages/OurMission'; // 🚀 Our Mission Imported

import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import Disclaimer from './pages/Disclaimer';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/space-news" element={<SpaceNews />} />
            <Route path="/past-launches" element={<PastLaunches />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/rocket/:id" element={<RocketDetail />} />
            <Route path="/space-heroes" element={<SpaceHeroes />} />
            
            {/* 🚀 Our Mission Route */}
            <Route path="/our-mission" element={<OurMission />} />

            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;