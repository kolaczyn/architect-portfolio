import classNames from 'classnames';
import React from 'react';
import { BaseProps } from '../../customTypes';

type Props = BaseProps;

const GrayContainer: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={classNames('bg-light-gray', className)}>{children}</div>
  );
};
export default GrayContainer;
