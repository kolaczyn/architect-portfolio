import { useState, useEffect } from 'react';

const useIsNavbarHidden = () => {
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  useEffect(() => {
    let previousScrollPosition = window.pageYOffset;
    window.addEventListener('scroll', () => {
      previousScrollPosition < window.pageYOffset
        ? setIsNavbarHidden(true)
        : setIsNavbarHidden(false);
      previousScrollPosition = window.pageYOffset;
    });
  }, []);
  return isNavbarHidden;
};

export default useIsNavbarHidden;
