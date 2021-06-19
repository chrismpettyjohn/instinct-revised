import React from 'react';
import './Disconnected.scss';
import {useLocation} from 'wouter';
import {setURL, UserGuard} from '@instinct-web/core';

setURL('disconnected', <Disconnected />);

export function Disconnected() {
  const [location, setLocation] = useLocation();

  return (
    <UserGuard>
      <div className="disconnected">
        <p>You been disconnected</p>
        <button className="btn btn-info" onClick={() => setLocation('play')}>
          Try Again
        </button>
      </div>
    </UserGuard>
  );
}
