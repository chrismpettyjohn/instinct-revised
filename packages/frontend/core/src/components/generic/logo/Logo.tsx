import React from 'react';
import {LogoProps} from './';

export function Logo({className, size = 'regular'}: LogoProps) {
  return <img alt="logo" className={className} src={`/img/logo/${size}.png`} />;
}
