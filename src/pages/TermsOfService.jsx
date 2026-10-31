import './LegalPages.css';

function TermsOfService() {
  return (
    <div className="legal-page-wrapper">
      <div className="legal-content">
        <h1>Terms of Service</h1>
        <p className="last-updated">Last Updated: October 2026</p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using The Rocket Science, you accept and agree to be bound by the terms and provision of this agreement.</p>
        
        <h2>2. Use of Content</h2>
        <p>All content provided on this website is for informational and educational purposes only. The data regarding rocket launches is fetched from third-party APIs and we do not guarantee its 100% accuracy.</p>
        
        <h2>3. User Conduct</h2>
        <p>You agree not to use the website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.</p>
        
        <h2>4. External Links</h2>
        <p>Our website contains links to external websites (like NASA, ISRO, SpaceX) that are not provided or maintained by us. We do not guarantee the accuracy of the information on these external sites.</p>
      </div>
    </div>
  );
}

export default TermsOfService;