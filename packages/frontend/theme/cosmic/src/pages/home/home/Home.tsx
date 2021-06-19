import React from 'react';
import {setURL} from '@instinct-web/core';
import {HomePage} from './home-page/HomePage';
import {UserLayout} from '../../../components/layout/user';

setURL('me', <Home />);
setURL('welcome', <Home />);

export function Home() {
  return (
    <UserLayout>
      <HomePage />
    </UserLayout>
  );
}
