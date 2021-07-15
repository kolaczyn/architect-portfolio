import { Link } from 'gatsby';
import React from 'react';
import useEmailLink from '../../hooks/useEmailLink';

type Props = {};

const NavLinks: React.FC<Props> = ({}) => {
  const emailLink = useEmailLink();
  return (
    <>
      <li>
        <Link to="/#o-mnie">O Mnie</Link>
      </li>
      <li>
        <Link to="/projekty">Projekty</Link>
      </li>
      <li>
        <a href={emailLink} target="_blank" rel="noopener">
          Kontakt
        </a>
      </li>
    </>
  );
};
export default NavLinks;
