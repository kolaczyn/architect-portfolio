import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import ContainerBig from '../components/container/ContainerBig';
import GrayContainer from '../components/container/GrayContainer';
import GeneralLayout from '../components/layout/GeneralLayout';
import ProjectsTiles from '../components/ui/ProjectsTiles';

type Props = {};

const ProjectsPage: React.FC<Props> = ({}) => {
  const { photos } = useStaticQuery(graphql`
    query ProjectsQuery {
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
    <GeneralLayout>
      <div className="py-20 space-y-16">
        <div>
          <ContainerBig>
            <h2 className="text-center mb-8">Budynki</h2>
          </ContainerBig>
          <ProjectsTiles photos={photos} />
        </div>
        <div>
          <GrayContainer className="py-16">
            <ContainerBig>
              <h2 className="text-center mb-8">Sztuka</h2>
            </ContainerBig>
            <ProjectsTiles photos={photos} />
          </GrayContainer>
        </div>
        <div>
          <ContainerBig>
            <h2 className="text-center mb-8">Projekty</h2>
          </ContainerBig>
          <ProjectsTiles photos={photos} />
        </div>
      </div>
    </GeneralLayout>
  );
};
export default ProjectsPage;
