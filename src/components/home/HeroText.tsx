import React, { useState } from 'react';
import { animated, config, useTransition } from 'react-spring';

type Props = {
  title: string;
  subtitle: string;
};

const HeroText: React.FC<Props> = ({ title, subtitle }) => {
  const [show, set] = useState(false);
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: show,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!show),
  });
  return transitions(
    (styles, item) =>
      item && (
        <animated.div style={styles}>
          <h1 className="leading-3 md:leading-5">
            <span className="text-5xl md:text-7xl text-dark-gray font-light font-sans">
              {title}
            </span>
            <span className="text-primary font-bold">,</span>
            <br />
            <span className="text-3xl md:text-5xl uppercase text-black font-sans font-bold tracking-widest">
              {subtitle}
            </span>
          </h1>
        </animated.div>
      )
  );
};
export default HeroText;
