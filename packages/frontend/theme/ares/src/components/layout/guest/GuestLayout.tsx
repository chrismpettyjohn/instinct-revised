import {Link} from 'wouter';
import './GuestLayout.scss';
import React, {useContext} from 'react';
import {GuestLayoutProps} from './GuestLayout.types';
import {configContext, GuestGuard, healthContext} from '@instinct-web/core';

export function GuestLayout({children}: GuestLayoutProps) {
  const {config} = useContext(configContext);
  const {health} = useContext(healthContext);
  return (
    <GuestGuard>
      <div id="main">
        <div className="container_24">
          <div className="logo"></div>
          <div className="textsDetails">
            <h3>World Connected</h3>
            <p>
              There are <b>{health.usersOnline}</b> users online
            </p>
          </div>
          <div id="contentBox">
            <div className="padding">
              <div className="loginPosition">
                <h2>Welcome Back,</h2>
                <form action="" method="post">
                  <label htmlFor="login-username">Username:</label>
                  <input type="text" id="login-username" />
                  <label htmlFor="login-password">Password:</label>
                  <input
                    type="text"
                    id="login-password"
                    style={{marginBottom: -5}}
                  />
                  <a href="" className="sub-link">
                    Forgot Password
                  </a>
                  =<button type="submit">Login</button>
                </form>
              </div>
            </div>
            <div className="hotelview">
              <div className="overlay">
                <div
                  className="bigAvatar"
                  style={{
                    backgroundImage:
                      'http://hubba.cc/hubba-imaging/avatarimage?figure=hd-190-1391.lg-3023-1429.fa-1201-63.sh-295-1408.ca-3187-96.hr-3278-39-40.ch-3030-1408.wa-3211-63-1408&gesture=sml&size=l&direction=4&head_direction=3&action=wav',
                  }}
                />
              </div>
              <div className="avatarShadow" />
              <div className="messages">
                <h2>Welcome to {config.siteName}</h2>
                <p>
                  {config.siteName} Hotel is a virtual world where you can
                  create your own character, your own rooms and find new and old
                  friends again.
                </p>
                <Link href="/register" className="registerButton">
                  Join now for free
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div style={{clear: 'both'}} />
        <div id="threeBoxes">
          <div
            className="infoImages"
            style={{backgroundImage: 'url(https://i.imgur.com/QxXZ0cS.png)'}}
          />
          <p style={{marginTop: 12}}>
            You can always win great prizes at our events!
          </p>
        </div>
        <div id="threeBoxes">
          <div
            className="infoImages"
            style={{backgroundImage: 'url(https://i.imgur.com/QxXZ0cS.png)'}}
          />
          <p style={{marginTop: 12}}>
            You can always win great prizes at our events!
          </p>
        </div>
        <div id="threeBoxes">
          <div
            className="infoImages"
            style={{backgroundImage: 'url(https://i.imgur.com/QxXZ0cS.png)'}}
          />
          <p style={{marginTop: 12}}>
            You can always win great prizes at our events!
          </p>
        </div>
        <div style={{clear: 'both'}} />
        <div id="footer-content">
          <div style={{float: 'left', width: '50%'}}>Hello</div>
          <div style={{float: 'right', width: '50%'}}>Hello</div>
        </div>
      </div>
    </GuestGuard>
  );
}
