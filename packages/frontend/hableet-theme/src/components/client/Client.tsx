import './Client.scss';
import React, {useContext} from 'react';
import {FlashClient} from '@instinct-web/flash-client';
import {NitroClient} from '@instinct-web/nitro-client';
import {themeContext, UserGuard} from '@instinct-web/core';
import {ClientActions} from './client-actions/ClientActions';

export function Client() {
  const {clientType, showClient} = useContext(themeContext);

  return (
    <UserGuard redirect={false}>
      <div
        className={`hotel-container ${showClient ? 'visible' : 'not-visible'}`}
      >
        <ClientActions />
        {clientType === 'flash' ? <FlashClient /> : <NitroClient />}
      </div>
    </UserGuard>
  );
}
