import classNames from 'classnames';
import React from 'react';
import { BaseProps } from '../../customTypes';

type Props = BaseProps;

const ContainerFullOnPhone: React.FC<Props> = ({className, children, ...rest}) => {
  return (
    <div className={classNames('px-0 sm:px-8', className)} {...rest}>
      {children}
    </div>
  );
};

export default ContainerFullOnPhone;
