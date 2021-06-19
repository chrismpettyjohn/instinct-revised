import './ErrorPage.scss';
import React from 'react';
import {setURL} from '@instinct-web/core';

setURL('500', <ServerError />);

export function ServerError() {
  return (
    <div id="error" className="flex-center position-ref full-height">
      <div className="code">500</div>

      <div className="message" style={{padding: 10}}>
        Server Error
      </div>
    </div>
  );
}
