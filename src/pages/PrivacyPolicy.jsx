import './LegalPages.css';

function PrivacyPolicy() {
  return (
    <div className="legal-page-wrapper">
      <div className="legal-content">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: October 2026</p>
        
        <p>Welcome to The Rocket Science. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website.</p>
        
        <h2>1. Data We Collect</h2>
        <p>We do not collect personal identification information (Name, email address, phone number, etc.) unless you voluntarily submit it through our contact forms or newsletter sign-ups.</p>
        
        <h2>2. Third-Party Services</h2>
        <p>Our website uses APIs (like The Space Devs) to fetch live launch data. We also embed YouTube videos for live streams. These third-party services may collect technical data like your IP address and browser type.</p>
        
        <h2>3. Local Storage</h2>
        <p>We use your browser's local storage to cache launch data for up to 24 hours to ensure a faster browsing experience and to prevent API rate limits. This data is stored on your device and is not shared with us.</p>
        
        <h2>4. Contact Us</h2>
        <p>If you have any questions about this privacy policy, please contact us via the Contact Us page.</p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;