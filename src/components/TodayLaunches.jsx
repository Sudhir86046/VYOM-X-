import { useState, useEffect } from 'react';
import './TodayLaunches.css';

// 🌍 दुनिया की सभी बड़ी स्पेस एजेंसियों और कंपनियों के असली लिंक
const providerUrls = {
  'SpaceX': 'https://www.spacex.com',
  'NASA': 'https://www.nasa.gov',
  'ISRO': 'https://www.isro.gov.in',
  'CNSA': 'https://www.cnsa.gov.cn',
  'ESA': 'https://www.esa.int',
  'Roscosmos': 'https://www.roscosmos.ru',
  'JAXA': 'https://global.jaxa.jp',
  'Rocket Lab': 'https://www.rocketlabusa.com',
  'CAS Space': 'http://www.casspace.com',
  'ULA': 'https://www.ulalaunch.com',
  'Arianespace': 'https://www.arianespace.com',
  'Blue Origin': 'https://www.blueorigin.com',
  'Firefly Aerospace': 'https://firefly.com',
  'Northrop Grumman': 'https://www.northropgrumman.com',
  'CASC': 'https://www.spacechina.com',
  'Galactic Energy': 'http://www.galactic-energy.cn',
  'CNES': 'https://cnes.fr',
  'DLR': 'https://www.dlr.de',
  'CSA': 'https://www.asc-csa.gc.ca'
};

// 🧠 स्मार्ट फंक्शन: एजेंसी के नाम से सही लिंक ढूंढेगा
const getAgencyLink = (providerName) => {
  if (!providerName) return 'https://www.nasa.gov';
  
  // अगर सीधा नाम मिल जाए
  for (const [key, url] of Object.entries(providerUrls)) {
    if (providerName.toLowerCase().includes(key.toLowerCase())) {
      return url;
    }
  }
  
  // अगर लंबा नाम है तो कीवर्ड से पहचानो
  const p = providerName.toLowerCase();
  if (p.includes('space research') || p.includes('isro')) return providerUrls['ISRO'];
  if (p.includes('national aeronautics') || p.includes('nasa')) return providerUrls['NASA'];
  if (p.includes('china national space') || p.includes('cnsa')) return providerUrls['CNSA'];
  if (p.includes('european space') || p.includes('esa')) return providerUrls['ESA'];
  if (p.includes('spacex')) return providerUrls['SpaceX'];
  if (p.includes('rocket lab')) return providerUrls['Rocket Lab'];
  if (p.includes('cas space')) return providerUrls['CAS Space'];
  
  // अगर बिल्कुल भी नहीं मिला, तो Google पर सर्च करके खोल दो
  return `https://www.google.com/search?q=${encodeURIComponent(providerName + ' official website')}`;
};

const calculateTimeLeft = (targetDate) => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft = {};
  if (difference > 0) {
    timeLeft = {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  } else {
    timeLeft = { hours: 0, minutes: 0, seconds: 0 };
  }
  return timeLeft;
};

const getEmbedUrl = (url) => {
  if (!url) return '';
  if (url.includes('youtube.com/watch?v=')) return url.replace('watch?v=', 'embed/') + '?autoplay=1';
  if (url.includes('youtu.be/')) return url.replace('youtu.be/', 'youtube.com/embed/') + '?autoplay=1';
  return url;
};

const getFullAgencyName = (shortName) => {
  if (!shortName) return 'Unknown Agency';
  const name = shortName.toLowerCase();
  if (name.includes('isro')) return 'Indian Space Research Organisation';
  if (name.includes('spacex')) return 'Space Exploration Technologies Corp.';
  if (name.includes('nasa')) return 'National Aeronautics and Space Administration';
  if (name.includes('esa')) return 'European Space Agency';
  if (name.includes('roscosmos')) return 'State Space Corporation Roscosmos';
  if (name.includes('jaxa')) return 'Japan Aerospace Exploration Agency';
  if (name.includes('cnsa')) return 'China National Space Administration';
  if (name.includes('rocket lab')) return 'Rocket Lab USA, Inc.';
  return shortName; 
};

