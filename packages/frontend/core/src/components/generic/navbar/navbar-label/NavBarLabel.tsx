import React from 'react';
import {NavBarLabelProps} from './';

export function NavBarLabel({children}: NavBarLabelProps) {
  return (
    <li className="navigation-item mobile-menu cant-select">{children}</li>
  );
}
