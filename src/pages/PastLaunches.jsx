import { useState, useEffect } from 'react';
import './PastLaunches.css';

// 🌍 दुनिया की सभी बड़ी स्पेस एजेंसियों और कंपनियों के लिंक
const providerUrls = {
  'SpaceX': 'https://www.spacex.com',
  'NASA': 'https://www.nasa.gov',
  'ISRO': 'https://www.isro.gov.in',
  'CNSA': 'https://www.cnsa.gov.cn',
  'ESA': 'https://www.esa.int',
  'Roscosmos': 'https://www.roscosmos.ru',
  'JAXA': 'https://global.jaxa.jp',
  'CNES': 'https://cnes.fr',
  'DLR': 'https://www.dlr.de',
  'CSA': 'https://www.asc-csa.gc.ca',
  'Rocket Lab': 'https://www.rocketlabusa.com',
  'ULA': 'https://www.ulalaunch.com',
  'Arianespace': 'https://www.arianespace.com',
  'Blue Origin': 'https://www.blueorigin.com',
  'Northrop Grumman': 'https://www.northropgrumman.com',
  'CASC': 'https://www.spacechina.com',
  'CAS Space': 'http://www.casspace.com',
  'Galactic Energy': 'http://www.galactic-energy.cn',
  'KARI': 'https://www.kari.re.kr',
  'UAESA': 'https://www.space.gov.ae'
};

// 🧠 स्मार्ट फंक्शन: एजेंसी के नाम और देश से सही लिंक ढूंढेगा
const getAgencyLink = (providerName, countryName) => {
  if (providerName) {
    // 1. सीधा नाम मैच करो
    for (const [key, url] of Object.entries(providerUrls)) {
      if (providerName.toLowerCase().includes(key.toLowerCase())) {
        return url;
      }
    }
    // 2. अगर लंबा नाम है तो कीवर्ड मैच करो
    const p = providerName.toLowerCase();
    if (p.includes('spacex')) return providerUrls['SpaceX'];
    if (p.includes('space research') || p.includes('isro')) return providerUrls['ISRO'];
    if (p.includes('national aeronautics') || p.includes('nasa')) return providerUrls['NASA'];
    if (p.includes('china national space') || p.includes('cnsa')) return providerUrls['CNSA'];
    if (p.includes('european space') || p.includes('esa')) return providerUrls['ESA'];
    if (p.includes('roscosmos') || p.includes('russian federal')) return providerUrls['Roscosmos'];
    if (p.includes('japan aerospace') || p.includes('jaxa')) return providerUrls['JAXA'];
    if (p.includes('arianespace')) return providerUrls['Arianespace'];
    if (p.includes('rocket lab')) return providerUrls['Rocket Lab'];
    if (p.includes('united launch')) return providerUrls['ULA'];
  }

  // 3. अगर एजेंसी नाम से नहीं मिला, तो देश के नाम से देखो
  if (countryName) {
    const c = countryName.toLowerCase();
    if (c === 'usa') return providerUrls['NASA'];
    if (c === 'india') return providerUrls['ISRO'];
    if (c === 'china') return providerUrls['CNSA'];
    if (c === 'europe') return providerUrls['ESA'];
    if (c === 'russia') return providerUrls['Roscosmos'];
    if (c === 'japan') return providerUrls['JAXA'];
    if (c === 'france') return providerUrls['CNES'];
    if (c === 'germany') return providerUrls['DLR'];
    if (c === 'canada') return providerUrls['CSA'];
  }

  // 4. आखिरी रास्ता: Google पर एजेंसी का नाम सर्च करो
  return `https://www.google.com/search?q=${encodeURIComponent((providerName || countryName || 'Space Agency') + ' official website')}`;
};

