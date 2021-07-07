import classNames from 'classnames';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import useHideScrollIndicator from '../../hooks/useHideScrollIndicator';
import ContainerSmall from '../container/ContainerSmall';
import ButtonStyle from '../ui/ButtonStyle';
import ScrollDownIndicator from '../ui/ScrollDownIndicator';

type Props = {};

const Hero: React.FC<Props> = ({}) => {
  const { contentfulHero } = useStaticQuery(graphql`
    query Hero {
      contentfulHero {
        title
        subtitle
        backgroundImage {
          fluid(maxWidth: 1920, maxHeight: 1080) {
            src
          }
        }
      }
    }
  `);
  const { title, subtitle, backgroundImage } = contentfulHero;
  const shouldHideScrollIndicator = useHideScrollIndicator();
  const bgImgSrc = backgroundImage.fluid.src;

  const scrollPastHero = () => window.scrollTo(0, window.innerHeight);
  return (
    <div className="min-h-screen">
      <div
        className="h-full absolute top-0 left-0 right-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImgSrc})` }}
      >
        <ContainerSmall className="flex items-center h-full">
          <div>
            <h1>
              <span className="text-5xl md:text-7xl text-dark-gray font-sans font-normal">
                {title}
              </span>
              <br />
              <span className="font-serif text-6xl md:text-8xl text-black font-bold">
                {subtitle}
              </span>
            </h1>
            <div className="space-x-4">
              <Link to="/projekty">
                <ButtonStyle primary>Zobacz Projekty</ButtonStyle>
              </Link>
            </div>
          </div>
        </ContainerSmall>
        <ScrollDownIndicator
          handleClick={scrollPastHero}
          isHidden={shouldHideScrollIndicator}
          className={classNames(
            'text-white transform -translate-x-1/2 left-1/2 absolute bottom-4'
          )}
        />
      </div>
    </div>
  );
};
export default Hero;
