import classNames from 'classnames';
import React from 'react';
import { MdClose as CloseIcon, MdMenu as MenuIcon } from 'react-icons/md';
import { BaseProps } from '../../customTypes';
import useNavbarProperies from '../../hooks/useNavbarProperties';
import ContainerBig from '../container/ContainerBig';
import Logo from '../ui/Logo';
import AppBox from './AppBox';
import NavLinks from './NavLinks';
import Sidebar from './Sidebar';

type Props = BaseProps;

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
            aria-label={isNavbarHidden ? 'Show Navbar' : 'Hide Navbar'}
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
              <NavLinks />
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
