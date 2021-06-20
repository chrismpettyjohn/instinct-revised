import React from 'react';
import {GuestGuard} from '@instinct-web/core';
import {GuestLayoutProps} from './GuestLayout.types';

export function GuestLayout({children}: GuestLayoutProps) {
  return <GuestGuard>{children}</GuestGuard>;
}
