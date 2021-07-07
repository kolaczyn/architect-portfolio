import { useState, useEffect } from 'react';

const useNavbarProperies = () => {
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [isSidebarOn, setIsSidebarOn] = useState(false);
  useEffect(() => {
    let previousScrollPosition = window.pageYOffset;
    window.addEventListener('scroll', () => {
      previousScrollPosition < window.pageYOffset
      // I don't know why I made this so complicated, but it looks cool
        ? (() => {
            setIsNavbarHidden(true);
            setIsSidebarOn(false);
          })()
        : setIsNavbarHidden(false);
      previousScrollPosition = window.pageYOffset;
    });
  }, []);
  return {
    isNavbarHidden,
    isSidebarOn,
    setIsSidebarOn,
  };
};

export default useNavbarProperies;
