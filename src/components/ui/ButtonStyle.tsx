import classNames from 'classnames';
import React from 'react';
import { BaseProps } from '../../customTypes';

type Props = BaseProps & { primary?: boolean };

const ButtonStyle: React.FC<Props> = ({
  className,
  children,
  primary: isPrimary,
  ...rest
}) => {
  return (
    <div
      className={classNames(
        'font-bold px-5 py-2 cursor-pointer rounded-xl inline-block',
        'border-primary border-4',
        'hover:border-primary-dark',
        'transition transform hover:scale-105 duration-500 ease-out',
        isPrimary
          ? 'bg-primary text-white hover:bg-primary-dark'
          : 'bg-transparent text-primary hover:text-primary-dark',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
export default ButtonStyle;

ButtonStyle.defaultProps = {
  primary: false,
};
