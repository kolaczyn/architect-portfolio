import classNames from 'classnames';
import { Link } from 'gatsby';
import React from 'react';
import { BaseProps } from '../../customTypes';
import ContainerBig from '../container/ContainerBig';
import Logo from '../ui/Logo';

type Props = BaseProps;

const Navbar: React.FC<Props> = ({ className, ...rest }) => {
  const links = ['O Mnie', 'Projekty', 'Kontakt'];
  return (
    <ContainerBig
      className={classNames(
        'flex justify-between bg-black opacity-85 text-white',
        className
      )}
      {...rest}
    >
      <Logo />
      <nav>
        <ul className="flex space-x-4">
          {links.map(link => (
            <li key={link}>
              <Link to="/">{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </ContainerBig>
  );
};
export default Navbar;
