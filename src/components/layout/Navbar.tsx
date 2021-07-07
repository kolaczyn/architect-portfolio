import classNames from 'classnames';
import { MdClose as CloseIcon, MdMenu as MenuIcon } from 'react-icons/md';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import { BaseProps } from '../../customTypes';
import ContainerBig from '../container/ContainerBig';
import Logo from '../ui/Logo';
import AppBox from './AppBox';
import useNavbarProperies from '../../hooks/useNavbarProperties';
import Sidebar from './Sidebar';

type Props = BaseProps;
const links = ['O Mnie', 'Projekty', 'Kontakt'];

const ICON_SIZE = 40;

const Navbar: React.FC<Props> = ({ className, ...rest }) => {
  const { isNavbarHidden, isSidebarOn, setIsSidebarOn } = useNavbarProperies();
  return (
    <div className="relative">
      <AppBox
        className={classNames(
          className,
          'z-10 fixed w-full transform duration-500 ease-in-out',
          isNavbarHidden ? '-translate-y-full' : 'translate-y-0'
        )}
        {...rest}
      >
        <ContainerBig
          className={classNames('flex justify-between items-center')}
        >
          <Logo />
          <button
            className="block md:hidden"
            onClick={() => setIsSidebarOn(old => !old)}
          >
            {isSidebarOn ? (
              <CloseIcon size={ICON_SIZE} />
            ) : (
              <MenuIcon size={ICON_SIZE} />
            )}
          </button>
          <nav className="hidden md:block font-bold">
            <ul className="flex space-x-6">
              {links.map(link => (
                <li key={link}>
                  <Link to="/">{link}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </ContainerBig>
        {isSidebarOn && !isNavbarHidden ? (
          <Sidebar className="absolute top-full transform -translate-y-0.5 w-full" />
        ) : null}
      </AppBox>
    </div>
  );
};
export default Navbar;
