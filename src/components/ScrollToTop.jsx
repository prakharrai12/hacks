import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    if (hash) {
      // If there is an anchor hash, scroll directly to it without jumping to top
      let timer;
      const scrollToHash = (attempts = 0) => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (attempts < 6) {
          timer = setTimeout(() => scrollToHash(attempts + 1), 60);
        }
      };

      scrollToHash();
      return () => clearTimeout(timer);
    }

    // If pathname changed and there is no hash, scroll to top
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
