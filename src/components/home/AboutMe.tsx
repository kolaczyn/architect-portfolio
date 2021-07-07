import { graphql, useStaticQuery } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import React from 'react';
import ContainerSmall from '../container/ContainerSmall';
import DebugDiv from '../ui/DebugDiv';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';
import LocationPin from '../ui/LocationPin';

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
  console.log(avatarSrc);

  return (
    <ContainerSmall>
      <div className="grid grid-cols-3 space-x-8">
        <div className="flex flex-col space-y-4">
          <Avatar src={avatarSrc} />
          <LocationPin className="self-center" location={location} />
        </div>
        <section className="col-span-2 space-y-4">
          <h2>{title}</h2>
          {documentToReactComponents(content)}
          <Button primary>Kontakt</Button>
        </section>
      </div>
    </ContainerSmall>
  );
};
export default AboutMe;
