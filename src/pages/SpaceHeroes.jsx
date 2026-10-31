import './SpaceHeroes.css';

function SpaceHeroes() {
  const countriesData = [
    {
      country: 'UNITED STATES',
      flag: '🇺🇸',
      heroes: [
        { name: 'WERNHER VON BRAUN', desc: 'Chief architect of the Saturn V rocket.', wiki: 'https://en.wikipedia.org/wiki/Wernher_von_Braun', img: 'Wernher_von_Braun_crop.jpg' },
        { name: 'ROBERT H. GODDARD', desc: 'Father of modern rocketry.', wiki: 'https://en.wikipedia.org/wiki/Robert_H._Goddard', img: 'Dr._Robert_H._Goddard_-_GPN-2002-000131.jpg' },
        { name: 'NEIL ARMSTRONG', desc: 'First human to walk on the Moon.', wiki: 'https://en.wikipedia.org/wiki/Neil_Armstrong', img: 'Neil_Armstrong_pose.jpg' },
        { name: 'KATHERINE JOHNSON', desc: 'Mathematician whose calculations were critical to NASA.', wiki: 'https://en.wikipedia.org/wiki/Katherine_Johnson', img: 'Katherine_Johnson_1983.jpg' },
        { name: 'CARL SAGAN', desc: 'Astronomer and science communicator.', wiki: 'https://en.wikipedia.org/wiki/Carl_Sagan', img: 'Carl_Sagan_Planetary_Society.jpg' }
      ]
    },
    {
      country: 'INDIA',
      flag: '🇮🇳',
      heroes: [
        { name: 'VIKRAM SARABHAI', desc: 'Father of the Indian space program.', wiki: 'https://en.wikipedia.org/wiki/Vikram_Sarabhai', img: 'Dr_Vikram_Sarabhai_ISRO.jpg' },
        { name: 'A.P.J. ABDUL KALAM', desc: 'Missile Man of India and 11th President.', wiki: 'https://en.wikipedia.org/wiki/A._P._J._Abdul_Kalam', img: 'A._P._J._Abdul_Kalam.jpg' },
        { name: 'SATISH DHAWAN', desc: 'Former Chairman of ISRO.', wiki: 'https://en.wikipedia.org/wiki/Satish_Dhawan', img: 'S_Dhawan_official_Portrait_ISRO(1).jpg' },
        { name: 'K. SIVAN', desc: 'Former Chairman of ISRO.', wiki: 'https://en.wikipedia.org/wiki/K._Sivan', img: 'K._Sivan.jpg' },
        // 🚀 तुम्हारे स्क्रीनशॉट के अनुसार सटीक नाम (स्पेस और ब्रैकेट के साथ)
        { name: 'S. SOMANATH', desc: 'Current Chairman of ISRO.', wiki: 'https://en.wikipedia.org/wiki/S._Somanath', img: 'S._Somanath,_Director ).jpg' }
      ]
    },
    {
      country: 'RUSSIA',
      flag: '🇷🇺',
      heroes: [
        { name: 'KONSTANTIN TSIOLKOVSKY', desc: 'Pioneer of astronautic theory.', wiki: 'https://en.wikipedia.org/wiki/Konstantin_Tsiolkovsky', img: 'Константин_Циолковский.jpg' },
        { name: 'SERGEI KOROLEV', desc: 'Chief Designer of the Soviet space program.', wiki: 'https://en.wikipedia.org/wiki/Sergei_Korolev', img: 'Нина_и_Сергей_Королевы_(cropped).jpg' },
        { name: 'YURI GAGARIN', desc: 'First human in space.', wiki: 'https://en.wikipedia.org/wiki/Yuri_Gagarin', img: 'Yuri_Gagarin_with_awards_(cropped)_2.jpg' },
        { name: 'VALENTINA TERESHKOVA', desc: 'First woman in space.', wiki: 'https://en.wikipedia.org/wiki/Valentina_Tereshkova', img: 'Valentina_Tereshkova_(2024-02-29)_crop.jpg' },
        { name: 'ALEXEI LEONOV', desc: 'First person to walk in space.', wiki: 'https://en.wikipedia.org/wiki/Alexei_Leonov', img: 'Alexei_Leonov.jpg' }
      ]
    },
    {
      country: 'CHINA',
      flag: '🇨🇳',
      heroes: [
        { name: 'QIAN XUESEN', desc: 'Father of Chinese rocketry.', wiki: 'https://en.wikipedia.org/wiki/Qian_Xuesen', img: '歸國後的錢學森.png' },
        { name: 'OUYANG ZIYUAN', desc: 'Chief scientist of the Chinese Lunar Exploration Program.', wiki: 'https://en.wikipedia.org/wiki/Ouyang_Ziyuan', img: 'Ouyang_Ziyuan.jpg' },
        { name: 'WANG XIJI', desc: 'Space technology expert and rocket scientist.', wiki: 'https://en.wikipedia.org/wiki/Wang_Xiji', img: 'Wang_Xiji.jpg' },
        { name: 'SUN JIADONG', desc: 'Chief designer of the BeiDou Navigation Satellite System.', wiki: 'https://en.wikipedia.org/wiki/Sun_Jiadong', img: 'Sun Jiadong.jpg' },
        { name: 'QI FAREN', desc: 'Chief designer of the Shenzhou spacecraft.', wiki: 'https://en.wikipedia.org/wiki/Qi_Faren', img: 'Qi_FaRen.png' }
      ]
    },
    {
      country: 'JAPAN',
      flag: '🇯🇵',
      heroes: [
        { name: 'HIDEO SHIMA', desc: 'Engineer who led the development of the H-II rocket.', wiki: 'https://en.wikipedia.org/wiki/Hideo_Shima', img: 'Hideo_Shima.jpg' },
        { name: 'MAMORU MOHRI', desc: 'First Japanese astronaut to fly on the Space Shuttle.', wiki: 'https://en.wikipedia.org/wiki/Mamoru_Mohri', img: 'Mamoru_Mohri_portrait_(4x5_cropped).jpg' },
        { name: 'CHIAKI MUKAI', desc: 'First Japanese woman in space.', wiki: 'https://en.wikipedia.org/wiki/Chiaki_Mukai', img: 'Chiaki_Mukai.jpg' },
        { name: 'KOICHI WAKATA', desc: 'Veteran JAXA astronaut and engineer.', wiki: 'https://en.wikipedia.org/wiki/Koichi_Wakata', img: 'Koichi_Wakata_Official_Portrait_(cropped)_2.jpg' },
        { name: 'SOICHI NOGUCHI', desc: 'JAXA astronaut who flew on the Space Shuttle and Soyuz.', wiki: 'https://en.wikipedia.org/wiki/Soichi_Noguchi', img: 'Soichi_Noguchi_at_Ellington_Field,_Departing_for_KSC,_2020_(Jsc2020e044848)_(cropped)_2.jpg' }
      ]
    },
    {
      country: 'GERMANY',
      flag: '🇩🇪',
      heroes: [
        { name: 'SIGMUND JÄHN', desc: 'First German in space.', wiki: 'https://en.wikipedia.org/wiki/Sigmund_J%C3%A4hn', img: 'Sigmund_Jahn_cropped.jpg' },
        { name: 'ULF MERBOLD', desc: 'First West German astronaut in space.', wiki: 'https://en.wikipedia.org/wiki/Ulf_Merbold', img: 'Ulf_D._Merbold.jpg' },
        { name: 'ERNST MESSERSCHMID', desc: 'German physicist and astronaut.', wiki: 'https://en.wikipedia.org/wiki/Ernst_Messerschmid', img: 'Ernst_Messerschmid_1.jpg' },
        { name: 'ALEXANDER GERST', desc: 'ESA astronaut and geophysicist.', wiki: 'https://en.wikipedia.org/wiki/Alexander_Gerst', img: 'Alexander_Gerst,_official_portrait_in_2017.jpg' },
        { name: 'REINHARD FURRER', desc: 'German physicist and astronaut.', wiki: 'https://en.wikipedia.org/wiki/Reinhard_Furrer', img: 'Reinhard_Furrer.jpg' }
      ]
    }
  ];

  return (
    <div className="space-heroes-wrapper">
      <div className="heroes-header">
        <h1>SPACE HEROES</h1>
        <p>The brilliant minds who took us to the stars.</p>
      </div>

      <div className="countries-container">
        {countriesData.map((country, index) => (
          <div key={index} className="country-section">
            <h2 className="country-title">
              <span className="flag">{country.flag}</span> {country.country}
            </h2>
            
            <div className="heroes-grid">
              {country.heroes.map((hero, idx) => (
                <div key={idx} className="hero-card">
                  <div className="hero-img-box">
                    {/* 🚀 यहाँ सीधा तुम्हारे लोकल फोल्डर का रास्ता दिया है */}
                    <img 
                      src={`/heroes/${hero.img}`} 
                      alt={hero.name} 
                      className="hero-img" 
                      onError={(e) => {
                        // अगर कोई इमेज नाम गलत होने से न मिले, तो स्पेस इमेज दिखे
                        e.target.src = 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=400&auto=format&fit=crop';
                      }} 
                    />
                  </div>
                  <div className="hero-info">
                    <h3>{hero.name}</h3>
                    <p>{hero.desc}</p>
                    <a href={hero.wiki} target="_blank" rel="noopener noreferrer" className="read-bio-btn">
                      Read Biography →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpaceHeroes;