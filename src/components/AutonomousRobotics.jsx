import React from 'react';
import './SpaceBoxes.css';

const AutonomousRobotics = () => {
  return (
    <div className="vx-premium-box">
      {/* Background Drone Image */}
      <div className="vx-bg-img vx-drone-bg"></div>
      <div className="vx-overlay"></div>
      
      {/* HUD Graphics */}
      <div className="vx-hud-corner top-left"></div>
      <div className="vx-hud-corner top-right"></div>
      <div className="vx-hud-corner bottom-left"></div>
      <div className="vx-hud-corner bottom-right"></div>

      <div className="vx-box-content">
        {/* Top Bar */}
        <div className="vx-top-bar">
          <div className="vx-tech-badge">AUTONOMOUS TECH</div>
        </div>

        {/* Main Content */}
        <div className="vx-main-text">
          <h2>AUTONOMOUS ROBOTICS & DRONE TECHNOLOGY</h2>
          <p>Discover intelligent drones, autonomous navigation, robotic systems and the future of aerospace engineering.</p>
        </div>

        {/* Bottom Pills */}
        <div className="vx-pills-row">
          <div className="vx-pill">DRONE INTELLIGENCE</div>
          <div className="vx-pill">SWARM ROBOTICS</div>
          <div className="vx-pill">AUTONOMOUS SYSTEMS</div>
        </div>
      </div>
    </div>
  );
};

export default AutonomousRobotics;