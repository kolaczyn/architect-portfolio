import classNames from 'classnames';
import { Link } from 'gatsby';
import React from 'react';
import { BaseProps } from '../../customTypes';
import ButtonStyle from './ButtonStyle';

type Props = BaseProps & { src: string; slug: string; title: string };

const ProjectPreview: React.FC<Props> = ({ slug, src, title }) => {
  return (
    <Link to="/projekty">
      <div
        style={{ backgroundImage: `url(${src})` }}
        className={classNames(
          'w-full h-72',
          'bg-cover bg-center',
          'rounded shadow-sm',
          'transform hover:scale-105 duration-300 ease-in-out hover:shadow-2xl',
          'relative group'
        )}
      >
        <div
          className={classNames(
            'bg-white bg-opacity-75 absolute inset-8',
            'flex items-center justify-center',
            'transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100'
          )}
        >
          <div className="flex flex-col items-center space-y-2">
            <div className="font-bold text-2xl text-dark-gray">{title}</div>
            <ButtonStyle primary>
              Zobacz Więcej
            </ButtonStyle>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ProjectPreview;
