import classNames from 'classnames';
import React from 'react';
import { FaArrowDown as DownArrowIcon } from 'react-icons/fa';
import { BaseProps } from '../../customTypes';

type Props = BaseProps;

const ScrollDownIndicator: React.FC<Props> = ({ className, ...rest }) => {
  return (
    <div
      className={classNames('flex items-center space-x-2', className)}
      {...rest}
    >
      <DownArrowIcon />
      <span className="font-bold">Zjedź niżej</span>
    </div>
  );
};
export default ScrollDownIndicator;
