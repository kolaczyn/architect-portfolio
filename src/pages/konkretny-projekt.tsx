import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import GeneralLayout from '../components/layout/GeneralLayout';
import ProjectFooter from '../components/layout/ProjectFooter';

type Props = {};

const KonkretnyProjekt: React.FC<Props> = ({}) => {
  const { photos } = useStaticQuery<{
    contentfulDummyGallery: {
      photos: { title: string; id: string; fluid: { src: string } }[];
    };
  }>(graphql`
    query DummyPhotos {
      contentfulDummyGallery {
        photos {
          title
          id
          fluid(maxWidth: 1920) {
            src
          }
        }
      }
    }
  `).contentfulDummyGallery;
  return (
    <GeneralLayout hideFooter>
      {photos.map(photo => (
        <div
          key={photo.id}
          className="bg-cover bg-center bg-no-repeat min-h-screen w-auto"
          style={{ backgroundImage: `url(${photo.fluid.src})` }}
        />
      ))}
      <ProjectFooter
        projectName="Domek Rodzinny"
        className="fixed bottom-0 left-0 right-0"
      />
    </GeneralLayout>
  );
};
export default KonkretnyProjekt;
