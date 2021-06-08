import React from 'react';
import {Link} from 'wouter';
import {EnterHotelButton} from './enter-hotel-button/EnterHotelButton';

export function Header() {
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
              src="/img/logo/regular.png"
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
