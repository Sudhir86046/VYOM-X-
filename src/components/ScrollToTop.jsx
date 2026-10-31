import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 🚀 जब भी URL (path) बदलेगा, यह विंडो को सबसे ऊपर स्क्रॉल कर देगा
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;