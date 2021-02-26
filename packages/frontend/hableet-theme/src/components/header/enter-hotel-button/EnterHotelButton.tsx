import './EnterHotelButton.scss';
import {themeContext} from '@instinct-web/core';
import React, {useContext, useState} from 'react';

export function EnterHotelButton() {
  const {clientType} = useContext(themeContext);
  const [isOpen, setDropdown] = useState(false);

  function toggle() {
    setDropdown(_ => !_);
  }

  return (
    <div className="rounded-button enter-hotel-button mr-4">
      <img src={`/img/logo/${clientType}.svg`} width={25} />
      {clientType.toUpperCase()}
    </div>
  );
}