function TodayLaunches() {
  const [launches, setLaunches] = useState([]); 
  const [timeLefts, setTimeLefts] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [activeStreamUrl, setActiveStreamUrl] = useState(null); 

  useEffect(() => {
    const fetchLaunches = async () => {
      const CACHE_KEY = 'space_launches_cache_v5';
      const CACHE_TIME_KEY = 'space_launches_cache_time_v5';
      
      const now = new Date().getTime();
      const cachedTime = localStorage.getItem(CACHE_TIME_KEY);
      const cachedData = JSON.parse(localStorage.getItem(CACHE_KEY));

      let shouldFetch = true;

      if (cachedData && cachedTime) {
        const isCacheValid = (now - cachedTime) < 24 * 60 * 60 * 1000;
        const firstLaunchTime = cachedData[0]?.launchTime ? new Date(cachedData[0].launchTime).getTime() : 0;
        const isFirstLaunchUpcoming = firstLaunchTime > now;

        if (isCacheValid && isFirstLaunchUpcoming) {
          shouldFetch = false;
          setLaunches(cachedData);
          setTimeLefts(cachedData.map(l => calculateTimeLeft(l.launchTime)));
          setLoading(false);
        }
      }

      if (!shouldFetch) return;

      try {
        const response = await fetch('https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=4');
        if (!response.ok) throw new Error('API Limit Reached');

        const data = await response.json();
        
        const formattedLaunches = data.results.map(launch => ({
          id: launch.id,
          name: launch.name,
          agency: launch.launch_service_provider?.name || 'Unknown Agency',
          // 🚀 यहाँ API का लिंक हटाकर हमारा स्मार्ट लिंक फंक्शन लगा दिया है
          agencyUrl: getAgencyLink(launch.launch_service_provider?.name),
          image: launch.image_url || 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=400&auto=format&fit=crop',
          launchTime: launch.net, 
          streamUrl: launch.vidURLs && launch.vidURLs.length > 0 ? launch.vidURLs[0].url : null,
          isLive: launch.webcast_live || false 
        }));

        localStorage.setItem(CACHE_KEY, JSON.stringify(formattedLaunches));
        localStorage.setItem(CACHE_TIME_KEY, now.toString());

        setLaunches(formattedLaunches);
        setTimeLefts(formattedLaunches.map(l => calculateTimeLeft(l.launchTime)));
      } catch (err) {
        console.warn("API Failed, using backup/old data:", err.message);
        if (cachedData && cachedData.length > 0) {
           setLaunches(cachedData);
           setTimeLefts(cachedData.map(l => calculateTimeLeft(l.launchTime)));
        } else {
           // फॉलबैक (अगर बिल्कुल डेटा न आए)
           const fallback = [
             { id: '1', name: 'Gaganyaan Test Flight', agency: 'ISRO', agencyUrl: 'https://www.isro.gov.in', image: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=400&auto=format&fit=crop', launchTime: new Date(Date.now() + 3600000), streamUrl: null, isLive: false },
             { id: '2', name: 'Artemis II Mission', agency: 'NASA', agencyUrl: 'https://www.nasa.gov', image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=400&auto=format&fit=crop', launchTime: new Date(Date.now() + 7200000), streamUrl: null, isLive: false },
           ];
           setLaunches(fallback);
           setTimeLefts(fallback.map(l => calculateTimeLeft(l.launchTime)));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchLaunches();
  }, []);

  useEffect(() => {
    if (launches.length === 0) return;
    const timer = setInterval(() => {
      setTimeLefts(launches.map(launch => calculateTimeLeft(launch.launchTime)));
    }, 1000);
    return () => clearInterval(timer);
  }, [launches]);

  if (loading) return <section className="today-launches-section"><h2 className="today-heading">Loading Launches...</h2></section>;

  return (
    <section className="today-launches-section">
      <h2 className="today-heading">Top 4 Upcoming Launches</h2>
      
      <div className="today-grid">
        {launches.map((launch, index) => {
          const timeLeft = timeLefts[index];
          const isLiveNow = launch.isLive || (timeLeft?.hours === 0 && timeLeft?.minutes === 0 && timeLeft?.seconds === 0);

          return (
            <div key={launch.id} className="launch-card">
              <div className="launch-img-box" onClick={() => launch.streamUrl && setActiveStreamUrl(launch.streamUrl)} style={{ cursor: launch.streamUrl ? 'pointer' : 'default' }}>
                <img src={launch.image} alt={launch.name} className="launch-img" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=400&auto=format&fit=crop' }} />
                <div className={`live-tag ${isLiveNow ? 'is-live' : ''}`}>{isLiveNow ? '🔴 LIVE NOW' : 'LIVE SOON'}</div>
                {launch.streamUrl && <div className="play-overlay"><div className="play-btn">▶</div></div>}
              </div>

              <div className="launch-info">
                <p className="launch-agency">{getFullAgencyName(launch.agency)}</p>
                <h3 className="launch-name">{launch.name}</h3>
                
                {!isLiveNow && timeLeft && (
                  <div className="countdown-timer">
                    <div className="time-box"><span className="time-num">{String(timeLeft.hours).padStart(2, '0')}</span><span className="time-label">HRS</span></div>
                    <span className="time-colon">:</span>
                    <div className="time-box"><span className="time-num">{String(timeLeft.minutes).padStart(2, '0')}</span><span className="time-label">MIN</span></div>
                    <span className="time-colon">:</span>
                    <div className="time-box"><span className="time-num">{String(timeLeft.seconds).padStart(2, '0')}</span><span className="time-label">SEC</span></div>
                  </div>
                )}

                {/* 🚀 अब यह बटन सीधे सही वेबसाइट पर जाएगा */}
                <a href={launch.agencyUrl} target="_blank" rel="noopener noreferrer" className="explore-btn">
                  Explore {launch.agency.length > 15 ? 'Agency' : launch.agency}
                </a>

                {isLiveNow && launch.streamUrl && (
                   <button className="watch-live-btn" onClick={() => setActiveStreamUrl(launch.streamUrl)}>Watch Live Stream</button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {activeStreamUrl && (
        <div className="video-modal-overlay" onClick={() => setActiveStreamUrl(null)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setActiveStreamUrl(null)}>✖</button>
            <iframe src={getEmbedUrl(activeStreamUrl)} title="Live Launch Stream" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      )}
    </section>
  );
}

export default TodayLaunches;