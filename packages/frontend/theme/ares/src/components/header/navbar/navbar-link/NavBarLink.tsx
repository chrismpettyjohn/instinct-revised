import React from 'react';
import {Link, useRoute} from 'wouter';
import {NavBarLinkProps} from './NavBarLink.types';

export function NavBarLink({children, className = '', to}: NavBarLinkProps) {
  const [match] = useRoute(to);
  return (
    <li className={`navigation-item ${className} ${match ? 'selected' : ''}`}>
      <Link to={to}>{children}</Link>
    </li>
  );
}
