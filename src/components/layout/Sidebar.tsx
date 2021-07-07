import classNames from 'classnames';
import React from 'react';
import { BaseProps } from '../../customTypes';
import ContainerBig from '../container/ContainerBig';
import NavLinks from './NavLinks';

type Props = BaseProps;

const Sidebar: React.FC<Props> = ({ className }) => {
  return (
    <nav className={classNames('bg-black bg-opacity-90 text-white', className)}>
      <ContainerBig className="py-6 font-bold">
        <ul className="flex flex-col space-y-6 items-end">
          <NavLinks />
        </ul>
      </ContainerBig>
    </nav>
  );
};
export default Sidebar;
