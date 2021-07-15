import React from 'react';
import { BaseProps } from '../../customTypes';
import ContainerBig from '../container/ContainerBig';
import AppBox from './AppBox';

type Props = BaseProps;

const Footer: React.FC<Props> = ({ className, ...rest }) => {
  return (
    <AppBox className={className} {...rest}>
      <footer className="font-bold">
        <ContainerBig className="flex flex-col items-center md:flex-row justify-around">
          <span>Paweł Kołaczyński © {new Date().getFullYear()}</span>
          <a
            href="https://kolaczyn.com"
            target="_blank"
            className="hover:underline"
            rel="noopener"
          >
            www.kolaczyn.com
          </a>
        </ContainerBig>
      </footer>
    </AppBox>
  );
};
export default Footer;
