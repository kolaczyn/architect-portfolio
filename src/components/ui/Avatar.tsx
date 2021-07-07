import classNames from 'classnames';
import React from 'react';
import { BaseProps } from '../../customTypes';

type Props = {
  src: string;
} & BaseProps;

const Avatar: React.FC<Props> = ({ src, className }) => {
  return (
    <img className={classNames('rounded-full shadow', className)} src={src} />
  );
};
export default Avatar;