const countryData = {
  'USA': { logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/NASA_logo.svg/200px-NASA_logo.svg.png' },
  'India': { logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Indian_Space_Research_Organisation_Logo.svg/200px-Indian_Space_Research_Organisation_Logo.svg.png' },
  'China': { logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/China_National_Space_Administration_logo.svg/200px-China_National_Space_Administration_logo.svg.png' },
  'Europe': { logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/European_Space_Agency_logo.svg/200px-European_Space_Agency_logo.svg.png' },
  'Russia': { logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Roscosmos_logo_en.svg/200px-Roscosmos_logo_en.svg.png' },
  'Japan': { logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/JAXA_logo.svg/200px-JAXA_logo.svg.png' },
  'France': { logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Logo_CNES.svg/200px-Logo_CNES.svg.png' },
  'Germany': { logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/DLR_Logo.svg/200px-DLR_Logo.svg.png' },
  'Canada': { logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Canadian_Space_Agency_logo.svg/200px-Canadian_Space_Agency_logo.svg.png' }
};

const generateFallbackData = () => {
  let data = [];
  const missions = {
    'USA': ['Apollo 11', 'Artemis I', 'Falcon Heavy Test'],
    'India': ['Chandrayaan-3', 'Mangalyaan', 'Gaganyaan TV-D1'],
    'China': ['Chang\'e 5', 'Tianwen-1', 'Shenzhou 12'],
    'Europe': ['Rosetta', 'BepiColombo', 'Ariane 5 VA-259'],
    'Russia': ['Soyuz MS-10', 'Luna 25', 'Spektr-RG'],
    'Japan': ['Hayabusa2', 'SLIM', 'HTV-9'],
    'France': ['Spot 7', 'Jason-3', 'SWOT'],
    'Germany': ['TerraSAR-X', 'GRACE-FO', 'EnMAP'],
    'Canada': ['Canadarm2', 'RADARSAT-2', 'NEOSSat']
  };

  Object.keys(missions).forEach(country => {
    missions[country].forEach((name, index) => {
      // 🚀 यहाँ हमने सही एजेंसी का नाम सेट किया है
      let agencyName = 'Unknown';
      if (country === 'USA') agencyName = index === 0 ? 'NASA' : 'SpaceX';
      if (country === 'India') agencyName = 'ISRO';
      if (country === 'China') agencyName = 'CNSA';
      if (country === 'Europe') agencyName = 'ESA';
      if (country === 'Russia') agencyName = 'Roscosmos';
      if (country === 'Japan') agencyName = 'JAXA';
      if (country === 'France') agencyName = 'CNES';
      if (country === 'Germany') agencyName = 'DLR';
      if (country === 'Canada') agencyName = 'CSA';

      data.push({
        id: `${country}-fallback-${index}`,
        name: name,
        agency: agencyName,
        country: country,
        logo: countryData[country].logo,
        // 🚀 अब यह सीधा सही एजेंसी का लिंक देगा
        agencyUrl: getAgencyLink(agencyName, country), 
        image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=400&auto=format&fit=crop',
        date: 'Historic Mission',
        location: `${country} Launch Site`,
        description: `A significant historical mission launched by ${agencyName}.`
      });
    });
  });
  return data;
};

function PastLaunches() {
  const [pastLaunches, setPastLaunches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPastLaunches = async () => {
      // 🚀 v8 कैश चेक
      const cachedData = localStorage.getItem('past_launches_27_v8');
      
      if (cachedData) {
        setPastLaunches(JSON.parse(cachedData));
        setLoading(false);
        return;
      }

      const fallbackData = generateFallbackData();

      try {
        const response = await fetch('https://ll.thespacedevs.com/2.2.0/launch/previous/?limit=150');
        if (!response.ok) throw new Error('API Limit Reached');

        const data = await response.json();
        
        const targetCountries = ['USA', 'China', 'Europe', 'Russia', 'India', 'Japan', 'France', 'Germany', 'Canada'];
        const countryCounts = targetCountries.reduce((acc, c) => ({ ...acc, [c]: 0 }), {});
        const seenProviders = new Set(); 
        let filteredLaunches = [];

        for (let launch of data.results) {
          if (filteredLaunches.length === 27) break;

          const provider = launch.launch_service_provider?.name || '';
          const locCountry = launch.pad?.location?.country?.name || '';
          let matchedCountry = null;

          if ((provider.includes('SpaceX') || provider.includes('NASA') || provider.includes('ULA') || provider.includes('Rocket Lab') || locCountry.includes('United States')) && countryCounts['USA'] < 3) matchedCountry = 'USA';
          else if ((provider.includes('CNSA') || locCountry.includes('China') || provider.includes('CAS Space') || provider.includes('Galactic Energy')) && countryCounts['China'] < 3) matchedCountry = 'China';
          else if ((provider.includes('ESA') || provider.includes('Arianespace') || locCountry.includes('Europe')) && countryCounts['Europe'] < 3) matchedCountry = 'Europe';
          else if ((provider.includes('Roscosmos') || locCountry.includes('Russia')) && countryCounts['Russia'] < 3) matchedCountry = 'Russia';
          else if ((provider.includes('ISRO') || locCountry.includes('India')) && countryCounts['India'] < 3) matchedCountry = 'India';
          else if ((provider.includes('JAXA') || locCountry.includes('Japan')) && countryCounts['Japan'] < 3) matchedCountry = 'Japan';
          else if ((provider.includes('DLR') || locCountry.includes('Germany')) && countryCounts['Germany'] < 3) matchedCountry = 'Germany';
          else if ((provider.includes('CNES') || locCountry.includes('France')) && countryCounts['France'] < 3) matchedCountry = 'France';
          else if ((provider.includes('CSA') || locCountry.includes('Canada')) && countryCounts['Canada'] < 3) matchedCountry = 'Canada';

          if (matchedCountry && countryCounts[matchedCountry] < 3) {
            if (countryCounts[matchedCountry] > 0 && seenProviders.has(provider) && provider === 'SpaceX') {
              continue; 
            }

            countryCounts[matchedCountry]++;
            seenProviders.add(provider);

            // 🚀 सही लिंक जनरेट करो
            const finalAgencyUrl = getAgencyLink(provider, matchedCountry);

            filteredLaunches.push({
              id: launch.id,
              name: launch.name,
              agency: provider,
              country: matchedCountry,
              logo: launch.launch_service_provider?.image_url || countryData[matchedCountry]?.logo,
              agencyUrl: finalAgencyUrl,
              image: launch.image_url || 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=400&auto=format&fit=crop',
              date: new Date(launch.net).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
              location: launch.pad?.location?.name || 'Unknown Location',
              description: launch.mission?.description || 'No description available for this mission.'
            });
          }
        }

        targetCountries.forEach(country => {
          while (countryCounts[country] < 3) {
            const fallbackIndex = countryCounts[country];
            const fallbackItem = fallbackData.find(d => d.country === country && d.id.includes(`fallback-${fallbackIndex}`));
            if (fallbackItem) {
              countryCounts[country]++;
              filteredLaunches.push(fallbackItem);
            } else {
              break;
            }
          }
        });

        localStorage.setItem('past_launches_27_v8', JSON.stringify(filteredLaunches));
        setPastLaunches(filteredLaunches);
        setLoading(false);

      } catch (error) {
        console.warn("API Failed, loading 27 fallback missions:", error.message);
        setPastLaunches(fallbackData);
        setLoading(false);
      }
    };
    
    fetchPastLaunches();
  }, []);

  if (loading) return <div className="page-header"><h1>Loading Historical Launches...</h1></div>;

  return (
    <div className="past-page-wrapper">
      <div className="page-header">
        <h1>Top 9 Space Countries</h1>
        <p>Explore 3 historical missions from each of the world's leading space-faring nations.</p>
      </div>

      <div className="past-grid">
        {pastLaunches.map((launch) => (
          <div key={launch.id} className="past-card">
            
            <div className="past-img-box">
              <img 
                src={launch.image} 
                alt={launch.name} 
                className="past-img" 
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=400&auto=format&fit=crop' }} 
              />
              <div className="country-badge">
                {launch.country}
              </div>
              <div className="past-date-badge">{launch.date}</div>
            </div>

            <div className="past-info">
              <div className="agency-header">
                <img src={launch.logo} alt={launch.agency} className="agency-logo" onError={(e) => { e.target.style.display = 'none' }} />
                <div>
                  <h4>{launch.agency}</h4>
                </div>
              </div>
              
              <h3 className="launch-title">{launch.name}</h3>
              <p className="launch-location">📍 {launch.location}</p>
              <p className="launch-desc">{launch.description}</p>
              
              {/* 🚀 बटन जो सीधे सही वेबसाइट पर ले जाएगा */}
              <a href={launch.agencyUrl} target="_blank" rel="noopener noreferrer" className="explore-btn">
                Explore {launch.agency.length > 15 ? 'Agency' : launch.agency}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PastLaunches;