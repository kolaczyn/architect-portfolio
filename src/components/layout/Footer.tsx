import classNames from 'classnames';
import React from 'react';
import { BaseProps } from '../../customTypes';
import ContainerBig from '../container/ContainerBig';
import AppBox from './AppBox';

type Props = BaseProps;

const Footer: React.FC<Props> = ({ className, ...rest }) => {
  return (
    <AppBox className={className} {...rest}>
      <footer className="font-bold">
        <ContainerBig className="flex justify-around">
          <span>created by kolaczyn</span>
          <span>kolaczyn.com</span>
        </ContainerBig>
      </footer>
    </AppBox>
  );
};
export default Footer;
