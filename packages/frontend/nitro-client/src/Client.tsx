import './Client.scss';
import React, {useContext} from 'react';
import {ClientActions} from './client-actions';
import {ClientContainer} from './client-container';
import {themeContext, UserGuard} from '@instinct-web/core';

export function Client() {
  const {showClient} = useContext(themeContext);

  return (
    <UserGuard redirect={false}>
      <div
        className={`hotel-container ${showClient ? 'visible' : 'not-visible'}`}
      >
        <ClientActions />
        <ClientContainer />
      </div>
    </UserGuard>
  );
}
