import React from 'react';
import ContainerFullOnPhone from '../container/ContainerFullOnPhone';
import ProjectPreview from './ProjectPreview';

type Props = {
  photos: { title: string; fluid: { src: string }; id: string }[];
};

const ProjectsTiles: React.FC<Props> = ({ photos }) => {
  return (
    <ContainerFullOnPhone>
      <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {photos.map(({ title, fluid, id }) => (
          <li key={id}>
            <ProjectPreview title={title} slug="some-project" src={fluid.src} />
          </li>
        ))}
      </ul>
    </ContainerFullOnPhone>
  );
};
export default ProjectsTiles;
