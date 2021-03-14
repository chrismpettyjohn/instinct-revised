import React from 'react';
import {Link} from 'wouter';
import {EnterHotelButton} from './enter-hotel-button/EnterHotelButton';

export function Header() {
  return (
    <div style={{padding: 4, width: '100%'}}>
      <div style={{textAlign: 'right'}}>
        <EnterHotelButton />
      </div>
    </div>
  );
}
