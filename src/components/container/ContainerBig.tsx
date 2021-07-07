import classNames from 'classnames';
import React from 'react';
import { BaseProps } from '../../customTypes';

type Props = BaseProps;

const ContainerBig: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <div className={classNames('px-4 sm:px-8', className)} {...rest}>
      {children}
    </div>
  );
};
export default ContainerBig;
