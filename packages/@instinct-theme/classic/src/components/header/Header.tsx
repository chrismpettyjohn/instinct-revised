import './Header.scss';
import {useLocation} from 'wouter';
import React, {useContext} from 'react';
import {HeaderProps} from './Header.types';
import {configContext} from '@instinct-web/core';

export function Header({links}: HeaderProps) {
  const [location] = useLocation();
  const {config} = useContext(configContext);

  function getParentLink(href: string): string {
    return href.slice(1).split('/')[0];
  }

  const activeLink = links.find(
    _ => getParentLink(_.href) === getParentLink(location)
  );

  return (
    <header>
      <div className="header-content">
        <div className="container">
          <img className="header-logo" src={config.logoURL} />
        </div>
      </div>

      <nav>
        <div className="container">
          <ul className="nav">
            {links.map(_ => (
              <li
                className={_ === activeLink ? 'active' : ''}
                key={`link_${_.href}`}
              >
                {_.label}
              </li>
            ))}
          </ul>

          <ul className="nav-sub">
            {activeLink?.children.map(_ => (
              <li
                className={location === _.href ? 'active' : ''}
                key={`child_link_${_.href}`}
              >
                {_.label}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
