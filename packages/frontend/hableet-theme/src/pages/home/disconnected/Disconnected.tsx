import React from 'react';
import './Disconnected.scss';
import {useLocation} from 'wouter';
import {Button} from '@instinct-web/core';
import {UserGuard, setURL} from '@instinct-web/core';

setURL('disconnected', <Disconnected />);

export function Disconnected() {
  const [location, setLocation] = useLocation();

  return (
    <UserGuard>
      <div className="disconnected">
        <p>You been disconnected</p>
        <Button color="info" onClick={() => setLocation('play')}>
          Try Again
        </Button>
      </div>
    </UserGuard>
  );
}
