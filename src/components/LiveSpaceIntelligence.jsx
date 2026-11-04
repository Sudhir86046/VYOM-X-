import React, { useState, useEffect } from 'react';
import './SpaceBoxes.css';

const LiveSpaceIntelligence = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="vx-premium-box">
      {/* Background Space Image */}
      <div className="vx-bg-img vx-space-bg"></div>
      <div className="vx-overlay"></div>

      <div className="vx-box-content">
        {/* Top Bar */}
        <div className="vx-top-bar">
          <div className="vx-live-badge">
            <span className="vx-dot"></span> LIVE DATA
          </div>
          <div className="vx-sources">
            <span>NASA</span> | <span>ISRO</span> | <span>JAXA</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="vx-main-text">
          <h2>LIVE SPACE INTELLIGENCE</h2>
          <p>Explore Earth from orbit, discover solar activity and access global space intelligence.</p>
          <span className="vx-timestamp">UTC: {time}</span>
        </div>

        {/* Bottom Pills */}
        <div className="vx-pills-row">
          <div className="vx-pill">EARTH OBSERVATION</div>
          <div className="vx-pill">SOLAR ACTIVITY</div>
          <div className="vx-pill">SPACE MISSIONS</div>
        </div>
      </div>
    </div>
  );
};

export default LiveSpaceIntelligence;