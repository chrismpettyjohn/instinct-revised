import './MyProfile.scss';
import {Link} from 'wouter';
import React, {useContext} from 'react';
import {Avatar, sessionContext} from '@instinct-web/core';

export function MyProfile() {
  const {user} = useContext(sessionContext);
  return (
    <article className="default-section profile-section">
      <div className="background-image">
        <Link
          className="rounded-button white plain hotel-button enter-hotel"
          to="/play"
        >
          Enter Hotel
        </Link>
      </div>
      <div className="profile-content">
        <div className="header-image">
          <Avatar className="figure" look={user?.figure} />
        </div>
        <div className="stats">
          <div
            className="icons"
            style={{
              background:
                'url(https://i.imgur.com/SPiYsru.png) no-repeat center center',
            }}
          />
          <div style={{color: '#E2AE1D'}}>{user?.credits}</div>
          <div
            className="icons"
            style={{
              background:
                'url(https://i.imgur.com/hoTMPxK.png) no-repeat center center',
            }}
          />
          <div style={{color: '#BA7CC2'}}>{user?.pixels}</div>
          <div
            className="icons"
            style={{
              background:
                'url(https://i.imgur.com/wTTa30p.png) no-repeat center center',
            }}
          />
          <div style={{color: '#BA7CC2'}}>{user?.points}</div>
        </div>
      </div>
    </article>
  );
}
