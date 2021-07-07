import { graphql, Link, useStaticQuery } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import React from 'react';
import ContainerSmall from '../container/ContainerSmall';
import DebugDiv from '../ui/DebugDiv';
import Avatar from '../ui/Avatar';
import ButtonStyle from '../ui/ButtonStyle';
import LocationPin from '../ui/LocationPin';
import useEmailLink from '../../hooks/useEmailLink';

type Props = {};

const AboutMe: React.FC<Props> = ({}) => {
  const {
    title,
    content: { raw },
    avatar,
    location,
  } = useStaticQuery(graphql`
    query AboutMe {
      contentfulAboutMe {
        title
        content {
          raw
        }
        avatar {
          fluid(maxWidth: 250, maxHeight: 250) {
            src
          }
        }
        location
      }
    }
  `).contentfulAboutMe;
  const content = JSON.parse(raw);
  const avatarSrc = avatar.fluid.src;
  const emailLink = useEmailLink();

  return (
    <ContainerSmall id="o-mnie" className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 space-x-0 md:space-x-8">
        <div className="flex flex-col space-y-4">
          <Avatar className="self-center" src={avatarSrc} />
          <LocationPin className="self-center" location={location} />
        </div>
        <section className="col-span-2 space-y-4">
          <h2>{title}</h2>
          {documentToReactComponents(content)}
          <a className="inline-block" href={emailLink} target="_blank">
            <ButtonStyle primary>Kontakt</ButtonStyle>
          </a>
        </section>
      </div>
    </ContainerSmall>
  );
};
export default AboutMe;
