import {Link} from 'wouter';
import './EnterHotelButton.scss';
import React, {useContext} from 'react';
import {configContext, healthContext} from '@instinct-web/core';

export function EnterHotelButton() {
  const {config} = useContext(configContext);
  const {health} = useContext(healthContext);
  return (
    <div style={{float: 'right'}}>
      <div className="enter-hotel-button">
        <div className="client-icon">
          <img src="/img/logo/flash.svg" />
        </div>
        <div className="client-text">
          <Link href="/play">
            Enter {config.siteName}
            <div style={{fontSize: '.6em'}}>
              {health.usersOnline} users online
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
