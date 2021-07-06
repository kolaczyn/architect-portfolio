import classNames from 'classnames';
import React from 'react';
import { FaArrowDown as DownArrowIcon } from 'react-icons/fa';
import { BaseProps } from '../../customTypes';

type Props = BaseProps & {
  isHidden: boolean,
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const ScrollDownIndicator: React.FC<Props> = ({
  className,
  isHidden,
  handleClick,
  ...rest
}) => {
  return (
    <button
      onClick={handleClick}
      className={classNames(
        'flex items-center space-x-2 px-4 py-2 cursor-pointer',
        'transition transform duration-200 ease-in hover:scale-110',
        'bg-white bg-opacity-0 hover:bg-opacity-10',
        isHidden ? 'opacity-0' : 'opacity-100',
        className
      )}
      {...rest}
    >
      <DownArrowIcon />
      <span className="font-bold">Zjedź niżej</span>
    </button>
  );
};
export default ScrollDownIndicator;
