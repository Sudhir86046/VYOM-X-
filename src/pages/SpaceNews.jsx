import { useState, useEffect } from 'react';
import './SpaceNews.css';

function SpaceNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      // 🚀 24 घंटे का कैश चेक
      const CACHE_KEY = 'space_news_cache_24h';
      const CACHE_TIME_KEY = 'space_news_time_24h';
      
      const now = new Date().getTime();
      const cachedTime = localStorage.getItem(CACHE_TIME_KEY);
      const cachedData = JSON.parse(localStorage.getItem(CACHE_KEY));

      // अगर डेटा 24 घंटे से पुराना नहीं है, तो कैश से दिखाओ
      if (cachedData && cachedTime && (now - cachedTime < 24 * 60 * 60 * 1000)) {
        setNews(cachedData);
        setLoading(false);
        return;
      }

      // अगर 24 घंटे पूरे हो गए हैं, तो नया डेटा फेच करो
      try {
        const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles/?limit=9');
        const data = await response.json();
        
        const formattedNews = data.results.map(article => ({
          id: article.id,
          title: article.title,
          summary: article.summary,
          image: article.image_url,
          url: article.url,
          publishedAt: new Date(article.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        }));

        // नया डेटा सेव करो
        localStorage.setItem(CACHE_KEY, JSON.stringify(formattedNews));
        localStorage.setItem(CACHE_TIME_KEY, now.toString());

        setNews(formattedNews);
      } catch (error) {
        console.error("Error fetching news:", error);
        // अगर API फेल हो, तो पुराना कैश दिखाओ
        if (cachedData) setNews(cachedData);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <div className="space-news-wrapper"><h2>Loading Space News...</h2></div>;

  return (
    <div className="space-news-wrapper">
      <div className="news-header">
        <h1>Latest Space News</h1>
        <p>Discover the latest updates from the cosmos. (Updates every 24 hours)</p>
      </div>

      <div className="news-grid">
        {news.map((item) => (
          <div key={item.id} className="news-card">
            <div className="news-img-box">
              <img 
                src={item.image} 
                alt={item.title} 
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=600&auto=format&fit=crop' }} 
              />
            </div>
            <div className="news-info">
              <p className="news-date">{item.publishedAt}</p>
              <h3>{item.title}</h3>
              <p className="news-summary">{item.summary}</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="read-more-btn">
                Read Full Article →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpaceNews;