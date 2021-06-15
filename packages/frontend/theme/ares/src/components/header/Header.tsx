import './Header.scss';
import React, {useContext} from 'react';
import DucketsIcon from '../../public/images/icons/duckets.png';
import CreditsIcon from '../../public/images/icons/credits.png';
import DiamondsIcon from '../../public/images/icons/diamonds.png';
import {Avatar, configContext, sessionContext} from '@instinct-web/core';

export function Header() {
  const {config} = useContext(configContext);
  const {user} = useContext(sessionContext);

  return (
    <div className="ares-header navbar fixed-top navbar-expand-md navbar-dark">
      <div className="container">
        <button
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-target="#navbar"
          data-toggle="collapse"
          type="button"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link d-flex align-items-center"
                id="habbo--look"
              >
                <Avatar look={user!.figure} headOnly />
              </a>
            </li>
            <li className="nav-item info--item">
              <div className="nav-link d-flex flex-column justify-content-center user--info">
                <span className="user--info-header">Credits</span>

                <div className="d-inline-flex flex-row align-items-center">
                  <img
                    className="mr-1 img-fluid image-pixelated"
                    height="22"
                    src={CreditsIcon}
                    width="22"
                  />
                  <span className="user--info-value">
                    {Number(user!.credits).toLocaleString()}
                  </span>
                </div>
              </div>
            </li>

            <li className="nav-item info--item">
              <div className="nav-link d-flex flex-column justify-content-center user--info">
                <span className="user--info-header">Diamonds</span>

                <div className="d-inline-flex flex-row align-items-center">
                  <img
                    className="mr-1 img-fluid image-pixelated"
                    height="22"
                    src={DiamondsIcon}
                    width="22"
                  />
                  <span className="user--info-value">
                    {Number(user!.points).toLocaleString()}
                  </span>
                </div>
              </div>
            </li>

            <li className="nav-item info--item">
              <div className="nav-link d-flex flex-column justify-content-center user--info">
                <span className="user--info-header">Duckets</span>

                <div className="d-inline-flex flex-row align-items-center">
                  <img
                    className="mr-1 img-fluid image-pixelated"
                    height="22"
                    src={DucketsIcon}
                    width="22"
                  />
                  <span className="user--info-value">
                    {Number(user!.pixels).toLocaleString()}
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
