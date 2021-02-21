import React from 'react';
import {HomePage} from './home-page/HomePage';
import { UserLayout, setURL} from '@instinct-prj/frontend';

setURL('me', <Home />);

export function Home() {
  return (
    <UserLayout>
      <HomePage />
    </UserLayout>
  );
}
