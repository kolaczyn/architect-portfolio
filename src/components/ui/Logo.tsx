import { Link } from 'gatsby';
import React from 'react';

type Props = {};

const Logo: React.FC<Props> = ({}) => {
  return (
    <Link className="font-bold text-2xl sm:text-3xl" to="/">
      Anna Kowalska
    </Link>
  );
};
export default Logo;
