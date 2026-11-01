import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react'; // 🚀 Lazy Loading के लिए

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; 

// 🚀 सभी पेजों को Lazy Load किया गया है ताकि वेबसाइट फास्ट चले
const Home = lazy(() => import('./pages/Home'));
const SpaceNews = lazy(() => import('./pages/SpaceNews'));
const PastLaunches = lazy(() => import('./pages/PastLaunches'));
const Drones = lazy(() => import('./pages/Drones'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const RocketDetail = lazy(() => import('./pages/RocketDetail')); 
const SpaceHeroes = lazy(() => import('./pages/SpaceHeroes')); 
const OurMission = lazy(() => import('./pages/OurMission')); 

const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));
const Disclaimer = lazy(() => import('./pages/Disclaimer'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          {/* 🚀 Suspense: जब पेज लोड हो रहा हो तो स्क्रीन पर Loading दिखेगा */}
          <Suspense fallback={
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', color: '#00d4ff', fontSize: '1.5rem', fontWeight: 'bold' }}>
              Loading... 🚀
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/space-news" element={<SpaceNews />} />
              <Route path="/past-launches" element={<PastLaunches />} />
              <Route path="/drones" element={<Drones />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/rocket/:id" element={<RocketDetail />} />
              <Route path="/space-heroes" element={<SpaceHeroes />} />
              <Route path="/our-mission" element={<OurMission />} />
              
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/cookies" element={<CookiePolicy />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;