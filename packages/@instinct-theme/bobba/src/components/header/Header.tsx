import './Header.scss';
import React from 'react';
import {Link} from 'wouter';

export function Header() {
  return (
    <header>
      <div className="header-content">
        <div className="container">
          <img
            className="header-logo"
            src="./images/logo.png"
            alt="Habbo Hotel"
          />
        </div>
      </div>

      <nav>
        <div className="container">
          <ul className="nav">
            <li className="active">Cake</li>
            <li>Community</li>
            <li>Games</li>
            <li>Credits</li>
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
