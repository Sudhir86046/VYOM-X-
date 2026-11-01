import React, { useState } from 'react';
import './SpaceHeroes.css';

// 🚀 सारा डेटा यहीं पर सेव कर दिया है
const countriesData = [
  {
    country: 'UNITED STATES',
    flag: '🇺🇸',
    intro: 'The United States leads global space exploration through NASA, achieving historic milestones like the Apollo Moon landings, the Space Shuttle program, and modern Mars exploration.',
    agency: 'NASA',
    heroes: [
      {
        id: 'neil-armstrong',
        name: 'NEIL ARMSTRONG',
        desc: 'First human to walk on the Moon.',
        img: 'Neil_Armstrong_pose.jpg',
        wiki: 'https://en.wikipedia.org/wiki/Neil_Armstrong',
        birth: 'August 5, 1930',
        death: 'August 25, 2012',
        profession: 'Astronaut, Aeronautical Engineer, Test Pilot',
        agency: 'NASA',
        earlyLife: 'Born in Wapakoneta, Ohio, Armstrong developed a passion for flying at a young age, earning his pilot\'s license at 15. He studied aeronautical engineering at Purdue University.',
        career: 'He served as a naval aviator in the Korean War, later becoming a highly skilled test pilot for the X-15 rocket plane before being selected as an astronaut in 1962.',
        achievements: ['First human to set foot on the Moon (Apollo 11).', 'Awarded the Presidential Medal of Freedom.', 'Pioneered test flights for the X-15 rocket plane.'],
        missions: [
          { name: 'Gemini 8', year: '1966', objective: 'First docking of two spacecraft in orbit.', significance: 'Proved critical orbital rendezvous techniques.' },
          { name: 'Apollo 11', year: '1969', objective: 'First crewed lunar landing.', significance: 'Historic first steps on the Moon.' }
        ],
        quote: '"That\'s one small step for [a] man, one giant leap for mankind."',
        facts: ['He was a decorated Korean War veteran.', 'He had a Bachelor\'s degree in Aeronautical Engineering.']
      },
      {
        id: 'wernher-von-braun',
        name: 'WERNHER VON BRAUN',
        desc: 'Chief architect of the Saturn V rocket.',
        img: 'Wernher_von_Braun_crop.jpg',
        wiki: 'https://en.wikipedia.org/wiki/Wernher_von_Braun',
        birth: 'March 23, 1912',
        death: 'June 16, 1977',
        profession: 'Aerospace Engineer, Rocket Scientist',
        agency: 'NASA',
        earlyLife: 'Born in Germany, he was fascinated by space travel from a young age and studied physics and engineering.',
        career: 'He led the development of the V-2 rocket in Nazi Germany, later moving to the US where he became the first director of NASA\'s Marshall Space Flight Center.',
        achievements: ['Developed the Saturn V rocket that took humans to the Moon.', 'Pioneered liquid-fueled rocket technology.', 'Key figure in the Apollo program.'],
        missions: [{ name: 'Apollo Program', year: '1960s', objective: 'Lunar landing.', significance: 'Engineered the Saturn V launch vehicle.' }],
        quote: '"We can lick gravity, but sometimes the paperwork is overwhelming."',
        facts: ['He was a key figure in the US space program.', 'He developed the V-2 rocket during WWII.']
      },
      { id: 'robert-goddard', name: 'ROBERT H. GODDARD', desc: 'Father of modern rocketry.', img: 'Dr._Robert_H._Goddard_-_GPN-2002-000131.jpg', wiki: 'https://en.wikipedia.org/wiki/Robert_H._Goddard', birth: 'October 5, 1882', death: 'August 10, 1945', profession: 'Engineer, Physicist', agency: 'Independent', quote: '"It is difficult to say what is impossible, for the dream of yesterday is the hope of today."' },
      { id: 'katherine-johnson', name: 'KATHERINE JOHNSON', desc: 'Mathematician whose calculations were critical to NASA.', img: 'Katherine_Johnson_1983.jpg', wiki: 'https://en.wikipedia.org/wiki/Katherine_Johnson', birth: 'August 26, 1918', death: 'February 24, 2020', profession: 'Mathematician', agency: 'NASA', quote: '"Girls are capable of doing everything men are capable of doing."' },
      { id: 'carl-sagan', name: 'CARL SAGAN', desc: 'Astronomer and science communicator.', img: 'Carl_Sagan_Planetary_Society.jpg', wiki: 'https://en.wikipedia.org/wiki/Carl_Sagan', birth: 'November 9, 1934', death: 'December 20, 1996', profession: 'Astronomer, Cosmologist', agency: 'NASA', quote: '"Somewhere, something incredible is waiting to be known."' }
    ]
  },
  {
    country: 'INDIA',
    flag: '🇮🇳',
    intro: 'India\'s space program, led by ISRO, has achieved remarkable feats with low budgets, including the Mars Orbiter Mission (Mangalyaan) and the historic Chandrayaan-3 lunar landing.',
    agency: 'ISRO',
    heroes: [
      {
        id: 'vikram-sarabhai',
        name: 'VIKRAM SARABHAI',
        desc: 'Father of the Indian space program.',
        img: 'Dr_Vikram_Sarabhai_ISRO.jpg',
        wiki: 'https://en.wikipedia.org/wiki/Vikram_Sarabhai',
        birth: 'August 12, 1919',
        death: 'December 30, 1971',
        profession: 'Physicist, Industrialist',
        agency: 'ISRO',
        earlyLife: 'Born in Ahmedabad, he studied at Cambridge University and returned to India to establish the Physical Research Laboratory.',
        career: 'He convinced the government to start a space program, founding ISRO in 1969.',
        achievements: ['Founded ISRO.', 'Initiated the Satellite Instructional Television Experiment (SITE).'],
        quote: '"If we do not have a vision, we will not have a mission."'
      },
      {
        id: 'apj-abdul-kalam',
        name: 'A.P.J. ABDUL KALAM',
        desc: 'Missile Man of India and 11th President.',
        img: 'A._P._J._Abdul_Kalam.jpg',
        wiki: 'https://en.wikipedia.org/wiki/A._P._J._Abdul_Kalam',
        birth: 'October 15, 1931',
        death: 'July 27, 2015',
        profession: 'Aerospace Scientist, President of India',
        agency: 'ISRO / DRDO',
        earlyLife: 'Born in Rameswaram, he studied aerospace engineering at Madras Institute of Technology.',
        career: 'He led India\'s missile development (Agni, Prithvi) and the Pokhran-II nuclear tests.',
        achievements: ['Developed India\'s first Satellite Launch Vehicle (SLV-III).', 'Led the Integrated Guided Missile Development Program.'],
        quote: '"Dream, dream, dream. Dreams transform into thoughts and thoughts result in action."'
      },
      { id: 'satish-dhawan', name: 'SATISH DHAWAN', desc: 'Former Chairman of ISRO.', img: 'S_Dhawan_official_Portrait_ISRO(1).jpg', wiki: 'https://en.wikipedia.org/wiki/Satish_Dhawan', birth: 'September 25, 1920', death: 'January 3, 2002', profession: 'Aerospace Engineer', agency: 'ISRO' },
      { id: 'k-sivan', name: 'K. SIVAN', desc: 'Former Chairman of ISRO.', img: 'K._Sivan.jpg', wiki: 'https://en.wikipedia.org/wiki/K._Sivan', birth: 'April 14, 1957', profession: 'Aerospace Engineer', agency: 'ISRO' },
      { id: 's-somanath', name: 'S. SOMANATH', desc: 'Current Chairman of ISRO.', img: 'S._Somanath,_Director ).jpg', wiki: 'https://en.wikipedia.org/wiki/S._Somanath', birth: 'July 1, 1963', profession: 'Aerospace Engineer', agency: 'ISRO' }
    ]
  },
  {
    country: 'RUSSIA',
    flag: '🇷🇺',
    intro: 'Russia (formerly the Soviet Union) pioneered human spaceflight, launching the first satellite (Sputnik), the first human (Yuri Gagarin), and the first space station (Salyut).',
    agency: 'Roscosmos',
    heroes: [
      {
        id: 'yuri-gagarin',
        name: 'YURI GAGARIN',
        desc: 'First human in space.',
        img: 'Yuri_Gagarin_with_awards_(cropped)_2.jpg',
        wiki: 'https://en.wikipedia.org/wiki/Yuri_Gagarin',
        birth: 'March 9, 1934',
        death: 'March 27, 1968',
        profession: 'Cosmonaut, Pilot',
        agency: 'Soviet Space Program',
        earlyLife: 'Born in a small village, he trained as a foundryman before joining the Soviet Air Force.',
        career: 'Selected as one of the first cosmonauts, he flew Vostok 1 in 1961.',
        achievements: ['First human in space.', 'Completed one orbit of the Earth.'],
        missions: [{ name: 'Vostok 1', year: '1961', objective: 'First human spaceflight.', significance: 'Orbited the Earth once.' }],
        quote: '"Poyekhali!" (Let\'s go!)'
      },
      { id: 'konstantin-tsiolkovsky', name: 'KONSTANTIN TSIOLKOVSKY', desc: 'Pioneer of astronautic theory.', img: 'Константин_Циолковский.jpg', wiki: 'https://en.wikipedia.org/wiki/Konstantin_Tsiolkovsky', birth: 'September 17, 1857', death: 'September 19, 1935', profession: 'Scientist, Rocket Theorist', agency: 'Independent', quote: '"The Earth is the cradle of humanity, but one cannot live in a cradle forever."' },
      { id: 'sergei-korolev', name: 'SERGEI KOROLEV', desc: 'Chief Designer of the Soviet space program.', img: 'Нина_и_Сергей_Королевы_(cropped).jpg', wiki: 'https://en.wikipedia.org/wiki/Sergei_Korolev', birth: 'January 12, 1907', death: 'January 14, 1966', profession: 'Rocket Engineer', agency: 'Soviet Space Program', quote: '"The rocket must be simple."' },
      { id: 'valentina-tereshkova', name: 'VALENTINA TERESHKOVA', desc: 'First woman in space.', img: 'Valentina_Tereshkova_(2024-02-29)_crop.jpg', wiki: 'https://en.wikipedia.org/wiki/Valentina_Tereshkova', birth: 'March 6, 1937', profession: 'Cosmonaut', agency: 'Soviet Space Program' },
      { id: 'alexei-leonov', name: 'ALEXEI LEONOV', desc: 'First person to walk in space.', img: 'Alexei_Leonov.jpg', wiki: 'https://en.wikipedia.org/wiki/Alexei_Leonov', birth: 'May 30, 1934', death: 'October 11, 2019', profession: 'Cosmonaut', agency: 'Soviet Space Program' }
    ]
  },
  {
    country: 'CHINA',
    flag: '🇨🇳',
    intro: 'China\'s CNSA has rapidly advanced its space program, building its own space station (Tiangong), landing rovers on the Moon (Chang\'e) and Mars (Tianwen-1).',
    agency: 'CNSA',
    heroes: [
      {
        id: 'qian-xuesen',
        name: 'QIAN XUESEN',
        desc: 'Father of Chinese rocketry.',
        img: '歸國後的錢學森.png',
        wiki: 'https://en.wikipedia.org/wiki/Qian_Xuesen',
        birth: 'December 11, 1911',
        death: 'October 31, 2009',
        profession: 'Aerospace Engineer, Cyberneticist',
        agency: 'CNSA',
        earlyLife: 'Studied in the US under Theodore von Kármán at Caltech, becoming a leading rocket scientist.',
        career: 'After returning to China, he founded and led China\'s missile and space programs.',
        achievements: ['Founded China\'s aerospace program.', 'Developed the Dongfeng ballistic missile.']
      },
      { id: 'ouyang-ziyuan', name: 'OUYANG ZIYUAN', desc: 'Chief scientist of the Chinese Lunar Exploration Program.', img: 'Ouyang_Ziyuan.jpg', wiki: 'https://en.wikipedia.org/wiki/Ouyang_Ziyuan', birth: 'October 9, 1935', profession: 'Astrophysicist, Lunar Scientist', agency: 'CNSA' },
      { id: 'wang-xiji', name: 'WANG XIJI', desc: 'Space technology expert and rocket scientist.', img: 'Wang_Xiji.jpg', wiki: 'https://en.wikipedia.org/wiki/Wang_Xiji', birth: 'February 26, 1933', profession: 'Rocket Scientist', agency: 'CNSA' },
      { id: 'sun-jiadong', name: 'SUN JIADONG', desc: 'Chief designer of the BeiDou Navigation Satellite System.', img: 'Sun Jiadong.jpg', wiki: 'https://en.wikipedia.org/wiki/Sun_Jiadong', birth: 'April 8, 1929', profession: 'Aerospace Engineer', agency: 'CNSA' },
      { id: 'qi-faren', name: 'QI FAREN', desc: 'Chief designer of the Shenzhou spacecraft.', img: 'Qi_FaRen.png', wiki: 'https://en.wikipedia.org/wiki/Qi_Faren', birth: 'November 26, 1933', profession: 'Spacecraft Engineer', agency: 'CNSA' }
    ]
  },
  {
    country: 'JAPAN',
    flag: '🇯🇵',
    intro: 'JAXA has made significant contributions to space science, including the Hayabusa asteroid sample-return missions and the Kibo module on the ISS.',
    agency: 'JAXA',
    heroes: [
      {
        id: 'mamoru-mohri',
        name: 'MAMORU MOHRI',
        desc: 'First Japanese astronaut to fly on the Space Shuttle.',
        img: 'Mamoru_Mohri_portrait_(4x5_cropped).jpg',
        wiki: 'https://en.wikipedia.org/wiki/Mamoru_Mohri',
        birth: 'January 29, 1948',
        profession: 'Astronaut, Ocean Engineer',
        agency: 'JAXA',
        earlyLife: 'Earned a doctorate in ocean engineering from MIT.',
        career: 'Flew on Space Shuttle missions STS-47 and STS-99.',
        achievements: ['First Japanese astronaut on the Space Shuttle.', 'Conducted materials science experiments in space.']
      },
      { id: 'hideo-shima', name: 'HIDEO SHIMA', desc: 'Engineer who led the development of the H-II rocket.', img: 'Hideo_Shima.jpg', wiki: 'https://en.wikipedia.org/wiki/Hideo_Shima', birth: '1943', profession: 'Aerospace Engineer', agency: 'JAXA' },
      { id: 'chiaki-mukai', name: 'CHIAKI MUKAI', desc: 'First Japanese woman in space.', img: 'Chiaki_Mukai.jpg', wiki: 'https://en.wikipedia.org/wiki/Chiaki_Mukai', birth: 'May 6, 1952', death: 'June 28, 2024', profession: 'Astronaut, Physician', agency: 'JAXA' },
      { id: 'koichi-wakata', name: 'KOICHI WAKATA', desc: 'Veteran JAXA astronaut and engineer.', img: 'Koichi_Wakata_Official_Portrait_(cropped)_2.jpg', wiki: 'https://en.wikipedia.org/wiki/Koichi_Wakata', birth: 'August 1, 1963', profession: 'Astronaut', agency: 'JAXA' },
      { id: 'soichi-noguchi', name: 'SOICHI NOGUCHI', desc: 'JAXA astronaut who flew on the Space Shuttle and Soyuz.', img: 'Soichi_Noguchi_at_Ellington_Field,_Departing_for_KSC,_2020_(Jsc2020e044848)_(cropped)_2.jpg', wiki: 'https://en.wikipedia.org/wiki/Soichi_Noguchi', birth: 'April 15, 1965', profession: 'Astronaut', agency: 'JAXA' }
    ]
  },
  {
    country: 'GERMANY',
    flag: '🇩🇪',
    intro: 'Germany has a rich history in rocketry and continues to be a key player in European space efforts through DLR and ESA.',
    agency: 'DLR / ESA',
    heroes: [
      {
        id: 'sigmund-jahn',
        name: 'SIGMUND JÄHN',
        desc: 'First German in space.',
        img: 'Sigmund_Jahn_cropped.jpg',
        wiki: 'https://en.wikipedia.org/wiki/Sigmund_J%C3%A4hn',
        birth: 'February 13, 1937',
        death: 'September 21, 2019',
        profession: 'Cosmonaut, Pilot',
        agency: 'Interkosmos',
        earlyLife: 'Served as a fighter pilot in the East German Air Force.',
        career: 'Flew to the Salyut 6 space station in 1978 aboard Soyuz 31.',
        achievements: ['First German citizen in space.']
      },
      { id: 'ulf-merbold', name: 'ULF MERBOLD', desc: 'First West German astronaut in space.', img: 'Ulf_D._Merbold.jpg', wiki: 'https://en.wikipedia.org/wiki/Ulf_Merbold', birth: 'June 20, 1941', profession: 'Physicist, Astronaut', agency: 'ESA' },
      { id: 'ernst-messerschmid', name: 'ERNST MESSERSCHMID', desc: 'German physicist and astronaut.', img: 'Ernst_Messerschmid_1.jpg', wiki: 'https://en.wikipedia.org/wiki/Ernst_Messerschmid', birth: 'November 21, 1945', profession: 'Physicist, Astronaut', agency: 'ESA' },
      { id: 'alexander-gerst', name: 'ALEXANDER GERST', desc: 'ESA astronaut and geophysicist.', img: 'Alexander_Gerst,_official_portrait_in_2017.jpg', wiki: 'https://en.wikipedia.org/wiki/Alexander_Gerst', birth: 'May 3, 1976', profession: 'Geophysicist, Astronaut', agency: 'ESA' },
      { id: 'reinhard-furrer', name: 'REINHARD FURRER', desc: 'German physicist and astronaut.', img: 'Reinhard_Furrer.jpg', wiki: 'https://en.wikipedia.org/wiki/Reinhard_Furrer', birth: 'November 25, 1940', profession: 'Physicist, Astronaut', agency: 'ESA' }
    ]
  }
];

