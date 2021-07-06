import classNames from 'classnames';
import React from 'react'
import { BaseProps } from '../../customTypes';
import ContainerBig from '../container/ContainerBig';

type Props = BaseProps

const Footer: React.FC<Props> = ({className, ...rest}) => {
    return (
      <footer className={classNames('', className)} {...rest}>
        <ContainerBig className="flex justify-around bg-black opacity-85 text-white">
        <span>created by kolaczyn</span>
        <span>kolaczyn.com</span>
        </ContainerBig>
      </footer>
    );
}
export default Footer