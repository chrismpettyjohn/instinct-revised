import './Header.scss';
import React, {useContext} from 'react';
import {HeaderProps} from './Header.types';
import {configContext} from '@instinct-web/core';

export function Header({links}: HeaderProps) {
  const {config} = useContext(configContext);

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
              <li key={`link_${_.href}`}>{_.label}</li>
            ))}
          </ul>

          <ul className="nav-sub">
            <li className="active">Home</li>
            <li>My Page</li>
            <li>Account Settings</li>
            <li>Habbo Club</li>
            <li>Habbo Guides</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
