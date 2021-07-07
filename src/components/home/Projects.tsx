import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import ContainerBig from '../container/ContainerBig';
import GrayContainer from '../container/GrayContainer';
import Button from '../ui/Button';
import DebugDiv from '../ui/DebugDiv';
import ProjectPreview from '../ui/ProjectPreview';

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
    <GrayContainer className="py-20">
      <ContainerBig>
        <header className="mb-8">
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-center">Moje Projekty</h2>
            <Button>Zobacz Wszystkie</Button>
          </div>
        </header>
        <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {photos.map(({ title, fluid, id }) => (
            <li key={id}>
              <ProjectPreview
                title={title}
                slug="some-project"
                src={fluid.src}
              />
            </li>
          ))}
        </ul>
      </ContainerBig>
    </GrayContainer>
  );
};
export default Projects;
