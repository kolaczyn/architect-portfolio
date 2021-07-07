import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import ContainerBig from '../container/ContainerBig';
import ContainerFullOnPhone from '../container/ContainerFullOnPhone';
import GrayContainer from '../container/GrayContainer';
import ButtonStyle from '../ui/ButtonStyle';
import ProjectPreview from '../ui/ProjectPreview';
import ProjectsTiles from '../ui/ProjectsTiles';

type Props = {};

const Projects: React.FC<Props> = ({}) => {
  const { photos } = useStaticQuery(graphql`
    query HomePageGallery {
      contentfulDummyGallery {
        photos {
          title
          id
          fluid(maxWidth: 650) {
            src
          }
        }
      }
    }
  `).contentfulDummyGallery;
  return (
    <GrayContainer id="projekty" className="py-16">
      <ContainerBig>
        <header className="mb-8">
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-center">Moje Projekty</h2>
            <Link to="/projekty">
              <ButtonStyle>Zobacz Wszystkie</ButtonStyle>
            </Link>
          </div>
        </header>
      </ContainerBig>
      <ProjectsTiles photos={photos} />
    </GrayContainer>
  );
};
export default Projects;
