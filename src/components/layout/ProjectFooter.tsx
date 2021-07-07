import { Link } from 'gatsby';
import { MdNavigateBefore as LeftIcon } from 'react-icons/md';
import React from 'react';
import { BaseProps } from '../../customTypes';
import ContainerBig from '../container/ContainerBig';
import AppBox from './AppBox';

type Props = BaseProps & {
  projectName: string;
};

const ICON_SIZE = 40;

const ProjectFooter: React.FC<Props> = ({
  className,
  projectName,
  ...rest
}) => {
  return (
    <AppBox className={className} {...rest}>
      <footer className="font-bold">
        <ContainerBig className="flex flex-col items-center md:flex-row justify-between">
          <Link to="/projekty" className="group flex items-center">
            <LeftIcon size={ICON_SIZE} />
            <span className="group-hover:underline">Inne Projekty</span>
          </Link>
          <span>{projectName}</span>
        </ContainerBig>
      </footer>
    </AppBox>
  );
};
export default ProjectFooter;
