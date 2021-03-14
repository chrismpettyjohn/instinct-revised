import React, {useContext} from 'react';
import {configContext} from '@instinct-web/core';
import {UserProfile} from './user-profile/UserProfile';
import {SiteNavigation} from './site-navigation/SiteNavigation';

export function Sidebar() {
  const {config} = useContext(configContext);

  return (
    <div
      style={{
        background: '#282A34',
        minHeight: '100%',
        width: '100%',
        maxWidth: 400,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          marginTop: '10%',
        }}
      >
        <img
          src="https://i.imgur.com/LuTjl8B.png"
          style={{width: 60, height: 60, marginTop: 0}}
        />
        <span className="logo" style={{fontSize: '3em'}}>
          {config.siteName}
        </span>
      </div>
      <UserProfile />
      <div style={{marginTop: '10%'}}>
        <SiteNavigation />
      </div>
    </div>
  );
}
