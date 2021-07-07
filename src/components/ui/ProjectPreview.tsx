import React from 'react';
import { BaseProps } from '../../customTypes';

type Props = BaseProps & { src: string; slug: string; title: string };

const ProjectPreview: React.FC<Props> = ({ slug, src, title }) => {
  return (
    <div
      style={{ backgroundImage: `url(${src})` }}
      className="w-full h-72 rounded shadow-md"
    ></div>
  );
};
export default ProjectPreview;
