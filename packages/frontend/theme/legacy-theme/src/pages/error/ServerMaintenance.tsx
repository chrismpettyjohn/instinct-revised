import './ErrorPage.scss';
import React from 'react';
import {setURL} from '@instinct-web/core';

setURL('maintenance', <ServerMaintenance />);

export function ServerMaintenance() {
  return (
    <div>
      <div id="error" className="flex-center position-ref full-height">
        <div className="code">Maintenance</div>
        <div className="message" style={{padding: 10}}>
          We are making changes and will be back later.
        </div>
      </div>
    </div>
  );
}
