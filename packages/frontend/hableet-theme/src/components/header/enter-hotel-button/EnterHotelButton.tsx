import React from 'react';
import {Link} from 'wouter';
import './EnterHotelButton.scss';

export function EnterHotelButton() {
  return (
    <Link className="rounded-button enter-hotel-button mr-4" to="/play">
      <img src="/img/logo/nitro.svg" width={25} />
      Enter Hotel
    </Link>
  );
}
