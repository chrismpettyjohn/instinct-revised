import React from 'react';
import {IconProps} from './';

export function Icon({
  className = 'mr-2',
  family = 'fas',
  type,
  onClick,
}: IconProps) {
  return (
    <i className={`${family} fa-${type} ${className}`} onClick={onClick} />
  );
}
