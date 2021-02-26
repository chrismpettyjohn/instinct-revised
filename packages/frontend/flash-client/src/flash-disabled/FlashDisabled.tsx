import React from 'react';
import './FlashDisabled.scss';
import {Icon} from '@instinct-web/core';

export function FlashDisabled() {
  return (
    <div className="flash-disabled">
      <div>
        <div className="text-center">
          <img src="/img/logo/regular.png" />
        </div>
        <p>You need to enable Adobe Flashplayer to enjoy our game.</p>
        <a
          className="rounded-button blue plain btn-block enable-flash"
          href="https://www.adobe.com/go/getflashplayer"
        >
          <Icon family="fab" type="adobe" />
          Enable Flash
        </a>
      </div>
    </div>
  );
}
