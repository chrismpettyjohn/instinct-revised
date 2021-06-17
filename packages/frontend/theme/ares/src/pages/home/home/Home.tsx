import './Home.scss';
import React from 'react';
import {setURL} from '@instinct-web/core';
import {UserLayout} from '../../../components/layout/user';
import {UserContainer} from './user-container/UserContainer';

setURL('me', <Home />);

export function Home() {
  return (
    <UserLayout>
      Home Page
      <div id="home-page">
        <UserContainer />
      </div>
    </UserLayout>
  );
}
