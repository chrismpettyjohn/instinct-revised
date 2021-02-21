import React from 'react';
import {Link} from 'wouter';
import {Icon} from '../../icon';
import {NavBarDropdownProps} from './';

export function NavBarDropdown({children, text, to}: NavBarDropdownProps) {
  return (
    <li className="navigation-item has-items">
      <Link to={to}>
        {text}
        <Icon className="ml-2" family="fas" type="caret-down" />
      </Link>
      <ul className="navigation-submenu">{children}</ul>
    </li>
  );
}
