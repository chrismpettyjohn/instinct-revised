import React from 'react';
import {HomePage} from './home-page/HomePage';
import {UserLayout, setURL} from '@instinct-web/core';

setURL('me', <Home />);

export function Home() {
  return (
    <UserLayout>
      <HomePage />
    </UserLayout>
  );
}
