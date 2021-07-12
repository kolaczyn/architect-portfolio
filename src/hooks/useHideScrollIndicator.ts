import { useState, useEffect } from 'react';

const getRatio = () => {
  try {
    return window.pageYOffset / window.innerHeight;
  } catch (ex) {
    return -1;
  }
};
const useHideScrollIndicator = () => {
  const [shouldHideScrollIndicator, setShouldHideScrollIndicator] =
    useState(false);
  useEffect(() => {
    try {
      function onScroll() {
        setShouldHideScrollIndicator((old) => old ? true : getRatio() > 0.65);
      }
      window.addEventListener('scroll', onScroll);
      return () => {
        window.removeEventListener('scroll', onScroll);
      };

    // try {
    //   window.addEventListener('scroll', e => {
    //     setShouldHideScrollIndicator(getRatio() > 0.65);
    //   });
    } catch (ex) {}
  }, []);

  return shouldHideScrollIndicator;
};
export default useHideScrollIndicator;
