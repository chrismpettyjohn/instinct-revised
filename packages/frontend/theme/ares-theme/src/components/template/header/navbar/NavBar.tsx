import './NavBar.scss';
import React, {useContext} from 'react';
import {Avatar, sessionContext} from '@instinct-web/core';
import {NavBarLink} from './navbar-link/NavBarLink';
import {UserDropdown} from './user-dropdown/UserDropdown';

export function NavBar() {
  const {user} = useContext(sessionContext);

  if (!user) {
    return null;
  }

  return (
    <div id="navbar">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a
                id="habbo--look"
                className="nav-link d-flex align-items-center"
              >
                <Avatar look={user!.figure} headOnly />
              </a>
            </li>
            <li className="nav-item info--item">
              <div className="nav-link d-flex flex-column justify-content-center user--info">
                <span className="user--info-header">Hello</span>
                <div className="d-inline-flex flex-row align-items-center">
                  <img
                    src=" assets/images/icons/credits.png"
                    className=" mr-1 img-fluid
               image-pixelated"
                    height="22"
                    width="22"
                  />
                  <span className="user--info-value">y</span>
                </div>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item d-flex align-items-center h-100 justify-content-center">
              <span className="nav-link active mr-2">jjj</span>
            </li>
            <li className="nav-item">
              <a className="btn btn-success py-2 px-xxl-5 px-xl-5 px-l-5 px-md-3 px-sm-3">
                hhhh
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
