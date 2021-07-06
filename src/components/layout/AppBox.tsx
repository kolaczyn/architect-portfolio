import classNames from 'classnames';
import React from 'react';
import { BaseProps } from '../../customTypes';

type Props = BaseProps;

const AppBox: React.FC<Props> = ({ className, children, ...rest }) => {
  return (
    <div className={classNames('bg-black opacity-85 text-white py-3')} {...rest}>
      {children}
    </div>
  );
};
export default AppBox;
