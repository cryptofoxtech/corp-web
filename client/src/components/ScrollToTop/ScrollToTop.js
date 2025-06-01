// client/src/components/ScrollToTop/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the compatibility alternative for "window.scrollTo"
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Optional: adds a smooth scroll effect
    });
  }, [pathname]); // Re-run this effect whenever the pathname changes

  return null; // This component doesn't render anything itself
};

export default ScrollToTop;