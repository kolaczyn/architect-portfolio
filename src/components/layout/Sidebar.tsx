import classNames from 'classnames';
import { Link } from 'gatsby';
import React from 'react';
import { BaseProps } from '../../customTypes';
import ContainerBig from '../container/ContainerBig';

type Props = BaseProps;
const links = ['O Mnie', 'Projekty', 'Kontakt'];

const Sidebar: React.FC<Props> = ({ className }) => {
  return (
    <nav className={classNames('bg-black bg-opacity-90 text-white', className)}>
      <ContainerBig className="py-6 font-bold">
        <ul className="flex flex-col space-y-6 items-end">
          {links.map(link => (
            <li key={link}>
              <Link to="/">{link}</Link>
            </li>
          ))}
        </ul>
      </ContainerBig>
    </nav>
  );
};
export default Sidebar;
