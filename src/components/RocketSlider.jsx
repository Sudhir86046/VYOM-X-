import { useState, useEffect } from 'react';
import './RocketSlider.css';

const rocketsData = [
  { id: 1, name: 'Falcon 9', country: 'USA', agency: 'SpaceX', img: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=800&auto=format&fit=crop', status: 'Active', firstLaunch: '2010', desc: 'Falcon 9 is a partially reusable two-stage-to-orbit medium-lift launch vehicle designed and manufactured by SpaceX. It is powered by Merlin engines burning cryogenic liquid oxygen and rocket-grade kerosene (RP-1).', source: 'https://www.spacex.com/vehicles/falcon-9/' },
  { id: 2, name: 'Falcon Heavy', country: 'USA', agency: 'SpaceX', img: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=800&auto=format&fit=crop', status: 'Active', firstLaunch: '2018', desc: 'Falcon Heavy is a partially reusable heavy-lift launch vehicle. It consists of three Falcon 9 first-stage boosters strapped together, generating more than 5 million pounds of thrust at liftoff.', source: 'https://www.spacex.com/vehicles/falcon-heavy/' },
  { id: 3, name: 'PSLV', country: 'India', agency: 'ISRO', img: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=800&auto=format&fit=crop', status: 'Active', firstLaunch: '1993', desc: 'The Polar Satellite Launch Vehicle (PSLV) is an expendable medium-lift launch vehicle. It is famous for launching Chandrayaan-1 and Mangalyaan, proving ISRO\'s cost-effective engineering.', source: 'https://www.isro.gov.in/ISRO_EN/Launchers.html' },
  { id: 4, name: 'LVM3 (GSLV Mk III)', country: 'India', agency: 'ISRO', img: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=800&auto=format&fit=crop', status: 'Active', firstLaunch: '2014', desc: 'LVM3 is a three-stage heavy-lift launch vehicle. It recently successfully launched Chandrayaan-3, demonstrating India\'s capability to reach deep space and planetary orbits.', source: 'https://www.isro.gov.in/ISRO_EN/Launchers.html' },
  { id: 5, name: 'Long March 5', country: 'China', agency: 'CASC', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop', status: 'Active', firstLaunch: '2016', desc: 'The Long March 5 is a Chinese heavy-lift launch vehicle. It is one of the most powerful rockets in the world, primarily used for planetary exploration and launching space station modules.', source: 'https://english.spacechina.com/' },
  { id: 6, name: 'Long March 2D', country: 'China', agency: 'CASC', img: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=800&auto=format&fit=crop', status: 'Active', firstLaunch: '1992', desc: 'The Long March 2D is a two-stage launch vehicle. It is highly reliable and frequently used for launching Earth observation and reconnaissance satellites into low Earth orbit.', source: 'https://english.spacechina.com/' },
  { id: 7, name: 'Soyuz-2.1a', country: 'Russia', agency: 'Roscosmos', img: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=800&auto=format&fit=crop', status: 'Active', firstLaunch: '2004', desc: 'The Soyuz-2.1a is a modernized version of the legendary Soyuz rocket. It is the workhorse of the Russian space program, currently used to transport astronauts and cargo to the ISS.', source: 'https://en.wikipedia.org/wiki/Soyuz-2' },
  { id: 8, name: 'Angara A5', country: 'Russia', agency: 'Roscosmos', img: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=800&auto=format&fit=crop', status: 'Active', firstLaunch: '2014', desc: 'Angara A5 is a Russian heavy-lift launch vehicle. It is designed to replace several older rockets and is built using a modular approach with Universal Rocket Modules (URMs).', source: 'https://en.wikipedia.org/wiki/Angara_(rocket_family)' },
  { id: 9, name: 'H3', country: 'Japan', agency: 'JAXA', img: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=800&auto=format&fit=crop', status: 'Active', firstLaunch: '2023', desc: 'The H3 is a Japanese expendable launch vehicle. It features a new LE-9 engine and is designed to provide flexible and cost-effective access to space for commercial and government satellites.', source: 'https://global.jaxa.jp/projects/rockets/h3/' },
  { id: 10, name: 'Epsilon', country: 'Japan', agency: 'JAXA', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop', status: 'Active', firstLaunch: '2013', desc: 'Epsilon is a Japanese solid-fueled rocket. It is designed for launching scientific satellites and is known for its highly automated launch procedures, requiring only a few personnel.', source: 'https://global.jaxa.jp/projects/rockets/epsilon/' },
  { id: 11, name: 'Ariane 6', country: 'Europe', agency: 'ArianeGroup', img: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=800&auto=format&fit=crop', status: 'Active', firstLaunch: '2024', desc: 'Ariane 6 is the latest European heavy-lift launch vehicle, designed to replace the Ariane 5. It is built with a modular design, featuring a restartable upper stage for complex missions.', source: 'https://www.arianespace.com/ariane-6/' },
  { id: 12, name: 'Ariane 5', country: 'Europe', agency: 'ArianeGroup', img: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=800&auto=format&fit=crop', status: 'Retired', firstLaunch: '1996', desc: 'Ariane 5 was a legendary European heavy-lift rocket. It had an incredibly successful career, launching the James Webb Space Telescope and numerous commercial communication satellites.', source: 'https://www.arianespace.com/' },
  { id: 13, name: 'Vega-C', country: 'Europe', agency: 'Avio', img: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=800&auto=format&fit=crop', status: 'Active', firstLaunch: '2022', desc: 'Vega-C is an Italian-led European expendable launch system. It is designed to launch small payloads into polar and low Earth orbits, offering a cost-effective alternative to larger rockets.', source: 'https://www.avio.com/' },
  { id: 14, name: 'Vega', country: 'Europe', agency: 'Avio', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop', status: 'Active', firstLaunch: '2012', desc: 'Vega was the smaller launcher in the European fleet. It used solid rocket motors for all stages and was highly successful in launching Earth observation satellites like the Sentinel series.', source: 'https://www.avio.com/' },
  { id: 15, name: 'Nuri (KSLV-II)', country: 'South Korea', agency: 'KARI', img: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=800&auto=format&fit=crop', status: 'Active', firstLaunch: '2021', desc: 'Nuri is South Korea\'s first fully indigenous orbital rocket. Its successful launch made South Korea the 7th country in the world to develop a space launch vehicle capable of carrying satellites.', source: 'https://en.wikipedia.org/wiki/Nuri_(rocket)' },
  { id: 16, name: 'HANBIT-Nano', country: 'South Korea', agency: 'Innospace', img: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=800&auto=format&fit=crop', status: 'In Dev', firstLaunch: 'N/A', desc: 'HANBIT-Nano is a South Korean small-lift launch vehicle developed by a private startup, Innospace. It is designed to launch small satellites into low Earth orbit at a very low cost.', source: 'https://en.wikipedia.org/wiki/Hanbit_(rocket)' },
  { id: 17, name: 'Simorgh', country: 'Iran', agency: 'ISA', img: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=800&auto=format&fit=crop', status: 'Active', firstLaunch: '2016', desc: 'Simorgh is an Iranian expendable small-lift launch vehicle. It is designed to place small satellites into low Earth orbit and represents Iran\'s growing indigenous space technology.', source: 'https://en.wikipedia.org/wiki/Simorgh_(rocket)' },
  { id: 18, name: 'Qased', country: 'Iran', agency: 'IRGC', img: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=800&auto=format&fit=crop', status: 'Active', firstLaunch: '2020', desc: 'Qased is an Iranian small-lift launch vehicle operated by the aerospace force of the IRGC. It uses a combination of solid and liquid propulsion to put small reconnaissance satellites into orbit.', source: 'https://en.wikipedia.org/wiki/Qased_(rocket)' },
  { id: 19, name: 'Shavit', country: 'Israel', agency: 'IAI', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop', status: 'Active', firstLaunch: '1988', desc: 'Shavit is an Israeli expendable small-lift launch vehicle. It uses solid rocket motors and is uniquely designed to launch retrograde orbits westward over the Mediterranean Sea to avoid hostile territories.', source: 'https://en.wikipedia.org/wiki/Shavit' },
  { id: 20, name: 'Shavit-2', country: 'Israel', agency: 'IAI', img: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=800&auto=format&fit=crop', status: 'Active', firstLaunch: '2007', desc: 'Shavit-2 is an upgraded version of the Shavit rocket. It features enhanced solid rocket motors, allowing it to carry heavier reconnaissance payloads into low Earth orbit.', source: 'https://en.wikipedia.org/wiki/Shavit' },
];

function RocketSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % rocketsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + rocketsData.length) % rocketsData.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 10000); // 🚀 10 सेकंड में बदलेगा
    return () => clearInterval(timer);
  }, [currentIndex]);

  const activeRocket = rocketsData[currentIndex];

  return (
    <section className="rocket-slider-section">
      
      <h2 className="slider-heading">BEYOND LIFTOFF</h2>
      <p className="slider-subheading">Discover the machines taking humanity into space.</p>
      
      <div className="single-slide-container">
        
        <button className="nav-arrow left" onClick={prevSlide}>&#10094;</button>

        <div className="main-rocket-card" key={currentIndex}>
          
          <div className="text-content">
            <h3 className="r-name">{activeRocket.name}</h3>
            <p className="r-agency">{activeRocket.agency} • {activeRocket.country}</p>
            
            <div className="r-tags">
              <span className="r-tag status">{activeRocket.status}</span>
              <span className="r-tag launch">First Launch: {activeRocket.firstLaunch}</span>
            </div>

            <p className="r-desc">{activeRocket.desc}</p>

            <a href={activeRocket.source} target="_blank" rel="noopener noreferrer" className="read-more-btn">
              Read Full Details →
            </a>
          </div>

          <div className="image-content">
            <img 
              src={activeRocket.img} 
              alt={activeRocket.name} 
              className="r-image"
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=800&auto=format&fit=crop' }}
            />
            <div className="img-overlay"></div>
          </div>

        </div>

        <button className="nav-arrow right" onClick={nextSlide}>&#10095;</button>
      </div>
    </section>
  );
}

export default RocketSlider;