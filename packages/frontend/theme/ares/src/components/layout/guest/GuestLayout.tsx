import React, {useContext} from 'react';
import {Carousel} from '../../carousel/Carousel';
import {GuestLayoutProps} from './GuestLayout.types';
import {configContext, GuestGuard} from '@instinct-web/core';

export function GuestLayout({children}: GuestLayoutProps) {
  const {config} = useContext(configContext);
  return (
    <GuestGuard>
      <div
        className="row h-100-vh justify-content-xxl-center justify-content-xl-center
    justify-content-md-center align-items-xxl-center align-items-xl-center
    align-items-md-center"
      >
        {children}
      </div>
    </GuestGuard>
  );
}
