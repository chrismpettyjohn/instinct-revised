import './ErrorPage.scss';
import React from 'react';
import {setURL} from '@instinct-web/core';

setURL('401', <NotAuthorized />);

export function NotAuthorized() {
  return (
    <div id="error" className="flex-center position-ref full-height">
      <div className="code">401</div>

      <div className="message" style={{padding: 10}}>
        Not Authorized
      </div>
    </div>
  );
}
