import {Link} from 'wouter';
import React, {useContext} from 'react';
import {configContext} from '@instinct-web/core';
import {EnterHotelButton} from './enter-hotel-button/EnterHotelButton';

export function Header() {
  const {config} = useContext(configContext);
  return (
    <header
      id="header"
      className="header-container pixelated is-small is-logged"
    >
      <div className="header-content row">
        <div className="col-6 text-left">
          <Link to="/">
            <img
              className="header-logo"
              src={config.logoURL}
              style={{width: 300}}
            />
          </Link>
        </div>
        <div className="col-6 text-right">
          <EnterHotelButton />
        </div>
      </div>
    </header>
  );
}
