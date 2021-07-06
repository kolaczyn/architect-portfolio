import classNames from 'classnames';
import { Link } from 'gatsby';
import React from 'react';
import { BaseProps } from '../../customTypes';
import ContainerBig from '../container/ContainerBig';
import Logo from '../ui/Logo';
import AppBox from './AppBox';

type Props = BaseProps;

const Navbar: React.FC<Props> = ({ className, ...rest }) => {
  const links = ['O Mnie', 'Projekty', 'Kontakt'];
  return (
    <AppBox className={classNames(className, 'z-10')} {...rest}>
      <ContainerBig className={classNames('flex justify-between items-center')}>
        <Logo />
        <nav className="font-bold">
          <ul className="flex space-x-6">
            {links.map(link => (
              <li key={link}>
                <Link to="/">{link}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </ContainerBig>
    </AppBox>
  );
};
export default Navbar;
