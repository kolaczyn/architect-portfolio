import classNames from 'classnames';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
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
  const bgImgSrc = backgroundImage.fluid.src;

  const scrollPastHero = () => window.scrollTo(0, window.innerHeight);
  return (
    <div className="min-h-screen">
      <div
        className="h-full absolute top-0 left-0 right-0 bg-center bg-cover"
        style={{ backgroundImage: `url(https:${bgImgSrc})` }}
      >
        <ContainerSmall className="flex items-center h-full">
          <div className="transform -translate-y-1/4">
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
            <div className="mt-4">
              <Link to="/projekty">
                <ButtonStyle primary>Zobacz Projekty</ButtonStyle>
              </Link>
            </div>
          </div>
        </ContainerSmall>
          <ScrollDownIndicator
            handleClick={scrollPastHero}
            className={classNames(
              'text-white transform -translate-x-1/2 left-1/2 absolute bottom-4'
            )}
          />
      </div>
    </div>
  );
};
export default Hero;
