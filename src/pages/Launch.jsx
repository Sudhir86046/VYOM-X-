import TodayLaunches from '../components/TodayLaunches';
import './Launch.css'; // 🚀 यहाँ TodayLaunch.css की जगह Launch.css कर दो

function Launch() {
  return (
    <div className="today-page-wrapper">
      
      {/* 🚀 पेज का हेडर */}
      <div className="today-page-header">
        <h1>Today's Space Launches</h1>
        <p>Explore every launch, from liftoff to orbit. Follow live missions, upcoming rocket launches, and real-time countdowns from across the globe.</p>
      </div>

      {/* 🛰️ लाइव लॉन्चेस का ग्रिड (कंपोनेंट) */}
      <TodayLaunches />
      
    </div>
  );
}

export default Launch;