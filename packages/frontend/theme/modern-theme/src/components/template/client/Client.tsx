import './Client.scss';
import React, {useContext} from 'react';
import {FlashClient} from '@instinct-web/flash-client';
import {NitroClient} from '@instinct-web/nitro-client';
import {ClientActions} from './client-actions/ClientActions';
import {
  configContext,
  sessionContext,
  themeContext,
  UserGuard,
} from '@instinct-web/core';

export function Client() {
  const {config} = useContext(configContext);
  const {user} = useContext(sessionContext);
  const {showClient} = useContext(themeContext);

  if (!showClient) {
    return null;
  }

  if (user?.clientType === 'desktop') {
    return null;
  }

  function getGame() {
    return (
      <div
        className={`hotel-container ${showClient ? 'visible' : 'not-visible'}`}
      >
        <ClientActions />
        {user?.clientType === 'flash' ? <FlashClient /> : <NitroClient />}
      </div>
    );
  }

  return (
    <UserGuard redirect={false}>
      {!config.findRetrosUsername && getGame()}
    </UserGuard>
  );
}
