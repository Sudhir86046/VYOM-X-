import { useParams, Link } from 'react-router-dom';
import './Home.css'; // बैकग्राउंड और हीरो सेक्शन की स्टाइल के लिए

function RocketDetail() {
  // URL से रॉकेट की ID निकालने के लिए (जैसे /rocket/1 से '1')
  const { id } = useParams(); 

  return (
    <div className="hero-section" style={{ height: '100vh', flexDirection: 'column' }}>
      <div className="hero-content">
        <h1>Rocket Mission {id} Details</h1>
        <p>यहाँ रॉकेट नंबर {id} की पूरी जानकारी आएगी।</p>
        <p style={{ marginTop: '1rem', color: '#00d4ff' }}>
          (यह एक नया पेज है जो स्लाइडर के 'Details' बटन से खुला है)
        </p>
        
        {/* वापस होम पेज पर जाने का बटन */}
        <Link 
          to="/" 
          style={{ 
            display: 'inline-block', 
            marginTop: '2rem', 
            padding: '0.8rem 2rem', 
            background: '#00d4ff', 
            color: '#000', 
            textDecoration: 'none', 
            borderRadius: '30px', 
            fontWeight: 'bold',
            transition: 'all 0.3s'
          }}
          onMouseOver={(e) => e.target.style.background = '#fff'}
          onMouseOut={(e) => e.target.style.background = '#00d4ff'}
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default RocketDetail;
