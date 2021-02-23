import React from 'react';
import {NavBarLinkProps} from './';
import {Link, useRoute} from 'wouter';

export function NavBarLink({children, className = '', to}: NavBarLinkProps) {
  const [match] = useRoute(to);
  return (
    <li className={`navigation-item ${className} ${match ? 'selected' : ''}`}>
      <Link to={to}>{children}</Link>
    </li>
  );
}
