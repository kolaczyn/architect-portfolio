import classNames from 'classnames';
import React from 'react';
import { BaseProps } from '../../customTypes';

type Props = BaseProps;

const ContainerSmall: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <div className={classNames('px-4 sm:px-8 max-w-2xl mx-auto', className)} {...rest}>
      {children}
    </div>
  );
};
export default ContainerSmall;
