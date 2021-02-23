import React from 'react';
import {setURL} from '@instinct-web/core';
import {HomePage} from './home-page/HomePage';
import {UserLayout} from '../../../components/layout/user';

setURL('me', <Home />);

export function Home() {
  return (
    <UserLayout>
      <HomePage />
    </UserLayout>
  );
}
