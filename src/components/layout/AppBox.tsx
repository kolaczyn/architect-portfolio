import classNames from 'classnames';
import React from 'react';
import { BaseProps } from '../../customTypes';

type Props = BaseProps;

const AppBox: React.FC<Props> = ({ className, children, ...rest }) => {
  return (
    <div className={classNames('bg-opacity-90 duration-200  hover:bg-opacity-100 transition ease-in text-white bg-black py-3', className)} {...rest}>
      {children}
    </div>
  );
};
export default AppBox;
