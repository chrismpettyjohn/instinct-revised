import React from 'react';
import {Header} from '../../header/Header';
import {GuestGuard} from '@instinct-web/core';
import {GuestLayoutProps} from './GuestLayout.types';

export function GuestLayout({children}: GuestLayoutProps) {
  return (
    <GuestGuard>
      <Header
        links={[
          {
            href: '/login',
            label: 'Chris',
            children: [
              {
                href: '/me',
                label: 'Home',
              },
              {
                href: '/settings',
                label: 'Settings',
              },
            ],
          },
          {
            href: '/community',
            label: 'Community',
            children: [],
          },
          {
            href: '/games',
            label: 'Games',
            children: [],
          },
        ]}
      />
    </GuestGuard>
  );
}
