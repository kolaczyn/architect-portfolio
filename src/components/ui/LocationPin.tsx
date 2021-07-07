import classNames from 'classnames';
import React from 'react';
import { TiLocation as LocationIcon } from 'react-icons/ti';
import { BaseProps } from '../../customTypes';

type Props = {
  location: string;
} & BaseProps;

const LocationPin: React.FC<Props> = ({ location, className }) => {
  return (
    <div
      className={classNames(
        'flex items-center text-dark-gray space-x-2',
        className
      )}
    >
      <LocationIcon />
      <span className="font-bold">{location}</span>
    </div>
  );
};
export default LocationPin;
