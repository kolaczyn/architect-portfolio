import classNames from 'classnames';
import React from 'react';
import { BaseProps } from '../../customTypes';

type Props = BaseProps;

const GrayContainer: React.FC<Props> = ({ className, children, ...rest }) => {
  return (
    <div className={classNames('bg-light-gray', className)} {...rest}>
      {children}
    </div>
  );
};
export default GrayContainer;
