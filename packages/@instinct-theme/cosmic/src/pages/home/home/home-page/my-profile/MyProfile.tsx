import './MyProfile.scss';
import React, {useContext} from 'react';
import {Avatar, sessionContext} from '@instinct-web/core';

export function MyProfile() {
  const {user} = useContext(sessionContext);
  return (
    <article className="default-section profile-section">
      <div className="background-image" style={{height: 100}} />
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
          <div style={{color: '#E2AE1D'}}>
            {Number(user?.credits).toLocaleString()}
          </div>
          <div
            className="icons"
            style={{
              background:
                'url(https://i.imgur.com/hoTMPxK.png) no-repeat center center',
            }}
          />
          <div style={{color: '#BA7CC2'}}>
            {Number(user?.pixels).toLocaleString()}
          </div>
          <div
            className="icons"
            style={{
              background:
                'url(https://i.imgur.com/wTTa30p.png) no-repeat center center',
            }}
          />
          <div style={{color: '#92C3F6'}}>
            {Number(user?.points).toLocaleString()}
          </div>
        </div>
      </div>
    </article>
  );
}
