import './LegalPages.css';

function CookiePolicy() {
  return (
    <div className="legal-page-wrapper">
      <div className="legal-content">
        <h1>Cookie Policy</h1>
        <p className="last-updated">Last Updated: October 2026</p>
        
        <h2>1. What Are Cookies?</h2>
        <p>Cookies are small text files stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently.</p>
        
        <h2>2. How We Use Cookies & Local Storage</h2>
        <p>We primarily use "Local Storage" (a similar technology to cookies) to store API cache data. This prevents our server from making repeated requests to the space data API and helps the site load faster for you.</p>
        
        <h2>3. Third-Party Cookies</h2>
        <p>When we embed YouTube videos for live launches, YouTube may set its own cookies to track video performance and user preferences.</p>
        
        <h2>4. Managing Cookies</h2>
        <p>You can choose to disable or selectively turn off our cookies or third-party cookies in your browser settings. However, this may affect how you are able to interact with our site.</p>
      </div>
    </div>
  );
}

export default CookiePolicy;