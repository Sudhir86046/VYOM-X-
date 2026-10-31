import './AgencyGrid.css';

const agencies = [
  // 🚀 NASA का नया लिंक यहाँ अपडेट कर दिया गया है
  { id: 1, country: 'USA', agency: 'NASA', videoId: 'https://youtu.be/B_7EUmCxcvE?si=ncJZoFJgi2-PBmL4' }, 
  
  { id: 2, country: 'Europe', agency: 'ESA', videoId: 'https://youtu.be/HsaT6Ps79Bo?si=-grjE85U-JjxBBdl' },
  { id: 3, country: 'India', agency: 'ISRO', videoId: 'https://youtu.be/C3iHAgwIYtI?si=TuCbQbOysjmpBcD3' },
  { id: 4, country: 'China', agency: 'CNSA', videoId: 'https://youtu.be/KkU23uNBNGM?si=aCkhJ1hVRI--ZYQC' },
  { id: 5, country: 'Russia', agency: 'Roscosmos', videoId: 'https://youtu.be/nWJ05uhqugA?si=qiK6lpKn_nShgai3' },
  { id: 6, country: 'Japan', agency: 'JAXA', videoId: 'https://youtu.be/MQLfxh4VVf8?si=AxJOAsWo9HvK6GCQ' },
  { id: 7, country: 'USA', agency: 'SpaceX', videoId: 'https://youtu.be/C3iHAgwIYtI?si=7gMG0KdBYxBUQ7kD' },
  { id: 8, country: 'Germany', agency: 'DLR', videoId: 'https://youtu.be/ZHMSqV7lDTs?si=kbMHhtDBHIMCVrpt' },
  { id: 9, country: 'Canada', agency: 'CSA', videoId: 'https://youtu.be/ba0pCSCllc0?si=lYP1EyW177t0-ELY' },
];

const extractYouTubeID = (url) => {
  if (!url) return '';
  if (url.length === 11 && !url.includes('/')) return url;
  try {
    const urlObj = new URL(url);
    if (urlObj.hostname === 'youtu.be') return urlObj.pathname.slice(1);
    if (urlObj.searchParams.has('v')) return urlObj.searchParams.get('v');
    const pathParts = urlObj.pathname.split('/');
    if (pathParts[1] === 'live' || pathParts[1] === 'embed') return pathParts[2];
  } catch (e) {
    return url;
  }
  return url;
};

function AgencyGrid() {
  return (
    <section className="agency-section">
      <div className="agency-grid">
        {agencies.map((item) => {
          const videoId = extractYouTubeID(item.videoId);

          return (
            <div key={item.id} className="agency-item">
              
              <a 
                href={item.videoId} 
                rel="noopener noreferrer" 
                className="video-box"
              >
                {/* 🚀 यहाँ hqdefault लगाया गया है ताकि थंबनेल हमेशा दिखे */}
                <img 
                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} 
                  alt={item.agency} 
                  className="video-thumbnail"
                  onError={(e) => { e.target.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` }}
                />
                <div className="play-btn">▶</div>
              </a>

              <div className="agency-info">
                <h3 className="agency-name">{item.agency}</h3>
                <p className="country-name">{item.country}</p>
              </div>
              
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AgencyGrid;