function SpaceHeroes() {
  // 🚀 State: यह ट्रैक करेगा कि कौन सा हीरो सेलेक्टेड है
  const [selectedHero, setSelectedHero] = useState(null);

  // अगर किसी हीरो पर क्लिक हुआ है, तो उसका प्रोफाइल पेज दिखाओ
  if (selectedHero) {
    return (
      <div className="profile-wrapper">
        <button onClick={() => setSelectedHero(null)} className="back-btn">← Back to Space Heroes</button>
        
        <div className="profile-header">
          <img 
            src={`/heroes/${selectedHero.img}`} 
            alt={selectedHero.name} 
            className="profile-img"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=400&auto=format&fit=crop'; }}
          />
          <div className="profile-title">
            <h1>{selectedHero.name}</h1>
            <p className="profession">{selectedHero.profession || 'Space Pioneer'}</p>
            <p className="country">{selectedHero.agency}</p>
            <div className="life-dates">
              {selectedHero.birth && <span>Born: {selectedHero.birth}</span>}
              {selectedHero.death && <span>Died: {selectedHero.death}</span>}
            </div>
          </div>
        </div>

        <div className="profile-content">
          {selectedHero.earlyLife ? (
            <section>
              <h3>Early Life & Education</h3>
              <p>{selectedHero.earlyLife}</p>
            </section>
          ) : (
             <section>
              <h3>Legacy & Contribution</h3>
              <p>{selectedHero.name} is a pioneering figure in space history. Their contributions to {selectedHero.agency} and global aerospace engineering have inspired generations of scientists and explorers.</p>
            </section>
          )}

          {selectedHero.career && (
            <section>
              <h3>Professional Journey</h3>
              <p>{selectedHero.career}</p>
            </section>
          )}

          {selectedHero.achievements && (
            <section>
              <h3>Major Achievements</h3>
              <ul>
                {selectedHero.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
              </ul>
            </section>
          )}

          {selectedHero.missions && (
            <section>
              <h3>Historic Missions & Projects</h3>
              <div className="missions-grid">
                {selectedHero.missions.map((mission, i) => (
                  <div key={i} className="mission-card">
                    <h4>{mission.name} ({mission.year})</h4>
                    <p><strong>Objective:</strong> {mission.objective}</p>
                    <p><strong>Significance:</strong> {mission.significance}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {selectedHero.facts && (
            <section>
              <h3>Did You Know?</h3>
              <ul className="facts-list">
                {selectedHero.facts.map((fact, i) => <li key={i}>{fact}</li>)}
              </ul>
            </section>
          )}

          {selectedHero.quote && (
            <div className="hero-quote">
              <p>{selectedHero.quote}</p>
            </div>
          )}

          <div className="profile-footer">
            <a href={selectedHero.wiki} target="_blank" rel="noopener noreferrer" className="wiki-btn">
              Read Full Wikipedia Article →
            </a>
          </div>
        </div>
      </div>
    );
  }

  // अगर कोई हीरो सेलेक्टेड नहीं है, तो मेन ग्रिड दिखाओ
  return (
    <div className="space-heroes-wrapper">
      
      {/* 🚀 Main Hero Section */}
      <div className="heroes-header">
        <h1>THE MINDS THAT TOOK HUMANITY BEYOND EARTH</h1>
        <h3>DISCOVER THE PIONEERS, SCIENTISTS AND EXPLORERS WHO REDEFINED OUR PLACE IN THE UNIVERSE.</h3>
        <p>Behind every rocket launch, satellite mission and journey beyond Earth stands a generation of extraordinary minds. Explore the people whose knowledge, courage and engineering achievements shaped the history and future of space exploration.</p>
        
        <div className="heroes-stats">
          <div className="stat-box"><h2>30+</h2><span>Global Pioneers</span></div>
          <div className="stat-box"><h2>06</h2><span>Countries</span></div>
          <div className="stat-box"><h2>100+</h2><span>Historic Missions</span></div>
          <div className="stat-box"><h2>60+</h2><span>Years of Exploration</span></div>
        </div>
      </div>

      <div className="countries-container">
        {countriesData.map((country, index) => (
          <div key={index} className="country-section">
            
            <div className="country-header">
              <h2 className="country-title">
                <span className="flag">{country.flag}</span> {country.country}
              </h2>
              <p className="country-intro">{country.intro}</p>
              <p className="country-agency">Major Agency: <strong>{country.agency}</strong></p>
            </div>
            
            <div className="heroes-grid">
              {country.heroes.map((hero, idx) => (
                <div key={idx} className="hero-card">
                  <div className="hero-img-box">
                    <img 
                      src={`/heroes/${hero.img}`} 
                      alt={hero.name} 
                      className="hero-img" 
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=400&auto=format&fit=crop';
                      }} 
                    />
                  </div>
                  <div className="hero-info">
                    <h3>{hero.name}</h3>
                    <p>{hero.desc}</p>
                    {/* 🚀 यहाँ बटन पर क्लिक करने से State अपडेट होगी और प्रोफाइल खुलेगा */}
                    <button onClick={() => setSelectedHero(hero)} className="read-bio-btn">
                      Read Biography →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="milestones-section">
        <h2 className="section-title">MILESTONES THAT CHANGED SPACE HISTORY</h2>
        <div className="milestones-grid">
          <div className="milestone-card"><h4>1957</h4><p>First artificial satellite, Sputnik 1 (USSR).</p></div>
          <div className="milestone-card"><h4>1961</h4><p>First human in space, Yuri Gagarin (USSR).</p></div>
          <div className="milestone-card"><h4>1969</h4><p>First human on the Moon, Neil Armstrong (USA).</p></div>
          <div className="milestone-card"><h4>1963</h4><p>First woman in space, Valentina Tereshkova (USSR).</p></div>
          <div className="milestone-card"><h4>1965</h4><p>First spacewalk by Alexei Leonov (USSR).</p></div>
        </div>
      </div>

    </div>
  );
}

export default SpaceHeroes;