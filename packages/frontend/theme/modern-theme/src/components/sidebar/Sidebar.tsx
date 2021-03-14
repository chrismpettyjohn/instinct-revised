import React from 'react';
import {UserProfile} from './user-profile/UserProfile';
import {SiteNavigation} from './site-navigation/SiteNavigation';

export function Sidebar() {
  return (
    <div
      style={{
        background: '#282A34',
        minHeight: '100%',
        width: '100%',
        maxWidth: 400,
      }}
    >
      <UserProfile />
      <div className="mt-4">
        <SiteNavigation />
      </div>
    </div>
  );
}
