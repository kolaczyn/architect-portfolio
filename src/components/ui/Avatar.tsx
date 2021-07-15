import classNames from 'classnames';
import React from 'react';
import { BaseProps } from '../../customTypes';

type Props = {
  src: string;
} & BaseProps;

const Avatar: React.FC<Props> = ({ src, className }) => {
  return (
    <img alt="Avatar" className={classNames('rounded-full shadow', className)} src={`https:${src}`} />
  );
};
export default Avatar;
