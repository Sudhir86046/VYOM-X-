import './LegalPages.css';

function Disclaimer() {
  return (
    <div className="legal-page-wrapper">
      <div className="legal-content">
        <h1>Disclaimer</h1>
        <p className="last-updated">Last Updated: October 2026</p>
        
        <p>The information provided by The Rocket Science is for general informational and educational purposes only.</p>
        
        <h2>1. No Affiliation</h2>
        <p>We are an independent website and are NOT affiliated, associated, authorized, endorsed by, or in any way officially connected with NASA, ISRO, SpaceX, ESA, or any other space agency mentioned on this site.</p>
        
        <h2>2. Accuracy of Information</h2>
        <p>While we strive to provide accurate and up-to-date launch information, launch schedules frequently change or get delayed. We are not responsible for any errors or omissions, or for the results obtained from the use of this information.</p>
        
        <h2>3. External Links Disclaimer</h2>
        <p>This site may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy by us.</p>
      </div>
    </div>
  );
}

export default Disclaimer;